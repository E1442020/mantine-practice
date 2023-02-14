import styled from "styled-components";

export const ArticleComponent=styled.div`
margin-top: 30px;
background-color: #f5f8fdcf;
`
export const ArticleContainer=styled.div`
 width:90%;
 margin: 0 auto;
 padding: 60px 0px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 @media(max-width: 940px) {
        flex-direction: column;
        gap:30px;

  }


`
export const ArticleContainerImg=styled.div`
 width: 40%;
 height: 250px;
 @media(max-width: 940px) {
        width:100%

  }
 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
    border-radius: 7px;
 }

`
export const ArticleContainerContent=styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media(max-width: 940px) {
        width:100%

  }
  p{
    color: gray;
  }
`
export const Card=styled.div`
 width:50%;
 display: flex;
 flex-direction: column;
 padding:22px;
 gap: 15px;
 background-color: white;
 box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
 @media(max-width: 940px) {
        width:100%

  }
 .person{
    display: flex;
    align-items: center;
    gap: 10px;
    width: 80%;
   
    .person-img{
        width:20%;
        img{
            width: 100%;
            object-fit: cover;
            border: none;
            border-radius: 50%;
        }
    }
    .person-content{
        width: 80%;
    }
 }
`