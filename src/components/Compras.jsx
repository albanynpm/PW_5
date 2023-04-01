import React, { useState, PureComponent } from 'react'

import jsPDF from 'jspdf'

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

import {Bar} from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function Compras() {

  const InputClass = 'text-black border-2 text-center border-blue-500 mt-2 rounded-lg'

  const pdfGenerator  = () =>{ 
    var doc = new jsPDF();
    doc.text(10,30,'COMPRAS REALIZADAS:')
    

    let l = 40
    for (let i = 0; i < productos.length; i++) {
      doc.text(10,l,`${productos[i]} - Cantidad: ${numeroProducto[i]}`)
      l=l+10
    }
    
    
    doc.save('comprasRealizadas.pdf');
  }


  const [nombreProducto, setNombreProducto] = useState("")
  const [valor, setValor] = useState('')
  const [nombreCliente, setNombreCliente] = useState('')
  const [cedulaCliente, setCedulaCliente] = useState('')
  const [compras, setCompras] = useState([])
  const [mensaje, setMensaje] = useState("")
  const [productos, setProductos] = useState([])
  const [numeroProducto, setNumeroProducto] = useState([])

  const data ={
    labels:productos,
    datasets:[{
      label:'Productos',
      backgroundColor:'#07687E',
      borderWith:2,
      hoverBackgroundColor:'#0397B9',
      data: numeroProducto
    }]
  };


  const opciones = {
    responsive:true
  }

  const guardaNombre = (e)=>{
    setNombreProducto(e.target.value)
   }
   const guardaValor = (e)=>{
    setValor(e.target.value)
   }

   const guardaCliente = (e)=>{
    setNombreCliente(e.target.value)
   }

   const guardaCedula = (e)=>{
    setCedulaCliente(e.target.value)
   }


   const registrarDatos = (e) =>{ 


    const obj = { 
      nombreProducto,
      valor,
      nombreCliente,
      cedulaCliente,
      numeroProducto:1
    }



    



   if(!productos.includes(obj.nombreProducto)) { 
    // NO HAY CONCIDENCIA 
    productos.push(obj.nombreProducto)
    compras.push(obj)
    numeroProducto.push(obj.numeroProducto)

    
    setMensaje(`HAS REGISTRADO TU COMPRA CON EXITO.  
    NOMBRE DEL PRODUCTO: ${obj.nombreProducto}
    VALOR: ${obj.valor} 
    CLIENTE: ${obj.nombreCliente} 
    CEDULA: ${obj.cedulaCliente} 
    Es la compra registrada N*${compras.length}`)
    
     setTimeout(() => {
       setMensaje("")
     }, 6000);
 
     
 
   } else { 
    // SI HAY CONCIDENCIA
data.datasets[0].data[productos.indexOf(obj.nombreProducto)]++
   }
}


  return (
    <div className=' text-black h-full text-center mb-8'>
    <h1 className='text-4xl text-center pt-5 pb-6 uppercase'>Compras</h1>
  <button onClick={pdfGenerator} className='mt-4 p-4 bg-gray-200 text-black text-xl rounded-md'>Generar Reporte</button>
  <div className='flex justify-center mt-10'>
  <label className='text-2xl flex flex-col m-5 text-center'>
    Producto:  
    <input className={InputClass} type="text" name="nombreProducto" onChange={guardaNombre}/>
  </label>

  <label className='text-2xl flex flex-col m-5 text-center'>
    Precio($):  
    <input className={InputClass} type="text" name="valor" onChange={guardaValor}/>
  </label>

  <label className='text-2xl flex flex-col m-5 text-center'>
     Cliente:
    <input className={InputClass} type="text" name="cliente" onChange={guardaCliente}/>
  </label>

  <label className='text-2xl flex flex-col m-5 text-center'>
     Cedula:
    <input className={InputClass} type="text" name="cedula" onChange={guardaCedula}/>
  </label>
  

  </div>
  <div className='flex justify-center'>
  <button onClick={registrarDatos} className={InputClass} >Registrar</button>
  </div>
  
  <div className='flex justify-center mt-28 text-xl'>
    <h2 className="ml-20 mr-20">{mensaje}</h2>

    
  </div>

<hr />

<h2 className='text-2xl mt-5' align='center'>Productos mas pedidos</h2>

  <Bar data={data} options={opciones}/>
    </div>
  )
}

export default Compras