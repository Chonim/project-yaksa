import Head from 'next/head'
import styled from '@emotion/styled'

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main>
        List
      </main>
  
      <footer>
        Footer
      </footer>
    </Container>
  )
}

const Container = styled.div``

export default Home