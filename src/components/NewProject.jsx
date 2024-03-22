import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal"

export default function NewProject({onAdd, onCancel}) {

  const modal = useRef()
  const tituloRef = useRef()
  const descripcionRef = useRef()
  const fechalimiteRef = useRef()

  function handleSave() {
    const entradaTitulo = tituloRef.current.value
    const entradaDescripcion = descripcionRef.current.value 
    const entradaFecha = fechalimiteRef.current.value 
    
    if(entradaTitulo.trim() === '' ||
      entradaDescripcion.trim() === '' ||
      entradaFecha.trim() === ''){
        modal.current.open()
        return
    }
    onAdd({
      titulo: entradaTitulo,
      descripcion: entradaDescripcion,
      fecha: entradaFecha
    })
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Volver">
      <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>Entrada no válida</h2>
      <p className='text-stone-400 mb-4'>Oops... parece que no escribiste nada</p>
      <p className='text-stone-400 mb-4'>Porfavor asegurate de escribir una entrada válida</p>
    </Modal>
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-stone-700 hover:text-stone-950"
        onClick={onCancel}
        >Cancela</button></li>
        <li><button className="px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950"
        onClick={handleSave}
        >Guarda</button></li>
      </menu>
      <div>
        <Input text="text" ref={tituloRef} label='Título' />
        <Input ref={descripcionRef} label='Descripción' textarea />
        <Input type="date" ref={fechalimiteRef} label='Fecha límite' />   
      </div>
    </div>
    </>
  )
}
