import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyFeature = () => {
    const navigate=useNavigate()
    return (
        <div className='CompanyFeature'>
            <h1 className='CompanyFeature-title' >Về chúng tôi</h1>
            <p className='CompanyFeature-content'>Công ty TNHH Kính Đức Thắng thành lập ngày 30/05/2001 tại Yên Định Thanh Hóa, sau hơn 20 năm xây dựng, trưởng thành và phát triển đã trở thành nhà gia công kính hàng đầu tại Việt Nam với thương hiệu - Kính an toàn. 
             </p>
              <p className='CompanyFeature-contentImpress'>
             Thương hiệu được khẳng định bởi uy tín, chất lượng, tính an toàn và đặc biệt thân thiện với môi trường</p>
            <button onClick={()=>{navigate("/company-Information")}}> Xem thêm</button>
        </div>
    );
}

export default CompanyFeature;
