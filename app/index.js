/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Platform,
	AsyncStorage,
	WebView
	} from 'react-native';
import Tabs from 'react-native-tabs';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';


const initialTab = 5;
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
		this.pages = {};
		this.pages.introduction = {title: "הקדמה", file: require('simpleSpanish/app/content/introduction.html')};
		this.pages.chapter_1 = {title: "פרק 1", file: require('simpleSpanish/app/content/chapter-1.html')};
		this.pages.chapter_2 = {title: "פרק 2", file: require('simpleSpanish/app/content/chapter-2.html')};
		this.pages.chapter_3 = {title: "פרק 3", file: require('simpleSpanish/app/content/chapter-3.html')};
		this.pages.chapter_3 = {title: "פרק 4", file: require('simpleSpanish/app/content/chapter-4.html')};

		this.state = {
			page: 'first'
		};
	}

	render() {
		const tabbarStyles = [styles.tabbar];
		if (Platform.OS === 'android') {
			tabbarStyles.push(styles.androidTabbar);
		}
		const tabs = [];
		return (
			<View style={styles.container}>
				<ScrollableTabView
					initialPage={initialTab}
					renderTabBar={() => <ScrollableTabBar />}>
					{
						Object.keys(this.pages).map(function(key) {
							let data = this.pages[key];
							return <WebView
								key={key}
								tabLabel={data.title}
								source={data.file}
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
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	webview: {
		flex: 1,
		flexDirection: 'column',
		height: 200
	}
});

