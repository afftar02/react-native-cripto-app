import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Header = ({ isPlus, id, rank, changePercent24Hr, name, symbol, price }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backButton}>{'< Back'}</Text>
            </TouchableOpacity>
            {isPlus &&
                <TouchableOpacity onPress={() => navigation.navigate('ChangingCrypto', { id, rank, changePercent24Hr, name, symbol, price, isAdding:true })}>
                    <Text style={styles.addButton}>+</Text>
                </TouchableOpacity>}
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    backButton: {
        color: "#99ccff",
        fontSize: 25,
        fontWeight: "100",
    },
    addButton: {
        color: "#99ccff",
        fontSize: 50,
        fontWeight: "100",
    },
});