import React from 'react';
import TanNhatMinhGeneral from './TanNhatMinhGeneral';

const CompanyInfor = () => {
    return (
        <div className='companyInfor-container'>
            <div className='companyInfor-titles' >
                <ul className='companyInfor-changePages'>
                    <li className='companyInfor-changePage'>Trang Chủ</li>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                    </svg></span>
                    <li className='companyInfor-changePage'>Tổng Quan Kính về Tân Nhật Minh</li>
                </ul>
                <div className='companyInfor-title'>
                    <p>Tiên phong sản xuất </p>
                    <p>Kính An Toàn hàng đầu Việt Nam </p>
                </div>
                <div className='companyInfor-title-items' >
                    <p>Tổng Quan Về Chúng Tôi </p>
                    <p>Thông Tin công ty</p>
                    <p>Hồ Sơ Năng Lực</p>
                    <p>Chuyển Giao Công Nghệ</p>
                </div>
            </div>
            <div className='companyInfor-detail'>
                <div className='companyInfor-showDetail'>
                    <TanNhatMinhGeneral/>
                </div>
            </div>
        </div>
    );
}

export default CompanyInfor;
