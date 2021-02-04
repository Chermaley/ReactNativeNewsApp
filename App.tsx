import {StatusBar, StyleSheet, View} from "react-native";
import React from "react";
import {Header} from "./components/Header";
import {NewsPage} from "./components/NewsPage";
import { Navigations } from "./navigations/Navigation";
import {HomePage} from "./components/HomePage";
import { useFonts } from "expo-font";

export type NavValuesType = "Новости" | "Главная";

const App: React.FC = () => {
    const [currentTab, setCurrentTab] = React.useState<NavValuesType>("Новости");

    const [loaded] = useFonts({
        Montserrat400: require('./assets/fonts/Montserrat-Regular.ttf'),
        Montserrat300: require('./assets/fonts/Montserrat-Light.ttf'),
        Montserrat500: require('./assets/fonts/Montserrat-Medium.ttf'),
        Montserrat700: require('./assets/fonts/Montserrat-Bold.ttf'),
        Montserrat600: require('./assets/fonts/Montserrat-Bold.ttf'),
    });

    if (!loaded) return null;

    return (
        <View style={styles.app}>
            <StatusBar />
            <View style={styles.wrapper}>
                <Header title={currentTab}/>
                <View style={styles.content}>
                    {
                        currentTab === "Новости"
                            ? <NewsPage />
                            : <HomePage />
                    }
                </View>
            </View>
            <Navigations setCurrentTab={setCurrentTab} currentTab={currentTab}/>
        </View>
    )
}

const styles = StyleSheet.create( {
    app: {
        flex: 1,
        backgroundColor: "#E5E5E5",
    },
    wrapper: {
        flex: 1,
        paddingBottom: 0,
        paddingTop: 0,
        padding: 16,
    },
    content: {
        flex: 1
    }
});

export default App;