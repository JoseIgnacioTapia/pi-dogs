import CardsContainer from '../components/cardsContainer/CardsContainer';
import Navbar from '../components/navbar/Navbar';
import SearchBar from '../components/searchBar/SearchBar';

function MainPage() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <CardsContainer />
    </div>
  );
}

export default MainPage;
