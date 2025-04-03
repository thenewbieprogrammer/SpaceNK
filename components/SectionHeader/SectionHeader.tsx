import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    title: string;
    onViewAllPress?: () => void;
}

const SectionHeader = ({ title, onViewAllPress }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {onViewAllPress && (
                <TouchableOpacity onPress={onViewAllPress}>
                    <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
            )}
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
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    viewAll: {
        fontSize: 14,
        color: '#007bff',
    },
});

export default SectionHeader;
