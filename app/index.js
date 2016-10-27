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
	WebView
	} from 'react-native';
import Tabs from 'react-native-tabs';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
//import pages from 'app/content'

export default class simpleSpanish extends Component {
	constructor(props) {
		super(props);
		this.pages = {};
		this.pages.introduction = {title: "הקדמה", file: require('simpleSpanish/app/introduction.html')};
		this.pages.chapter_1 = {title: "פרק 1", file: require('simpleSpanish/app/chapter-1.html')};
		this.pages.chapter_2 = {title: "פרק 2", file: require('simpleSpanish/app/chapter-2.html')};
		this.pages.chapter_3 = {title: "פרק 3", file: require('simpleSpanish/app/chapter-3.html')};

		this.state = {
			page: 'first'
		};
	}

	render() {
		//const { page } = this.state;
		const tabbarStyles = [styles.tabbar];
		if (Platform.OS === 'android') {
			tabbarStyles.push(styles.androidTabbar);
		}
		const tabs = [];
		//for (tabContent of this.pages) {
		//		tabs.push(<WebView
		//			tabLabel="asdf"
		//			source={this.pages.introduction}
		//			style={styles.webview}>
		//		</WebView>)
		//);
		//}
		return (
			<View style={styles.container}>
				<ScrollableTabView
					initialPage={0}
					renderTabBar={() => <ScrollableTabBar />}>
					{

						Object.keys(this.pages).map(function(key) {
							var data = this.pages[key];
							return <WebView
								tabLabel={data.title}
								source={data.file}
								style={styles.webview}>
							</WebView>
						}, this)
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

