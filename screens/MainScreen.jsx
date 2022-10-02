import { View, FlatList, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import CryptInfoCard from '../components/CryptInfoCard';
import axios from 'axios';

export default function MainScreen() {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    axios.get(`https://api.coincap.io/v2/assets?limit=20&offset=${offset}`)
      .then(({ data }) => {
        setItems([...items, ...data.data]);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Error', 'Network Error');
      });
  }, [offset])

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
          />}
        onEndReached={() => setOffset(offset + 20)} />
    </View>
  )
}