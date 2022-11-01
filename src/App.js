import './App.css';
import categories from './api';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';
function App() {
  return (
    <div className="App">
      <Banner />
      {categories.map((category) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
