import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

interface Item {
    id: string;
    icon: string;
    text: string;
}

interface Props {
    items: Item[];
}

const InfoTickerBanner = ({ items }: Props) => {
    const scrollRef = useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % items.length;
            setCurrentIndex(nextIndex);

            scrollRef.current?.scrollTo({
                x: screenWidth * nextIndex,
                animated: true,
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            ref={scrollRef}
        >
            {items.map((item) => (
                <View key={item.id} style={styles.item}>
                    <FontAwesome5 name={item.icon as any} size={16} style={styles.icon} />
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    item: {
        width: screenWidth,
        backgroundColor: '#f8f8f8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
        color: '#444',
    },
    text: {
        fontSize: 14,
        color: '#333',
    },
});

export default InfoTickerBanner;
