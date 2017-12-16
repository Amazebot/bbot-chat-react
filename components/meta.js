import Head from 'next/head'
import normalize from 'normalize.css'
export default () => (
  <div>
    <Head>
      <title>bBot React web chat</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charset='utf-8' />
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' />
    </Head>
    <style global jsx>{normalize}</style>
    <style global jsx>{`
      html, body {
        height: 100%;
      }
      body {
        margin: 0;
        padding: 0;
        color: #21232B;
        background-image: linear-gradient(150deg, #97ABFF -10%, #123597 100%);
        font-family: 'Roboto', sans-serif;
      }
    `}</style>
  </div>
)
