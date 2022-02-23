import Todo from './components/Todo.js';

function App() {
  return( 
    <div>
      <h1>My Todo</h1>
      <div>
      <Todo text='Learn React'/>
      </div>
      <div>
      <Todo text='Master React' />  
      </div>

    </div>
  );
}

export default App;
