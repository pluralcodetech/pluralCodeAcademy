import './App.css';
import Dropdown from './Components/Dropdown';
import Search from './Components/Search';
import headerData from './data/header_data';

const App = () => {
  return (
    <div className="App">
      <Search />
      <Dropdown data={headerData.creatNew} title='Create New'/>
    </div>
  );
}

export default App;
