import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type MenuItemDetailsScreenRouteProp = RouteProp<RootStackParamList, 'MenuItemDetails'>; // MenuItemDetails ekranını doğru tanımlıyoruz

const MenuItemDetailsScreen = () => {
  const route = useRoute<MenuItemDetailsScreenRouteProp>();
  const { item } = route.params; // Parametre olarak gelen öğe

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Button title="Back to Menu" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  itemImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 20,
    color: '#888',
    marginBottom: 20,
  },
  itemDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
});

export default MenuItemDetailsScreen;
