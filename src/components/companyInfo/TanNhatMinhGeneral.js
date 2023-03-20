import React from 'react';
import imgCompany from '../../assets/img/company.jpg'
import imgCeritficate1 from '../../assets/certificate/certificate1.jpg'
import imgCeritficate2 from '../../assets/certificate/certificate2.jpg'
import imgCeritficate3 from '../../assets/certificate/certificate3.jpg'
import imgCeritficate4 from '../../assets/certificate/certificate4.jpg'
import imgCeritficate5 from '../../assets/certificate/certificate5.jpg'
import imgCeritficate6 from '../../assets/certificate/certificate6.jpg'
import imgCeritficate7 from '../../assets/certificate/certificate7.jpg'
import imgCeritficate8 from '../../assets/certificate/certificate8.jpg'
import imgCeritficate9 from '../../assets/certificate/certificate9.jpg'
import imgCeritficate10 from '../../assets/certificate/certificate10.jpg'
import imgCeritficate11 from '../../assets/certificate/certificate11.jpg'


const TanNhatMinhGeneral = () => {
    return (
        <div className='tnmGeneral-container'>
            <div className='tnmGeneral-introduce'>
                <div className='tnmGeneral-title'>
                    <h1 className='tnmGeneral-nameCompany'>Tân Nhật Minh Glass</h1>
                    <p className='tnmGeneral-infor'>Tổng đài chăm sóc : 0921881333 - 0966092333 - 0984627696 </p>
                    <p className='tnmGeneral-infor tnmGeneralMarginBtm'>Email : tannhatminhglass@gmail.com</p>
                    <p className='tnmGeneral-infor'>Trụ sở công ty: Cụm công nghiệp phía Bắc, Thị Trấn Quán Lào , Huyện Yên Định, tỉnh Thanh Hóa .</p>
                    <p className='tnmGeneral-infor'>Công ty TNHH Đức Thắng thành lập ngày 30/ 05/ 2001, sau
                        hơn 20 năm xây dựng, trưởng thành và phát triển đã trở thành
                        nhà gia công kính hàng đầu tại Việt Nam với thương hiệu .</p>
                </div>
                <div className='tnmGeneral-companyImg'>
                    <img src={imgCompany} alt="" />
                </div>
            </div>
            <div className='tnmCertificateds'>
                <h1> Chứng Nhận Liên Quan </h1>
                <div className='tnmCertificated'>
                    <img src={imgCeritficate1} alt="" />
                    <img src={imgCeritficate2} alt="" />
                    <img src={imgCeritficate3} alt="" />
                    <img src={imgCeritficate4} alt="" />
                    <img src={imgCeritficate5} alt="" />
                    <img src={imgCeritficate6} alt="" />
                    <img src={imgCeritficate7} alt="" />
                    <img src={imgCeritficate8} alt="" />
                    <img src={imgCeritficate9} alt="" />
                    <img src={imgCeritficate10} alt="" />
                    <img src={imgCeritficate11} alt="" />
                </div>


            </div>
        </div>
    );
}

export default TanNhatMinhGeneral;
