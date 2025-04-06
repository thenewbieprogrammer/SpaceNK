import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    ImageSourcePropType,
} from 'react-native';

interface Product {
    id: string;
    image: ImageSourcePropType;
    tag?: string;
    brand: string;
    name: string;
    price: string;
    rating: number;
    reviewCount: number;
    onQuickBuy: () => void;
    onShopNow: () => void;
}

interface Props {
    data: Product[];
}

const HorizontalProductSlider = ({ data }: Props) => {
    const renderItem = ({ item }: { item: Product }) => (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                {item.tag && <Text style={styles.tag}>{item.tag}</Text>}
            </View>

            <TouchableOpacity style={styles.quickBuyButton} onPress={item.onQuickBuy}>
                <Text style={styles.quickBuyText}>QUICK BUY</Text>
            </TouchableOpacity>

            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>

            <View style={styles.ratingRow}>
                <Text style={styles.stars}>⭐ {item.rating.toFixed(1)}</Text>
                <Text style={styles.reviewCount}>({item.reviewCount})</Text>
            </View>

            <TouchableOpacity style={styles.shopNowButton} onPress={item.onShopNow}>
                <Text style={styles.shopNowText}>SHOP NOW</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    card: {
        width: 240,
        marginRight: 16,
    },
    imageContainer: {
        position: 'relative',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    tag: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: '#000',
        color: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        fontSize: 10,
        borderRadius: 12,
        overflow: 'hidden',
    },
    quickBuyButton: {
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 12,
    },
    quickBuyText: {
        fontSize: 12,
        fontWeight: '600',
    },
    brand: {
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    name: {
        fontSize: 13,
        textAlign: 'center',
        marginTop: 2,
    },
    price: {
        fontSize: 13,
        textAlign: 'center',
        marginTop: 2,
        fontWeight: '500',
    },
    ratingRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
    },
    stars: {
        fontSize: 12,
    },
    reviewCount: {
        fontSize: 12,
        marginLeft: 4,
        color: '#666',
    },
    shopNowButton: {
        backgroundColor: '#000',
        marginTop: 12,
        paddingVertical: 10,
        borderRadius: 6,
        alignSelf: 'center',
        width: '100%',
    },
    shopNowText: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 13,
    },
});

export default HorizontalProductSlider;
