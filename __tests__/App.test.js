import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { RootStore } from './stores/rootStore'
import App from './App';

test('renders home page', () => {
  const rootStore = new RootStore();
  const history = createMemoryHistory()
  render(
    <Provider {...rootStore}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

test('navigates to calculator page', () => {
  const rootStore = new RootStore();
  const history = createMemoryHistory()
  history.push('/calculator')
  render(
    <Provider {...rootStore}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/calculator page/i)).toBeInTheDocument();
});

test('navigates to history page', () => {
  const rootStore = new RootStore();
  const history = createMemoryHistory()
  history.push('/history')
  render(
    <Provider {...rootStore}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/history page/i)).toBeInTheDocument();
});