import React, {Component} from "react";
import {
	StyleSheet,
	Text,
	View,
	Platform,
	// AsyncStorage,
	WebView,
	Button
} from "react-native";
import {Constants} from "expo";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";


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

/*  Trying to make the /htmltests/chapter-2/chapter-2.html format work (from zamzar.com) instead the newhtml/chapter_3/index.html
Seems like the meta tag makes it much better. need to try putting initial scale at 0.8 and centering it.

 */
export default class simpleSpanish extends Component {
	constructor(props) {
		super(props);
		const pages = this.pages = [
			{title: "אינדקס", file: require("./assets/htmltests/index.html")},
			{title: "הקדמה", file: require("./assets/htmltests/introduction.html")},
			{title: "פרק 1", file: require("./assets/htmltests/chapter-1.html")},
			{title: "פרק 2", file: require("./assets/htmltests/chapter-2.html")},
			{title: "פרק 3", file: require("./assets/htmltests/chapter-3.html")},
			{title: "פרק 4", file: require("./assets/htmltests/chapter-4.html")},
			{title: "פרק 5", file: require("./assets/htmltests/chapter-5.html")},
			{title: "פרק 6", file: require("./assets/htmltests/chapter-6.html")},
			{title: "פרק 7", file: require("./assets/htmltests/chapter-7.html")},
			{title: "פרק 8", file: require("./assets/htmltests/chapter-8.html")},
			{title: "פרק 9", file: require("./assets/htmltests/chapter-9.html")},
			{title: "פרק 10", file: require("./assets/htmltests/chapter-10.html")},
			{title: "פרק 11", file: require("./assets/htmltests/chapter-11.html")},
			{title: "פרק 12", file: require("./assets/htmltests/chapter-12.html")},
			{title: "פרק 13", file: require("./assets/htmltests/chapter-13.html")},
			{title: "פרק 14", file: require("./assets/htmltests/chapter-14.html")},
			{title: "פרק 15", file: require("./assets/htmltests/chapter-15.html")},
			{title: "מילון", file: require("./assets/htmltests/dictionary.html")},
			{title: "רשימת אלפבית", file: require("./assets/htmltests/alphabet-list.html")},
			{title: "תוספות", file: require("./assets/htmltests/apendix.html")},
			{title: "עטיפה אחורית", file: require("./assets/htmltests/back-cover.html")},
		];
		this.state = {
			index: 0,
		};
	}

	render() {
		const currentChapterDisplayIndex = this.state.index + 1;
		let nextPage = this.state.index + 1; // todo: this seems to work only from chapter 1 to 2.
		if (nextPage >= this.pages.length) {
			nextPage = 0;
		}
		let previousPage = this.state.index - 1;
		if (previousPage < 0) {
			previousPage = this.pages.length - 1;
		}
		return (
			<View style={styles.container} id="mainView">
				<View style={styles.nav_container}>
					<Button
						onPress={() => {
							this.setState({
									index: nextPage
								}
							)
						}}
						title="Next"
						color="#841584"
						accessibilityLabel="Next Chapter"
						style={styles.nav_buttons}
					/>
					<Text> Chapter: { currentChapterDisplayIndex } / { this.pages.length } </Text>
					<Button
						onPress={() => {
							this.setState({
									index: previousPage
								}
							)
						}}
						title="Previous"
						color="#841584"
						accessibilityLabel="Previous Chapter"
						style={styles.nav_buttons}
					/>
				</View>
				<View style={styles.content_container}>
					<Text>Zero index: {this.state.index}</Text>
					<WebView source={this.pages[this.state.index].file} originWhitelist={['*']} style={styles.webview}   injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=0.7, maximum-scale=2, user-scalable=2.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
  scalesPageToFit={false}> </WebView>
				</View>
			</View>
		)
			;
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		// alignItems: "flex-start"
	},
	nav_container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		// alignItems: "flex-start"
	},
	nav_buttons: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		// alignItems: "flex-start"
	},
	content_container: {
		flex: 9,
	},
	webview: {
		flex: 1,
	}
});

