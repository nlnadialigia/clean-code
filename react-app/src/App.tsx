import { useEffect, useState } from 'react'
import {Footer} from './components/Footer';
import Header from './components/Header';

function App() {
  const [todos, setTodos] = useState<string[]>([])

  useEffect(() => {}, [])

  return (
    <div>
      <Header onCreateNewTodo={() => {}} />

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
      </main>

      <Footer />
    </div>
  )
}

export default App
