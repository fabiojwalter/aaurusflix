import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';


const Main = styled.main`
    background-color: var(--grayDark);
    color: var(--white);
    padding-top: 94px;
    position: relative;
    height: calc(100vh - 94px);
    padding-left: 5%;
    padding-right: 5%;
`;


function PageDefault({ children }) {
    return (
        <>
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
}

export default PageDefault;