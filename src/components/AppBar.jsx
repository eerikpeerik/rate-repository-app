import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
    backgroundColor: theme.colors.textPrimary
  },
  text: {
    color: 'white'
  }
  // ...

});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Repository</Text>
    </View>);
};

export default AppBar;