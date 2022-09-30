import { render, screen } from '@testing-library/react';
import App from './components/App';
import React from "react";
import SearchBar from './components/Searchbar';

describe('Gifs', () => {
  test('Renders 9 gifs', async () => {
    render(<App />)
    const items = await screen.findAllByRole('img')
    expect(items).toHaveLength(9)
  })
})

describe('Searchbar', () => {
  test('Searchbar has an input field', () => {
    render(<SearchBar/>);
    const searchbar = screen.getByRole('textbox');
    expect(searchbar).toHaveAttribute('placeholder');
  });
});
