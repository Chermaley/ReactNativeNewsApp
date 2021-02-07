import {ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import { NewItemType, NewsItem } from "./NewsItem";
import {useHttp} from "../hooks/useHttp";

export const NewsPage: React.FC = () => {
    const [news, setNews] = React.useState<NewItemType[]>([]);
    const {error, loading, request} = useHttp();

    React.useEffect( () => {
        const fetchNews = async () => {
            const data = await request("https://app.sm117.ru/api/v1/contract/news/");
            setNews(data);
        }
        fetchNews();
    }, [])

    if (error) return <Text>{error.message}</Text>

    if (loading) {
        return (
            <View style={styles.spinner}>
                <ActivityIndicator size={"large"} color={'tomato'}/>
            </View>
        )
    }
    return (
        <FlatList data={news} 
                  keyExtractor={item => item.id} 
                  style={styles.container}
                  renderItem={({item}) => <NewsItem newsItem={item}/>}/>
        
    );
}
const styles = StyleSheet.create( {
    container: {
        marginTop: 20,
    },
    spinner: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
});