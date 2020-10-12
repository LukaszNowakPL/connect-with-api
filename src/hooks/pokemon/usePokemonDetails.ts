import {useCallback, useState} from 'react';
import {getPokemonDetails} from '../../api/pokemon/pokemon';
import {PokemonDetailsDto} from '../../api/pokemon/pokemonDto';

export const usePokemonDetails = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [pokemon, setPokemon] = useState<PokemonDetailsDto>();

    const fetchPokemonDetails = useCallback(async (url: string) => {
        setIsFetching(true);
        try {
            const pokemon = await getPokemonDetails(url);
            setPokemon(pokemon.data);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        pokemon,
        fetchPokemonDetails,
    };
};
