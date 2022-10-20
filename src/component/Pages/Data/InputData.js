import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Alert,  } from 'react-native';

import React, { Component } from 'react';
import BackEnd from '../../../config/Firebase/BackEnd';
import Formulir from '../../Form/Formulir';
import Kamera from '../../Form/Kamera';
import Maps from '../../Form/Maps';


export default class InputData extends Component {

constructor(props) {
  super(props)

  this.state = {
     nama: '',
     nomorHp: '',
     alamat: '',
     maps: '',
     noKTP: '',
     keterangan: '',
     foto: ''
  }
}

onChangeText = (namaState, value) =>{
  this.setState({
    [namaState] : value,
  })
}

onSubmit =() =>{
  if (this.state.nama && this.state.nomorHp && this.state.alamat && this.state.maps && this.state.noKTP && this.state.noKTP && this.state.keterangan && this.state.foto ){
    const formReferensi = BackEnd.database().ref('Form')
    const form ={
      nama: this.state.nama,
      nomorHp: this.state.nomorHp,
      alamat: this.state.alamat,
      maps: this.state.maps,
      noKTP: this.state.noKTP,
      keterangan: this.state.keterangan,
      foto: this.state.foto
    }

    formReferensi
    .push(form)
    .then((data) =>{
      Alert.alert('Berhasil', 'Data Berhasil Di Kirim')
      this.props.navigation.navigate('Notifikasi')
    })
    .catch((error) =>{
      console.log("Error: " , error);
    }) 

  }else{
    Alert.alert('Harus Masukan !!!', 'Nama, Nomor HP, Alamat, Maps, Nomor KTP, Keterangan Wajib isi')
  }
  
}


  render() {
    return (
    <ScrollView>      
        <View style={styles.pages}>
        < Formulir label="Nama Pelapor" placeholder="Masukan Nama"
        onChangeText={this.onChangeText}
        value={this.state.nama}
        namaState="nama" />
        < Formulir label="No Whatsapp" placeholder="Masukan Nomor Whatsapp Aktif"
        keyboardType="number-pad" 
        onChangeText={this.onChangeText}
        value={this.state.nomorHp}
        namaState="nomorHp"/>
        < Formulir label="Alamat" placeholder="Masukan Alamat" 
        isTextArea={true}
        onChangeText={this.onChangeText}
        value={this.state.alamat}
        namaState="alamat"
        />
        <Text style={styles.koor}>
         Titik Koordinat
        </Text>
        {/* < Formulir label="Maps" placeholder="Titik Lokasi"
        onChangeText={this.onChangeText}
        value={this.state.maps}
        namaState="maps" /> */}
        <Maps />
        < Formulir label="Nomor KTP" placeholder="Masukan NIK"
        keyboardType="number-pad" 
        onChangeText={this.onChangeText}
        value={this.state.noKTP}
        namaState="noKTP"/>
        < Formulir label="Keterangan" placeholder="Masukan Keterangan" 
        onChangeText={this.onChangeText}
        value={this.state.keterangan}
        namaState="keterangan"/>

        {/* < Formulir label="Foto" placeholder="Silahkan Fotoo" 
        onChangeText={this.onChangeText}
        value={this.state.foto}
        namaState="foto"/> */}
        <Text style={styles.fot}>
          Foto Sampah
        </Text>
        <Kamera label="Foto"/>
        
        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit('')}>
        <Text style={styles.textTombol}>Kirim Laporan</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
    pages:{
        flex: 1,
        padding: 4,
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
    fontSize: 16,
    },
    koor:{
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'auto',
    fontSize: 16,
    },
    fot:{
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'auto',
    fontSize: 16,
    }
})