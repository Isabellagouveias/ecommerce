import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    <h1>Hello World</h1>;
    </ThemeProvider>
  )
};