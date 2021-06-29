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
        <Link />
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
        <div className="toptext">
          Meet The Doctor
        </div>
        <div className="bottomtext">
          Over 30 years of experience
        </div>
      </div>
      <div className="footnote">
        <div className="toptext">
          Treatment Programs
        </div>
        <div className="bottomtext">
          Evidence based services for your ailments
        </div>
      </div>
      <div className="footnote">
        <div className="toptext">
          First Visit
        </div>
        <div className="bottomtext">
          First visit information and patient forms
        </div>
      </div>
    </div>
  )
};


class Article extends React.Component {
  render() {
    return (
      <div className="article_container">
        <div className="article">
          Lenhart Chiropractic Clinic provides a broad spectrum of natural health care options to our patients. For many conditions research is proving that Chiropractic care is an effective alternative to drugs and surgery. While many know Chiropractic is successful for conditions such as back and neck pain, research is showing that Chiropractic care has a tremendous positive effect on the whole body.
        </div>
        <div className="article">
          In addition to traditional Chiropractic care, Lenhart Chiropractic Clinic offers Meridian Therapy, Massage Therapy (in the Middlefield Office) Nutritional Counseling, Wellness Care and Musculoskeletal rehabilitation.
        </div>
      </div>
    );
  }
}

export default App;
