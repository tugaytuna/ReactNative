import {useState} from 'react'
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
  import style1 from "./style1.style";
  import products from './productsJson';

function ProductCard() {

    const [stok, setStok] = useState("")



  return (
    <View style={style1.allCards}>
    <FlatList numColumns={2} data={products} renderItem={({item, index}) => (
      <View style={style1.cardTemplete}>
        <Image style={style1.image} source={{uri:item.imgURL}} />
        <Text style={style1.prodTitle}>{item.title}</Text>
        <Text style={style1.price} >{item.price}</Text>
        {!item.inStock ? ( <Text style={style1.stok}>STOKTA YOK</Text>) : null}
       
      </View>
    )} 
    />
    </View>
  )
}

export default ProductCard