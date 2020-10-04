import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import {TodoProvider} from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <TodoProvider>
        <GlobalStyle>
        </GlobalStyle>
        <TodoTemplate>
            <TodoHead />
            <TodoList />
            <TodoCreate />
        </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
