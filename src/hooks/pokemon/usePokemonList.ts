import {useCallback, useState} from 'react';
import {getPokemonList} from '../../api/pokemon/pokemon';
import {PokemonListItemDto} from '../../api/pokemon/pokemonDto';

export const usePokemonList = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [pokemonList, setPokemonList] = useState<PokemonListItemDto[]>([]);

    const fetchPokemonList = useCallback(async () => {
        setIsFetching(true);
        try {
            const pokemon = await getPokemonList();
            setPokemonList(pokemon.data.results);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        pokemonList,
        fetchPokemonList,
    };
};
