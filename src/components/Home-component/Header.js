import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/img/logo.PNG'
import Menu from './Menu';

const Header = () => {
    const navigate = useNavigate()
    const phoneIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>;
    return (
        <div className='header-container'>
            <div className='header-col3'>
                <div className='header-logo'>
                    <img onClick={() => { navigate("/") }} src={img} alt="" />
                </div>
                <div className='header-title'>
                    <p>DUC THANG CORPORATION</p>
                    <ul className='header-items'>
                        <li onClick={() => { navigate("/") }}>Trang Chủ</li>
                        <li onClick={() => { navigate("/company-Information") }} >Giới Thiệu</li>
                        <li onClick={() => { navigate("/products") }}>Sản Phẩm</li>
                        <li>Tin Tức</li>
                        <li>Dự Án</li>
                        <li>Liên Hệ </li>
                    </ul>
                </div>

                <div className='header-menu'>
                    <div className='header-supportPhoneNumber'>
                        <span> {phoneIcon}</span><p > CSKH 24/7 :<span style={{fontWeight:"bold"}}> 0921881333</span></p>
                    </div>
                    <div className='header-menu-icon'>
                        <button className="relative group">
                            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-purple-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                                    <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* <Menu/> */}
            <hr />
        </div>
    );
}

export default Header;
