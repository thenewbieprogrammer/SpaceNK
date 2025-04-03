import React from 'react';
import { render } from '@testing-library/react-native';
import HorizontalFeaturedBanner from './HorizontalFeaturedBanner';

const mockData = [
    { id: '1', title: 'Glow Up', description: 'New skincare drops' },
    { id: '2', title: 'Spring Picks', description: 'Fresh for the season' },
];

describe('HorizontalFeaturedBanner', () => {
    it('renders banner cards with title and description', () => {
        const { getByText } = render(<HorizontalFeaturedBanner data={mockData} />);

        expect(getByText('Glow Up')).toBeTruthy();
        expect(getByText('New skincare drops')).toBeTruthy();

        expect(getByText('Spring Picks')).toBeTruthy();
        expect(getByText('Fresh for the season')).toBeTruthy();
    });
});
