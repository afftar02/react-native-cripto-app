import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import InfoRow from '../components/InfoRow';
import Chart from '../components/Chart';
import Header from '../components/Header';

export default function CryptInfoScreen() {
    const response = {
        "data": {
            "id": "bitcoin",
            "rank": "1",
            "symbol": "BTC",
            "name": "Bitcoin",
            "supply": "17193925.0000000000000000",
            "maxSupply": "21000000.0000000000000000",
            "marketCapUsd": "119179791817.6740161068269075",
            "volumeUsd24Hr": "2928356777.6066665425687196",
            "priceUsd": "6931.5058555666618359",
            "changePercent24Hr": "-0.8101417214350335",
            "vwap24Hr": "7175.0663247679233209"
        },
        "timestamp": 1533581098863
    };

    return (
        <View style={{ flex: 1, width: "100%" }}>
            <Header isPlus/>
            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                <View style={styles.headContainer}>
                    <Image style={styles.image} source={{ uri: "https://assets.coincap.io/assets/icons/btc@2x.png" }} />
                    <View style={styles.nameContainer}>
                        <Text style={{ color: "white", fontWeight: "700", fontSize: 30 }}>Bitcoin</Text>
                        <Text style={{ color: "white", opacity: 0.5, fontSize: 20 }}>BTC</Text>
                    </View>
                </View>
                <View style={{ width: "100%" }}>
                    <InfoRow parameterName={'Rank'} value={response.data.rank} unchanged />
                    <InfoRow parameterName={'Price'} value={response.data.priceUsd} isUsd isRounded />
                    <InfoRow parameterName={'Market Cap'} value={response.data.marketCapUsd} isUsd isCounted />
                    <InfoRow parameterName={'VWAP(24Hr)'} value={response.data.vwap24Hr} isUsd isRounded />
                    <InfoRow parameterName={'Supply'} value={response.data.supply} isCounted />
                    <InfoRow parameterName={'Volume(24Hr)'} value={response.data.volumeUsd24Hr} isUsd isCounted />
                    <InfoRow parameterName={'Change(24Hr)'} value={response.data.changePercent24Hr} isColored isRounded isPercentage />
                </View> 
                <Chart/>
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