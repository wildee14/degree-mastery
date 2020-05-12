import "normalize.css/normalize.css";
import "../styles/styles.scss";
import "../styles/materialize.min.css";
import React from "React";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
