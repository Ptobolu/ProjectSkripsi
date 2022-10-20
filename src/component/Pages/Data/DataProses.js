import { Text, StyleSheet, View, ScrollView} from 'react-native'
import React, { Component } from 'react'
import BackEnd from '../../../config/Firebase/BackEnd'
import CardProses from '../Data/CardProses'
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import Kamera from '../../Form/Kamera'

export default class DataProses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      forms: {},
      formKey: []
    }
  }

  componentDidMount() {
    BackEnd.database()
      .ref("Form")
      .once('value', (querySnapShot) => {

        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let formItem = { ...data };

        this.setState({
          forms: formItem,
          formKey: Object.keys(formItem)
        })
      })
  }
  render() {
    const { forms, formKey } = this.state
    return (
      <ScrollView>
        <FontAwesome name="camera" size={100} color="white" />
        <View style={styles.proses}>
          <View style={styles.header}></View>
          <Text style={styles.title}> Daftar Pengaduan :</Text>
          <View style={styles.garis} />
          <View style={styles.listData}>
            {formKey.length > 0 ? (
              formKey.map((key) => (

                <CardProses key={key} formItem={forms[key]} id={key}
                {...this.props}/>
              ))
            ) : (
              <Text>Daftar Kosong</Text>
            )}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 30,
    paddingTop: 10,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  garis: {
    borderWidth: 2,
    borderColor: 'limegreen',
    marginTop: 3,
  },
  listData: {
    paddingHorizontal: 10,
    marginTop: 10
  }
})