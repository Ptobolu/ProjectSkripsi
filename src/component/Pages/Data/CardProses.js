import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CardProses = ({id, formItem, navigation}) => {
  return (
   <TouchableOpacity style={styles.container} 
   onPress={() => navigation.navigate('DetailNotif', {id: id})}>
     <TouchableOpacity style={styles.container} 
   onPress={() => navigation.navigate('Notifikasi', {id: id})}></TouchableOpacity>
    <View>
        <Text style={styles.model}>{formItem.nama}</Text>
        <Text style={styles.noHp}>{formItem.nomorHp}</Text>
        <Text style={styles.almat}>{formItem.alamat}</Text>
        <Text style={styles.titik}>{formItem.maps}</Text>
        <Text style={styles.Ktp}>{formItem.noKTP}</Text>
        <Text style={styles.kets}>{formItem.keterangan}</Text>
        <Text style={styles.shot}>{formItem.foto}</Text>
    </View>
   </TouchableOpacity>
  )
}

export default CardProses

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    model:{
    },
    noHp:{
    }
})