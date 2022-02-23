import React, { useState } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { Grid } from '@material-ui/core';

import products from '../../lib/tempProducts';

import styles from './stylesProducts';

export default function Products({ navigation }) {
  const [productList, setProductList] = useState(products);

  console.log(productList);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={productList}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.name} {item.price}
            </Text>
            <Image
              source={{
                uri: `${item.image}`,
              }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        )}
      />
    </View>
  );
}
