import React, { useState, useEffect } from 'react';
import productImg1 from '../../assets/productImg/kinhCuongLuc.jpg'
import productImg2 from '../../assets/productImg/kinhDanAnToan.jpg'
import productImg3 from '../../assets/productImg/kinhHop.PNG'
import productImg4 from '../../assets/productImg/kinhLowE.jpg'
import productImg5 from '../../assets/productImg/kinhMau.jpg'
import productImg6 from '../../assets/productImg/kinhPhunCat.jpg'
import { act_showListProduct } from '../reducer/actions';
import { useDispatch } from 'react-redux';

const Products = () => {
    const listProducts = [
        {
            id: 1,
            productName: "Cửa, vách, lan can kính cường lực",
            productImgSrc: productImg1
        },
        {
            id: 2,
            productName: "Kính màu ốp bếp tường, kính in tranh nghệ thuật",
            productImgSrc: productImg2
        },
        {
            id: 3,
            productName: "Cabin nhà tắm, phun cát",
            productImgSrc: productImg3
        }, {
            id: 4,
            productName: "Cabin nhà tắm, phun cát",
            productImgSrc: productImg4
        },
        {
            id: 5,
            productName: "Cabin nhà tắm, phun cát",
            productImgSrc: productImg5
        },
        {
            id: 6,
            productName: "Kính Phun Cát",
            productImgSrc: productImg6
        }
    ];
    const dispatch = useDispatch();
    const [showImg, setImg] = useState(listProducts[0].productImgSrc);
    // useEffect(()=>{
    // },[showImg]) ;  
    //  useEffect(()=>{
    // dispatch(act_showListProduct(listProducts));
    // },[])

    const showProductImg = listProducts.map(element => {
        return <p onClick={() => {
            setImg(element.productImgSrc)
        }} key={element.id}> -  {element.productName}</p>
    })
    return (
        <div className='products-container'>
            <div className='products-list'>
                <div className='products-list-Title'> ỨNG DỤNG CỦA KÍNH CƯỜNG LỰC - SẢN PHẨM KÍNH TÂN NHẬT MINH</div>
                <p className='list-introduce'>
                    ỨNG DỤNG CỦA KÍNH CƯỜNG LỰC - SẢN PHẨM KÍNH TÂN NHẬT MINH
                </p>
                <div className='products'>
                    {showProductImg}
                </div>
            </div>
            <div className='products-Img' >
                <img src={showImg} alt="" />
            </div>
        </div>
    );
}

export default Products;
