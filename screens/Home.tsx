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
import PromoStrip from "../components/PromoStrip/PromoStrip";
import InfoTickerBanner from "../components/InfoTickerBanner/InfoTickerBanner";
import CTASectionCard from '../components/CTASectionCard/CTASectionCard';



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

const infoTickerBannerItems = [
    { id: '1', icon: 'truck', text: 'Free UK delivery over £25' },
    { id: '2', icon: 'box', text: 'Click & Collect now available' },
    { id: '3', icon: 'star', text: 'Members earn points on every order' },
];


const renderPromoStrip = () => (
    <PromoStrip
        message="Enjoy 15% off your first order"
        ctaText="Shop Now"
        onPressCTA={() => console.log('CTA clicked')}
    />
);

const renderHeaderSection = (
    selectedCategory: string,
    setSelectedCategory: (cat: string) => void,
) => (
    <>
        <InfoTickerBanner items={infoTickerBannerItems} />
        <CategoryTabs
            categories={categories}
            selected={selectedCategory}
            onTabChange={setSelectedCategory}
        />
        <CTASectionCard
            heading="ENJOY 15% OFF YOUR FIRST ORDER"
            subheading="JUST FOR YOU"
            code="FIRST15"
            buttonText="SHOP NOW"
            onPress={() => console.log('CTA pressed')}
        />

    </>
);

const renderFeaturedSection = () => (
    <>
        <FeaturedBanner data={featuredItems} />
        <SectionHeader
            title="Trending Now"
            onViewAllPress={() => console.log('View All Trending')}
        />
        <HorizontalCardList data={horizontalCardListTrendingItems} />

        <SectionHeader title="Recommended For You" />
    </>
);


const HomeScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showSearchInHeader, setShowSearchInHeader] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            {renderPromoStrip()}

            <HeaderBar showSearch={showSearchInHeader}/>
            <FlatList
                data={verticalCardListRecommendedItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.verticalCardWrapper}>
                        <Text style={styles.verticalTitle}>{item.title}</Text>
                        <Text style={styles.verticalSubtitle}>{item.subtitle}</Text>
                    </View>
                )}
                onScroll={(event) => {
                    const scrollY = event.nativeEvent.contentOffset.y;
                    setShowSearchInHeader(scrollY > 50); // tweak threshold
                }}
                scrollEventThrottle={32}
                contentContainerStyle={{ paddingTop: 64 }}
                ListHeaderComponent={
                    <>
                        {!showSearchInHeader && <SearchBar />}

                        {renderHeaderSection(selectedCategory, setSelectedCategory)}
                        {renderFeaturedSection()}
                    </>
                }
            />
        </View>

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
