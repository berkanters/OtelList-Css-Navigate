import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ListItemComponent from './ListItemComponent';

const ListItem = ({data, setOffset, offset}) => {
  const renderItem = ({item}) => {
    return <ListItemComponent item={item} />;
  };

  const loadMore = () => {
    if (offset === data.length) {
      setOffset(prev => prev + 1);
    }
  };

  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={loadMore}
      />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({});