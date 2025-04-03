import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
    it('renders title and triggers onPress when "View All" is tapped', () => {
        const onPress = jest.fn();

        const { getByText } = render(
            <SectionHeader title="Trending" onViewAllPress={onPress} />
        );

        expect(getByText('Trending')).toBeTruthy();
        expect(getByText('View All')).toBeTruthy();

        fireEvent.press(getByText('View All'));
        expect(onPress).toHaveBeenCalled();
    });

    it('renders without View All when no callback is provided as props', () => {
        const { queryByText } = render(<SectionHeader title="Recommended" />);
        expect(queryByText('View All')).toBeNull();
    });
});
