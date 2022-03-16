// import {StyleSheet} from 'react-native';
// import styles from '../constants/styles';
// const styles = StyleSheet.create({
// export default styles;
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  header: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: 40,
    height: 2,
    backgroundColor: 'lightgray',
  },
  addView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  button: {
    width: 48,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#FFF',
  },
  bottom: {
    flex: 1,
    paddingHorizontal: 10,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width / 2,
    height: height / 3,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 30,
    marginHorizontal: 10,
  },
  status: {
    alignItems: 'center',
  },
});

export default styles;
