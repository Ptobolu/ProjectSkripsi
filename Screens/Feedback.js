import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import BackEnd from '../src/config/Firebase/BackEnd'
import { CardProses } from '../src/component/PanggilData/FormData'

export default class Feecback extends Component {
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
    marginTop: 10,
  }
})