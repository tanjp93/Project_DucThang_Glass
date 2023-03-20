import React from 'react';
import imgLogo from '../../assets/img/logo.PNG'
import imgIso1 from '../../assets/iso/iso-moi-truong.png'
import imgIso2 from '../../assets/iso/img-bottom.png'
import imgIso3 from '../../assets/iso/dathongbao-1572850007.png'
const Footer = () => {
    return (
     <div className='Footer'>
            <hr />
            <div className='Footer-logo'>
                <img src={imgLogo} alt="" />
            </div>
            <div className='Footer-contents'>
                <div className='Footer-content'>
                    <div className='Footer-content-Title'>
                        <p>Tân Nhật Minh Glass</p>
                    </div>
                    <div className='Footer-content-policy'>
                        <p>Tổng đài chăm sóc : 0921881333</p>
                        <p>Email : tannhatminhglass@gmail.com</p>
                        <p>Trụ sở công ty: Cụm công nghiệp phía Bắc, Thị Trấn Quán Lào , Huyện Yên Định, tỉnh Thanh Hóa</p>
                    </div>
                    <div className='Footer-Img'>
                        <img src={imgIso1} alt="" />
                        <img src={imgIso2} alt="" />
                        <img src={imgIso3} alt="" />
                    </div>
                </div>
                <div className='Footer-content'>
                    <div className='Footer-content-Title'>
                        <p>Chính sách và quy định</p>
                    </div>
                    <div className='Footer-content-policy'>
                    <p>Thông Tin</p>
                        <p>Giới Thiệu</p>
                        <p>Hình thức thanh toán</p>
                        <p>Chính sách vận chuyển</p>
                        <p>Chăm sóc khách hàng</p>
                        <p>Chính sách đổi trả</p>
                        <p>Quy chế hoạt động</p>
                        <p>Chính sách
và quy định chung</p>
                        <p>Chính sách bảo mật thông tin</p>
                    </div>
                </div>
                <div className='Footer-content'>
                    <div className='Footer-content-Title'>
                        <p>Về Chúng Tôi</p>
                    </div>
                    <div className='Footer-content-policy'>
                        <p>Hồ sơ năng lực</p>
                        <p>Báo giá</p>
                        <p>Sản Phẩm</p>
                        <p>Hướng dẫn mua hàng</p>
                        <p>Chính sách bảo mật thông tin</p>
                        <p>Liên Hệ</p>
                        <p>Tin tức</p>
                        <p>Liên hệ</p>
                    </div>
                </div>
                <div className='Footer-content'>
                    <div className='Footer-content-Title'>
                        <p>Trụ sở công ty</p>
                    </div>
                    <div className='Footer-map'></div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Footer;
