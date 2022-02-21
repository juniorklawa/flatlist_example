import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {IUser} from './App';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ItemContainer = styled.View`
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 20px;
  margin-vertical: 8px;
  margin-horizontal: 16px;
`;

export const ItemName = styled.Text`
  font-size: 24px;
`;

export const UsersList = styled(FlatList as new () => FlatList<IUser>)`
  padding: 20px;
`;
