import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface BannerItem {
    id: string;
    title: string;
    description: string;
}

interface Props {
    data: BannerItem[];
}

const HorizontalFeaturedBanner = ({ data }: Props) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            style={styles.scroll}
        >
            {data.map((item) => (
                <View key={item.id} style={styles.card}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: {
        marginTop: 16,
    },
    card: {
        width: 300,
        height: 160,
        backgroundColor: '#e1e1e1',
        borderRadius: 16,
        marginRight: 16,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 6,
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
});

export default HorizontalFeaturedBanner;
