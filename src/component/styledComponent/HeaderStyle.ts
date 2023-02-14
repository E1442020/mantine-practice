import styled from 'styled-components';


export const HeaderContainer =styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 60px;
  @media(max-width: 940px) {
        flex-direction: column;
        gap:30px;

  }
`
export const HeaderContent=styled.div`
 display: flex;
 flex-direction: column;
 gap: 15px;
 width:40%;
 @media(max-width: 940px) {
        width: 100%;

  }
h2{
  line-height:37px;
  text-transform: capitalize;
}
 p{
  color: gray;
 }
 form{
  display: flex;
  gap: 20px;
  
  input{
    padding: 9px 18px;
    width:60%;
  }
  button{
    width:40%;
    

  }
 }
 
 

`
export const HeaderImg=styled.div`
 width:50%;
height:350px;
aspect-ratio: 1/1;
@media(max-width: 940px) {
        width: 100%;

  }

img{
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border: none;
  border-radius: 7px;
}
`

