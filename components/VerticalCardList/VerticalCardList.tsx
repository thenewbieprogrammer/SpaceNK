import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface CardItem {
    id: string;
    title: string;
    subtitle: string;
}

interface Props {
    data: CardItem[];
}

const VerticalCardList = ({ data }: Props) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    card: {
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
    },
    subtitle: {
        fontSize: 13,
        color: '#555',
        marginTop: 4,
    },
});

export default VerticalCardList;
