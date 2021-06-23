import React from 'react';
import './App.css';
import banner from './images/header.jpeg';

class App extends React.Component {
  render() {
    return (
      <div className="main_container">
        <Header />
        <Link />
        <div className="main">
          <Article />
          <Article />
        </div>
      </div>
    );
  }
}

const Header = () => {
  return (
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
  );
}

const Link = () => {
  return (
    <div className="link_bar">
      <div class="link">Home</div>
      <div class="link">Middlefield, OH</div>
      <div class="link">Hermitage, PA</div>
      <div class="link">Videos</div>
    </div>
  )
};

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        stuff
      </div>
    );
  }
}

export default App;
