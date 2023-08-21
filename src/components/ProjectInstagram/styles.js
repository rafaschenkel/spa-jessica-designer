import { styled } from 'styled-components';

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`;

export const Images = styled.div`
    display: flex;
    width: 100%;
    overflow-x: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 400px;
    border-radius: 12px;
    pointer-events: none;

    @media screen and (max-width: 475px) {
        height: 250px;
    }
`;

export const InfoProject = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 350px;
`;

export const Title = styled.h3`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    font-size: 16px;
    font-weight: 300;
    max-width: 600px;
    letter-spacing: 0.2px;
`;
