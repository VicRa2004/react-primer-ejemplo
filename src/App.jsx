import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm'

const App = () => {

  return (
    <main className='bg-zinc-900 h-screen p-10'>
      <div className='container mx-auto'>
        <h1 className="text-white text-5xl font-bold text-center my-8" >App de tareas</h1>
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  )
}

export default App