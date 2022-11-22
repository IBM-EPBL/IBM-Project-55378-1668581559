import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  TextInput, 
  View,
  Image,
  TouchableOpacity 
} from 'react-native';

export default function Check({route, navigation }) {
    let {text} = route.params
    let location = ['chennai','salem','bk pudthur','kuniyamuthur','ukkadam'];
    const getFullName = () => {
        return location.includes(text.toLowerCase())
      }
    return (
        <View style= {styles.Container}> 
       {getFullName() && <Text style= {styles.Error}>You are in danger zone {text}</Text> } 
       {!getFullName() && <Text style= {styles.Success}>You are in safe zone {text}</Text>}

        </View>
    );  
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding:10,
    },
    Error:{
        fontSize: 26,
        letterSpacing: 1,
        justifyContent: "center",
        alignItems: "center",
        color : "red",
    },
    Success:{
        fontSize: 26,
        letterSpacing: 1,
        justifyContent: "center",
        alignItems: "center",
        color : "green",
    }
})