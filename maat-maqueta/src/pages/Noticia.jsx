import React from 'react'
import Nav from '../components/nav/Nav'
import NoticiaPost from '../components/news/NoticiaPost'
import Footer from '../components/footer/Footer'
function Noticia() {
  return (
    <div>
        <Nav></Nav>
        <NoticiaPost></NoticiaPost>
        <Footer></Footer>
    </div>
  )
}

export default Noticia