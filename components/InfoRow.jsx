import { StyleSheet, View, Text } from 'react-native';

function countNumber(value) {
    var symbol;
    if (value / 1000000000 >= 1) {
        symbol = 'b';
        value = Math.round(value / 10000000) / 100;
    }
    else if (value / 1000000 >= 1) {
        symbol = 'm';
        value = Math.round(value / 10000) / 100;
    }
    else {
        symbol = 'k';
        value = Math.round(value / 10) / 100;
    }
    return `${value}${symbol}`;
}

export default function InfoRow({ parameterName, value, unchanged , isColored, isUsd, isRounded, isCounted, isPercentage }) {
    return (
        <View style={styles.infoBlock}>
            <Text style={styles.parameter}>{parameterName}</Text>
            <Text style={isColored ? (value >= 0 ? { color: "rgb(24, 198, 131)" } : { color: "rgb(244, 67, 54)" }) : styles.value}>
                {unchanged && value}
                {isUsd && '$'}
                {isRounded && Math.round(value * 100) / 100}
                {isCounted && countNumber(value)}
                {isPercentage && '%'}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    infoBlock: {
        height: 65,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 15,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    parameter: {
        color: "white",
    },
    value: {
        color: "white",
    },
});