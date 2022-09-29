import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CryptInfoCard() {
  const navigation = useNavigation();

  return (
    <TouchableHighlight onPress={() => navigation.navigate('CryptoInfo')}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.rank}>1</Text>
          <Image style={styles.image} source={{ uri: "https://assets.coincap.io/assets/icons/btc@2x.png" }} />
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontWeight: "700" }}>Bitcoin</Text>
            <Text style={{ color: "white", opacity: 0.5 }}>BTC</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={{ color: "rgb(24, 198, 131)" }}>3.25%</Text>
            <Text style={{ color: "white" }}>$19,380</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 85,
    borderRadius: 25,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    flexDirection: "row",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    flex: 1,
  },
  rank: {
    color: "white",
    fontSize: 30,
  },
  image: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
  },
  priceContainer: {
    alignItems: "center",
    right: 40,
  },
  addButton: {
    color: "#99ccff",
    right: 30,
    fontSize: 50,
    fontWeight: "100",
  }
});