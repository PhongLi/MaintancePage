import styled from 'styled-components';
import { bg1 } from '../assets/images';

export const StyledContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 5rem;
    height: 100vh;
    background-image: url(${bg1});
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 60%;

    .timer-title {
        font-size: 18px;
        font-weight: 600;
    }

    .more-info {
        display: inline-block;
        margin-top: 50px;
        color: inherit;
        :hover {
            color: #3957ca;
            scale: 1.01;
            transition: all ease-in 0.2s;
        }
    }
`;

export const Logos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        width: 130px;
    }
`;

export const Title = styled.h1`
    font-size: 45px;
    font-weight: 700;
    margin: 30px 0;
    color: #3957ca;
    text-transform: uppercase;
`;

export const Timer = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    gap: 20px;

    .timer-num {
        font-size: 52px;
        font-weight: 500;
        margin: 0 auto;
        text-align: center;
    }

    .timer-label {
        font-size: 15px;
        text-align: center;
        padding: 8px 20px;
        width: 50px;
        background-color: #3957ca;
        color: #fff;
        border-radius: 16px;
    }
`;

export const ContactWrapper = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    gap: 20px;

    .contact {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        img {
            width: 30px;
        }
    }
`;

export const Description = styled.p`
    font-size: 18px;
    margin-bottom: 84px;

    span {
        display: block;
        width: 60%;
        margin-bottom: 20px;
    }
`;
