import Tasks from "./Tasks"


export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}) {
  
  const fechaformateada = new Date(project.fecha).toLocaleDateString('en-GB', {
    year: 'numeric',
    month:'short',
    day:'numeric'
  })
  
  
  return (
    <div className="mt-16 w-2/3">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex justify-between items-center pr-10">
        <h1 className="md:text-3xl uppercase font-bold text-stone-600 mb-2">{project.titulo}</h1>
        <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">Borrar</button>
        </div>
        <p className="mb-4 text-stone-400">{fechaformateada}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.descripcion}
        </p>
      
      </header>
      <Tasks
        tasks={tasks}
        onAdd={onAddTask}
        onDelete={onDeleteTask}/>
    </div>
  )
}
