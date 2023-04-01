import { useState } from "react";
import jsPDF from 'jspdf'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Produccion() {

  const InputClass = 'text-black border-2 text-center border-blue-500 mt-2 rounded-lg'
  const [productos, setProductos] = useState([]);
  const [numeroProducto, setNumeroProducto] = useState([]);

  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [cantidades, setCantidades] = useState([])
  const [salida, setSalida] = useState("");
const [salidas, setSalidas] = useState([])
  const [msj, setMsj] = useState("");

  const data = {
    labels: productos,
    datasets: [
      {
        label: "Productos",
        backgroundColor: "gray",
        borderWith: 2,
        hoverBackgroundColor: "white",
        data: numeroProducto,
      },
    ],
  };

  const opciones = {
    responsive: true,
  };


  const pdfGenerator  = () =>{ 
    var doc = new jsPDF();

    doc.setFont('Courier-Bold');
    doc.text(10,30,'Productos:')

    let l = 40
    for (let i = 0; i < productos.length; i++) {
      doc.text(10,l,`${productos[i]}  | CANTIDAD: ${cantidades[i]}  | SALIDA: ${salidas[i]}`)
      l=l+10
    }
    doc.save('productosEnProduccion.pdf');
  }



  const guardaNombre = (e) => {
    setProducto(e.target.value);
  };
  const guardaValor = (e) => {
    setCantidad(e.target.value);
  };

  const guardaCedula = (e) => {
    setSalida(e.target.value);
  };

  const registrarDatos = (e) => {
    const obj = {
      producto,
      numeroProducto: 1,
      cantidad,
      salida
    };
   
    if (!productos.includes(obj.producto)) {

      salidas.push(obj.salida)
      cantidades.push(obj.cantidad)
       productos.push(obj.producto)
      numeroProducto.push(obj.numeroProducto)
      setMsj(
        `El producto ${producto} con la cantidad ${cantidad} se ha comenzado a producir y terminara ${salida}`
      );
      setTimeout(() => {
        setMsj("");
      }, 4000);

    } else {
      data.datasets[0].data[productos.indexOf(obj.producto)]++
    }

   
  };

  return (
    <div className=" text-black h-full">
      <h1 className="text-4xl text-center pt-5 pb-6">
        Productos en Produccion
      </h1>
      <button onClick={pdfGenerator} className="my-4 ml-6 p-4 bg-gray-200 text-black text-xl rounded-md">
        Generar Reporte en PDF
      </button>
      <div className="flex justify-center mt-10">
        <label className="text-3xl m-6 h-24 text-center flex flex-col">
          Producto a producir:
          <input
            className={InputClass}
            type="text"
            name="nombreProducto"
            onChange={guardaNombre}
          />
        </label>

        <label className="text-3xl m-6 text-center flex flex-col">
          Cantidad:
          <input
            className={InputClass}
            type="text"
            name="valor"
            onChange={guardaValor}
          />
        </label>

        <label className="text-3xl m-6 text-center flex flex-col">
          Salida:
          <input
            className={InputClass}
            type="text"
            name="cedula"
            onChange={guardaCedula}
          />
        </label>
      </div>
      <div className="flex justify-center">
        <button
          onClick={registrarDatos}
          className="border-2 border-blue-400 w-52 h-24 text-2xl rounded-md text-black mt-12"
        >
          Producir{" "}
        </button>
      </div>
      <h1 className="text-center m-5 text-xl mt-20 mb-20">{msj}</h1>
  <div className="m-60">
  <Bar data={data} options={opciones} />
  </div>
    </div>
  );
}

export default Produccion;
