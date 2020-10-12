import React from 'react';
import {PAGES} from '../../helpers/types';
import {headerButton, headerButtonSelected, headerContainer, headerMenu} from './Header.style';
import {Button, Grid, Heading} from '@chakra-ui/core';

interface HeaderProps {
    page: PAGES;
    onClick: (page: PAGES) => void;
}

export const Header: React.FC<HeaderProps> = ({page, onClick}) => {
    const isPokemonLinkSelected = page === PAGES.POKEMON;
    const isDogLinkSelected = page === PAGES.DOGS;

    return (
        <div className={headerContainer}>
            <Heading>Connect with Api example</Heading>
            <Grid templateColumns="repeat(2, 1fr)" className={headerMenu}>
                <Button
                    variant={'link'}
                    className={isPokemonLinkSelected ? headerButtonSelected : headerButton}
                    onClick={() => onClick(PAGES.POKEMON)}
                >
                    Pokemon API
                </Button>
                <Button
                    variant={'link'}
                    className={isDogLinkSelected ? headerButtonSelected : headerButton}
                    onClick={() => onClick(PAGES.DOGS)}
                >
                    Dog API
                </Button>
            </Grid>
        </div>
    );
};
