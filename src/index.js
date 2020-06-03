import React, {useContext} from 'react';
import {render} from 'react-dom';
import {Helmet} from 'react-helmet';
import {BrowserRouter, Route} from 'react-router-dom';
import {ColorSchemeProvider} from './theme.js';
import {AssetContainerProvider, AssetContainer} from './assets.js'; 
import {IndexPage} from './pages/index/index';
const css = require('./stylesheet.css').toString();

const wrapper = document.getElementById("root");
wrapper ? render(
<ColorSchemeProvider>
    <AssetContainerProvider>
        <BrowserRouter>
            <Route exact path="/">
                <IndexPage />
            </Route>
        </BrowserRouter>
    </AssetContainerProvider>
</ColorSchemeProvider>, wrapper) : false;