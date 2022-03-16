import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Button from '../../src/components/Button';
import Text from '../../src/components/Text';
import styles from './SecondScreen.styles';
import Icon from 'react-native-vector-icons/Ionicons';
const colors = [
  {
    id: 1,
    title: 'Firebase',
    pending: 3,
    completed: 1,
    color: 'green',
  },
  {
    id: 2,
    title: 'Todo App server',
    pending: 3,
    completed: 1,
    color: 'skyblue',
  },
  {
    id: 3,
    title: 'React Native',
    pending: 3,
    completed: 1,
    color: 'blue',
  },
  {
    id: 4,
    title: 'Firebase',
    pending: 3,
    completed: 1,
    color: 'indigo',
  },
  {
    id: 5,
    title: 'Firebase',
    pending: 3,
    completed: 1,
    color: 'purple',
  },
  {
    id: 6,
    title: 'Firebase',
    pending: 3,
    completed: 1,
    color: 'red',
  },
  {
    id: 7,
    title: 'Firebase',
    pending: 3,
    completed: 1,
    color: 'orange',
  },
];
const SecondScreen: React.FC = ({navigation}) => {
  const [color, setcolor] = useState('blue');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button style={styles.icon} onPress={() => navigation.goBack()}>
          <Icon name="close" color="black" size={30} />
        </Button>
      </View>
      <View style={styles.maincontainer}>
        <Text style={styles.title}> Create todo list </Text>

        <TextInput
          style={styles.TextInput}
          placeholder="List Name"
          placeholderTextColor={'black'}
        />
        <View style={styles.colors}>
          {colors.map(color => (
            <TouchableOpacity
              onPress={() => setcolor(color.color)}
              style={[styles.touchablecolor, {backgroundColor: color.color}]}
            />
          ))}
        </View>
        <Button style={[styles.button, {backgroundColor: color}]}>
          create
        </Button>
      </View>
    </View>
  );
};

export default SecondScreen;
