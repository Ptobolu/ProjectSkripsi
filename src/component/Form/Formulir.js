import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Formulir = ({
    label,
    placeholder,
    keyboardType,
    isTextArea,
    onChangeText,
    namaState,
    value
}) => {

    if (isTextArea) {
        return (
            <>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={3}
                    placeholder={placeholder}
                    style={styles.textInputArea}
                    keyboardType={keyboardType} 
                    value={value}
                    onChangeText={(text) =>onChangeText(namaState,text)}
                    />
            </>
        )
    }

    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.textInput}
                keyboardType={keyboardType} 
                value={value}
                onChangeText={(text) =>onChangeText(namaState,text)}
                />
        </>
    )
}

export default Formulir

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5,
        marginBottom: 1,
        marginLeft: 4,
        

    },
    textInput: {
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        color: 'black',
        borderRadius: 10,
        padding: 10,
        fontWeight: 'bold',
        borderColor: '#29CC39',
        fontSize: 15,
        borderWidth: 2,
    },
    textInputArea: {
        textAlignVertical: 'top',
        borderWidth: 2,
        borderColor: '#29CC39',
        borderRadius: 10,
        fontSize: 15,
        padding: 10,
        fontWeight: 'bold',
    }
})