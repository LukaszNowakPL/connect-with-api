import {Button} from '@chakra-ui/core';
import React from 'react';
import {PokemonListItemDto} from '../../api/pokemonApi/pokemonDto';
import {pokemonName} from './PokemonList.style';

interface PokemonListItemProps {
    pokemon: PokemonListItemDto;
    onClick: (selectedPokemon: string) => void;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({pokemon: {name, url}, onClick}) => {
    return (
        <tr>
            <td className={pokemonName}>{name}</td>
            <td>
                <Button colorScheme={'green'} size={'sm'} onClick={() => onClick(url)}>
                    Details
                </Button>
            </td>
        </tr>
    );
};
