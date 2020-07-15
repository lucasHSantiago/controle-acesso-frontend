import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 165px;

    div.login-box {
        width: 90%;
        max-width: 500px;
        padding: 20px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;

        form {
            width: 290px;
        }
        
        input, button {
            margin-bottom: 14px;
            width: 100%;
            border: 0px;
            border-radius: 2px;
            outline: none;
            color: rgb(236, 236, 236);
        }

        input {
            display: block;
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.18);
            font-size: 15px;
            padding: 8px;
            width: 100%;

            &:first-child {
                margin-top: 15px;
            }
            
            ::placeholder {
                color: rgb(165, 165, 167);
            }
        }

        button {
            background-color: rgb(0, 113, 209);
            font-weight: bold;
            font-size: 14px;
            letter-spacing: 1px;
            color: rgb(236, 237, 241);
            border-radius: 3px;
            margin-top: 4px;
            margin-bottom: 20px;
            padding: 12px;
            cursor: pointer;

            &:hover {
                filter: brightness(120%);
            }
        }

        a {
            color: rgb(216, 216, 216);
            text-decoration: none;
            text-align: center;

            &:hover {
                color: #FFF;
            }
        }

        h2 {
            text-align: center;
        }
    }
`;