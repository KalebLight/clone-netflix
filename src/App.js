import './App.css';
import categories from './api';
import Row from './components/Row/Row';
function App() {
  return (
    <div className="App">
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
