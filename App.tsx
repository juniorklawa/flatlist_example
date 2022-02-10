import React from 'react';
import {ListRenderItem} from 'react-native';
import {Container, ItemContainer, ItemName, UsersList} from './styles';

export interface IUser {
  id: string;
  name: string;
}

const DATA = [
  {
    id: '1',
    name: 'Leeroy Jenkins',
  },
  {
    id: '2',
    name: 'John Doe',
  },
  {
    id: '3',
    name: 'Michael Scott',
  },
];

const Item = ({data}: {data: IUser}) => (
  <ItemContainer>
    <ItemName>{data.name}</ItemName>
  </ItemContainer>
);

const App = () => {
  const renderItem: ListRenderItem<IUser> = ({item}) => <Item data={item} />;

  return (
    <Container>
      <UsersList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: IUser) => item.id}
      />
    </Container>
  );
};

export default App;
