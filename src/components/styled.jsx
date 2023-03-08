import styled from 'styled-components';
import { bg1 } from '../assets/images';

export const StyledContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        display: flex;
        align-items: center;
        margin-top: 50px;
        color: inherit;
        gap: 12px;
        text-decoration: none;
        :hover {
            color: #3957ca;
            transition: all ease-in 0.2s;
            .arrow-icon {
                transform: translateX(4px);
                transition: inherit;
            }
        }
    }

    @media (max-width: 768px) {
        background-size: 110%;
        padding: 0 2.5rem;
    }
    @media (max-width: 640px) {
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
export const Description = styled.p`
    font-size: 18px;
    margin-bottom: 84px;
    width: 40%;
    span {
        display: block;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        width: 90%;
        margin-bottom: 56px;
    }
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
        padding: 6px 20px;
        width: 60px;
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

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 40px;
        gap: 0;
    }
`;
