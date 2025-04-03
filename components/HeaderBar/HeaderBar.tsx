import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>SpaceNK</Text>
            <Ionicons name="person-circle-outline" size={28} testID="user-icon" color="#333" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default HeaderBar;
