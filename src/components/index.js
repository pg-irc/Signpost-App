import LanguageSelector from "./LanguageSelector";
import AppHeader from "./AppHeader";
import CountrySelector from "./CountrySelector";
import CategoryList from "./CategoryList";
import HeaderBar from "./HeaderBar";
import ArticleFooter from "./ArticleFooter";
import ArticlePage from "./ArticlePage";
import DetectLocationSelector from "./DetectLocationSelector";
import HomeWidget from "./HomeWidget";
import HomeWidgetCollection from "./HomeWidgetCollection";
import Footer from "./Footer";

import React from "react";
import { View, Text, Button } from "react-native";

/*
import AppHeader from "./AppHeader";
import BottomNav from "./BottomNav";
import WarningDialog from "./WarningDialog";
import Footer from "./Footer";
import ArticlePage from "./ArticlePage";
import ArticleFooter from "./ArticleFooter";
import CategoryList from "./CategoryList";
import CountrySelector from "./CountrySelector";
import HomeWidget from "./HomeWidget";
import HomeWidgetCollection from "./HomeWidgetCollection";
import SearchPage from "./SearchPage";
import ServiceMap from "./ServiceMap";
import ServiceCategoryList from "./ServiceCategoryList";
import ServiceList from "./ServiceList";
import ServiceDetail from "./ServiceDetail";

export {
	AppHeader,
	BottomNav,
	WarningDialog,
	Footer,
	ArticlePage,
	ArticleFooter,
	CategoryList,
	CountrySelector,
	LanguageSelector,
	HomeWidget,
	HomeWidgetCollection,
	SearchPage,
	ServiceMap,
	ServiceCategoryList,
	ServiceList,
	ServiceDetail,
};
*/

module.exports = {
	AppHeader,
	BottomNav: () => <View />,
	WarningDialog: () => <View />,
	Footer,
	ArticlePage,
	ArticleFooter,
	CategoryList,
	CountrySelector,
	LanguageSelector,
	HeaderBar,
	HomeWidget,
	DetectLocationSelector,
	HomeWidgetCollection,
	SearchPage: () => <View />,
	ServiceMap: () => <View />,
	ServiceCategoryList: () => <View />,
	ServiceList: () => <View />,
	ServiceDetail: () => <View />,
};
