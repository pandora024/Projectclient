import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>About Me</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <h1>About Me</h1>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
                <br />
                <div>
                    <div className={styles.box} >
                    <br></br>  
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    KAI DEE เป็นร้านขายของที่ขายเฟอนิเจอร์แต่งบ้านสไตล์มินิมอล
                    หากลูกค้าอยากได้อะไรทางร้านจะจัดหา ของที่ถูกและดีมาให้อย่างแน่นอน &nbsp;&nbsp;<br /> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ไว้ใจร้านเราได้ ร้านเราจัดส่งได้ทุกประเภท ตามความต้องการของลูกค้า <br></br>
                    <br></br>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
            </div>
            <br />
                    <br/><br/>
                    <img  src="https://www.naibann.com/wp-content/uploads/2019/02/24-Japanese-minimal-wooden-furniture-items-by-woken-wood-design-1.jpg" alt="Trulli" width="250" height="250"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://www.naibann.com/wp-content/uploads/2019/02/24-Japanese-minimal-wooden-furniture-items-by-woken-wood-design-9.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://www.naibann.com/wp-content/uploads/2019/02/24-Japanese-minimal-wooden-furniture-items-by-woken-wood-design-12.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>
                    <img  src="https://www.naibann.com/wp-content/uploads/2019/02/24-Japanese-minimal-wooden-furniture-items-by-woken-wood-design-13.jpg" alt="Trulli" width="250" height="250"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://www.naibann.com/wp-content/uploads/2019/02/24-Japanese-minimal-wooden-furniture-items-by-woken-wood-design-14.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://www.naibann.com/wp-content/uploads/2019/02/24-Japanese-minimal-wooden-furniture-items-by-woken-wood-design-21.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className={styles.box} >
                    ติดต่อเราได้ที่<br></br>
                    เบอร์โทรศัพท์ 0980529795<br></br>
                    Facebook : Pandora pd<br></br>
                    Lind Id : @pandoramefa<br></br>
                    </div>
                    
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    </div>
                  <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>
    <div>
                </div>
            </div>
        </Layout>
    )
}

export default withAuth(Profile1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
