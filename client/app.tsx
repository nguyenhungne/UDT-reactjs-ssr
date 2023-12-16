import React from "react";
import HomePage from "./pages/HomePage";
import './styles/app.scss';
import { Route, Routes, Router } from "react-router-dom";
import Calculator from "./pages/CalculatorPage";
import HistoryPage from "./pages/HistoryPage";
import { MobXProviderContext, Provider } from 'mobx-react'
import { RootStore } from './stores/rootStore'

const rootStore = new RootStore();

function App() {
  return (
    <Provider {...rootStore}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
    </Provider>
  );
}

export default App;
