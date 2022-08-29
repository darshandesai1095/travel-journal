
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import Card from './components/card.js'
import Footer from './components/footer.js'
import CardsArray from './data.js'

function App() {

  const cards = CardsArray.map(item => {
    return (
      <Card key={item.id} item={item}/>
      )
  })

  return (
    <div className="container">
      <Navbar />
      <main className="main-section">
        {cards}
      </main>
      <Footer />
    </div>
  );
}

export default App;
