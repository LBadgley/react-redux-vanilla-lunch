import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

render (
  <createStore />,
  document.getElementById('root')
);
