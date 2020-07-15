import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 14px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start; 
    width: 400px;
    border-radius: 4px;

    &.self {
        background-color: rgb(32, 170, 118);
    }
    
    &.other {
        background-color: rgb(58, 59, 73);
    }

    h1 {
        font-weight: 400;
        font-size: 24px;
    }
    
    h2 {
        font-weight: bold;
        font-size: 18px;
    }
`;