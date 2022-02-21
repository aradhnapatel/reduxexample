/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Book} from '../../action/cart';
import {styles} from './styles';
import {books} from '../../utils/Data';

function Separator() {
  return <View style={styles.border} />;
}
export const BookScreen = () => {
  const dispatch = useDispatch();
  const cartAdd = item => dispatch(Book(item));

  const addItemToCart = item => {
    cartAdd(item);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={books}
          contentContainerStyle={{paddingVertical: 15}}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => Separator()}
          renderItem={({item}) => (
            <View style={styles.bookItemContainer}>
              <Image source={{uri: item.imgUrl}} style={styles.thumbnail} />
              <View style={styles.bookItemMetaContainer}>
                <Text style={styles.textTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.textAuthor}>by {item.author}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => addItemToCart(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Add +</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};
