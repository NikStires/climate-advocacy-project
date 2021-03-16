/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { RiskPage } from './pages/RiskPage/Loadable';
import { HelpPage } from './pages/HelpPage/Loadable';
import { EnergyPage } from './pages/EnergyPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

import { useTranslation } from 'react-i18next';

import Nav from './components/Nav';
import Footer from './components/Footer';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="Final Advocacy Project"
        defaultTitle="Final Advocacy Project"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/risk" component={RiskPage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/energy" component={EnergyPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
