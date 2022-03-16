import React from 'react';
import {SafeAreaView, View, Text, ScrollView, StatusBar} from 'react-native';

const SecondScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <View>
            <Text>Welcome</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecondScreen;
