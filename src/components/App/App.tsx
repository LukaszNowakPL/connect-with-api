import React, {useState} from 'react';
import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header';
import {PokemonList} from '../PokemonList/PokemonList';
import {PAGES} from '../../helpers/types';
import {Box, ChakraProvider} from '@chakra-ui/core';
import {DogsList} from '../DogsList/DogsList';

export const App: React.FC = () => {
    const [page, setPage] = useState<PAGES>(PAGES.POKEMON);

    return (
        <ChakraProvider>
            <Box width={'80%'} mx={'auto'}>
                <Header page={page} onClick={setPage} />
                {page === PAGES.POKEMON && <PokemonList />}
                {page === PAGES.DOGS && <DogsList />}
                <Footer />
            </Box>
        </ChakraProvider>
    );
};
