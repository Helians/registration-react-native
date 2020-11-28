import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    Button,
    ScrollView,
} from 'react-native';
import FieldWrapper from './FieldWrapper';
import Constants from 'expo-constants';

const Register = ({ navigation }) => {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [fieldsDescription, setFieldsDescription] = useState([]);
    const [buttonDisable, setButtonDisable] = useState(true);

    useEffect(() => {
        setFieldsDescription([
            {
                label: 'First Name*',
                name: 'firstname',
            },
            {
                label: 'Last Name',
                name: 'lastname',
            },
            {
                label: 'Roll Number*',
                name: 'rollnumber',
            },
            {
                label: 'Email Address*',
                name: 'email',
            },
            {
                label: 'Session*',
                name: 'session',
                isDropdown: true,
            },
            {
                label: 'Phone Number*',
                name: 'phone',
            },
            {
                label: 'What do you want to learn from this session?',
                name: 'learnfromsession',
                isTextarea: true
            },
        ]);
    }, []);

    const validateUser = () => {
        if (formData['firstname'] == '' || formData['firstname'] == undefined) {
            setErrorMessage('First name is required');
            setButtonDisable(true);
            return;
        }

        if (formData['firstname'].length > 20) {
            setErrorMessage('First name should not be more than 20 characters');
            setButtonDisable(true);
            return;
        }

        if (formData['rollnumber'] == '' || formData['rollnumber'] == undefined) {
            setErrorMessage('Roll Number is required');
            setButtonDisable(true);
            return;
        }

        if (formData['rollnumber'].length > 10) {
            setErrorMessage('Roll Number should not be more than 10 characters');
            setButtonDisable(true);
            return;
        }

        if (formData['email'] == '' || formData['email'] == undefined) {
            setErrorMessage('Email is required');
            setButtonDisable(true);
            return;
        }

        const regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!regEx.test(formData['email'])) {
            setErrorMessage('Email is Invalid');
            setButtonDisable(true);
            return;
        }

        if (formData['session'] == '' || formData['session'] == undefined) {
            setErrorMessage('Session is required');
            setButtonDisable(true);
            return;
        }

        if (formData['phone'] == '' || formData['phone'] == undefined) {
            setErrorMessage('Phone Number is required');
            setButtonDisable(true);
            return;
        }

        if (isNaN(formData['phone']) || formData['phone'].length > 13) {
            setErrorMessage('Phone Number is Invalid');
            setButtonDisable(true);
            return;
        }
        setButtonDisable(false);
        setErrorMessage('');

    };

    const registerUser = () => {
        if (!buttonDisable) {
            console.log(formData);
            navigation.navigate('success');
        }
    }

    useEffect(() => {
        validateUser();
    }, [formData]);

    const getFormData = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value.trim() });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.registerPage}>
                <View style={styles.header}>
                    <Image source={{ uri: 'https://www.mroads.com/static/media/mroads_white_medium_print.14819d62.png' }} style={styles.logo} />
                    <Text style={styles.paragraph}>
                        Mroads is now offering students the opportunity to take the first step
                        towards becoming the leaders of the next generation of innovation.
                    </Text>
                </View>
                <View style={styles.formBody}>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    {fieldsDescription.map((field, index) => (
                        <FieldWrapper
                            key={index}
                            label={field.label}
                            name={field.name}
                            isDropdown={field.isDropdown}
                            isTextarea={field.isTextarea}
                            callback={getFormData}
                        />
                    ))}

                    <Button
                        style={styles.registerButton}
                        color='#f7a457'
                        title="Register"
                        onPress={() => { registerUser() }}
                        disabled={buttonDisable}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#f8f8f8',
        overflow:'scroll'
    },
    registerPage: {
        width: '100%',
        maxWidth: 500,
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
        backgroundColor: '#333',
        color: '#fff',
        padding: 20,
    },
    paragraph: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
        color: '#fff',
    },
    registerButton: {
        marginTop: 20,
    },
    formBody: {
        padding: 15,
    },
    errorMessage: {
        color: 'red',
        marginBottom: 15,
    },
    logo: {
        width: 140,
        height: 26,
        marginBottom: 20
    }
});

export default Register;
