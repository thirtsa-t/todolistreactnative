import {StyleSheet, Dimensions} from 'react-native';
import {Screen} from 'react-native-screens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'flex-end',
    padding: 20,
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
  },
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    paddingVertical: 10,
    fontSize: 26,
    fontWeight: 'bold',
  },
  TextInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgray',
    color: 'black',
    paddingHorizontal: 10,
  },
  colors: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  touchablecolor: {
    width: 30,
    height: 30,
    backgroundColor: 'purple',
  },
  button: {
    width: ' 100%',
    backgroundColor: 'green',
  },
});
export default styles;
