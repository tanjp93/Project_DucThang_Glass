import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyFeature = () => {
    const navigate = useNavigate()
    return (
        <div className='CompanyFeature'>
            <h1 className='CompanyFeature-title' >CÔNG TY TNHH THƯƠNG MẠI VÀ SẢN XUẤT ĐỨC THẮNG -
                <p>KÍNH AN TOÀN TÂN NHẬT MINH</p>
            </h1>
            <p className='CompanyFeature-content'>

                UY TÍN TẠO NÊN THƯƠNG HIỆU

            </p>
            <p className='CompanyFeature-contentImpress'>
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;  Hiện nay, Công ty TNHH Thương mại và Sản xuất Đức Thắng là đơn vị chuyên sản xuất kính cường lực,
                 kính dán hàng đầu trong khu vực Thanh Hóa. Với các sản phẩm đa dạng, chúng tôi cam kết đem lại sự trải nghiệm tốt nhất dành cho người tiêu dùng. 
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Mặt hàng kính cường lực là mặt hàng tuy mới lạ nhưng càng ngày lại có độ phổ biến cao với sự hữu dụng của nó. Kính cường lực Tân Nhật Minh mang đến một hơi thở mới, đặc tính trang trí tân tiến và những hữu dụng mà nó đem lại. Nó như làm thay đổi cách suy nghĩ và xu hướng sử dụng vật liệu xây dựng trong thiết kế và trang trí nội thất ngày nay. </p>
               </p>

            <button onClick={() => { navigate("/company-Information") }}> Xem thêm</button>
        </div>
    );
}

export default CompanyFeature;
