import {ScrollView, StyleSheet, Text} from "react-native";
import React from "react";
import { NewItemType, NewsItem } from "./NewsItem";

export const NewsContainer: React.FC = () => {
    const [news, setNews] = React.useState<NewItemType[]>([]);

    React.useEffect( () => {
        const fetchNews = async () => {
            const response = await fetch("https://app.sm117.ru/api/v1/contract/news/", {
                headers: {'contentType':"application/json; charset=UTF-8"}
            });
            const data = await response.json();
            setNews(data);
        }
        fetchNews();
    }, [])

    if (!news.length) return <Text>Новостей нет</Text>;

    return (
        <ScrollView style={styles.container}>
            {news.map(n => <NewsItem newsItem={n} key={n.id}/>)}
        </ScrollView>
    );
}
const styles = StyleSheet.create( {
    container: {
        marginTop: 20
    }
})