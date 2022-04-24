import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'

const detail = () => {
    return (<Layout>

        <div className={styles.container}>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <h2>รายละเอียดสินค้าและราคา</h2>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
<br></br>
                โซฟารุ่น NOHARA <br></br>
            <a href="">
                <img  src="https://www.naibann.com/wp-content/uploads/2019/02/24-Japanese-minimal-wooden-furniture-items-by-woken-wood-design-21.jpg"  width="250" height="250" ></img></a>   
                <br></br>
                ขนาดความยาวรวม 175 cm ขนาดความลึกรวม 70 cm ราคา 4,990 บาท
                <br></br>
                <br></br>
                โต๊ะกลางรุ่น HOSHI <br></br>
            <a href="">
                <img  src="https://www.naibann.com/wp-content/uploads/2019/02/24-Japanese-minimal-wooden-furniture-items-by-woken-wood-design-18.jpg"  width="250" height="250" ></img></a>   
                <br></br>
                – ขนาด 80×65 สูง 35 cm ราคา 3,890
                <br></br>
                – ขนาด 80×65 สูง 35 cm ราคา 4,190
                <br></br>
                <br></br>
                โคมไฟตั้งโต๊ะ <br></br>
            <a href="">
                <img  src="https://www.ikea.com/th/th/images/products/arstid-table-lamp-nickel-plated-white__0880604_pe617345_s5.jpg?f=xl"  width="250" height="250" ></img></a>   
                <br></br>
                โคมไฟตั้งโต๊ะ, ชุบนิกเกิล/ขาว
                <br></br>
                ราคา 590 บาท
                <br></br>
                <br></br>
                ชั้นวางของ <br></br>
            <a href="">
                <img  src="https://nocnoc.com/blog/wp-content/uploads/2020/05/11.jpg"  width="250" height="250" ></img></a>   
                <br></br>
                ชั้นวางหนังสือ สไตล์ minimal<br></br>
                ขนาด : 136 x 42 x 43 cm<br></br>
                สี : ธรรมชาติ<br></br>
                วัสดุ : ไม้โอ๊ค<br></br>
                ราคา 400 
                <br></br>
                <br></br>
                กระจกมินิมอล ทรงถั่ว ก้อนเมฆ <br></br>
            <a href="">
                <img  src="https://cf.shopee.co.th/file/77b2750e3998768c8a3cc50c300ab404"  width="250" height="250" ></img></a>   
                <br></br>
                ขนาด :  15 x 24 x 10 ซม.
                <br></br>
                ราคา 290
                <br></br>
        </div>
        <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>

    </Layout>)
}

export default detail