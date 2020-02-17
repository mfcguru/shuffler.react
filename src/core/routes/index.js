import React from 'react'
import Shuffle from '../../features/shuffle'
import About from '../../features/about'

const apiAction = {
  action: 'api'
}

const socketAction = {
  action: 'socket'
}

export const routes = {
  '/': () => <Shuffle />,
  '/api': () => <Shuffle action = {'api'} />,
  '/socket': () => <Shuffle action = {'socket'} />,
  '/about': () => <About />
}