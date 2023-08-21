import { styled } from 'styled-components';

export const Container = styled.div`
    width: 80%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    min-height: 90vh;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 40px auto 0 auto;
    }
`;

export const Info = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
`;

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    text-transform: capitalize;
`;

export const Subtitle = styled.span`
    padding: 3px 25px 3px 3px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: #72008f60;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
`;

export const ImageContainer = styled.div`
    max-width: 440px;
    position: relative;

    &::before {
        content: '';
        width: 220px;
        height: 260px;
        border-radius: 50%;
        background-color: #72008f60;
        position: absolute;
        top: 150px;
        right: 80px;
        box-shadow: 0 0 30px 30px #72008f60;
        z-index: -2;
    }

    &::after {
        content: '';
        width: 100%;
        height: 100px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%);
        position: absolute;
        right: 10px;
        bottom: 0px;
        z-index: 2;
    }
`;

export const Image = styled.img`
    filter: grayscale(1);
    max-width: 420px;
    height: 550px;
`;
