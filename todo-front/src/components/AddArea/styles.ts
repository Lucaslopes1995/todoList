import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius:15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    form{
        width:100%;
        display: flex;
        justify-content: space-between
    }

    button {
        margin-right: 5px;
    }
    label{
        width: 90%;
    }

    input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: #fff;
        font-size: 18px;
        flex: 1;
        width: 100%;
    }


;`;