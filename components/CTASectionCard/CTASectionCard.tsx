import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
}

const CTASectionCard = ({ title, onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 16,
        marginHorizontal: 16,
        marginVertical: 12,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CTASectionCard;
