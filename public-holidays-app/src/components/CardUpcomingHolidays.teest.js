import React from 'react';
import { render, screen } from '@testing-library/react';
import CardUpcomingHolidays from './CardUpcomingHolidays';

jest.mock('../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: [
      { countryCode: 'US', name: 'United States' },
      { countryCode: 'GB', name: 'United Kingdom' },
    ],
    isLoading: false,
    error: null,
  })),
}));

describe('CardUpcomingHolidays', () => {
  const upComingData = [
    { date: '2023-07-04', name: 'Independence Day', localName: 'Independence Day', countryCode: 'US' },
    { date: '2023-09-04', name: 'Labor Day', localName: 'Labor Day', countryCode: 'US' }
  ];

  it('renders a card with the correct header', () => {
    render(<CardUpcomingHolidays upComingData={upComingData} />);
    expect(screen.getByText('Upcoming Public Holidays for next 7 days')).toBeInTheDocument();
  });

  it('renders the list of holidays correctly', () => {
    render(<CardUpcomingHolidays upComingData={upComingData} />);
    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(2);
    expect(items[0]).toHaveClass('list-group-item');
    expect(items[0]).toHaveTextContent('2023-07-04: Independence Day in United States');
    expect(items[0]).toHaveTextContent('Independence Day');
    expect(items[1]).toHaveClass('list-group-item');
    expect(items[1]).toHaveTextContent('2023-09-04: Labor Day in United States');
    expect(items[1]).toHaveTextContent('Labor Day');
  });

  it('renders even-indexed items with the correct style', () => {
    render(<CardUpcomingHolidays upComingData={upComingData} />);
    const items = screen.getAllByRole('listitem');

    expect(items[0]).not.toHaveClass('list-group-item-success');
    expect(items[1]).toHaveClass('list-group-item-success');
  });
});
