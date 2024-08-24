import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Todo from './Todo'
import Product from './Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Todo/> */}
    <Product />
  </StrictMode>,
)
