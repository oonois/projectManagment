import NewTask from "./NewTask";


export default function Tasks({tasks, onAdd, onDelete}) {

  
  return (
    <section className="pr-8">
      <h2 className="md:text-2xl uppercase font-bold text-stone-700 mb-4">Tareas</h2>
      <NewTask 
        onAdd={onAdd} />
      {tasks.length === 0 && <p className="text-stone-800 my-4">Este proyecto no tiene tereas aún.</p>}
      {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task) => <li key={task.id} className="flex justify-between my-4">
          <span>{task.text}</span>
          <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:text-red-500">Quitar</button>
          </li> )}
        </ul>}
      
    </section>
  )
}
