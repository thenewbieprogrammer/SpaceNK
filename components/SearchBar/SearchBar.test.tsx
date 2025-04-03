import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
    it('renders with placeholder and handles input', () => {
        const { getByPlaceholderText } = render(<SearchBar />);
        const input = getByPlaceholderText('Search...');

        expect(input).toBeTruthy();

        fireEvent.changeText(input, 'skincare');
        expect(input.props.value).toBe('skincare');
    });
});
