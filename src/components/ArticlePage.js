import React, { Component } from "react";
import { translate } from "react-i18next";
import { View, WebView, Button, StyleSheet, Dimensions, Image } from "react-native";
import HeaderBar from "./HeaderBar";
import WebViewAutoHeight from "./WebViewAutoHeight";
import PropTypes from "prop-types";
import Text from "./Text";
import _ from "lodash";
import nativeTools from "../shared/nativeTools";
const window = Dimensions.get("window");

const Remarkable = require("remarkable");

const md = new Remarkable("full", {
	html: true,
	linkify: true,
	typographer: true,
	breaks: true,
});

class ArticlePage extends Component {
	static propTypes = {};
	static contextTypes = {
		config: PropTypes.object,
		theme: PropTypes.object,
	};

	state = {
		article: null,
		timeout: null,
	};

	componentWillMount() {
		this.loadArticle(this.props);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.article && this.props.article && nextProps.article.sys.id !== this.props.article.sys.id) {
			this.loadArticle(nextProps);
		}
	}

	loadArticle(props) {
		const { article } = props;
		this.setState({
			article: null,
		});
		setTimeout(() => {
			this.setState({
				article,
			});
		}, 200);
	}

	render() {
		const { category, loading, direction, onNavigate } = this.props;
		const { config, theme } = this.context;

		const { article } = this.state;

		if (!article) {
			return (
				<View>
					<HeaderBar subtitle={(category.fields.articles || []).length > 1 && `${category.fields.name}:`} title={title} />
				</View>
			);
		}

		const { contentType } = article.sys;
		const { title, content, hero, lead } = article.fields;

		let html = md.render(content || lead);
		html = html.replace(/(\+[0-9]{9,14})|00[0-9]{9,15}/g, `<a class="tel" href="tel:$1">$1</a>`).replace(/"\/\//gi, '"https://');
		html = nativeTools.wrapHTML(direction, theme.name, config.css, html);
		return (
			<View>
				<HeaderBar subtitle={(category.fields.articles || []).length > 1 && `${category.fields.name}:`} title={title} />
				{hero &&
					hero.fields.file && (
						<Image
							style={{
								width: "100%",
								height: 200,
								resizeMode: "contain",
							}}
							source={{ uri: "https:" + hero.fields.file.url + "?fm=jpg&fl=progressive" }}
						/>
					)}
				<WebViewAutoHeight source={{ html }} style={[styles.webView]} onNavigationStateChange={_.partial(nativeTools.navigationStateChange, onNavigate)} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	webView: {
		backgroundColor: "#000000",
		width: window.width,
	},
});

export default translate()(ArticlePage);
