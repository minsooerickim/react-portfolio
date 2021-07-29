import React from "react";
import { Helmet } from "react-helmet";

import Home from "./home.js";

export default function IndexPage() {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Minsoo Kim | Portfolio</title>
        <meta name="description" content="Minsoo Kim is a software engineer located in Southern California." />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      </Helmet>
      <Home />
    </main>
  )
}