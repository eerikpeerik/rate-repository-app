import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Pressable } from 'react-native';

const styles = StyleSheet.create({

  container: {
    paddingTop: Constants.statusBarHeight + 5,
    // ...

  backgroundColor: theme.colors.textPrimary,
    padding: 5
    
  },
text: {
  color: 'white'
}
  // ...

});



const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressFunction}>
        
        <Text style={styles.text}>Repository</Text>
      </Pressable>
      

    </View>);
};

const onPressFunction = () => {
  console.log("Pressed")
}

export default AppBar;