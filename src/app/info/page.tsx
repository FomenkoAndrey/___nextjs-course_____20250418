// import Info from '../../components/Info'

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const todos: { id: number; title: string; completed: boolean }[] = await res.json()

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="mb-4">
          <h2 className="text-lg font-semibold">Заголовок: {todo.title}</h2>
          <p className="text-gray-600">Статус: {todo.completed ? 'Завершено' : 'Не завершено'}</p>
        </li>
      ))}
    </ul>
  )
  // return <Info />
}
