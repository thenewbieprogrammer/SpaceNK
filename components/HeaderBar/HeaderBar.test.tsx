import React from 'react';
import { render } from '@testing-library/react-native';
import HeaderBar from './HeaderBar';

describe('HeaderBar', () => {
    it('renders the app title and user icon', () => {
        const { getByText, getByTestId } = render(<HeaderBar />);
        expect(getByText('MyApp')).toBeTruthy();
        expect(getByTestId('user-icon')).toBeTruthy();
    });
});
