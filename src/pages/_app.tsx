import { ThemeProvider } from "styled-components";
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
 
const theme = {
  colors: {
    primary: "#fafafa",
  },
};
 
function ForwardConvert({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
 
export default ForwardConvert;