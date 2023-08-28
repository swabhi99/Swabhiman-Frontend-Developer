import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Grid from './Grid';
import * as reactRedux from 'react-redux';


jest.mock("react-redux");

const mockStore = {
    capsule:{
        capsules:[]
    },

};

describe('Test Grid', () => {

    beforeEach(() => {
        useDispatchMock.mockImplementation(() => () => {});
        useSelectorMock.mockImplementation(selector => selector(mockStore));
    })
    afterEach(() => {
        useDispatchMock.mockClear();
        useSelectorMock.mockClear();
    })

    const useSelectorMock = reactRedux.useSelector;
    const useDispatchMock = reactRedux.useDispatch;



    it('shows thing1 and thing2', () => {
        const grid = render(<Grid/>);
        const warning = grid.getByText('Something went wrong')
        expect(warning).toBeInTheDocument()
    });

});