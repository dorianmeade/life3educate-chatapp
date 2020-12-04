import React, {useEffect, useContext} from 'react'

import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import { Container } from 'reactstrap';
import { ListGroup } from 'reactstrap';

import {globalContext} from './state/GlobalState'
import Header from './components/Header'
import Input from './components/Input'
import Message from './components/Message'

import {sendMsg} from './util/api'

require('dotenv').config()
const useStyles = makeStyles({
  wrapper: {
    margin: '0 auto'
  }
})


function App() {
  console.log(process.env.REACT_APP_API_URL); 

  const classes = useStyles();
  const {state, dispatch} = useContext(globalContext)

  console.log(state.message_queue)

  useEffect(async () => {
    if (state.message_queue.length === 0)
    {
      let data = await sendMsg(null);
      dispatch({type: 'enqueue_message', payload: {text: data, name:'bot'}})
    }

    document
      .querySelector('#bottom')
      .scrollIntoView({ behavior: 'smooth' });


}, [state.message_queue]);

  return (
    <Container className='App themed-container' style={{paddingBottom: 0}}>
      <Header/>
      <hr style={{height:2, border: 'none', color: "dimgray", backgroundColor:"dimgray"}}/>
      

      <Container className='themed-container' style={{height: 660, overflowY:'scroll', width: 700}}>
      {state.message_queue.map((msg, index) => {
        return ( 
          <ListGroup>
            <Message 
            msg={msg}
            key={index}
            alt= {msg.name !== "bot"}
            style={{position: 'absolute'}}
            />
          </ListGroup>
        )
      })}
      <div id='bottom'/>
      </Container> 

      <hr style={{height:2, border: 'none', color: "dimgray", backgroundColor:"dimgray"}}/>
      <Input/>
    </Container>
  );
}

export default App;
