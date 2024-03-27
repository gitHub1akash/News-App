import React, { Component } from 'react'
import loading from '../loading.gif'

export default class Load extends Component {
  render() {
    return (
      <div style={{display:'flex',
        justifyContent : 'center'
        }}>
        <img src={loading} alt="loading..." />
      </div>
    )
  }
}
