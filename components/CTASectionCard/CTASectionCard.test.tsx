import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CTASectionCard from './CTASectionCard';

describe('CTASectionCard', () => {
    it('renders title and triggers onPress callback', () => {
        const onPress = jest.fn();
        const { getByText } = render(
            <CTASectionCard
                title="Unlock 20% Off"
                onPress={onPress}
            />
        );

        expect(getByText('Unlock 20% Off')).toBeTruthy();
        fireEvent.press(getByText('Unlock 20% Off'));
        expect(onPress).toHaveBeenCalled();
    });
});
