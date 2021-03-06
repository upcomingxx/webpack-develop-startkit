import React from 'react'
import PropTypes from 'prop-types'
import Recharts from './ReCharts'

const Charts = (props) => {
  return (
    <div style={{ height:'100%', position:'relative' }}>{props.children}</div>
  )
}

Charts.propTypes = {
  children: PropTypes.object.isRequired
}

export default (store) => ({
  path: 'charts',
  component: Charts,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/')
  },
  childRoutes: [
    Recharts(store)
  ]
})
