import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 16px;
        color: #fafafa60;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
    }

    a.ver {
        color: #fafafa;
        margin-top: 20px;

        &:hover {
            opacity: 0.6;
        }
    }

    a.remover {
        color: #ff0000;
        margin-top: 20px;

        &:hover {
            opacity: 0.6;
        }
    }

    hr {
        color: #fafafa60;
        margin: 20px 0;
    }
`;
