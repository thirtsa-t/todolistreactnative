import React from 'react';
import {View, Text, Button} from 'react-native';
// import styles from './Home.styles';

const Home: React.FC<any> = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>lorem ipsum{'\n'}ipsum lorem lorem</Text>
      </View>
      <View />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('SecondScreen')}
      />
    </View>
  );
};
export default Home;
