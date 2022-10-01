import { View, FlatList, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import CryptInfoCard from '../components/CryptInfoCard';
import axios from 'axios';

export default function MainScreen() {
  const [items, setItems] = useState();

  useEffect(() => {
    axios.get('https://api.coincap.io/v2/assets')
      .then(({ data }) => {
        setItems(data.data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Error', 'Network Error');
      });
  }, [])

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) =>
          <CryptInfoCard isPlus
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