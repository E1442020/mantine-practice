import styled from "styled-components";

export const AccessComponent=styled.div`
background-color: #6d6875;

`
export const AccessContainer = styled.div`
 width: 90%;
 margin: 0 auto;
 padding: 60px 0px;
 display: flex;
 justify-content: space-between;
 @media(max-width: 940px) {
        flex-direction: column;
        gap:30px;

  }

`
export const AccessContent = styled.div`
width: 40%;
display: flex;
flex-direction: column;
gap: 15px;
@media(max-width: 940px) {
       width: 100%;

  }
h2{
    color: white;
}
p{
    color: #c8b6ff;
}

`

export const AccessInput=styled.div`
width:40%;
display: flex;
flex-direction: column;
gap:15px;
@media(max-width: 940px) {
       width: 100%;

  }
input{
    width: 80%;
    padding:10px
}
button{
    width:50%;
    color: white;
    border:1px solid white;
}

`