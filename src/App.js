import React from 'react';
import './App.css';
import banner from './images/header.jpeg';
import pca from './images/pcalogo.jpeg';
import aca from './images/acalogo.jpeg';

class App extends React.Component {
  render() {
    return (
      <div className="main_container">
        <Header />
        <Link_bar />
        <div className="main">
          <Article />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

const Header = () => {
  return (
    <div className="header">
      <img src={banner}
           alt="Headshot of Doctor L. John Lenhart" />
      <div className="header_text">
        <div className="title">
          Lenhart Chiropractic
        </div>
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

const Link_bar = () => {
  return (
    <div className="link_bar">
      <Link value={"Home"} />
      <Link value={"Middlefield - OH"} />
      <Link value={"Hermitage - PA"} />
      <Link value={"Videos"} />
    </div>
  )
};

class Link extends React.Component {
  render () {
    return (
      <div class="link">
        {this.props.value}
      </div>
    );
  }
}

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="lede">
        Affiliations
      </div>
      <img src={pca}
           alt="Logo for the Pennsylvania Chiropractic Association" />
      <img src={aca}
           alt="Logo for the American Chiropractic Association" />
    </div>
  )
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footnote">
        <Link value={"Meet The Doctor"} />
        <div className="bottomtext">
          Over 30 years of experience
        </div>
      </div>
      <div className="footnote">
        <Link value={"Treatment Programs"} />
        <div className="bottomtext">
          Evidence based services for your ailments
        </div>
      </div>
      <div className="footnote">
        <Link value={"First Visit"} />
        <div className="bottomtext">
          First visit information and patient forms
        </div>
      </div>
    </div>
  )
};

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "test",
    };
  }
  render() {
    return (
      <div className="article_container">
        <div className="article"
              onClick={() => this.setState({value: "X"})}>
          {this.state.value}
        </div>
      </div>
    );
  }
}

export default App;
