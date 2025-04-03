import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface CardItem {
    id: string;
    title: string;
}

interface Props {
    data: CardItem[];
}

const HorizontalCardList = ({ data }: Props) => {
    return (
        <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 16,
    },
    card: {
        width: 140,
        height: 180,
        backgroundColor: '#ddd',
        borderRadius: 12,
        padding: 12,
        marginRight: 12,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
});

export default HorizontalCardList;
