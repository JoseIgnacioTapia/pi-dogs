import CardsContainer from '../components/cardsContainer/CardsContainer';
import Navbar from '../components/navbar/Navbar';
import SearchBar from '../components/searchBar/SearchBar';
import SelectByDog from '../components/selectByDog/SelectByDog';
import SelectByTemperament from '../components/selectByTemperament.js/SelectByTemperament';

function MainPage() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <SelectByTemperament />
      <SelectByDog />
      <CardsContainer />
    </div>
  );
}

export default MainPage;
