
import Body from './components/Body/Body';
import Header from './components/Home-component/Header';
import Footer from './components/Footer-components/Footer';
import productImg1 from './assets/productImg/kinhCuongLuc.jpg';
import productImg2 from './assets/productImg/kinhDanAnToan.jpg';
import productImg3 from './assets/productImg/kinhHop.PNG';
import productImg4 from './assets/productImg/kinhLowE.jpg';
import productImg5 from './assets/productImg/kinhMau.jpg';
import productImg6 from './assets/productImg/kinhPhunCat.jpg';
import { Route, Routes } from 'react-router-dom';
import CompanyInfor from './components/companyInfo/CompanyInfor';
import ProductsList from './components/products/ProductsList';

export default function App() {
  const listProducts = [
    {
        id: 1,
        productName: "Kính Cường Lực",
        productImgSrc: productImg1
    },
    {
        id: 2,
        productName: "Kính Dán An Toàn",
        productImgSrc: productImg2
    },
    {
        id: 3,
        productName: "Kính Hộp",
        productImgSrc: productImg3
    }, {
        id: 4,
        productName: "Kính Màu Trang Trí",
        productImgSrc: productImg4
    },
    {
        id: 5,
        productName: "Kính Low E",
        productImgSrc:productImg5
    },
    {
        id: 6,
        productName: "Kính Phun Cát",
        productImgSrc:productImg6
    }
];
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
