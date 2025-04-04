import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import PromoStrip from './PromoStrip';

describe('PromoStrip', () => {
    it('renders the announcement text and handles CTA press', () => {
        const onPress = jest.fn();
        const { getByText } = render(
            <PromoStrip
                message="Enjoy 15% off your first order"
                ctaText="Shop Now"
                onPressCTA={onPress}
            />
        );

        expect(getByText('Enjoy 15% off your first order')).toBeTruthy();
        expect(getByText('Shop Now')).toBeTruthy();

        fireEvent.press(getByText('Shop Now'));
        expect(onPress).toHaveBeenCalled();
    });
});
