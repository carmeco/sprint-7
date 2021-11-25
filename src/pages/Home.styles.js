import styled from "styled-components";
import image from "../images/home.jpg";

export const Wrapper = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Content = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    width: 50%;
    padding: 4rem;
`;
