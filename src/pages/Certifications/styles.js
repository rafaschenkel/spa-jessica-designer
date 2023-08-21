import { styled } from 'styled-components';

export const Container = styled.div`
    width: 80%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    margin: 60px auto;
    min-height: 70vh;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    &::before {
        content: '';
        width: 20%;
        height: 1px;
        border-radius: 100%;
        background-color: #777;
        position: absolute;
        top: 100px;
        right: 0;
    }

    &::after {
        content: '';
        width: 40%;
        height: 1px;
        border-radius: 100%;
        background-color: #777;
        position: absolute;
        bottom: 5%;
        left: 0;

        @media screen and (max-width: 768px) {
            width: 5%;
        }
    }
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;

    &::before {
        content: '';
        width: 200px;
        height: 8px;
        background-color: #72008f60;
        position: absolute;
        top: 40px;
    }
`;

export const Certificates = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin: 0 auto;
    background-color: #72008f60;
    padding: 20px 40px;
    border-radius: 40px 10px 40px 10px;

    @media screen and (max-width: 400px) {
        padding: 20px;
    }
`;
