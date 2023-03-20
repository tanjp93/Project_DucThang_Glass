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
                        <p className='Footer-content-maps'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.2383018660482!2d105.6636844248528!3d19.97856159543774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f3dfb4cb1f03%3A0xa3fee948e64e6ea!2sTan%20Nhat%20Minh%20Glass!5e1!3m2!1svi!2s!4v1679296150328!5m2!1svi!2s" style={{width:"600" ,height:"450"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </p>
                    </div>
                    <div className='Footer-map'></div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Footer;
