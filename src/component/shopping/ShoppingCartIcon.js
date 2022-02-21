import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export const ShoppingCartIcon = props => {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state);

  return (
    <>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={styles.button}>
          <View style={styles.itemCountContainer}>
            <Text style={styles.itemCountText}>{cartItems?.length}</Text>
          </View>
          <Icon name="cart" size={30} color="#101010" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    marginBottom: 10,
  },
  itemCountContainer: {
    backgroundColor: '#ff333390',
    borderRadius: 50,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemCountText: {
    color: 'black',
  },
});
