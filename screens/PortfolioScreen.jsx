import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useContext } from 'react';
import CryptInfoCard from '../components/CryptInfoCard';
import { AppContext } from '../App';

const PortfolioScreen = () => {
  const { state } = useContext(AppContext);
  const pricePercentage = Math.round((state.portfolio.lastPrice > 0 ? (state.portfolio.price * 100) / state.portfolio.lastPrice - 100 : 0) * 100) / 100;
  const priceDifference = Math.round((state.portfolio.price - state.portfolio.lastPrice) * 100) / 100;
  const differenceSign = priceDifference < 0 ? '' : '+';

  return (
    <View>
      <View style={styles.portfolioPriceContainer}>
        <Text style={{ color: '#ffffff', fontSize: 30 }}>{state.portfolio.price} USD</Text>
        <Text style={{ color: 'rgba(255,255,255, 0.7)', fontSize: 25 }}>{differenceSign + priceDifference}</Text>
        <Text style={{ color: 'rgba(255,255,255, 0.7)', fontSize: 25 }}>({pricePercentage} %)</Text>
      </View>
      <FlatList
        data={state.portfolio.cryptoCurrencies}
        renderItem={({ item }) =>
          <CryptInfoCard
            id={item.id}
            rank={item.rank}
            name={item.name}
            symbol={item.symbol}
            changePercent24Hr={item.changePercent24Hr}
            price={item.priceUsd}
          />} />
    </View>
  )
}

export default PortfolioScreen;

const styles = StyleSheet.create({
  portfolioPriceContainer: {
    alignItems: 'center',
    paddingVertical: 50,
    height: 250,
    justifyContent: 'space-between',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.5)',
    backgroundColor: 'rgba(255,255,255, 0.1)',
  }
});