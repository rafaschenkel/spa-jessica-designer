import { styled } from 'styled-components';

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    min-height: 200px;
    border-radius: 12px;
    pointer-events: none;
    height: 350px;

    @media screen and (max-width: 475px) {
        height: 250px;
    }
`;

export const InfoProject = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const Subtitle = styled.h4`
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    position: relative;
    background-color: #72008f60;
    padding: 3px 25px 3px 3px;
`;
