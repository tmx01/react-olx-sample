import styled from 'styled-components';

export const Item = styled.div`
  button{
    display:block;
    border:1px solid #FFF;
    margin:10px;
    text-decoration:none;
    padding:10px;
    border-radius:5px;
    color:#000;
    background-color: #FFF;
    transition:all ease .3s;


    &:hover {
      background-color:#EEE;
      border:1px solid #CCC;
    }

    .itemImage img {
      width:100%;
      border-radius:5px;
    }

    .itemName {
      font-weight:bold;
    }
  }
`;