import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 30px;
    border-radius: 4px;

    h1 {
        margin-bottom: 20px;
    }

    p {
        margin-top: 2px;
    }

    form.create-visit {
        margin-top: 20px;

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

    div.customer {
        margin-top: 15px;
    }
`;