import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function App({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [qrCodeData, setQRCodeData] = useState('');

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setQRCodeData(data);

        // Extract taxiID from scanned QR code data
        console.log(data)
        //const qrCodeJson = JSON.parse(data);
        //const taxiID = qrCodeJson.taxiID;
        const qrCodeData = data;

        // Navigate to OfferRide screen with taxiID as parameter
        navigation.navigate('OfferRide', { qrCodeData });
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {scanned && (
                <View style={styles.qrData}>
                    <Text style={styles.qrText}>QR Code Data:</Text>
                    <Text style={styles.qrText}>{qrCodeData}</Text>
                </View>
            )}

            {!scanned && (
                <View style={styles.buttonContainer}>
                    <Button title={'Scan QR Code'} onPress={() => setScanned(false)} />
                </View>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 40,
    },
    qrData: {
        alignItems: 'center',
    },
    qrText: {
        fontSize: 20,
        margin: 10,
    },
});