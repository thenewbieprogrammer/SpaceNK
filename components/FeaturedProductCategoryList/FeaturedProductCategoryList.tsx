import React, {useState} from 'react';
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
        <View style={[styles.card, orientation === 'horizontal' && styles.cardHorizontal]}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <Text style={styles.tag}>{item.tag}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>

            <TouchableOpacity onPress={item.onPress} style={[orientation === 'horizontal' && styles.ctaButtonHorizontal]}>
                <Text style={[styles.buttonText, orientation === 'horizontal' && styles.buttonTextHorizontal]}>
                    {item.buttonText || 'SHOP NOW'}
                </Text>
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
        <View style={styles.verticalWrapper}>
            {data.map((item) => {
                const [ctaWidth, setCtaWidth] = useState(0);

                return(
                    <View key={item.id} style={[styles.card, orientation === 'vertical' && {marginBottom: 35}]}>
                        <Image source={item.image} style={styles.image} resizeMode="cover" />
                        <Text style={styles.tag}>{item.tag}</Text>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <TouchableOpacity onPress={item.onPress}>
                            <View style={{ alignSelf: 'flex-start' }}>
                                <Text
                                    style={styles.buttonText}
                                    onLayout={(event) => {
                                        const { width } = event.nativeEvent.layout;
                                        setCtaWidth(width);
                                    }}
                                >
                                    {item.buttonText || 'SHOP NOW'}
                                </Text>
                                <View style={[styles.underline, { width: ctaWidth }]} />
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    horizontalList: {
        paddingHorizontal: 16,
    },
    verticalWrapper: {
        paddingHorizontal: 16,
    },
    card: {
        alignSelf: 'center',
        marginLeft: 1,
        width: '100%',
        maxWidth: 420,
        marginBottom: 16,
    },
    cardHorizontal: {
        width: 260,
        marginRight: 16,
        alignSelf: 'flex-start',
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
        marginBottom: 6,
    },
    button: {
        color: '#000',
        fontWeight: '600',
        fontSize: 13,
    },
    ctaButtonHorizontal: {
        backgroundColor: '#000',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    buttonText: {
        color: '#000',
        fontWeight: '600',
        fontSize: 13,
    },
    underline: {
        height: 1,
        backgroundColor: '#000',
        marginTop: 4,
    },
    buttonTextHorizontal: {
        color: '#fff',
    }
});

export default FeaturedProductCategoryList;
