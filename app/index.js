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


export default class simpleSpanish extends Component {
	constructor(props) {
		super(props);
		this.settings = require('simpleSpanish/app/settings.json');
		this.state = {
			page: 'first'
		};
	}

	render() {
		const { page } = this.state;
		const tabbarStyles = [styles.tabbar];
		if (Platform.OS === 'android') {
			tabbarStyles.push(styles.androidTabbar);
		}
		const htmlFile = require('simpleSpanish/app/chapter-1.html'); // + this.settings.chapter_files[1]);
		return (
			<View style={styles.container}>
				<ScrollableTabView
					initialPage={0}
					renderTabBar={() => <ScrollableTabBar />}>


						<WebView
							tabLabel='Tab #1'
							source={htmlFile}
							style={styles.webview}>
						</WebView>
					<Text tabLabel='Tab #2 word word'>favorite</Text>
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
		alignItems: 'center',
	},
	webview: {
		flex: 1,
		flexDirection: 'column',
		height: 200,
	}
});

