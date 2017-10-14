import React, { Component, PropTypes } from 'react';
import { Text, FlatList, View, StatusBar} from 'react-native';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  
  static propTypes = {
    navigation: PropTypes.object,
  }

  handlePress = () => {
    console.log('list');
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false}/>
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem 
              text={item}
              onPress={this.handlePress}
              selected={item === TEMP_CURRENT_CURRENCY}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;