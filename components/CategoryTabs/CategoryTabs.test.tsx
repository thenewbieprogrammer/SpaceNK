import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CategoryTabs from './CategoryTabs';

describe('CategoryTabs', () => {
    it('renders all categories and handles tab selection', () => {
        const onTabChange = jest.fn();

        const { getByText } = render(
            <CategoryTabs
                categories={['All', 'Skincare', 'Makeup']}
                selected="All"
                onTabChange={onTabChange}
            />
        );

        expect(getByText('All')).toBeTruthy();
        expect(getByText('Skincare')).toBeTruthy();
        expect(getByText('Makeup')).toBeTruthy();

        fireEvent.press(getByText('Skincare'));
        expect(onTabChange).toHaveBeenCalledWith('Skincare');
    });
});
