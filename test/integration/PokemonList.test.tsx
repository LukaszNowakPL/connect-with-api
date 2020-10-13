import React from 'react';
import {mocked} from 'ts-jest/utils';
import {getPokemonListResponse400Mock, getPokemonListResponseMock} from '../_helpers/api/pokemonApi.mocks';
import {getPokemonList} from '../../src/api/pokemonApi/pokemonApi';
import {PokemonList} from '../../src/components/PokemonList/PokemonList';
import {render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {PokemonDetails} from '../../src/components/PokemonDetails/PokemonDetails';

jest.mock('../../src/api/pokemonApi/pokemonApi');
jest.mock('../../src/components/PokemonDetails/PokemonDetails');

describe('PokemonList', () => {
    beforeEach(() => {
        mocked(getPokemonList).mockReturnValue(getPokemonListResponseMock);
        mocked(PokemonDetails).mockReturnValue(<h2>PokemonDetails</h2>);
    });

    it('triggers an api call for getting list of pokemon', async () => {
        render(<PokemonList />);
        await waitFor(() => {
            expect(getPokemonList).toHaveBeenCalledTimes(1);
        });
    });

    it('renders spinner when api call is not resolved', async () => {
        const {getByText, queryByText} = render(<PokemonList />);

        expect(getByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(getPokemonList).toHaveBeenCalledTimes(1);
        });
        expect(queryByText('Loading...')).not.toBeInTheDocument();
    });

    it('shows error when api call resolves with error', async () => {
        mocked(getPokemonList).mockRejectedValue(getPokemonListResponse400Mock);

        const {getByText} = render(<PokemonList />);
        await waitFor(() => {
            expect(getPokemonList).toHaveBeenCalledTimes(1);
        });

        expect(getByText('Fetching error for Pokemon list')).toBeInTheDocument();
    });

    it('renders component correctly', async () => {
        const {getByText, getByRole} = render(<PokemonList />);
        await waitFor(() => {
            expect(getPokemonList).toHaveBeenCalledTimes(1);
        });

        expect(getByText("Click button to see Pokemon's details.")).toBeInTheDocument();
        expect(getByRole('cell', {name: /mocked name/i})).toBeInTheDocument();
        expect(getByRole('button', {name: /details/i})).toBeInTheDocument();
    });

    it('renders pokemon details after click on a details button', async () => {
        const {queryByText, getByRole} = render(<PokemonList />);
        await waitFor(() => {
            expect(getPokemonList).toHaveBeenCalledTimes(1);
        });

        userEvent.click(getByRole('button', {name: /details/i}));

        expect(queryByText("Click button to see Pokemon's details.")).not.toBeInTheDocument();
        expect(getByRole('heading', {name: /pokemondetails/i})).toBeInTheDocument();
    });
});
