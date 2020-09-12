import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const testRegions = [
    { id: 1, name: '서울' }, { id: 2, name: '대전' },
  ];

  

  context('with a new region name', () => {
    it('dispatch setRegion', () => {
      useSelector.mockImplementation((selector) => selector({
        regions: testRegions,
      }));

      const { getByText } = render((
        <RegionsContainer />
      ));

      fireEvent.click(getByText(testRegions[0].name));

      expect(dispatch).toBeCalledWith({
        type: 'setRegion',
        payload: {
          regionName: '서울',
        },
      });
    });
  });

  context('with regions', () => {
    it('select regions', () => {
      useSelector.mockImplementation((selector) => selector({
        regions: testRegions,
      }));

      const { getByText } = render((
        <RegionsContainer />
      ));

      expect(getByText(testRegions[0].name)).toBeInTheDocument();
    });
  });
});