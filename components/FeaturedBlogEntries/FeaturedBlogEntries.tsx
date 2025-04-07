import React, {useState} from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageSourcePropType,
} from 'react-native';

type BlogEntry = {
    id: string;
    title: string;
    image: ImageSourcePropType;
    cta: string;
    brand?: string;
    tag?: string;
    onPress?: () => void;
};

interface Props {
    blogEntry: BlogEntry | BlogEntry[];
    tag?: string;
}

const FeaturedBlogEntries = ({ blogEntry, tag = '' }: Props) => {
    const [ctaTextWidth, setCtaTextWidth] = useState(0);

    const isSingle = !Array.isArray(blogEntry);

    if (isSingle) {
        const entry = blogEntry as BlogEntry;

        return (
            <View style={styles.spotlightContainer} testID="spotlight-layout">
                <Image source={entry.image} style={styles.spotlightImage} resizeMode="cover" />
                <Text style={styles.tag}>{tag.toUpperCase()}</Text>
                {entry.brand && <Text style={styles.brand}>{entry.brand.toUpperCase()}</Text>}
                <Text style={styles.title}>{entry.title}</Text>
                <TouchableOpacity style={styles.button} onPress={entry.onPress}>
                    <Text style={styles.buttonText}>{entry.cta}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const entries = blogEntry as BlogEntry[];

    return (
        <View style={styles.carouselContainer} testID="carousel-layout">
            <Text style={styles.tag}>{tag.toUpperCase()}</Text>
            <Text style={styles.carouselTitle}>Inside Space</Text>

            <FlatList
                data={entries}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 12 }}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <TouchableOpacity onPress={item.onPress}>
                            <View style={styles.ctaWrapper}>
                                <Text style={styles.cardCta}
                                      onLayout={(e) =>
                                          setCtaTextWidth(e.nativeEvent.layout.width)}>
                                    {item.cta}
                                </Text>
                                <View style={[styles.underline, { width: ctaTextWidth }]} />
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    tag: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        marginBottom: 4,
        marginHorizontal: 12,
    },
    brand: {
        fontSize: 13,
        fontWeight: '600',
        color: '#888',
        marginTop: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 12,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 13,
    },
    spotlightContainer: {
        alignItems: 'center',
        padding: 16,
    },
    spotlightImage: {
        width: '100%',
        height: 240,
        borderRadius: 12,
        marginBottom: 12,
    },
    carouselContainer: {
        paddingVertical: 16,
    },
    carouselTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginHorizontal: 12,
        marginBottom: 12,
    },
    card: {
        width: 200,
        marginRight: 12,
    },
    ctaWrapper: {
        alignSelf: 'flex-start',
        marginTop: 4,
    },
    underline: {
        height: 1.5,
        backgroundColor: '#000',
        width: 60,
    },
    cardImage: {
        width: '100%',
        height: 140,
        borderRadius: 10,
        marginBottom: 8,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 6,
    },
    cardCta: {
        fontSize: 12,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 4,
    },
});

export default FeaturedBlogEntries;
