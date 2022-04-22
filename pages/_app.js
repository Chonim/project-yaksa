import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css'
import Header from 'components/common/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import styled from '@emotion/styled';
import { useRouter } from 'next/router';


const theme = createTheme({
  palette: {
    // mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const isLoginPage = router.asPath === '/login'
  return (
    <ThemeProvider theme={theme}>
      {!isLoginPage && <Header />}
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  )
}

const Main = styled.main`
  padding: 1rem;
`

export default MyApp
