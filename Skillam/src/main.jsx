import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'

import Layout from './Componets/Layout/Layout.jsx'
import Home from './Componets/Home/Home.jsx'
import AboutUs from './Componets/About/AboutUs.jsx'
import English from './Componets/English/English.jsx'
import Aviation from './Componets/Aviation/Aviation.jsx'
import Computer from './Componets/Computer/Computer.jsx'


const router = createBrowserRouter(
createRoutesFromElements(
<Route path='/' element={<Layout/>}>
<Route path='' element={<Home/>}/>
<Route path='/About-Us' element={<AboutUs/>}/>
<Route path='/English' element={<English/>}/>
<Route path='/Aviation' element={<Aviation/>}/>
<Route path='/Computer' element={<Computer/>}/>

</Route>

)

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)
