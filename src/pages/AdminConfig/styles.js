import styled from 'styled-components';

export const Container = styled.div`
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255, 0.05);
    padding: 25px;

    h1 {
        margin-bottom: 20px;
        font-size: 42px;
    }

    input{
        display: block;
        margin-bottom: 15px;
    }

    input, select, button {
        padding: 8px;
        width: 220px;
        height: 38px;
        margin-right: 16px;
    }

    button {
        width: 120px;
        border: 0px;
        border-radius: 3px;
        background-color: rgb(32, 170, 118);
        color: white;

        cursor: pointer;
    }
`;