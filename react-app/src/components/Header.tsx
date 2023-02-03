interface HeaderProps {
  onCreateNewTodo: () => void
}

function Header({onCreateNewTodo} : HeaderProps) {
  return (
    <header>
      <h1>My new revolutionary to-do list app!</h1>

      <button onClick={onCreateNewTodo}>Add new to-do</button>
    </header>
  )
}

export default Header
