/* eslint-disable no-undef */
import React, {Suspense} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {ColorSchemeProvider} from './theme.js';
import {AssetContainerProvider} from './assets.js'; 
import {DataContextProvider} from './data.js'; 
import {IndexPage} from './pages/index/index';
import {BlogPage} from './pages/blog/blog';
const Settings = React.lazy(() => import("./components/settings/settings"));
const Nav = React.lazy(() => import("./components/nav/nav"));
// eslint-disable-next-line no-unused-vars
const css = require('./stylesheet.css').toString();

const wrapper = document.getElementById("root");
wrapper ? render(
<DataContextProvider>
    <ColorSchemeProvider>
        <AssetContainerProvider>
            <Suspense fallback={<></>}>
              <Nav />
              <BrowserRouter>
                  <Route exact path="/">
                    <IndexPage />
                  </Route>
                  <Route exact path="/blog">
                    <BlogPage />
                  </Route>
              </BrowserRouter>
              <Settings />
            </Suspense>
        </AssetContainerProvider>
    </ColorSchemeProvider>
</DataContextProvider>, wrapper) : false;

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./serviceworker.js").then(
      function(registration) {
        // Registration was successful
      },
      function(err) {
        // registration failed :(
        console.warn("ServiceWorker registration failed: ", err);
      }
    );
  }
