import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; // RootStackParamList'i import ediyoruz

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const goToMenu = (category: string) => {
    navigation.navigate('Menu', { category }); // category parametresi gönderiliyor
  };

  return (
    <ImageBackground
      source={{ uri: 'https://www.netkurumsal.com/wp-content/uploads/2017/10/restoran-1024x559.jpg' }}
      style={styles.container}
    >
      <Text style={styles.title}>ENJOY YOUR MEAL</Text>

      <TouchableOpacity style={styles.categoryButton} onPress={() => goToMenu('Main Course')}>
        <Text style={styles.buttonText}>Main Course</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryButton} onPress={() => goToMenu('Soup')}>
        <Text style={styles.buttonText}>Soup</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryButton} onPress={() => goToMenu('Dessert')}>
        <Text style={styles.buttonText}>Dessert</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryButton} onPress={() => goToMenu('Drink')}>
        <Text style={styles.buttonText}>Drink</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  categoryButton: {
    backgroundColor: '#857E50',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
