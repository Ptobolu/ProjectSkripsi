import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Image } from 'react-native';


const About = ({navigation}) => {
  return(
  <SafeAreaView style={styles.container}>
    <View>
    
    <View style={styles.logo}>
        <Image
          source={require('../src/Image/banner.jpg')}
          style={{resizeMode: 'contain',
          height: 400,
          width: 400}}
        />
      </View>
      <Text style={styles.dinas}>Dinas Lingkungan Hidup Minahasa Utara</Text>
    </View>
  </SafeAreaView>
);
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 50,
    padding: 40,
  },
    logo:{
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dinas:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 100,
    marginVertical: 20,
    marginBottom: 30,
    alignSelf: 'center'
  }
});


// import { useNavigation } from '@react-navigation/core'
// import React from 'react'
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { auth } from '../firebase'

// const HomeScreen = () => {
//   const navigation = useNavigation()

//   const handleSignOut = () => {
//     auth
//       .signOut()
//       .then(() => {
//         navigation.replace("Login")
//       })
//       .catch(error => alert(error.message))
//   }

//   return (
//     <View style={styles.container}>
//       <Text>Email: {auth.currentUser?.email}</Text>
//       <TouchableOpacity
//         onPress={handleSignOut}
//         style={styles.button}
//       >
//         <Text style={styles.buttonText}>Sign out</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//    button: {
//     backgroundColor: '#0782F9',
//     width: '60%',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '700',
//     fontSize: 16,
//   },
// })

