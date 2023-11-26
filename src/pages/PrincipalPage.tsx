import React from 'react'
import './PrincipalPage.css'

import { FaListOl, FaFolderOpen } from 'react-icons/fa'
import { FaMagnifyingGlass, FaCashRegister } from 'react-icons/fa6'
import { BsFillFileSpreadsheetFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export const Principal = () => {
  const navigate = useNavigate()

  const features = [
    {
      title: 'Registro',
      icon: <BsFillFileSpreadsheetFill />,
      buttons: [
        'Registrar gasto',
        'Registrar proveedor',
        'Registrar prod/serv',
        'Registrar cliente',
        'Registrar nomina',
        'Registrar venta',
      ],
    },
    {
      title: 'Visualización',
      icon: <FaMagnifyingGlass />,
      buttons: [
        'envios',
        'Saldo de Clientes',
        'Ventas por cobrar',
        'Resultados generales',
        'estado de resultados',
      ],
    },
    {
      title: 'reportes',
      icon: <FaFolderOpen />,
      buttons: [
        'reporte de gastos',
        'reporte de ventas',
        'plan anual',
        'reporte estrategico',
        'calendario de pagos',
        'manifestos',
        'facturas de cruce',
      ],
    },
    {
      title: 'Gastos',
      icon: <FaListOl />,
      buttons: [
        'Gasto aduanal por embarque',
        'Gastos de bodega',
        'Re-pack',
        'Gastos de diésel/gasolina',
        'Labor',
        'Gastos de stickers',
        'Gastos de esquineros/flejes/pinzas/grapas',
        'Gastos de semillas',
        'Gastos de cintilla/plastico',
        'Gasto de cartón',
        'Gasto de fertilizante',
        'Gasto de químicos',
        'Gasto de renta',
        'Gastos de plástico/amarradores',
        'Gasto de madera',
        'Miscellenio',
      ],
    },
    {
      title: 'Ventas',
      icon: <FaCashRegister />,
      buttons: [
        'Ventas de sandía de bola',
        'Ventas de sandía mini',
        'Ventas de calabaza con plástico',
        'Ventas de calabaza bolonga',
        'Ventas de Kabocha USA',
        'Ventas de Kabocha  Japon',
      ],
    },
  ]

  return (
    <section>
      <div className="top">
        <p>Buen día, Sr Luis.</p>
        <p style={{ marginRight: '1rem', cursor: 'pointer' }} onClick={() => navigate('/')}>
          Cerrar sesion
        </p>
      </div>

      <div className="container">
        {features.map((feature) => {
          return (
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i
                  style={{
                    fontSize: '20px',
                    marginRight: '10px',
                  }}
                >
                  {feature?.icon}
                </i>
                <h4 style={{ fontSize: '2rem', fontWeight: '400', textTransform: 'capitalize' }}>
                  {feature.title}
                </h4>
              </div>
              <div className="card">
                {feature.buttons?.map((name) => (
                  <button className="button">
                    <span>{name}</span>
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
