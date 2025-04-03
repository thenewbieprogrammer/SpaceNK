import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
            <Ionicons name="search-outline" size={20} style={styles.icon} color="#666" />
            <TextInput
                placeholder="Search..."
                value={value}
                onChangeText={setValue}
                style={styles.input}
                placeholderTextColor="#999"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        margin: 12,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
});

export default SearchBar;
