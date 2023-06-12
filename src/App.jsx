import './App.css'
import Product from './components/Product'

const App = () => {
  const products = [
    {
      id: 1,
      productName: 'Sneakers Keren',
      productDeskripsi: 'Sepatu terkeren pada masa tahun 2015 dan kualitas nya dijamin bagus',
      urlImage: 'https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg'
    },
    {
      id: 2,
      productName: 'Star Motion Canvas',
      productDeskripsi: 'Sepatu terkeren pada masa tahun 2019 dan kualitas nya dijamin bagus serta bahan nya enak di pakai',
      urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg'
    },
    {
      id: 3,
      productName: 'CTAS Construct Colorblock',
      productDeskripsi: 'Sepatu terkeren pada masa tahun 2020 dan kualitas nya dijamin bagus dengan harga terjangkau!!',
      urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg'
    },
    {
      id: 4,
      productName: 'Converse All Star',
      productDeskripsi: 'Sepatu terkeren pada masa tahun 2015 dan kualitas nya dijamin bagus deh!!!',
      urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg'
    },
  ]

  return (
    <div className="starts">
      {
        products.map((value) => {
          return <Product key={value.id} urlImage={value.urlImage} 
          productName={value.productName} productDeskripsi={value.productDeskripsi} />
        })
      }
    </div>
  )
}

export default App

