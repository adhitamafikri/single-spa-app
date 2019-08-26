import React from 'react'
import ReactDOM from 'react-dom'
import singleSPAReact from 'single-spa-react'
import App from './App'

function domElementGetter() {
  return document.getElementById('react')
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  domElementGetter,
})

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];
