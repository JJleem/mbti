import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;


}
li {
  list-style: none;
  color: inherit;
}
a {
  text-decoration: none ;
}
`;
export default GlobalStyle;
