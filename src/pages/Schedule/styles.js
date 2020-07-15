import styled from 'styled-components';

export const Container = styled.div`
    div.month-selector {
        width: 90%;
        margin: 0 auto;
        justify-content: center;

        h1 {
            text-align: center;
            font-size: 42px;
        }
    }
    
    div.month {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }

    div.day {
        padding: 15px;
        background-color: rgba(255, 255, 255, 0.06);
        width: 100%;
        max-width: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 16px;
    }

    a.visit-card {
        text-decoration: none;
        color: rgb(236, 237, 241);

        &:hover {
            filter: brightness(190%);
        }
    }

    div.create-visit {
        width: 90%;
        max-width: 1300px;
        background-color: rgb(255, 255, 255, 0.05);
        margin: 0 auto;
        padding: 25px;
        margin-bottom: 45px;

        h1 {
            margin-bottom: 20px;
        }

        input, select, button {
            padding: 8px;
            width: 200px;
            height: 38px;
            margin-right: 16px;
        }

        button {
            width: 100px;
            border: 0px;
            border-radius: 3px;
            background-color: rgb(32, 170, 118);
            color: white;
        }
    }
`;