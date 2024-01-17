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
          Sharpsville, PA - (724) 347-7727
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
      hours: null,
    };
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    let home_title = <div>Lenhart Chiropractic Clinic</div>
    let home_subtitle = <div>An integrative approach to Holistic Health Care</div>
    let home_body = <div><div>Lenhart Chiropractic Clinic provides a broad spectrum of natural health care options to our patients. For many conditions research is proving that Chiropractic care is an effective alternative to drugs and surgery. While many know Chiropractic is successful for conditions such as back and neck pain, research is showing that Chiropractic care has a tremendous positive effect on the whole body.</div><br /><div>In addition to traditional Chiropractic care, Lenhart Chiropractic Clinic offers Meridian Therapy, Massage Therapy (in the Middlefield Office) Nutritional Counseling, Wellness Care and Musculoskeletal rehabilitation.</div><br /><div>This integrative approach allows the patient to become proactive and begin to prevent health problems rather than simply covering up symptoms after the problem occurs.</div></div>;
    let oh_title = <div>Middlefield, OH</div>
    let oh_subtitle = <div><div>16020 E High St</div><div>Middlefield, OH 44062</div><div>(440) 632-1112</div></div>;
    let oh_body = <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.9497641546213!2d-81.07232308457189!3d41.462004879257464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8831717c9c302777%3A0x5ffe495eb6bf3ea8!2s16020%20E%20High%20St%2C%20Middlefield%2C%20OH%2044062!5e0!3m2!1sen!2sus!4v1621618075157!5m2!1sen!2sus" title="map" width="98%" height="50%" style={{border:0}} allowfullscreen="" loading="lazy"></iframe></div>;
    let header = <div>Business Hours</div>
    let oh_hours = <div><div>Mon: 9am - 6:30pm</div><div>Tues: Closed</div><div>Wed: 9am - 6:30pm</div><div>Thu: Closed</div><div>Fri: 9am - 6:30pm</div><div>Sat: 9am - 12 Noon</div><div>Sun: Closed</div></div>;
    let pa_title = <div>Sharpsville, PA</div>;
    let pa_subtitle = <div><div><em></em></div><div>40 S Walnut Street</div><div>Sharpsville, PA 16150</div><div>(724) 347-7727</div></div>;
    let pa_body = <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23992.9629998352!2d-80.4754071799393!3d41.26271487718487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8833c0949546bba3%3A0xf84a139eba208daf!2s40%20S%20Walnut%20St%2C%20Sharpsville%2C%20PA%2016150!5e0!3m2!1sen!2sus!4v1705433339217!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>;
    let pa_hours = <div><div>Mon: Closed</div><div>Tues: 9am - 5pm</div><div>Wed: Closed</div><div>Thu: 9am - 5pm</div><div>Fri: Closed</div><div>Sat: Closed</div><div>Sun: Closed</div></div>;
    let vid_title = <div>Videos</div>;
    let vid_subtitle = <div>Please enjoy our videos below</div>;
    let vid_body = <div><div>General Commercial</div>
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
    let meet_hours = <div className="meet_hours"><img src={portrait} alt="Portrait of Doctor Lenhart" /><div><strong>Dr. John Lenhart, D.C.</strong> graduated from Palmer College of Chiropractic in 1985 and has been in continuous practice for 24 years. As the former Research Director for Ohio State Chiropractic Association, Dr. Lenhart has published numerous articles in professional journals on topics such as Post Traumatic neck injuries, Raynaud’s Phenomenon and The Successful Treatment of Migraine Headache with Chiropractic Care.</div><br /><div>Having studied Acupuncture and Meridian Therapy extensively, Dr. Lenhart was awarded Diplomate status by the International Academy of Medical Acupuncture in 2008. He is trained in laser application of Meridian Therapy as well as Electromeridian Therapy.</div></div>;
    let treat_title = <div>Treatment Programs</div>;
    let treat_subtitle = <div>At Lenhart Chiropractic Clinic we provide a variety of services. We specialize in the most advanced and proven techniques.</div>
    let treat_body = <div className="treatment"><div className="hours_header">Chiropractic Care</div><div>Chiropractic is a health care profession that utilizes spinal and extremity adjusting (manipulation) aimed at improving the function of the spine, joints and nervous system. By improving the function, Chiropractic care aids the body in healing itself by promoting the body’s natural homeostasis.</div><br /><div>Dr. John Lenhart utilizes several adjusting techniques including Grostic specific upper cervical, Cox, Gonstead and Thompson. Additionally, using the Arthrostim adjusting instrument, patients of all ages can receive Chiropractic care with a minimum of discomfort.</div><br /><div>Lenhart Chiropractic Clinic also offers a variety of therapies to speed the recovery process. Therapies such as “soft laser” have been shown to enhance the body’s healing processes. The clinic also offers pain relieving therapies such as electrical stimulation modalities and therapeutic ultrasound.</div><br /><div className="hours_header">Massage Therapy</div><div>The Middlefield office offers massage therapy provided by a licensed massotherapist. Both medical massage and relaxation massage is offered.</div><br /><div className="hours_header">Meridian Therapy</div><div>Meridian therapy is the accepted name employed by those who practice the principle of acupuncture without the use of a penetrating needle. Dr. John Lenhart uses a “soft” laser instrument that combines the laser light with a microelectric stimulation of the acupuncture meridian points.</div><br /><div>In his book, <em>Personal Experience Points</em>, Dr. John Amaro states that research has demonstrated that “stimulation by this means (laser) can be as much as two to three times more effective than needle stimulation.” Additionally, the laser stimulation eliminates the chance of infection. Because the skin is not punctured, meridian therapy can be performed on higher risk patients such as those with diminished immune response due to illness or chemotherapy. With no risk of bleeding, meridian therapy can be applied to those with bleeding problems such as patient’s taking medications such as Coumadin and Plavix.</div><br /><div><em>Note</em>: In Classic Acupuncture, needles are inserted into specific meridian points. Meridian therapy applies high tech laser and micro electric stimulation to achieve an even greater response to stimulation of the identical points</div><br /><div className="hours_header">Rehabilitative Care</div><div>Rehabilitative exercise plays an integral role in health restoration. Lenhart Chiropractic Clinic offers rehabilitative therapy including flexibility, core stabilization and balance training/fall prevention all aimed at improving strength, coordination and endurance.</div><br /><div className="hours_header">Upper Cervical</div><div>Upper cervical adjusting consists of light manipulation of the upper part of the neck. Since this is where the nervous system descends from the brain to the body, the effects of upper cervical adjusting can be very effective for a variety of conditions.</div><br /><div>The adjusting is performed using an Arthrostim adjusting instrument. The Arthrostim achieves correction using a series of light thrusts.</div><br /><div><a href="http://www.upcspine.com" target="_blank" rel="noreferrer">upcspine.com</a></div><br /><div><a href="http://www.uppercervicalillustrations.com" target="_blank" rel="noreferrer">uppercervicalillustrations.com</a></div><br /><div className="hours_header">Wellness Programs</div><div>Our Wellness Program integrates the benefits of chiropractic care with individualized nutritional and exercise counseling. Dr. Len Lenhart has extensive education and experience in nutrition and tailors a program specific to each individual patient. The program consisting of four sessions with Dr. Lenhart will enable the patient to begin proactively preventing illness rather than simply waiting for disease.</div></div>;
    let visit_title = <div>First Visit</div>
    let visit_body = <div><div>Your first visit to Lenhart Chiropractic Clinic will begin with a case history. After the doctor has reviewed your case history you will have a consultation with the doctor. This consultation allows Dr. Lenhart to customize your examination to your condition as well as to the type of care you will be receiving.</div><br /><div>If you wish to enter our Wellness Program the initial consultation and case history will be quite extensive. Your dietary habits, exercise regimen, work status and health status will be reviewed in detail. Patients entering the Wellness Program should allow at least one hour for the consultation and initial visit with Dr. Lenhart.</div><br /><div className="hours_header">Examination Procedures</div><div>All of the examination procedures are tailored to the patient’s condition and history as well as the type of care provided. While standard Chiropractic evaluation procedures will enable the doctor to properly diagnose many conditions, patients who will be treated using specific upper cervical care will also undergo x-ray evaluation of the neck during the initial visit.</div><br /><div>For patients who undergo Meridian Therapy, a procedure known as Electro Meridian Imaging (EMI) will accompany the standard chiropractic examination. EMI, also known as ryodoraku, is a computer enhanced method of evaluating the balance of the 12 acupuncture meridians. During EMI, Dr. John Lenhart places a probe on the skin over specific acupoints corresponding to the meridians. This examination is extremely reliable, accurate and is quickly becoming the standard method of diagnosis.</div><br /><div>While in some occasions additional testing such as lab tests or diagnostic imaging will need to be ordered, most patients will be able to begin with the report of findings. The doctor will discuss the findings from the consultation and examination. During this report of findings you and the doctor will decide the best course of care for your health.</div></div>

    return (
      <div className="maintext">
        <div className="link_bar">
          <div className="link"
               onClick={() => this.setState({
                 title: home_title,
                 subtitle: home_subtitle,
                 body: home_body,
                 header: null,
                 hours: null
                 })}>
            Home
          </div>
          <div className="link"
               onClick={() => this.setState({
                 title: oh_title,
                 subtitle: oh_subtitle,
                 body: oh_body,
                 header: header,
                 hours: oh_hours
                 })} >
            Middlefield - OH
          </div>
          <div className="link"
               onClick={() => this.setState({
                 title: pa_title,
                 subtitle: pa_subtitle,
                 body: pa_body,
                 header: header,
                 hours: pa_hours
                 })}>
            Hermitage - PA
          </div>
          <div className="link"
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
                 onClick={() => {
                   this.setState({
                     title: meet_title,
                     subtitle: meet_subtitle,
                     body: null,
                     header: meet_header,
                     hours: meet_hours
                   });
                   this.scrollToTop();
                 }}>
              Meet The Doctor
            </div>
            <div className="bottomtext">
              Over 30 years of experience
            </div>
          </div>
          <div className="footnote">
            <div className="link"
                 onClick={() => {
                   this.setState({
                     title: treat_title,
                     subtitle: treat_subtitle,
                     body: treat_body,
                     header: null,
                     hours: null
                   });
                   this.scrollToTop();
                 }}>
              Treatment Programs
            </div>
            <div className="bottomtext">
              Evidence based services for your ailments
            </div>
          </div>
          <div className="footnote">
            <div className="link"
                 onClick={() => {
                   this.setState({
                     title: visit_title,
                     subtitle: null,
                     body: visit_body,
                     header: null,
                     hours: null
                   });
                   this.scrollToTop();
                 }}>
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
