import {useEffect, useState} from 'react';
import {Footer} from '../components/Footer';
import Header from '../components/Header';
import {Input} from './Input';

function App() {
  const [todos, setTodos] = useState<string[]>([])

  useEffect(() => {
    // carregar uma lista de to dos do back-end
  }, [])

  

  function handleCreateNewTodo() {}

  return (
    <div>
      <Header onCreateNewTodo={() => {}} />

      <Input 
        label="Nome"
        errorMessage='Digite seu nome corretamente'
        icon={<div />}
      />

      <main>
        <h2>Advantages</h2>

        <section>
          <div>
            <h3>Blazing fast</h3>
            <p>This to-do list app is insanely fast.</p>
          </div>

          <div>
            <h3>No CSS</h3>
            <p>Clean and flat design with no CSS.</p>
          </div>
        </section>

        <ul>
          {todos.map(todo => <li key={todo}>{todo}</li>)}
        </ul>

        {todos.length === 0 && (
          <div>Nenhum to do a ser exibido</div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
