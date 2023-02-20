import {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  Image,
} from 'react-native';

import style1 from './src/style1.style';
import products from './src/productsJson';
import ProductCard from './src/ProductCard';



function App() {
  
  const [searchKey, setSearchKey] = useState("");


  return (
  <>
      <Text style={style1.title} >Patika Store</Text>
      <TextInput style={style1.search} onChangeText={(e) => setSearchKey(this.value)} value={searchKey}     
      placeholder="Ara..." />

      <ProductCard></ProductCard>
  </>
    
  );
}



export default App;
