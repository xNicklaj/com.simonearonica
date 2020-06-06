import React, {Suspense} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {ColorSchemeProvider} from './theme.js';
import {AssetContainerProvider} from './assets.js'; 
import {DataContextProvider} from './data.js'; 
import {IndexPage} from './pages/index/index';
const Settings = React.lazy(() => import("./components/settings/settings"));
const css = require('./stylesheet.css').toString();

const wrapper = document.getElementById("root");
wrapper ? render(
<DataContextProvider>
    <ColorSchemeProvider>
        <AssetContainerProvider>
            <Suspense fallback={<></>}>
              <BrowserRouter>
                  <Route exact path="/">
                      <IndexPage />
                  </Route>
                  <Route exact path="/blog">

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
