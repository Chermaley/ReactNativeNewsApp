import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import Svg, {Path} from "react-native-svg";

type NavItemPropTypes = {
    isActive: boolean,
    svg: string,
    title: string,
    setCurrentTab: () => void
}

export const NavItem: React.FC<NavItemPropTypes> = ({isActive, svg,title, setCurrentTab}) => {
    return (
        <Pressable style={styles.item} onPress={setCurrentTab}>
            <Svg width="20" height="20" viewBox="0 0 20 20">
                <Path d={svg}
                      fill={!isActive ? "#ADB4BB" : "#0666EB"}/>
            </Svg>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create( {
    item: {
        alignItems: "center",
        marginRight: 25
    },
    title: {
        color: "#8B959E",
        fontFamily: "Montserrat400"
    }
})