import "../css/index.css";

require("typeface-inter");

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp;
