import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

// Menü kategorileri için tip tanımlıyoruz
type MenuCategory = 'Main Course' | 'Soup' | 'Dessert' | 'Drink';

const menuItems: Record<MenuCategory, { name: string; price: string; image: string; description: string }[]> = {
  'Main Course': [
    { name: 'Steak', price: '$25.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRL3jZP235qUbCa-bAE8qZoI0bu6blE146w&s', description: 'A delicious and tender steak.' },
    { name: 'Grilled Chicken', price: '$18.50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQusTQrW5Dku1CEPyopJTuc3bSHrRZODY1zoQ&s', description: 'Juicy grilled chicken served with a side of vegetables.' },
    { name: 'Spaghetti Bolognese', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6umuY0ec-ziYQpcQYCYJBDuQKimD5Z1g3A&s', description: 'Classic Italian pasta with a rich bolognese sauce.' },
    { name: 'Vegetarian Pizza', price: '$12.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkb8xAygbn35MZK1ywybpE8uVIUSJpBtfzOg&s', description: 'A pizza topped with fresh vegetables and cheese.' },
  ],
  'Soup': [
    { name: 'Tomato Soup', price: '$6.50', image: 'https://i0.wp.com/deliciousasitlooks.com/wp-content/uploads/2021/02/low-fodmap-creamy-tomato-soup-7550.jpg?resize=683%2C1024&ssl=1', description: 'A creamy tomato soup served with a dollop of cream.' },
    { name: 'Chicken Noodle Soup', price: '$7.25', image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/342DF99A-CD47-46EE-BF1E-3DD6300A094E/Derivates/255F0F3E-F8CB-49C7-9A5F-E6A75E5B1731.jpg', description: 'A hearty soup made with chicken and noodles.' },
    { name: 'Mushroom Soup', price: '$6.75', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOHd5rXOONTamN0-QjfASjzPa-9MkWhsfZQ&s', description: 'Creamy soup made from fresh mushrooms.' },
  ],
  'Dessert': [
    { name: 'Cheesecake', price: '$8.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SBvQVDrFsS-ieDRT7pWHmFBT8Y7Em7SL4g&s', description: 'A rich and creamy cheesecake topped with fruit.' },
    { name: 'Chocolate Lava Cake', price: '$9.50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4uZxmEzNztTd17XUrEmMW6eidb1mh3378Gg&s', description: 'Decadent chocolate cake with a molten center.' },
    { name: 'Ice Cream Sundae', price: '$7.00', image: 'https://www.akamaicoffee.com/uploads/9/3/0/1/93011994/s370945420771845374_p176_i1_w474.jpeg', description: 'A sweet ice cream sundae with toppings of your choice.' },
  ],
  'Drink': [
    { name: 'Mineral Water', price: '$1.50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsm-uS5xAecQgPZ0n32YTFhCt4zLr0EhKZw&s', description: 'Pure and refreshing mineral water.' },
    { name: 'Orange Juice', price: '$3.75', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIZrHSyGlvWTKHD4ci8KTlKFBbgQkM_WlZA&s', description: 'Freshly squeezed orange juice.' },
    { name: 'Coffee', price: '$4.25', image: 'https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/55560/uploads/urunresimleri/buyuk/turk-kahvesi-turkish-coffee-100-gr-2dcb05.jpg', description: 'Rich and aromatic brewed coffee.' },
    { name: 'Tea', price: '$3.00', image: 'https://static.ticimax.cloud/32116/uploads/urunresimleri/buyuk/9-life-tea-8-bitkili-karisik-bitki-cay-b9da-1.jpg', description: 'A refreshing blend of herbal tea.' },
  ],
};

type MenuScreenRouteProp = RouteProp<RootStackParamList, 'Menu'>;
type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

const MenuScreen = () => {
  const route = useRoute<MenuScreenRouteProp>();
  const navigation = useNavigation<MenuScreenNavigationProp>();
  const { category } = route.params;

  if (!category) {
    return (
      <View style={styles.container}>
        <Text>Error: category is missing</Text>
      </View>
    );
  }

  const items = menuItems[category as MenuCategory];

  const goToItemDetail = (item: { name: string; price: string; image: string; description: string }) => {
    navigation.navigate('MenuItemDetails', { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} Menu</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToItemDetail(item)}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default MenuScreen;