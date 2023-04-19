import React from 'react'
import NavBar from '../Components/ui/NavBar'
import { Routes, Route } from 'react-router-dom'
import TipoEquipoView from '../Components/tipoEquipo/TipoEquipoView'
import EstadoView from '../Components/estado/EstadoView'
import MarcaView from '../Components/marca/MarcaView'
import UsuarioView from '../Components/usuario/UsuarioView'
import InventarioView from '../Components/inventario/InventarioView.js'
import NotFound from '../Components/ui/NotFound'

export default function AppRouter() {
  return (
    <div>
        <NavBar title={'IUD'}/>
        <main className='container'>
            <Routes >
                <Route path='/' element={<TipoEquipoView />} />
                <Route path='/EstadoEquipo' element={<EstadoView />} />
                <Route path='/MarcaEquipo' element={<MarcaView />} />
                <Route path='/Usuarios' element={<UsuarioView />} />
                <Route path='/Inventarios' element={<InventarioView />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    </div>
  )
}
