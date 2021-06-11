import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Questions from './components/Questions'
import {useState,useReducer} from 'react';
import MainPage from './components/MainPage'
import AddQuestions from './components/AddQuestions'
import {ContextProvider} from './components/ContextProvider';
import {QuizStateProvider} from './components/ContextProvider';
import Choices from './components/Choices';

function App(){ 

  function reducer(components,action){
    switch (action.type) {
      case "question":{
        return action.value;
      }
      case "choice":{
        return action.value;
      }
      case "mainpage":{
        return action.value;
      }
      
      default:
        return null;
    }
  }
  function reducer1(QuizState,action){
    switch (action.type) {
      case "title":{
        return [...QuizState, action.value];
      }
      case "points":{
        return [...QuizState, action.value];
      }
      case "time":{
        return [...QuizState, action.value];
      }
      case "deadline":{
        return [...QuizState, action.value];
      }
      
      default:
        return null;
    }
  }
const [components, dispatch] = useReducer(reducer, 0)
const [QuizState, dispatchs] = useReducer(reducer1, [])
return (
  
<div className="container">
<ContextProvider.Provider value={{components,dispatch}}>

<QuizStateProvider.Provider value={{QuizState,dispatchs}}>
{(() => {
  switch (components) {
    case 0:
      return <MainPage />;
    case 1:
      return <AddQuestions/>;
      case 2:
      return <Choices/>;
    default:
      return null;
  }
})()}
</QuizStateProvider.Provider>
</ContextProvider.Provider>
</div>
);

}
export default App;
