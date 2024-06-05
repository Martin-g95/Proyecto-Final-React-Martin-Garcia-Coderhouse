
import './App.css'
import ItemListContainer from './components/StoreView/ItemListContainer'
import ItemSingleDetail from './components/StoreView/ItemSingleDetail'
import ItemCategoryContainer from './components/StoreView/ItemCategoryContainer'
import NavBar from './components/navigation/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/cart/Cart'

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/itemListContainer/:category" element={<ItemCategoryContainer/>} />
          <Route exact path="/item/:id" element={<ItemSingleDetail />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
