import React, {useEffect} from 'react';
import {usePokemonDetails} from '../../hooks/pokemon/usePokemonDetails';
import {pokemonDetailsContainer} from './PokemonDetails.style';
import {Alert, AlertDescription, AlertIcon, Spinner} from '@chakra-ui/core';
import {PokemonDescription} from './PokemonDescription';

interface PokemonDetailsProps {
    url: string;
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = ({url}) => {
    const {fetchPokemonDetails, pokemon, isFetching, isError} = usePokemonDetails();

    useEffect(() => {
        fetchPokemonDetails(url);
    }, [fetchPokemonDetails, url]);

    return (
        <div className={pokemonDetailsContainer}>
            {isFetching && <Spinner size={'xl'} />}
            {isError && (
                <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>Fetching error for Pokemon details</AlertDescription>
                </Alert>
            )}
            {pokemon && <PokemonDescription pokemon={pokemon} />}
        </div>
    );
};
