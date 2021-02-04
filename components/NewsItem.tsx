import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Path, Svg } from "react-native-svg";
import {NewsItemBody} from "./NewsItemBody";


export type NewItemType = {
    id: string,
    title: string,
    date: string,
    body: string
}

type NewsItemPropTypes = {
    newsItem: NewItemType
}

export const NewsItem: React.FC<NewsItemPropTypes> = ({newsItem}) => {
    const [isMore, setIsMore] = React.useState(false);

    const moreButtonHandler = () => {
        setIsMore((prev) => !prev );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{newsItem.title.replace("<br>", "")}</Text>
            <NewsItemBody isMore={isMore} content={newsItem.body}/>
            <View style={styles.footer}>
                <Text style={styles.date}>{newsItem.date}</Text>
                <Pressable style={styles.more} onPress={moreButtonHandler}>
                    <Text style={styles.moreText}>{isMore ? "Скрыть" : "Подробнее"}</Text>
                    <Svg style={styles.moreIcon} rotation={isMore ? 180 : 0} width="13" height="8" viewBox="0 0 13 8" fill="none">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.3475 0.326951C1.91157 -0.108984 1.20478 -0.108984 0.768845 0.326951C0.332911 0.762885 0.332911 1.46967 0.768845 1.90561L5.65257 6.78933C6.0885 7.22526 6.79529 7.22526 7.23122 6.78933L12.1149 1.90561C12.5509 1.46967 12.5509 0.762885 12.1149 0.326951C11.679 -0.108984 10.9722 -0.108984 10.5363 0.326951L6.44189 4.42134L2.3475 0.326951Z" fill="#FF7700"/>
                    </Svg>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create( {
    container: {
        backgroundColor: "#FFFFFF",
        marginBottom: 16,
        padding: 16,
        borderRadius: 12
    },
    title: {
        textAlign: "left",
        fontFamily: "Montserrat600",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#191C1F"
    },
    footer: {
        marginTop: 17,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    date: {
        color: "#8B959E",
        fontSize: 14,
        fontFamily: "Montserrat500",
    },
    more: {
        flexDirection: "row",
        alignItems: "center",
    },
    moreText: {
        fontSize: 14,
        fontFamily: "Montserrat600",
        color: "#FF7700",
        marginRight: 10,
    },
    moreIcon: {
        top: 1
    }
});