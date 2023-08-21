import { styled } from 'styled-components';

export const Container = styled.div`
    width: 80%;
    max-width: 1024px;
    height: 62px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media screen and (max-width: 400px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 20px;
    }

    a {
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        transition: all 0.3s linear;
        border-bottom: 1px solid transparent;
        font-weight: 700;

        &:hover {
            color: #72008f;
            border-bottom: 1px solid #72008f;
        }
    }
`;
