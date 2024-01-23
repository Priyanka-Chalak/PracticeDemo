import React, { useState } from 'react';
import './App.css';
import { Hello } from './component/Hello';
import { Heading } from './component/Heading';
import { ChildComponent } from './component/ReactNodeType';
import { Button } from './component/Button';
import { Input } from './component/Input';
import { Container } from './component/StyleProp';
import { LoggedIn } from './component/state/useStateHook';
import Count from './component/state/useState';
import UseContextComponent from './component/state/context/useContextMainComponent';
import LoginContextProvider from './component/state/context/LoginContextProvider';
import UseRefComponent from './component/state/useRef';
import UseReducderComponent from './component/state/useReducer';
import UseLayoutEffectComponent from './component/state/useLayout';
import UseMemoComponent from './component/state/useMemo';

function App() {

  
  const personName = {
    first:'Pritvik',
    last:'Chalak'
  }

  const nameList = [
    {
    first:'Abc',
    last:'abc'
    },
    {
      first:'Xyz',
      last:'xyz'
    },
    {
      first:'Pqr',
      last:'pqr'
    }  
]

const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <Hello name='Priyanka'messageCount={20} isLoggedIn={false} fullName={personName} 
      names={nameList} status='success'/>

      <Heading>Hello User ....This is placeholder text</Heading>

      <ChildComponent>
        <Heading>This is child component type as React.ReactNode</Heading>
      </ChildComponent>

      
      {/* Event props */}

      <Button 
        handleClick={()=>console.log('Button Clicked')}
        handleClick1={(event,id) => {console.log('Click Me button is clicked ', event,id)}}/>

        {/* Input component with handleChange prop */}
        <Input
        value={inputValue}
        handleChange={(event) => {
          setInputValue(event.target.value);
          console.log(event.target.value);
        }}
      />

      {/* Style Props */}
        <Container styles={{border:'1px solid black',padding:'1rem'}} />

        {/* Hooks */}
        <LoggedIn />

    {/* Counter for useState hook */}
        <Count/>

    
        {/*
          useContext Hook 
          Providing the Context 
        */}
        <LoginContextProvider>
          <UseContextComponent/>
        </LoginContextProvider>

        {/* useRef */}
        <UseRefComponent/>

        {/* useReducer Hook */}
        <UseReducderComponent/>

        {/* useLayoutEffect */}
        <UseLayoutEffectComponent/>

        {/* useMemo Hook */}
        <UseMemoComponent/>
    </div>
  );
}

export default App;
