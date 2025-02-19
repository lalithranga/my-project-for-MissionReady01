

import Header from '../component/header'
import { Routes, Route } from 'react-router-dom'
import Home from './home/home'
import Contact from './contact'
import Footer from './footer/footer'
import NewsPage from './news/news'

export default function DashBoard() {
    return (
        <div>
            <Header />
            <Routes path="/*">

                <Route path="/" element={<Home />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>404</h1>} />
                <Route path="/news" element={<NewsPage />} />
              
           </Routes>
<Footer />


        </div>
    )
}