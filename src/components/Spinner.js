import React, { PureComponent } from 'react'
import loading from './loading.gif'
export class Spinner extends PureComponent {
  render() {
    return (
      <div className='text-center' id='spinner'>
        <img src={loading} alt='loading'></img>
      </div>
    )
  }
}

export default Spinner
