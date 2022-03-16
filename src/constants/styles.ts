import {ViewStyle} from 'react-native';

interface Styles {
  flex: ViewStyle;
  block: ViewStyle;
  row: ViewStyle;
  middle: ViewStyle;
  center: ViewStyle;
  left: ViewStyle;
  right: ViewStyle;
  top: ViewStyle;
  bottom: ViewStyle;
  fluid: ViewStyle;
}

const STYLES: Styles = {
  flex: {
    flex: 1,
  },
  block: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  bottom: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  fluid: {
    width: 'auto',
  },
};

export default STYLES;
