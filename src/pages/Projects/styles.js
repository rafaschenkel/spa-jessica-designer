import { styled } from 'styled-components';

export const Container = styled.div`
    width: 80%;
    max-width: 1024px;
    margin: 20px auto 60px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;

    &::before {
        content: '';
        width: 200px;
        height: 8px;
        background-color: #72008f60;
        position: absolute;
        top: 50px;
    }
`;
