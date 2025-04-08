import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import FeaturedCustomerFavouriteProducts from './FeaturedCustomerFavouriteProducts';

const mockProducts = [
    {
        id: '1',
        image: require('../../assets/social-media-skincare-01.jpg'),
        tag: 'Customer Favourite',
        rating: 5,
        reviewTitle: 'Perfect Everyday Moisturiser',
        reviewBody: 'Absorbs quickly, keeps my skin soft all day, and doesn’t feel greasy.',
        reviewer: 'karly4ella',
        brand: "Kiehl's",
        size: '50ML',
        productName: 'Ultra Facial Cream',
        price: '£37.00',
        onAddToBag: jest.fn(),
        onViewDetails: jest.fn(),
    },
    {
        id: '2',
        image: require('../../assets/nivea-cream-2.jpg'),
        tag: 'Customer Favourite',
        rating: 4,
        reviewTitle: 'A Glow Boosting Serum',
        reviewBody: 'Makes my skin glow! Lightweight and very effective.',
        reviewer: 'beautylover99',
        brand: 'Glow Recipe',
        size: '30ML',
        productName: 'Dew Drops Serum',
        price: '£31.00',
        onAddToBag: jest.fn(),
        onViewDetails: jest.fn(),
    },
];

describe('FeaturedCustomerFavouriteProducts', () => {
    it('renders the first product in the list', () => {
        const { getAllByText, getByText } = render(
            <FeaturedCustomerFavouriteProducts products={mockProducts} />
        );

        // Validate static content
        expect(getAllByText('CUSTOMER FAVOURITE').length).toBeGreaterThanOrEqual(1);
        expect(getByText('"PERFECT EVERYDAY MOISTURISER"')).toBeTruthy();
        expect(getByText("KIEHL'S")).toBeTruthy();
        expect(getByText('£37.00')).toBeTruthy();
    });

    it('renders the second product after swipe', async () => {
        const { getByTestId, getByText } = render(
            <FeaturedCustomerFavouriteProducts products={mockProducts} />
        );

        const scrollView = getByTestId('featured-customer-carousel');

        fireEvent.scroll(scrollView, {
            nativeEvent: {
                contentOffset: { x: 400, y: 0 },
                layoutMeasurement: { width: 400, height: 800 },
                contentSize: { width: 800, height: 800 },
            },
        });

        await waitFor(() => {
            expect(getByText('"A GLOW BOOSTING SERUM"')).toBeTruthy();
            expect(getByText('GLOW RECIPE')).toBeTruthy();
            expect(getByText('£31.00')).toBeTruthy();
        });
    });
});
