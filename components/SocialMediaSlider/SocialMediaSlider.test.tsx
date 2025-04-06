import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SocialMediaSlider from './SocialMediaSlider';

const mockData = [
    {
        id: '1',
        image: require('../../assets/summer-fridays-lip-balm-1.jpg'),
        label: 'Summer Fridays',
        username: '@emilylouisebacon',
        likes: 113,
        caption: 'Let’s try on the summerfridays Dream Lip Oil...',
        onPress: jest.fn(),
    },
    {
        id: '2',
        image: require('../../assets/social-media-charlotte-tilbury-01.jpg'),
        label: 'Charlotte Tilbury',
        username: '@charlottebeauty',
        likes: 76,
        caption: 'This is one of my go-to evening glam looks',
        onPress: jest.fn(),
    },
];

describe('SocialMediaSlider', () => {
    it('renders all social media cards with labels', () => {
        const { getByText } = render(<SocialMediaSlider data={mockData} />);
        expect(getByText('Summer Fridays')).toBeTruthy();
        expect(getByText('Charlotte Tilbury')).toBeTruthy();
    });

    it('calls onPress or opens modal when card is tapped', () => {
        const { getByText } = render(<SocialMediaSlider data={mockData} />);
        fireEvent.press(getByText('Summer Fridays'));
        expect(mockData[0].onPress).toHaveBeenCalled();
    });

    it('displays user info inside the modal if rendered internally', () => {
        const { getByText } = render(<SocialMediaSlider data={mockData} showModalOnPress />);

        fireEvent.press(getByText('Summer Fridays'));

        // Modal content appears
        expect(getByText('@emilylouisebacon')).toBeTruthy();
        expect(getByText('113 likes')).toBeTruthy();
        expect(getByText(/Let’s try on the summerfridays/)).toBeTruthy();
    });
});
