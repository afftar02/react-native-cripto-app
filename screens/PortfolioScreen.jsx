import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import CryptInfoCard from '../components/CryptInfoCard';

const PortfolioScreen = () => {
  const items = Array.from(Array(50).keys());

  return (
    <View>
      <View style={styles.portfolioPriceContainer}>
        <Text style={{ color: '#ffffff', fontSize: 30 }}>134,32 USD</Text>
        <Text style={{ color: 'rgba(255,255,255, 0.7)', fontSize: 25 }}>+2,38</Text>
        <Text style={{ color: 'rgba(255,255,255, 0.7)', fontSize: 25 }}>(1,80 %)</Text>
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CryptInfoCard />} />
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