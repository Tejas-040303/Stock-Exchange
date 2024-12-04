import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extent-expect';
import Hero from '../src/landingPage/home/Hero';

describe('Hero Component', () => {
    test('renders hero image', () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
})