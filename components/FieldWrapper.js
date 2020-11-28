import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Picker } from 'react-native';

const FieldsWrapper = ({ label, isDropdown, isTextarea, name, callback }) => {
    const [session, setSession] = useState('');

    const handleInput = (fieldName, value) => {
        if (fieldName == 'session') {
            setSession(value);
        }
        callback(fieldName, value);
    };

    return (
        <View style={styles.fieldWrapper}>
            <Text style={styles.label}>{label}</Text>
            {isDropdown ? (
                <View style={styles.pickerContainer}>
                    <View>
                        <Picker
                            style={styles.dropdown}
                            selectedValue={session}
                            onValueChange={(itemValue, itemIndex) =>
                                handleInput(name, itemValue)
                            }>
                            <Picker.Item label="--select--" value="" />
                            <Picker.Item label="Algebra" value="algebra" />
                            <Picker.Item label="Vedic Maths" value="vmaths" />
                            <Picker.Item label="Geometry" value="geometry" />
                            <Picker.Item label="Calculus" value="calculus" />
                        </Picker>
                    </View>
                </View>
            ) : (
                    <TextInput
                        style={isTextarea ? styles.form_fields_textarea : styles.form_fields}
                        onChangeText={(text) => handleInput(name, text)}
                        multiline={isTextarea}
                        numberOfLines={isTextarea && 4}
                    />
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    fieldWrapper: {
        marginBottom: 15,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderStyle: 'solid',
        padding: 0,
        height: 30,
        borderRadius: 4,
        textAlignVertical:'top',
        
        position:'relative'
    },
    dropdown: {
        borderWidth: 0,
        flexShrink: 0,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 4,
        height:25
    },
    form_fields: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderStyle: 'solid',
        height: 30,
        borderRadius: 4,
        color: '#333',
        padding: 0,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
    },
    form_fields_textarea: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderStyle: 'solid',
        borderRadius: 4,
        color: '#333',
        padding: 10,
        fontSize: 14,
        textAlignVertical:'top'
    },
    label: {
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 5,
        color: '#333',
    },
});

export default FieldsWrapper;
