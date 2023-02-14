import styled from 'styled-components';

export const NavbarContainer=styled.div`
/* @mixin breakpoints($point){
    @if $point==mobile{
        @media (max-width:940px) {
            @content;
        }}} */

        background-color: #f5f8fdcf;
    padding: 10px 0px;
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    `
    /* @include breakpoints(mobile){
    flex-direction: column;
    } */
    export const NavbarContent=styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    gap:20px;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 940px) {
        flex-direction: column;

  }
   

    .logo-container{
        
        display: flex;
        align-items: center;
        /* @include breakpoints(mobile){
            width: 100%;
justify-content: space-between;} */
@media(max-width: 940px) {
    width: 100%;
justify-content: space-between;

  }
  .logo-content{
    width:50px;
  }
  .menu-icon{
            display: none;
            /* @include breakpoints(mobile){
                display: block;
                color: $mainColor;
                cursor: pointer;
            } */
            @media(max-width: 940px) {
                display: block;
                color: #be4bdb;
                cursor: pointer;

  }
        }

    }`

    export const List=styled.ul`
     display: flex;
            gap: 20px;
            align-items: center;
    
            @media(max-width: 940px) {
                width: 100%;
               flex-direction: column;
                transition: all .5s;
                position: absolute;
                left: -100%;
                top: 62px;
                padding:15px 0px;

  }
             li{
                &:hover{
                    color:#be4bdb;
                    cursor: pointer;
                    font-weight: 600;
                }
             }

             &.show{
           
                transition: all .5s;
                background-color: #f5f8fdcf;
                position: absolute;
                    left: 0;
                    top: 54px;
                    padding:15px 0px;
          }
                
      
`