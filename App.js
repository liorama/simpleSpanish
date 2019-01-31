import React, { Component } from "react";
import {
	StyleSheet,
	// Text,
	View,
	Platform,
	// AsyncStorage,
	WebView
	} from "react-native";
import { Constants } from "expo";
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";


//function setInStorage(key, value) {
//	try {
//		AsyncStorage.setItem(key, value);
//	} catch (error) {
//		// Error saving data
//	}
//}
//function getFromStorage(key) {
//	try {
//		return AsyncStorage.getItem(key);
//	} catch (error) {
//		// Error saving data
//	}
//}


export default class simpleSpanish extends Component {
	constructor(props) {
		super(props);
		this.pages = [
			// {title: "אינדקס", file: require("./assets/newhtml/index/index.html")},
			// {title: "הקדמה", file: require("./assets/newhtml/introduction/index.html")},
			{title: "פרק 1", file: require("./assets/newhtml/chapter_1/index.html")},
			{title: "פרק 2", file: require("./assets/newhtml/chapter_2/index.html")},
			{title: "פרק 3", file: require("./assets/newhtml/chapter_3/index.html")},
			{title: "פרק 4", file: require("./assets/newhtml/chapter_4/index.html")},
			{title: "פרק 5", file: require("./assets/newhtml/chapter_5/index.html")},
			{title: "פרק 6", file: require("./assets/newhtml/chapter_6/index.html")},
			{title: "פרק 7", file: require("./assets/newhtml/chapter_7/index.html")},
			// {title: "פרק 8", file: require("./assets/newhtml/chapter_8/index.html")},
			// {title: "פרק 9", file: require("./assets/newhtml/chapter_9/index.html")},
			// {title: "פרק 10", file: require("./assets/newhtml/chapter_10/index.html")},
			// {title: "פרק 11", file: require("./assets/newhtml/chapter_11/index.html")},
			// {title: "פרק 12", file: require("./assets/newhtml/chapter_12/index.html")},
			// {title: "פרק 13", file: require("./assets/newhtml/chapter_13/index.html")},
			// {title: "פרק 14", file: require("./assets/newhtml/chapter_14/index.html")},
			// {title: "פרק 15", file: require("./assets/newhtml/chapter_15/index.html")},
			// {title: "מילון", file: require("./assets/newhtml/dictionary/index.html")},
			// {title: "רשימת אלפבית", file: require("./assets/newhtml/alphabet_list/index.html")},
			// {title: "תוספות", file: require("./assets/newhtml/apendix/index.html")},
			// {title: "עטיפה אחורית", file: require("./assets/newhtml/back_cover/index.html")},
		];
		this.state = {
			initialTab: Object.keys(this.pages).length - 1,
		};
	}

	render() {
		const tabbarStyles = [styles.tabbar];
		if (Platform.OS === "android") {
			tabbarStyles.push(styles.androidTabbar);
		}
		const tabs = [];
		return (
			<View style={styles.container}>
				<ScrollableTabView
					prerenderingSiblingsNumber={0}
					initialPage={this.state.initialTab}
					renderTabBar={() => <ScrollableTabBar />}>
					{
						this.pages.map(function(pageData, index) {
							return <WebView
								key={index}
								tabLabel={pageData.title}
								source={pageData.file}
								style={styles.webview}>
							</WebView>
						}, this).reverse()
					}
				</ScrollableTabView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start"
	},
	webview: {
		flex: 1,
		flexDirection: "column",
		height: 200
	}
});

