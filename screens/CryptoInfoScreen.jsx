import { StyleSheet, View, Text, Image, ScrollView, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InfoRow from '../components/InfoRow';
import Chart from '../components/Chart';
import Header from '../components/Header';

export default function CryptInfoScreen({ route }) {
    const { id } = route.params;
    const [itemInfo, setItemInfo] = useState();

    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${id}`)
            .then(({ data }) => {
                setItemInfo(data.data);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Error', 'Network Error');
            });
    }, []);

    return (
        <View style={{ flex: 1, width: "100%" }}>
            <Header isPlus
                id={id}
                name={itemInfo?.name}
                symbol={itemInfo?.symbol}
                price={itemInfo?.priceUsd}
                rank={itemInfo?.rank}
                changePercent24Hr={itemInfo?.changePercent24Hr} />
            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                <View style={styles.headContainer}>
                    <Image style={styles.image} source={{ uri: `https://assets.coincap.io/assets/icons/${itemInfo?.symbol.toLowerCase()}@2x.png` }} />
                    <View style={styles.nameContainer}>
                        <Text style={{ color: "white", fontWeight: "700", fontSize: 30 }}>{itemInfo?.name}</Text>
                        <Text style={{ color: "white", opacity: 0.5, fontSize: 20 }}>{itemInfo?.symbol}</Text>
                    </View>
                </View>
                <View style={{ width: "100%" }}>
                    <InfoRow parameterName={'Rank'} value={itemInfo?.rank} unchanged />
                    <InfoRow parameterName={'Price'} value={itemInfo?.priceUsd} isUsd isRounded />
                    <InfoRow parameterName={'Market Cap'} value={itemInfo?.marketCapUsd} isUsd isCounted />
                    <InfoRow parameterName={'VWAP(24Hr)'} value={itemInfo?.vwap24Hr} isUsd isRounded />
                    <InfoRow parameterName={'Supply'} value={itemInfo?.supply} isCounted />
                    <InfoRow parameterName={'Volume(24Hr)'} value={itemInfo?.volumeUsd24Hr} isUsd isCounted />
                    <InfoRow parameterName={'Change(24Hr)'} value={itemInfo?.changePercent24Hr} isColored isRounded isPercentage />
                </View>
                <Chart id={id} percentValue={itemInfo?.changePercent24Hr} />
            </ScrollView>
        </View>
    )
}

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
});