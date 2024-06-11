import React from 'react';
import './App.css';
import banner from './images/header.jpeg';
import pca from './images/pcalogo.jpeg';
import aca from './images/acalogo.jpeg';
import portrait from './images/john.jpeg';

class AppTest extends React.Component {
  render() {
    return (
      <div className="main_container">
        <Header />
        <MainText />
      </div>
    );
  }
}

const Header = () => {
  return (
    <div className="header">
      <img src={banner}
           alt="Portrait of Doctor L. John Lenhart" />
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

class MainText extends React.Component {
  constructor(props) {
    super(props);
    let home_title = <div>Lenhart Chiropractic Clinic</div>
    let home_subtitle = <div>An integrative approach to Holistic Health Care</div>
    let home_body = <div><div>Lenhart Chiropractic Clinic provides a broad spectrum of natural health care options to our patients. For many conditions research is proving that Chiropractic care is an effective alternative to drugs and surgery. While many know Chiropractic is successful for conditions such as back and neck pain, research is showing that Chiropractic care has a tremendous positive effect on the whole body.</div><br /><div>In addition to traditional Chiropractic care, Lenhart Chiropractic Clinic offers Meridian Therapy, Massage Therapy (in the Middlefield Office) Nutritional Counseling, Wellness Care and Musculoskeletal rehabilitation.</div><br /><div>This integrative approach allows the patient to become proactive and begin to prevent health problems rather than simply covering up symptoms after the problem occurs.</div></div>;
    this.state = {
      title: home_title,
      subtitle: home_subtitle,
      body: home_body,
      header: null,
      hours: null
    };
  }
  render() {
    let home_title = <div>Lenhart Chiropractic Clinic</div>
    let home_subtitle = <div>An integrative approach to Holistic Health Care</div>
    let home_body = <div><div>Lenhart Chiropractic Clinic provides a broad spectrum of natural health care options to our patients. For many conditions research is proving that Chiropractic care is an effective alternative to drugs and surgery. While many know Chiropractic is successful for conditions such as back and neck pain, research is showing that Chiropractic care has a tremendous positive effect on the whole body.</div><br /><div>In addition to traditional Chiropractic care, Lenhart Chiropractic Clinic offers Meridian Therapy, Massage Therapy (in the Middlefield Office) Nutritional Counseling, Wellness Care and Musculoskeletal rehabilitation.</div><br /><div>This integrative approach allows the patient to become proactive and begin to prevent health problems rather than simply covering up symptoms after the problem occurs.</div></div>;
    let oh_title = <div>Middlefield, OH</div>
    let oh_subtitle = <div><div>16020 E High St</div><div>Middlefield, OH 44062</div><div>(440) 632-1112</div></div>;
    let oh_body = <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.9497641546213!2d-81.07232308457189!3d41.462004879257464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8831717c9c302777%3A0x5ffe495eb6bf3ea8!2s16020%20E%20High%20St%2C%20Middlefield%2C%20OH%2044062!5e0!3m2!1sen!2sus!4v1621618075157!5m2!1sen!2sus" width="98%" height="50%" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>;
    let header = <div>Business Hours</div>
    let oh_hours = <div><div>Mon: 9am - 6:30pm</div><div>Tues: Closed</div><div>Wed: 9am - 6:30pm</div><div>Thu: Closed</div><div>Fri: 9am - 6:30pm</div><div>Sat: 9am - 12 Noon</div><div>Sun: Closed</div></div>;
    let pa_title = <div>Hermitage, PA</div>;
    let pa_subtitle = <div><div><em>Mistretta Jones Chiropractic Building</em></div><div>175 N Buhl Farm Dr</div><div>Hermitage, PA 16148</div><div>(724) 347-7727</div></div>;
    let pa_body = <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.3628698458533!2d-80.4718907!3d41.23565299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8833c068adebdfed%3A0xa7e05bfc9aa68ca4!2s175%20N%20Buhl%20Farm%20Dr%2C%20Hermitage%2C%20PA%2016148!5e0!3m2!1sen!2sus!4v1621618261342!5m2!1sen!2sus" width="98%" height="50%" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>;
    let pa_hours = <div><div>Mon: Closed</div><div>Tues: 9am - 5pm</div><div>Wed: Closed</div><div>Thu: 9am - 5pm</div><div>Fri: Closed</div><div>Sat: Closed</div><div>Sun: Closed</div></div>;
    let vid_title = <div>Videos</div>;
    let vid_subtitle = <div>Please enjoy our videos below</div>;
    let vid_body = <div>
    <div>Fifteen Minute Relaxation</div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/8E70nOj6tlI?si=zhq9w_cXb7aHwc0V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br /><br />
    <div>General Commercial</div>
    <iframe width="100%" height="300px" src="https://www.youtube.com/embed/bDR5IeHJsiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br /><br />
    <div>Wellness Program</div>
    <iframe width="100%" height="300px" src="https://www.youtube.com/embed/uZAHS2YWJuo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br /><br />
    <div>Upper Cervical</div>
    <iframe width="100%" height="300px" src="https://www.youtube.com/embed/gZbzFpUUbeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br /><br />
    <div>Meridian Therapy</div>
    <iframe width="100%" height="300px" src="https://www.youtube.com/embed/1cuvMsqPNC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>;
    let meet_title = <div>Meet The Doctor</div>;
    let meet_subtitle = <div>You can count on Lenhart Chiropractic Clinic for quality services and competitive rates. Our friendly staff works one-on-one with you to meet your needs. We primarily use decompression to help relax your muscles and spine, before performing adjustments. Our clinic accepts most insurance plans, and handles all billing paperwork saving you time and frustration. If insurance is an issue, we do provide scheduled payments, so you can still receive the care you need.</div>;
    let meet_header = <div>Dr. John Lenhart, D.C.</div>;
    let meet_hours = <div className="meet_hours"><img src={portrait} /><div><strong>Dr. John Lenhart, D.C.</strong> graduated from Palmer College of Chiropractic in 1985 and has been in continuous practice for 24 years. As the former Research Director for Ohio State Chiropractic Association, Dr. Lenhart has published numerous articles in professional journals on topics such as Post Traumatic neck injuries, Raynaud’s Phenomenon and The Successful Treatment of Migraine Headache with Chiropractic Care.</div><br /><div>Having studied Acupuncture and Meridian Therapy extensively, Dr. Lenhart was awarded Diplomate status by the International Academy of Medical Acupuncture in 2008. He is trained in laser application of Meridian Therapy as well as Electromeridian Therapy.</div></div>;

    return (
      <div className="maintext">
        <div className="link_bar">
          <div class="link"
               onClick={() => this.setState({
            title: home_title,
            subtitle: home_subtitle,
            body: home_body,
            header: null,
            hours: null
                 })}>
            Home
          </div>
          <div class="link"
               onClick={() => this.setState({
            title: oh_title,
            subtitle: oh_subtitle,
            body: "oh_body",
            header: header,
            hours: oh_hours
            })} >
            Middlefield - OH
          </div>
          <div class="link"
               onClick={() => this.setState({
            title: pa_title,
            subtitle: pa_subtitle,
            body: "pa_body",
            header: header,
            hours: pa_hours
            })}>
            Hermitage - PA
          </div>
          <div class="link"
               onClick={() => this.setState({
           title: vid_title,
           subtitle: vid_subtitle,
           body: vid_body,
           header: null,
           hours: null
           })}>
            Videos
          </div>
        </div>
        <div className="main">
          <div className="article_container">
            <div className="article">
              <div className="article_title">
                {this.state.title}
              </div>
              <div className="article_subtitle">
                {this.state.subtitle}
              </div>
              <div className="article_body">
                {this.state.body}
              </div>
              <div className="hours_header">
                {this.state.header}
              </div>
              <div className="article_body">
                {this.state.hours}
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
        <div className="footer">
          <div className="footnote">
            <div className="link"
                 onClick={() => this.setState({
              title: meet_title,
              subtitle: meet_subtitle,
              body: null,
              header: meet_header,
              hours: meet_hours
              })}>
              Meet The Doctor
            </div>
            <div className="bottomtext">
              Over 30 years of experience
            </div>
          </div>
          <div className="footnote">
            <div className="link">
              Treatment Programs
            </div>
            <div className="bottomtext">
              Evidence based services for your ailments
            </div>
          </div>
          <div className="footnote">
            <div className="link">
              First Visit
            </div>
            <div className="bottomtext">
              First visit information and patient forms
            </div>
          </div>
        </div>
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

export default AppTest;
