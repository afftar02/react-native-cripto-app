import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../App';

const AddingCryptoScreen = ({ route }) => {
    const [priceValue, setPriceValue] = useState(0);
    const [borderBottomColor, setBorderBottomColor] = useState('rgba(255, 255, 255, 0.3)');

    const { dispatch } = useContext(AppContext);

    const { id, rank, changePercent24Hr, name, symbol, price, isAdding } = route.params;

    const navigation = useNavigation();

    function valueChanged(value) {
        setPriceValue(value * (Math.round(price * 100) / 100));
    }

    function okButtonPressed() {
        dispatch({
            type: 'ADD_CRYPTO',
            payload: {
                id: id,
                price: priceValue,
                rank: rank,
                name: name,
                symbol: symbol,
                changePercent24Hr: changePercent24Hr,
            }
        })
        navigation.navigate('List');
    }

    return (
        <ScrollView>
            <Header />
            <View style={{ alignItems: 'center' }}>
                <View style={styles.headContainer}>
                    <Image style={styles.image} source={{ uri: `https://assets.coincap.io/assets/icons/${symbol?.toLowerCase()}@2x.png` }} />
                    <View>
                        <Text style={{ color: "white", fontWeight: "700", fontSize: 30 }}>{name}</Text>
                        <Text style={{ color: "white", opacity: 0.5, fontSize: 20 }}>{symbol}</Text>
                    </View>
                </View>
                <Text style={styles.resultPrice}>Result: {priceValue}$</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={5}
                    placeholder='Type here'
                    placeholderTextColor="rgba(255, 255, 255, 0.8)"
                    borderBottomColor={borderBottomColor}
                    onChangeText={(value) => valueChanged(value)}
                    onFocus={() => setBorderBottomColor('#ffffff')}
                    onBlur={() => setBorderBottomColor('rgba(255, 255, 255, 0.3)')}
                />
                <TouchableOpacity onPress={okButtonPressed}>
                    <Text style={styles.okButton}>Ok</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default AddingCryptoScreen;

const styles = StyleSheet.create({
    headContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 230,
        marginVertical: 50,
    },
    image: {
        width: 100,
        height: 100,
    },
    resultPrice: {
        color: "white",
        fontWeight: "300",
        fontSize: 25,
        marginTop: 15,
    },
    input: {
        width: 200,
        height: 80,
        marginTop: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        color: "white",
        textAlign: "center",
        fontSize: 25,
    },
    okButton: {
        color: "#ffffff",
        fontSize: 20,
        borderColor: '#99ccff',
        backgroundColor: '#053e7a',
        borderWidth: 1,
        borderRadius: 15,
        width: 150,
        height: 50,
        marginVertical: 100,
        textAlign: "center",
        textAlignVertical: "center",
    }
});