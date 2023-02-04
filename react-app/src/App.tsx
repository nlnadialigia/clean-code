import {useEffect, useState} from 'react';
import {Footer} from './components/Footer';
import Header from './components/Header';
import * as Input from './components/Input';

function App() {
  const [todos, setTodos] = useState<string[]>([])

  useEffect(() => {
    // carregar uma lista de to dos do back-end
  }, [])

  function handleCreateNewTodo() {}

  const isTodoListEmpty = todos.length === 0

  return (
    <div>
      <Header onCreateNewTodo={() => {}} />

      <Input.Root>
        <Input.Label htmlFor='name' id='name' />
        <Input.FormField />
        <Input.Icon><span /></Input.Icon>
        <Input.ErrorMessage message='Digite seu nome corretamente' />
        <Input.Icon><span /></Input.Icon>
      </Input.Root>

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

        {isTodoListEmpty && (
          <div>Nenhum <strong>to do </strong>cadastrado.</div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
