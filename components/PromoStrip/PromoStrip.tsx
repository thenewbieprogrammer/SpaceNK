import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    message: string;
    ctaText: string;
    onPressCTA: () => void;
}

const PromoStrip = ({ message, ctaText, onPressCTA }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.message}>{message} </Text>
                <TouchableOpacity onPress={onPressCTA}>
                    <Text style={styles.cta}>{ctaText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff7cc',
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    message: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    cta: {
        color: '#007bff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    textWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default PromoStrip;
