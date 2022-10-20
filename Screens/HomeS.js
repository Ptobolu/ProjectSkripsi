import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';


const HomeS = ({navigation}) => {
  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.logo}>
        <Image source={require('../src/Image/logo.png')}
          style={{resizeMode: "center", height: 300, width: 300}}/>
      </View>
      <Text style={styles.title} >SELAMAT DATANG DI APLIKASI</Text>
      <Text style={styles.titleI} >PELAPORAN SAMPAH MINUT</Text>
      <TouchableOpacity style={styles.tombol} onPress={() => navigation.navigate('InputData')}>
        <Text style={styles.textTombol}>BUAT PELAPORAN</Text>
        </TouchableOpacity>
  </SafeAreaView>
);
}

export default HomeS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 35,
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: '#a9a9a9',
    height: 30,
  },
    logo:{
    justifyContent: 'flex-start',
  },
  titleI:{
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 3.25,
    color: 'black',
  },
  tombol:{
    backgroundColor: '#29CC39',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  textTombol:{
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
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

