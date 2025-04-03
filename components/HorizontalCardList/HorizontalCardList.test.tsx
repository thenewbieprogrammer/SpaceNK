import React from 'react';
import { render } from '@testing-library/react-native';
import HorizontalCardList from './HorizontalCardList';

const mockData = [
    { id: '1', title: 'Glow Serum' },
    { id: '2', title: 'Hydration Cream' },
];

describe('HorizontalCardList', () => {
    it('renders all cards with titles', () => {
        const { getByText } = render(<HorizontalCardList data={mockData} />);

        expect(getByText('Glow Serum')).toBeTruthy();
        expect(getByText('Hydration Cream')).toBeTruthy();
    });
});
