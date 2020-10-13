import React from 'react';
import {render} from '@testing-library/react';
import {PAGES} from '../../src/helpers/types';
import {Header} from '../../src/components/Header/Header';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
    it('renders component', async () => {
        const {getByRole} = render(<Header page={PAGES.POKEMON} onClick={jest.fn()} />);

        expect(getByRole('heading', {name: /connect with Api example/i})).toBeInTheDocument();
        expect(getByRole('button', {name: /pokemon api/i})).toBeInTheDocument();
        expect(getByRole('button', {name: /dog api/i})).toBeInTheDocument();
    });

    it('triggers onClick prop with PAGES.POKEMON argument on click on Pokemon API button', () => {
        const onClickMock = jest.fn();

        const {getByRole} = render(<Header page={PAGES.POKEMON} onClick={onClickMock} />);
        userEvent.click(getByRole('button', {name: /pokemon api/i}));

        expect(onClickMock).toHaveBeenCalledTimes(1);
        expect(onClickMock).toHaveBeenCalledWith(PAGES.POKEMON);
    });

    it('triggers onClick prop with PAGES.DOG argument on click on Dog API button', () => {
        const onClickMock = jest.fn();

        const {getByRole} = render(<Header page={PAGES.POKEMON} onClick={onClickMock} />);
        userEvent.click(getByRole('button', {name: /dog api/i}));

        expect(onClickMock).toHaveBeenCalledTimes(1);
        expect(onClickMock).toHaveBeenCalledWith(PAGES.DOGS);
    });
});
