import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HorizontalProductSlider from './HorizontalProductSlider';

const mockProducts = [
    {
        id: '1',
        image: require('../../assets/summer-fridays-lip-balm-1.jpg'), // replace with valid image
        tag: 'TRENDING',
        brand: 'SUMMER FRIDAYS',
        name: 'Lip Butter Balm',
        price: '£23.00',
        rating: 4.5,
        reviewCount: 2198,
        onQuickBuy: jest.fn(),
        onShopNow: jest.fn(),
    },
];

describe('HorizontalProductSlider', () => {
    it('renders product info correctly', () => {
        const { getByText } = render(<HorizontalProductSlider data={mockProducts} />);

        expect(getByText('NEW SHADE')).toBeTruthy();
        expect(getByText('SUMMER FRIDAYS')).toBeTruthy();
        expect(getByText('Lip Butter Balm')).toBeTruthy();
        expect(getByText('£23.00')).toBeTruthy();
        expect(getByText('(2198)')).toBeTruthy();
    });

    it('calls onShopNow when CTA is pressed', () => {
        const { getByText } = render(<HorizontalProductSlider data={mockProducts} />);
        fireEvent.press(getByText('SHOP NOW'));
        expect(mockProducts[0].onShopNow).toHaveBeenCalled();
    });

    it('calls onQuickBuy when Quick Buy is pressed', () => {
        const { getByText } = render(<HorizontalProductSlider data={mockProducts} />);
        fireEvent.press(getByText('QUICK BUY'));
        expect(mockProducts[0].onQuickBuy).toHaveBeenCalled();
    });
});
