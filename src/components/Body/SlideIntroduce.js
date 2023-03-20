import { Carousel } from 'antd';
import React from 'react';
import slideImg1 from '../../assets/img/nhakinh-slide1.jpg'
import slideImg2 from '../../assets/img/nhakinh-slide2.jpg'
import slideImg3 from '../../assets/img/nhakinh-slide3.jpg'
import slideImg4 from '../../assets/img/nhakinh-slide4.jpg'
import slideImg5 from '../../assets/img/nhakinh-slide5.jpg'
import slideImg6 from '../../assets/img/nhakinh-slide6.jpg'
import slideImg7 from '../../assets/img/nhakinh-slide7.jpg'


const SlideIntroduce = () => {
    return (
        <div className='SlideIntroduce'>
            <Carousel autoplay >
                <div className='SlideIntroduce-Img'>
                        <img src={slideImg1} alt="" />
                </div>
                <div className='SlideIntroduce-Img'>
                        <img src={slideImg4} alt="" />
                </div>
                <div className='SlideIntroduce-Img'>
                    <img src={slideImg5} alt="" />
                </div>
                <div className='SlideIntroduce-Img'>
                        <img src={slideImg4} alt="" />
                </div>
            </Carousel>
        </div>
    );
}

export default SlideIntroduce;
