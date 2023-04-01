import React from "react";
import jsPDF from "jspdf";

function Inventario() {

  const pdfGenerator  = () =>{ 
    var doc = new jsPDF();

    doc.setFont('Times-Bold');
    doc.text(10,30,'Inventario:')
    doc.text(10,40, 'ID  | PRODUCTO  | VALOR   |  ENTRADA  |  CANTIDAD  |')
    doc.text(10,50,'1  |  Toston  |  10.00  |  29/03  |  25  |')
    doc.text(10,60,'2  |  Cepillo  |  10.00  |  27/03  |  60  |')
    doc.text(10,70,'3  |  Pepito XXL  |  20.00  |  30/03  |  20  |')
    doc.text(10,80,'4  |  Esponja  |  12.00  |  01/04  |  60  |')
    doc.text(10,90,'5  |  Palas  |  80.00  |  03/04  |  20  |')
    doc.text(10,100,'6  |  Hipoclorito  |  20.00  |  06/04  |  200  |')
    doc.text(10,110,'7  |  Harina  |  5.00  |  08/04  |  200  |')
    doc.text(10,120,'8  |  Atomizador limpieza  |  49.00  |  10/04  |  60  |')
    doc.text(10,130,'9  |  Cepillo de lavar  |  4.50  |  15/04  |  850 |')
    doc.text(10,140,'10  |  Pan de jamon  |  12.00  |  20/04  |  30  |')


    doc.save('inventario.pdf');
  }

  return (
    <div className="text-black h-full">
      <h1 className="text-4xl text-center pt-5 pb-6">Inventario</h1>
      <button onClick={pdfGenerator} className="my-4 ml-6 p-2 bg-gray-200 text-black text-xl rounded-md">
        Generar Reporte en PDF
      </button>
      <div className="flex flex-col m-4">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Producto
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Valor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Entrada
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Cantidad
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Toston
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      10.00
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p
                        className="text-black"
                        
                      >
                        29/03
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p className="text-black">
                        25
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      2
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Cepillo
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      10.00
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p
                        className="text-black"
                        
                      >
                        27/03
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p className="text-black" >
                        60
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      3
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Pepito XXL
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      20.00
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p
                        className="text-black"
              
                      >
                        30/03
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p className="text-black">
                        20
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      4
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Esponja
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      12.00
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p
                        className="text-black"
                        
                      >
                        01/04
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p className="text-black">
                        60
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      5
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Palas
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      80.00
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p
                        className="text-black"
                        
                      >
                        03/04
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p className="text-black">
                        12
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      6
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Hipoclorito
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      20.00
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p
                        className="text-black"
                        
                      >
                        06/04
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p className="text-black">
                        600
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      7
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Harina
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      5.00
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p
                        className="text-black"
                        
                      >
                        08/04
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p className="text-black">
                        200
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      8
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Atomizador Limpieza
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      49.00
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p
                        className="text-black"
                        
                      >
                        10/04
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p className="text-black">
                        60
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      9
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Cepillo de Lavar
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      4.50
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p
                        className="text-black"
                        
                      >
                        15/04
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p className="text-black">
                        850
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      10
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Pan de jamon
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      12.00
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p
                        className="text-black"
                        
                      >
                        20/04
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <p className="text-black">
                        30
                      </p>
                    </td>
                  </tr>
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default Inventario;
