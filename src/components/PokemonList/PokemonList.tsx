import React, {useEffect, useState} from 'react';
import {usePokemonList} from '../../hooks/pokemon/usePokemonList';
import {PokemonListItem} from './PokemonListItem';
import {PokemonDetails} from '../PokemonDetails/PokemonDetails';
import {Text, Alert, AlertDescription, AlertIcon, Spinner} from '@chakra-ui/core';
import {selectPokemonLabel} from './PokemonList.style';

export const PokemonList: React.FC = () => {
    const [selectedPokemon, setSelectedPokemon] = useState<string>();
    const {isFetching, fetchPokemonList, pokemonList, isError} = usePokemonList();

    useEffect(() => {
        fetchPokemonList();
    }, [fetchPokemonList]);

    if (isFetching) {
        return <Spinner size={'xl'} />;
    }

    if (isError) {
        return (
            <Alert status="error">
                <AlertIcon />
                <AlertDescription>Fetching error for Pokemon list</AlertDescription>
            </Alert>
        );
    }

    return (
        <>
            {selectedPokemon && <PokemonDetails url={selectedPokemon} />}
            {!selectedPokemon && (
                <Text fontSize={'lg'} className={selectPokemonLabel}>
                    Click button to see Pokemon's details.
                </Text>
            )}
            <table>
                <tbody>
                    {pokemonList.map(pokemonItem => (
                        <PokemonListItem key={pokemonItem.url} pokemon={pokemonItem} onClick={setSelectedPokemon} />
                    ))}
                </tbody>
            </table>
        </>
    );
};
