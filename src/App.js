
import Body from './components/Body/Body';
import Header from './components/Home-component/Header';
import Footer from './components/Footer-components/Footer';
import { Route, Routes } from 'react-router-dom';
import CompanyInfor from './components/companyInfo/CompanyInfor';
import ProductsList from './components/products/ProductsList';

export default function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        <Header />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/company-Information' element={<CompanyInfor />} />
          <Route path='/products' element={<ProductsList />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
