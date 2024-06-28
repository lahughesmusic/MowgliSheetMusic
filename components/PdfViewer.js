import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const PdfViewer = ({ pdfBase64 }) => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: pdfBase64 }}
                style={styles.webview}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    webview: {
        flex: 1,
        width: '100%',
    },
});

export default PdfViewer;
