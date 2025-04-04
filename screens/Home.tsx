import React, {useState} from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryTabs from '../components/CategoryTabs/CategoryTabs';
import FeaturedBanner from '../components/HorizontalFeaturedBanner/HorizontalFeaturedBanner';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import HorizontalCardList from '../components/HorizontalCardList/HorizontalCardList';
import VerticalCardList from '../components/VerticalCardList/VerticalCardList';
import { FlatList } from 'react-native';


const categories = ['All', 'Skincare', 'Makeup', 'Hair', 'Fragrance'];

// Mock banner data
const featuredItems = [
    { id: '1', title: 'Glow Up', description: 'New skincare drops' },
    { id: '2', title: 'Spring Picks', description: 'Fresh for the season' },
];

const horizontalCardListTrendingItems = [
    { id: '1', title: 'Vitamin C Serum' },
    { id: '2', title: 'Night Repair Cream' },
    { id: '3', title: 'Daily Sunscreen' },
];

const verticalCardListRecommendedItems = [
    { id: '1', title: 'Evening Routine', subtitle: 'Top skincare tips' },
    { id: '2', title: 'Makeup Essentials', subtitle: 'What to wear this season' },
    { id: '3', title: 'Fragrance Trends', subtitle: 'What’s hot in 2025' },
];


const HomeScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <FlatList
            data={verticalCardListRecommendedItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.verticalCardWrapper}>
                    <Text style={styles.verticalTitle}>{item.title}</Text>
                    <Text style={styles.verticalSubtitle}>{item.subtitle}</Text>
                </View>
            )}
            ListHeaderComponent={
                <>
                    <HeaderBar />
                    <SearchBar />
                    <CategoryTabs
                        categories={categories}
                        selected={selectedCategory}
                        onTabChange={setSelectedCategory}
                    />
                    <FeaturedBanner data={featuredItems} />
                    <SectionHeader
                        title="Trending Now"
                        onViewAllPress={() => console.log('View All Trending')}
                    />
                    <HorizontalCardList data={horizontalCardListTrendingItems} />
                    <SectionHeader title="Recommended For You" />
                </>
            }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    verticalCardWrapper: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#f9f9f9',
        marginBottom: 8,
        borderRadius: 12,
    },
    verticalTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
    },
    verticalSubtitle: {
        fontSize: 13,
        color: '#555',
        marginTop: 4,
    },
});

export default HomeScreen;
