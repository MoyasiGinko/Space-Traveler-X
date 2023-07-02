import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Dragons from '../components/Dragons';

const mockStore = configureMockStore([thunk]);

describe('Dragons component', () => {
  let store;
  let dispatchSpy;

  beforeEach(() => {
    dispatchSpy = jest.fn();
    store = mockStore({
      dragons: {
        dragons: [
          {
            id: 1,
            name: 'Dragon 1',
            type: 'Type 1',
            flickr_images: ['image1.jpg'],
          },
        ],
        status: 'succeeded',
        error: null,
      },
    });
    store.dispatch = dispatchSpy;
  });

  it('renders Dragons component correctly', () => {
    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );

    const dragonNameElement = screen.getByText('Dragon 1');
    expect(dragonNameElement).toBeInTheDocument();

    // Add more assertions as needed
  });

  it('dispatches reserveDragon action when Reserve Dragon button is clicked', () => {
    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );

    const reserveButton = screen.getByText('Reserve Dragon');
    fireEvent.click(reserveButton);

    expect(dispatchSpy).toHaveBeenCalled();
    expect(dispatchSpy).toHaveBeenCalledWith(expect.any(Function));
  });

  it('dispatches cancelReservation action when Cancel Reservation button is clicked', () => {
    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );

    const cancelReserveButton = screen.getByTestId('cancel-reservation-button');
    fireEvent.click(cancelReserveButton);

    expect(dispatchSpy).toHaveBeenCalled();
    expect(dispatchSpy).toHaveBeenCalledWith(expect.any(Function));
  });
});
