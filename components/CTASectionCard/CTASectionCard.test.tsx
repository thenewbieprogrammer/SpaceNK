import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CTASectionCard from './CTASectionCard';

describe('CTASectionCard', () => {
    it('renders heading, button text and triggers onPress callback', () => {
        const onPress = jest.fn();
        const { getByText } = render(
            <CTASectionCard
                heading="Unlock 20% Off"
                buttonText="SHOP NOW!"
                onPress={onPress}
            />
        );

        expect(getByText('SHOP NOW!')).toBeTruthy();
        expect(getByText('Unlock 20% Off')).toBeTruthy();
        fireEvent.press(getByText('SHOP NOW!'));
        expect(onPress).toHaveBeenCalled();
    });
});
