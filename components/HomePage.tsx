import {StyleSheet, Text, View} from "react-native";
import React from "react";

export const HomePage: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.myText}>Тестовое задание для  ООО "СМ"</Text>
            <Text style={styles.myText}>https://github.com/Chermaley</Text>
        </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center"
    },
    myText: {
        fontWeight: "700",
        marginTop: 20,
        fontSize: 20
    }
} )