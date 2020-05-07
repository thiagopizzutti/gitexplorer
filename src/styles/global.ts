import { createGlobalStyle } from 'styled-components';
// import githubBackground from '../assets/github-background.svg';
export default createGlobalStyle`
*{
  margin: 0;
  padding:0;
  outline: 0;
  box-sizing: border-box
}

body{

  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font:16px Roboto, sans-serif
}

#root{
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button{
  cursor: pointer;
}

`;
