import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 65px;
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    
    h1 {
        margin-left: 20px;
    }

    nav {
        margin-right: 20px;
        height: 100%;
        display: flex;

        a {
            height: 100%;
            padding-right: 25px;
            padding-left: 25px;
            text-decoration: none;
            color: rgb(236, 237, 241);
            display: flex;
            align-items: center;

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }
`;