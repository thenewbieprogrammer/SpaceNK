import React from 'react';
import { render } from '@testing-library/react-native';
import InfoTickerBanner from './InfoTickerBanner';

jest.mock('@expo/vector-icons', () => ({
    FontAwesome5: () => null,
}));

const mockItems = [
    { id: '1', icon: 'truck', text: 'Free UK delivery over £25' },
    { id: '2', icon: 'box', text: 'Click & Collect now available' },
];



describe('InfoTickerBanner', () => {
    it('renders multiple promo items with text', () => {
        const { getByText } = render(<InfoTickerBanner items={mockItems} />);

        expect(getByText('Free UK delivery over £25')).toBeTruthy();
        expect(getByText('Click & Collect now available')).toBeTruthy();
    });
});
