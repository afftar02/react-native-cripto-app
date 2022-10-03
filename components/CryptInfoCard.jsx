import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppContext } from '../App';

function roundValue(value) {
  value = Math.round(value * 100) / 100;
  let afterDotAmount = value.toString().includes('.') ? (value.toString().split('.').pop().length) : 0;
  if (afterDotAmount === 0) return value.toString() + '.00';
  else if (afterDotAmount === 1) return value.toString() + '0';
  return value;
}

export default function CryptInfoCard({ isPlus, id, rank, name, symbol, changePercent24Hr, price }) {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(AppContext);

  function deleteItem() {
    dispatch({
      type: 'DELETE_CRYPTO',
      payload: {
        id: id,
      }
    });
  }

  return (
    <TouchableHighlight onPress={() => navigation.navigate('CryptoInfo', { id: id })}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.rank}>{rank}</Text>
          <Image style={styles.image} source={{ uri: `https://assets.coincap.io/assets/icons/${symbol?.toLowerCase()}@2x.png` }} />
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontWeight: "700" }}>{name}</Text>
            <Text style={{ color: "white", opacity: 0.5 }}>{symbol}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={changePercent24Hr >= 0 ? { color: "rgb(24, 198, 131)" } : { color: "rgb(244, 67, 54)" }}>{roundValue(changePercent24Hr)}%</Text>
            <Text style={{ color: "white" }}>${isPlus ? roundValue(price) : roundValue(state.portfolio.cryptoCurrencies.find((item) => item.id === id).price)}</Text>
          </View>
        </View>
        {
          isPlus ?
            <TouchableOpacity onPress={() => navigation.navigate('ChangingCrypto', { id, rank, changePercent24Hr, name, symbol, price, isAdding: isPlus })}>
              <Text style={styles.addButton}>+</Text>
            </TouchableOpacity> :
            <TouchableOpacity onPress={deleteItem}>
              <Icon name='delete' style={styles.removeButton} />
            </TouchableOpacity>
        }
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
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    flex: 1,
  },
  rank: {
    color: "white",
    fontSize: 20,
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
  },
  removeButton: {
    color: '#ff2626',
    right: 25,
    fontSize: 45,
  }
});