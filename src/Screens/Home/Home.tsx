import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Home.styles';
import Text from '../../components/Text';
import Button from '../../components/Button';
import useTodo from '../../context/useTodo';

const Home: React.FC<any> = ({navigation}) => {
  const {todos} = useTodo();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <View style={styles.content}>
        <View style={styles.top}>
          <View style={styles.header}>
            <View style={styles.line} />
            <View style={styles.headerText}>
              <Text size={24} bold>
                Todo{' '}
              </Text>
              <Text size={24} color="skyblue">
                Lists
              </Text>
            </View>
            <View style={styles.line} />
          </View>
          <View style={styles.addView}>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate('SecondScreen')}>
              <Icon name="add" color="skyblue" size={16} />
            </Button>
            <Text size={12} bold color="skyblue">
              Add List
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={todos}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                style={[styles.item, {backgroundColor: item.color}]}
                onPress={() => navigation.navigate('TodoTask')}>
                <Text size={20} bold color="#FFF" numberOfLines={1}>
                  {item.title}
                </Text>
                <View style={styles.status}>
                  <Text size={28} color="#FFF">
                    {item.pending}
                  </Text>
                  <Text size={12} bold color="#FFF">
                    Remaining
                  </Text>
                </View>
                <View style={styles.status}>
                  <Text size={32} color="#FFF">
                    {item.completed}
                  </Text>
                  <Text size={12} bold color="#FFF">
                    Completed
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
