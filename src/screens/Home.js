import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements'; // Import CheckBox from react-native-elements
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    const [agree, setAgree] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const submit = (navigation) => {
        if (!userName || !password) {
            Alert.alert("Please fill in all mandatory fields.");
            return;
        }

        if (userName === "subhadip" && password === "subhadip") {
            Alert.alert(`Thank You ${userName}`);
            navigation.navigate("welcomescreen", { myName: `${userName}` });
        } else {
            Alert.alert(`UserName and Password are not correct`);
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Login Form</Text>
            <Text style={styles.description}>Enter Your Login Details!!</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Name *</Text>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={userName}
                    onChangeText={(actualData) => setUserName(actualData)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Password *</Text>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(actualData) => setPassword(actualData)}
                />
            </View>

            <View style={styles.wrapper}>
                <CheckBox
                    checked={agree}
                    onPress={() => setAgree(!agree)}
                    checkedColor="#4630EB"
                />
                <Text style={styles.wrapperText}>
                    I have read and agreed with the TC
                </Text>
            </View>

            <TouchableOpacity
                style={[
                    styles.buttonStyle,
                    { backgroundColor: agree ? '#4630EB' : 'gray' },
                ]}
                disabled={!agree}
                onPress={() => submit(navigation)} // Corrected onPress handler
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "#fff",
    },
    mainHeader: {
        fontSize: 25,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
        fontFamily: "bold",
    },
    description: {
        fontSize: 20,
        color: "#7d7d7d",
        paddingBottom: 20,
        lineHeight: 25,
        fontFamily: "regular",
    },
    inputContainer: {
        marginTop: 20,
    },
    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontFamily: "regular",
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontFamily: "regular",
        fontSize: 18,
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    wrapperText: {
        marginLeft: 10,
        fontFamily: "regular",
    },
    buttonStyle: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'regular',
    },
});

export default Home;
