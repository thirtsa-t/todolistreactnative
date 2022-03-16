import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBoxInput from '../components/CheckBoxInput/CheckBoxInput';
import Text from '../components/Text';
import styles from '../thirdScreen/thirdScreen.styles';

const TodoTask: React.FC<any> = ({navigation}) => {
  const [droppedTrailer, setDroppedTrailer] = useState(false);
  const [sat, setSat] = useState(false);
  const [epi, setEpi] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView style={styles.Container}>
        <View>
          <View>
            <View>
              <View style={styles.AppBar}>
                <View>
                  <Text style={styles.Text}>Todo App Series</Text>
                  <Text>5 of 5 tasks</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{margin: 10, borderRadius: 10}}>
                  <Icon name="close" color="black" size={24} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.container}>
          <CheckBoxInput
            label="Using Firebase Firestore"
            value={droppedTrailer}
            onValueChange={value => setDroppedTrailer(value)}
          />
          <CheckBoxInput
            label="Every Saturday"
            value={sat}
            onValueChange={value => setSat(value)}
          />
          <CheckBoxInput
            label="6 Episodes"
            value={epi}
            onValueChange={value => setEpi(value)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodoTask;
