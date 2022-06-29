import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';

class App extends Component{
  render(){

    const name = 'react';

    const style = {

      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <Fragment>
        <div style={style}>
          Hello {name}!
        </div>
        <div className='App'>
          Bye
        </div>
        {/* 주석은 이렇게 */}
        <div>
          {
            1+1===2?(<div>맞아요!</div>):(<div>틀려요!</div>)
          }
        </div>
        <div>
          {
            1+1===2 && (<div>맞아요! 이것은 && 연사자입니다.</div>)
          }
        </div>
      </Fragment>
    )
  }
}

export default App;
