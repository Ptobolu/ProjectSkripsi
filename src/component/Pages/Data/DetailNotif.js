import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import BackEnd from '../../../../src/config/Firebase/BackEnd'

export default class DetailNotif extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        form: {}
      }
    }
    componentDidMount() {
        BackEnd.database()
          .ref("Form/" + this.props.route.params.id)
          .once('value', (querySnapShot) => {
    
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let formItem = { ...data };
    
            this.setState({
              form: formItem,
            })
          })
      }

  render() {
    const {form} = this.state
    return (
      <View style={styles.dateil}>

        <Text style={styles.teks}>Nama Pelapor :</Text>
        <Text style={styles.judul}>{form.nama}</Text>

        <Text style={styles.teks}>Nomor Telepon :</Text>
        <Text style={styles.judul}>{form.nomorHp}</Text>

        <Text style={styles.teks}>Alamat :</Text>
        <Text style={styles.judul}>{form.alamat}</Text>

        <Text style={styles.teks}>Lokasi :</Text>
        <Text style={styles.judul}>{form.maps}</Text>

        <Text style={styles.teks}>Nomor NIK :</Text>
        <Text style={styles.judul}>{form.noKTP}</Text>

        <Text style={styles.teks}>Keterangan :</Text>
        <Text style={styles.judul}>{form.keterangan}</Text>

        <Text style={styles.teks}>Foto :</Text>
        <Text style={styles.judul}>{form.foto}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    dateil:{
        margin: 10,
        padding: 10,
        backgroundColor: '#D9D9D9',
    },
    judul: {
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
      },
      teks:{
        fontSize: 15,
        fontWeight: 'bold',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }
})