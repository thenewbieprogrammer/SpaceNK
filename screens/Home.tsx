import React, {useState} from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryTabs from '../components/CategoryTabs/CategoryTabs';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import PromoStrip from "../components/PromoStrip/PromoStrip";
import InfoTickerBanner from "../components/InfoTickerBanner/InfoTickerBanner";
import CTASectionCard from '../components/CTASectionCard/CTASectionCard';
import FeaturedProductCategoryList from '../components/FeaturedProductCategoryList/FeaturedProductCategoryList';
import HorizontalProductSlider from '../components/HorizontalProductSlider/HorizontalProductSlider';
import SocialMediaSlider from '../components/SocialMediaSlider/SocialMediaSlider';
import FeaturedBlogEntries from '../components/FeaturedBlogEntries/FeaturedBlogEntries';
import FeaturedCustomerFavouriteProducts from '../components/FeaturedCustomerFavouriteProducts/FeaturedCustomerFavouriteProducts';
import {categories, infoTickerBannerItems, featuredProductCategoriesListItems, featuredProductCategoriesListSpotlightItems,
    featuredNewBrandsProductCategoriesListItems, featuredBrandsProductCategoriesListItems, trendingProductsHorizontalProductSliderItems,
    newInProductsHorizontalProductSliderItems, socialMediaSliderItems, trendingFeaturedBlogEntries, spotlightFeaturedBlogEntry,
    featuredCustomerFavouriteProductItems, productCategoriesListDiscoveryItems} from "../data";



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
    </>
);

const renderMainSection = () => (
    <>
        <CTASectionCard
            heading="ENJOY 15% OFF YOUR FIRST ORDER"
            subheading="JUST FOR YOU"
            code="FIRST15"
            buttonText="SHOP NOW"
            onPress={() => console.log('CTA pressed')}
        />
        <FeaturedProductCategoryList
            data={featuredProductCategoriesListItems}
            orientation="horizontal"
        />
        <SectionHeader title="Trending Now" onViewAllPress={() => console.log('View All Trending')} />
        <HorizontalProductSlider data={trendingProductsHorizontalProductSliderItems} />
        <SectionHeader title="" />
        <FeaturedProductCategoryList
            data={featuredProductCategoriesListSpotlightItems}
            orientation="vertical"
        />
        <SectionHeader title="As Seen On Social" />
        <SocialMediaSlider data={socialMediaSliderItems} showModalOnPress />

        <SectionHeader title="New Brands at Space NK" />
        <FeaturedProductCategoryList
            data={featuredNewBrandsProductCategoriesListItems}
            orientation="horizontal"
        />
        <SectionHeader title="New In" />
        <HorizontalProductSlider data={newInProductsHorizontalProductSliderItems} />

        <SectionHeader title="Featured Brands" />
        <FeaturedProductCategoryList
            data={featuredBrandsProductCategoriesListItems}
            orientation="horizontal"
        />
        <FeaturedBlogEntries blogEntry={trendingFeaturedBlogEntries} tag="Trending Stories" />

        <FeaturedCustomerFavouriteProducts products={featuredCustomerFavouriteProductItems} />

        <CTASectionCard
            heading="Ndulge"
            subheading="Become a member"
            description="Enjoy reward points and enjoy a host of exciting benefits with our exclusive NDULGE loyalty program"
            buttonText="JOIN NOW"
            onPress={() => console.log('CTA pressed')}
        />

        <FeaturedBlogEntries blogEntry={spotlightFeaturedBlogEntry} tag="Spotlight On" />

        <SectionHeader title="Experiment, Explore, Enjoy" />
        <FeaturedProductCategoryList
            data={productCategoriesListDiscoveryItems}
            orientation="horizontal"
        />
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
                data={[]}
                keyExtractor={() => ''}
                renderItem={null}
                onScroll={(event) => {
                    const scrollY = event.nativeEvent.contentOffset.y;
                    setShowSearchInHeader(scrollY > 50);
                }}
                scrollEventThrottle={32}
                contentContainerStyle={{ paddingTop: 64 }}
                ListHeaderComponent={
                    <>
                        {!showSearchInHeader && <SearchBar />}
                        {renderHeaderSection(selectedCategory, setSelectedCategory)}
                        {renderMainSection()}
                    </>
                }
            />
        </View>
    );
};

export default HomeScreen;