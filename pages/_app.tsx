import { AppProps } from 'next/app'
import React, {useEffect} from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
//import "bootstrap/dist/js/bootstrap.bundle.min";
import '../styles/index.css'
//prismjs
import "prismjs/prism.js";
import "prismjs/themes/prism-dark.min.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
