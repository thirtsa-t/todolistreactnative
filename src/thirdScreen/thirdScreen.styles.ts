import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {},

  AppBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  TextField: {
    height: 40,
    margin: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },

  Text: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },

  line: {
    height: 2,
    backgroundColor: 'blue',
    marginLeft: 20,
  },

  container: {
    flex: 1,
    margin: 20,
  },
});
export default styles;
