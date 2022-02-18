import React from 'react';
import {FlatList, Text, View} from 'react-native';

export interface IUser {
  id: string;
  name: string;
}

const DATA = [
  {
    id: '1',
    name: 'Michael Scott',
  },
  {
    id: '2',
    name: 'Jim Halpert',
  },
  {
    id: '3',
    name: 'Pam Beesly',
  },
  {
    id: '4',
    name: 'Dwight Schrute',
  },
  {
    id: '5',
    name: 'Andy Bernard',
  },
  {
    id: '6',
    name: 'Ryan Howard',
  },
  {
    id: '7',
    name: 'Kelly Kapoor',
  },
  {
    id: '8',
    name: 'Toby Flenderson',
  },
  {
    id: '9',
    name: 'Stanley Hudson',
  },
  {
    id: '10',
    name: 'Phyllis Vance',
  },
];

const Item = ({data}: {data: IUser}) => (
  <View
    style={{
      backgroundColor: '#eeeeee',
      borderRadius: 10,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }}>
    <Text style={{fontSize: 24}}>{data.name}</Text>
  </View>
);

const App = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={(item: IUser) => item.id}
      />
    </View>
  );
};

export default App;
