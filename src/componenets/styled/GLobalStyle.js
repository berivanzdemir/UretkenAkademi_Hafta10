import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
body{
   
    margin: 0;
    padding: 0;
    background-color: ${(props)=>props.theme.colors.bodyColor};
    color:${({theme})=>theme.colors.textColor};

}
.clear-fix{
    clear: both;
}
`
