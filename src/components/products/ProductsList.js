import React from 'react';
import { useSelector } from 'react-redux';
import productImg1 from '../../assets/productImg/kinhCuongLuc.jpg'
import productImg2 from '../../assets/productImg/kinhDanAnToan.jpg'
import productImg3 from '../../assets/productImg/kinhHop.PNG'
import productImg4 from '../../assets/productImg/kinhLowE.jpg'
import productImg5 from '../../assets/productImg/kinhMau.jpg'
import productImg6 from '../../assets/productImg/kinhPhunCat.jpg'

const ProductsList = () => {
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
            productImgSrc: productImg5
        },
        {
            id: 6,
            productName: "Kính Phun Cát",
            productImgSrc: productImg6
        }
    ];

    return (
        <div className='ProductList'>
            
        </div>
    );
}

export default ProductsList;
