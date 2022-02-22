import React from 'react';
import { Text, View, Button } from 'react-native';
import { Grid } from '@material-ui/core';

import products from '../../lib/tempProducts';

import styles from './stylesProducts';

export default function Products({ navigation, products }) {
  return (
    <View style={styles.container}>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </View>
  );
}
