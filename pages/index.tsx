import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/layout/Container'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Website</title>
        <meta name="description" content="Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1 className="">Hello World</h1>
      </Container>
    </>
  )
}

export default Home
