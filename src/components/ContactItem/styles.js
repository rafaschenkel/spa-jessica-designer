import { styled } from 'styled-components';

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

export const Title = styled.h4`
    font-size: 16px;
    font-weight: 700;
`;

export const Link = styled.a`
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
        color: #72008f;
    }
`;

export const Icon = styled.span``;
