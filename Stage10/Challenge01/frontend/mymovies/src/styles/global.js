import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea {
  font-family: 'Roboto Slab', serif;
  outline: none;
  font-size:16px;
}

img {
  width: 100%;
}


a {
  text-decoration: none;
}

button , a , img {
  cursor: pointer;
  transition: filter 0.3s;
}

button:hover , a:hover {
  filter: brightness(0.9)
}

`
