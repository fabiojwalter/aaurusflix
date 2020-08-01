import styled from 'styled-components';

const Button = styled.a`
  color: var(--white);
    
    border-radius: 4px;
    border: 1px solid var(--white);
    padding: 16px 24px;
    
    background-color: var(--black);

    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;

    cursor: pointer;

    transition: opacity .3s;

    &:hover, 
    &:focus{
        opacity: .5;
    }

    @media(max-width: 800px) {
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        outline: 0;
        border: 0;
        border-radius: 0;
        background-color: var(--primary);
        color: var(--white);
        text-align: center;
    }
`;

export default Button;
