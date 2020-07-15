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
`;