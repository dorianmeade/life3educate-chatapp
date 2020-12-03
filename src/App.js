import React, {useEffect, useContext} from 'react'

import './App.css';
import {globalContext} from './state/GlobalState'
import Header from './components/Header'
import Input from './components/Input'
import Message from './components/Message'

import {sendMsg} from './util/api'

function App() {
  const {state, dispatch} = useContext(globalContext)

  console.log(state.message_queue)

  useEffect(async () => {
    if (state.message_queue.length === 0)
    {
      let data = await sendMsg(null);
      dispatch({type: 'enqueue_message', payload: {text: data, name:'bot'}})
    }

}, [state.message_queue]);

  return (
    <div className="App">
      <Header/>
      <hr style={{height:2, border: 'none', color: "dimgray", backgroundColor:"dimgray"}}/>
      

      <div style={{height: 670}}>
      {state.message_queue.map((msg) => {
        return ( 
          <Message 
            msg={msg}
            alt= {msg.name !== "bot"}
            style={{position: 'absolute'}}
          />
        )
      })}
      </div>
      <div id="bottom"/>
      <hr style={{height:2, border: 'none', color: "dimgray", backgroundColor:"dimgray"}}/>

      <Input/>
    </div>
  );
}

export default App;
