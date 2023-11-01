import Layout from '../layouts/Layout'
import Formulario from '../components/Formulario'
import Carrusel from '../components/Carrusel'

function Contact({ imagen, titulo }) {
  return (
    <>
      <Layout>
        <Carrusel imagen={imagen} titulo={titulo} />
        <Formulario/>
      </Layout>
      </>
  )
}

export default Contact