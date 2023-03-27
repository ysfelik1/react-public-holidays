import React from 'react';
import { render, screen } from '@testing-library/react';
import CardPublicHolidays from './CardPublicHolidays';

describe('CardPublicHolidays', () => {
  const testData = [
    { date: '2023-01-01', name: 'New Year\'s Day', localName: 'New Year\'s Day' },
    { date: '2023-12-25', name: 'Christmas Day', localName: 'Christmas Day' }
  ];

  it('renders a card with the correct header', () => {
    render(<CardPublicHolidays data={testData} />);
    expect(screen.getByText('Public Holidays')).toBeInTheDocument();
  });

  it('renders the list of holidays correctly', () => {
    render(<CardPublicHolidays data={testData} />);
    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(2);
    expect(items[0]).toHaveClass('list-group-item');
    expect(items[0]).toHaveTextContent('2023-01-01: New Year\'s Day');
    expect(items[0]).toHaveTextContent('New Year\'s Day');
    expect(items[1]).toHaveClass('list-group-item-success');
    expect(items[1]).toHaveTextContent('2023-12-25: Christmas Day');
    expect(items[1]).toHaveTextContent('Christmas Day');
  });

  it('renders even-indexed items with the correct style', () => {
    render(<CardPublicHolidays data={testData} />);
    const items = screen.getAllByRole('listitem');

    expect(items[0]).not.toHaveClass('list-group-item-success');
    expect(items[1]).toHaveClass('list-group-item-success');
  });

});
