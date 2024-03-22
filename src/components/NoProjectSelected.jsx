import noProjectimg from '../assets/no-projects.png'
import Button from './Button.jsx'

export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectimg} alt="Lista de tareas vacia" className='size-16 object-contain mx-auto'/>
      <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>Ningún Proyecto seleccionado</h2>
      <p className='text-stone-400 mb-4'>Selecciona un Proyecto o crea uno nuevo</p>
      <p className='mt-8'>
        <Button onClick={onStartAddProject}>
          Nuevo Proyecto
        </Button>
      </p>
    </div>
  )
}
