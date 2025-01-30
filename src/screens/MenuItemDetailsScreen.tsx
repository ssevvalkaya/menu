import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type MenuItemDetailsRouteProp = RouteProp<RootStackParamList, 'MenuItemDetails'>;

const MenuItemDetails = () => {
  const route = useRoute<MenuItemDetailsRouteProp>();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  itemImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  itemPrice: {
    fontSize: 18,
    color: '#888',
    marginTop: 10,
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 15,
  },
});

export default MenuItemDetails;
