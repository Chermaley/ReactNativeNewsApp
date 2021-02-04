import HTML from "react-native-render-html";
import React from "react";

type NewsItemBodyPropTypes = {
    content: string,
    isMore: boolean
}

export const NewsItemBody: React.FC<NewsItemBodyPropTypes> = ({content, isMore}) => {

    if (!isMore) {
        content = content.slice(0, 140) + '...'
    }

    return <HTML defaultTextProps={HTMLconfig.defaultTextProps}
                 ignoredTags={HTMLconfig.ignoredTags}
                 baseFontStyle={HTMLconfig.baseFontStyle}
                 tagsStyles={HTMLconfig.tagsStyle}
                 source={{html: content.replace('<br />', ' ')}} />;
}

const HTMLconfig = {
    tagsStyle: {
        a: {
            color: '#FF7700;',
            textDecorationLine: "none",
        }
    },
    baseFontStyle: {
        fontSize: 15,
        lineHeight: 22,
        fontFamily: "Montserrat400",
    },
    ignoredTags: ['img'],
    defaultTextProps: {
        selectable: true
    }

}