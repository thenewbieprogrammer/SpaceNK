import React from 'react';
import { render } from '@testing-library/react-native';
import VerticalCardList from './VerticalCardList';

const mockData = [
    { id: '1', title: 'Evening Routine', subtitle: 'Top skincare tips' },
    { id: '2', title: 'Makeup Essentials', subtitle: 'What to wear this season' },
];

describe('VerticalCardList', () => {
    it('renders all vertical cards with title and subtitle', () => {
        const { getByText } = render(<VerticalCardList data={mockData} />);

        expect(getByText('Evening Routine')).toBeTruthy();
        expect(getByText('Top skincare tips')).toBeTruthy();

        expect(getByText('Makeup Essentials')).toBeTruthy();
        expect(getByText('What to wear this season')).toBeTruthy();
    });
});
