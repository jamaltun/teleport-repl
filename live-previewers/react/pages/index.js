import React from 'react'
import PreviewedComponent from '../.dynamic/PreviewedComponent';

export default class PreviewPage extends React.Component {
  render () {
    return (
      <>
        <p>Welcome to React!</p>
        <PreviewedComponent/>
      </>
    )
  }
}