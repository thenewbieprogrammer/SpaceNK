import React from 'react';
import { render } from '@testing-library/react-native';
import FeaturedBlogEntries from './FeaturedBlogEntries';

const multipleBlogs = [
    {
        id: '1',
        title: 'Tatcha’s Brightening Serum',
        image: require('../../assets/social-media-tatcha-01.webp'),
        tag: 'Trending',
        cta: 'Discover Now',
    },
    {
        id: '2',
        title: 'Vitamin C Skincare Essentials',
        image: require('../../assets/social-media-skincare-01.jpg'),
        tag: 'Trending',
        cta: 'Discover Now',
    },
];

const singleBlog = {
    id: '99',
    title: 'What The Phlur Fragrances Actually Smell Like',
    brand: 'Phlur',
    image: require('../../assets/phlur-2.jpg'),
    tag: 'Spotlight On',
    cta: 'Read Now',
};

describe('FeaturedBlogEntries', () => {
    it('renders spotlight layout when a single blog entry is passed', () => {
        const { getByTestId, getByText } = render(
            <FeaturedBlogEntries blogEntry={singleBlog} tag="Spotlight On" />
        );

        expect(getByTestId('spotlight-layout')).toBeTruthy();
        expect(getByText('What The Phlur Fragrances Actually Smell Like')).toBeTruthy();
        expect(getByText('READ NOW')).toBeTruthy();
    });

    it('renders carousel layout when an array of blog entries is passed', () => {
        const { getByTestId, getAllByText } = render(
            <FeaturedBlogEntries blogEntry={multipleBlogs} tag="Trending" />
        );

        expect(getByTestId('carousel-layout')).toBeTruthy();
        expect(getAllByText('DISCOVER NOW').length).toBeGreaterThanOrEqual(1);
    });

    it('does not render both layouts at once', () => {
        const { queryByTestId } = render(
            <FeaturedBlogEntries blogEntry={multipleBlogs} />
        );

        expect(queryByTestId('spotlight-layout')).toBeNull();
    });
});
