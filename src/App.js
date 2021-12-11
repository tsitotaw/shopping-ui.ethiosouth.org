import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import MainRoute from './components/routes/MainRoute';

function App() {
  return (
    <>
      <Header></Header>
      <div className="content__container">
          <MainRoute />
      </div>

    </>
  );
}

export default App;
