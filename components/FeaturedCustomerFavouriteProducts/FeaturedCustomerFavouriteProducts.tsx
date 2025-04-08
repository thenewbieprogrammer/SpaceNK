import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    ImageSourcePropType,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface Product {
    id: string;
    image: ImageSourcePropType;
    tag: string;
    rating: number;
    reviewTitle: string;
    reviewBody: string;
    reviewer: string;
    brand: string;
    size: string;
    productName: string;
    price: string;
    onAddToBag: () => void;
    onViewDetails: () => void;
}

interface Props {
    products: Product[];
}

const FeaturedCustomerFavouriteProducts = ({ products }: Props) => {
    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            testID="featured-customer-carousel"
        >
            {products.map((product) => (
                <View key={product.id} style={styles.slide}>
                    <Image source={product.image} style={styles.image} resizeMode="cover" />

                    <Text style={styles.tag}>{product.tag.toUpperCase()}</Text>
                    <Text style={styles.title}>"{product.reviewTitle.toUpperCase()}"</Text>
                    <Text style={styles.body}>{product.reviewBody}</Text>
                    <Text style={styles.reviewer}>— {product.reviewer}</Text>

                    <View style={styles.meta}>
                        <Text style={styles.brand}>{product.brand.toUpperCase()}</Text>
                        <Text style={styles.product}>{product.productName}</Text>
                        <Text style={styles.size}>{product.size}</Text>
                        <Text style={styles.price}>{product.price}</Text>
                    </View>

                    <View style={styles.actions}>
                        <TouchableOpacity onPress={product.onAddToBag} style={styles.buttonPrimary}>
                            <Text style={styles.buttonText}>ADD TO BAG</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={product.onViewDetails}>
                            <Text style={styles.linkText}>VIEW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    slide: {
        width: screenWidth,
        padding: 20,
    },
    image: {
        width: '100%',
        height: 280,
        borderRadius: 12,
        marginBottom: 16,
    },
    tag: {
        color: '#888',
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 8,
    },
    body: {
        fontSize: 14,
        color: '#444',
        marginBottom: 4,
    },
    reviewer: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#666',
        marginBottom: 16,
    },
    meta: {
        marginBottom: 16,
    },
    brand: {
        fontWeight: '700',
        fontSize: 13,
        marginBottom: 2,
    },
    product: {
        fontSize: 14,
        fontWeight: '600',
    },
    size: {
        fontSize: 12,
        color: '#777',
        marginBottom: 4,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    buttonPrimary: {
        backgroundColor: '#000',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 13,
    },
    linkText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#000',
        textDecorationLine: 'underline',
    },
});

export default FeaturedCustomerFavouriteProducts;
