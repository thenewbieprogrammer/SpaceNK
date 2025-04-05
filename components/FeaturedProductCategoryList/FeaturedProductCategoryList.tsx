import React from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageSourcePropType,
} from 'react-native';

interface FeaturedProductCategory {
    id: string;
    image: ImageSourcePropType;
    tag: string;
    title: string;
    description: string;
    buttonText?: string;
    onPress: () => void;
}

interface Props {
    data: FeaturedProductCategory[];
    orientation?: 'horizontal' | 'vertical';
}

const FeaturedProductCategoryList = ({ data, orientation = 'vertical' }: Props) => {
    const renderCard = ({ item }: { item: FeaturedProductCategory }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <Text style={styles.tag}>{item.tag}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity onPress={item.onPress}>
                <Text style={styles.button}>{item.buttonText || 'SHOP NOW'}</Text>
            </TouchableOpacity>
        </View>
    );

    if (orientation === 'horizontal') {
        return (
            <FlatList
                data={data}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                testID="horizontal-list"
                contentContainerStyle={styles.horizontalList}
            />
        );
    }

    return (
        <View>
            {data.map((item) => (
                <View key={item.id} style={styles.card}>
                    <Image source={item.image} style={styles.image} resizeMode="cover" />
                    <Text style={styles.tag}>{item.tag}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <TouchableOpacity onPress={item.onPress}>
                        <Text style={styles.button}>{item.buttonText || 'SHOP NOW'}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    horizontalList: {
        paddingHorizontal: 16,
    },
    card: {
        width: 260,
        marginRight: 16,
        paddingBottom: 16,
    },
    image: {
        width: '100%',
        height: 140,
        borderRadius: 12,
    },
    tag: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: '600',
        color: '#888',
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        marginTop: 4,
    },
    description: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
        marginBottom: 8,
    },
    button: {
        color: '#000',
        fontWeight: '600',
        fontSize: 13,
    },
});

export default FeaturedProductCategoryList;
