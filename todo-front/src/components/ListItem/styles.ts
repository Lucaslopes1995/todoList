import styled from 'styled-components';

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({done}: ContainerProps)=> (
    `
    display:flex;
    background-color: gray;
    margin-bottom: 10px;
    border: 1px solid #555;
    border-radius:15px;
    padding: 10px;
    margin: 20px 0;
    align-items: center;



    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label{
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
))