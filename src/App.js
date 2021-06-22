import logo from './logo.svg';
import './App.css';
import banner from './images/header.jpeg';

function App() {
  return (
    <div className="main_container">
      <div className="header">
        <img src={banner} />
        <div classname="header_text">
          <div className="title">Lenhart Chiropractic</div>
          <div className="subtitle">
            Middlefield, OH - (440) 632-1112
          </div>
          <div className="subtitle">
            Hermitage, PA - (724) 347-7727
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
