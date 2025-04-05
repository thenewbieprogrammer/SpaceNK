import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FeaturedProductCategoryList from './FeaturedProductCategoryList';

const mockData = [
    {
        id: '1',
        image: require('../../assets/phlur-2.jpg'),
        tag: 'NEW & EXCLUSIVE',
        title: 'Phlur Rose Whip Eau De Parfum',
        description: 'A carnal and contemporary take on rose: this osmanthus...',
        buttonText: 'SHOP NOW',
        onPress: jest.fn(),
    },
    {
        id: '2',
        image: require('../../assets/phlur-4.jpg'),
        tag: 'SCENT SPOTLIGHT',
        title: 'We’ve Fallen For Glossier Fleur',
        description: 'New to the You family, Fleur is an airy fragrance...',
        buttonText: 'SHOP NOW',
        onPress: jest.fn(),
    },
];

describe('FeaturedProductCategoryList', () => {
    it('renders cards vertically by default', () => {
        const { getByText, getAllByText } = render(<FeaturedProductCategoryList data={mockData} />);

        expect(getByText('NEW & EXCLUSIVE')).toBeTruthy();
        expect(getByText('Phlur Rose Whip Eau De Parfum')).toBeTruthy();
        expect(getAllByText('SHOP NOW').length).toBeGreaterThanOrEqual(2);
    });

    it('renders cards horizontally when orientation is set to horizontal', () => {
        const { getByTestId } = render(
            <FeaturedProductCategoryList data={mockData} orientation="horizontal" />
        );

        expect(getByTestId('horizontal-list')).toBeTruthy();
    });

    it('calls onPress when SHOP NOW is pressed', () => {
        const { getAllByText } = render(<FeaturedProductCategoryList data={mockData} />);
        const buttons = getAllByText('SHOP NOW');

        fireEvent.press(buttons[0]);

        expect(mockData[0].onPress).toHaveBeenCalled();
    });
});
