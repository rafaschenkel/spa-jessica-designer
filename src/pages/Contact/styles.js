import { styled } from 'styled-components';

export const Container = styled.div`
    width: 80%;
    max-width: 1024px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-height: 90vh;
    margin: 0 auto;

    @media screen and (max-width: 475px) {
        padding: 40px 0;
    }
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const ListContactItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px 20px;

    @media screen and (max-width: 475px) {
        flex-direction: column;
        padding: 40px 0;
    }

    @media screen and (max-width: 900px) {
        justify-content: center;
    }
`;
