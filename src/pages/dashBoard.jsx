
import { Routes, Route } from 'react-router-dom'
import Home from './home/home'


import NewsPage from './news/news'
import Contact from './contact/contact'
import Footer from '../component/footer/footer'
import Header from '../component/header/header'

export default function DashBoard() {
    return (
        <div>
            <Header/>
            <Routes path="/*">

                <Route path="/" element={<Home />} />

                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<h1>404</h1>} />
                <Route path="/news" element={<NewsPage />} />
              
           </Routes>
<Footer />


        </div>
    )
}