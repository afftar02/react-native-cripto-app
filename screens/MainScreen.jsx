import { View, FlatList } from 'react-native';
import CryptInfoCard from '../components/CryptInfoCard';

export default function MainScreen() {
  const items = Array.from(Array(50).keys());

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CryptInfoCard isPlus />} />
    </View>
  )
}