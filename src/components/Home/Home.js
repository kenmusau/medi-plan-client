import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import homeDoctor from "../../assets/homeDoctor.png";
import ourDoctor from "../../assets/ourDoctor.jpg";
import sickOne from "../../assets/sickOne.webp";
import sickTwo from "../../assets/sickTwo.webp";
import sickThree from "../../assets/sickThree.webp";

function Home() {
  return (
    <div className="container">
      <header className="home_main_header">
        <p className="logo">
          <span className="logo_init">𝘔𝘦𝘥𝘪𝘤</span>
          <span className="logo_end">✙</span>
        </p>
        <nav className="home_nav">
          <a href="#featured">Featured</a>
          <a href="#services">Services</a>
          <a href="#doctor">Doctor</a>
          <a className="login" href="#login">
            Login
          </a>
          <a className="register" href="#register">
            Register
          </a>
        </nav>
      </header>
      <section className="hero">
        <img className="hero_image" src={homeDoctor} alt="" />
        <div className="hero_heading_content">
          <h1 className="hero_heading_title">
            Serving Your Health Needs Is Our Priority.
          </h1>
          <p className="hero_heading_text">
            There is nothing more important than our good health, because that's
            our principle asset for our good future.
          </p>
          <Link className="hero_heading_button">Make Appointment</Link>
        </div>
      </section>
      <article className="post_heading">
        <div className="post_heading_content">
          <h1 className="post_heading_title">Health Services For You.</h1>
          <p className="post_heading_text">
            We are always here to listen and understand.
          </p>
        </div>
      </article>
      <section className="features_section">
        <div className="features">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="feature_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>

          <h2 className="features_title">Online Consultation</h2>
          <p className="features_text">
            We are providing free online health Consultation with our doctor via
            online Consultation through the website.
          </p>
        </div>

        <div className="features">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="feature_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
            />
          </svg>

          <h2 className="features_title">Buy Medicine </h2>
          <p className="features_text">
            Your can simply order medicine you need after online Consultation
            with doctors throug the website
          </p>
        </div>

        <div className="features">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="feature_icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
            />
          </svg>

          <h2 className="features_title">Check-Up Booking </h2>
          <p className="features_text">
            We won't let you queue for a very long time at the hospital. Place a
            check-up booking via Our website
          </p>
        </div>
      </section>

      <section className="feature_doctor">
        <img src={ourDoctor} alt="Our Doctor" />
        <div className="our_doctor_details">
          <h1 className="feature_doctor_title">Our Doctor</h1>
          <h2 className="doctor_name">Doctor Justus Kamau</h2>
          <h3 className="doctor_title">Psychiatry</h3>
          <p className="doctor_description">
            Dr Justus Kamau is a mental Health Specialist with almost a decade
            experience, he is pracitcing at MedicHospital, The medical services
            provided are consultation regarding mental Health
          </p>
          <button className="btn_call_doctor">Contact Now</button>
        </div>
      </section>
      <article className="post_heading">
        <div className="post_heading_content">
          <h1 className="post_heading_title">Article and News.</h1>
          <p className="post_heading_text">
            Find the latest information and daily news from trusted sources.
          </p>
        </div>
      </article>

      <section className=" article_news_section">
        <div className="features article_news">
          <img src={sickOne} alt="" />
          <h2 className="features_title">
            Know How Antibodies Work Against Viruses
          </h2>
          <p className="features_text">
            Antibodies are essential components of our immune system's defense
            against viruses. When a virus enters the body, it triggers an immune
            response. Once bound, antibodies can...
          </p>
        </div>

        <div className="features article_news">
          <img src={sickTwo} alt="" />
          <h2 className="features_title">
            Know How Antibodies Work Against Viruses
          </h2>
          <p className="features_text">
            Antibodies are essential components of our immune system's defense
            against viruses. When a virus enters the body, it triggers an immune
            response. Once bound, antibodies can...
          </p>
        </div>

        <div className="features article_news">
          <img src={sickThree} alt="" />
          <h2 className="features_title">
            Know How Antibodies Work Against Viruses
          </h2>
          <p className="features_text">
            Antibodies are essential components of our immune system's defense
            against viruses. When a virus enters the body, it triggers an immune
            response. Once bound, antibodies can...
          </p>
        </div>
      </section>

      <article className="post_heading">
        <div className="post_heading_content">
          <button className="post_heading_btn">Load More</button>
        </div>
      </article>

      <footer>
        <div className="hospital_details">
          <p className="logo">
            <span className="logo_init">𝘔𝘦𝘥𝘪𝘤</span>
            <span className="logo_end">✙</span>
          </p>
          <p>
            We are ready to hear anything, because serving your health neads our
            priority
          </p>
        </div>
        <div className="hospital_menu">
          <div>
            <h2>Menu</h2>
            <ul>
              <li>Home</li>
              <li>Doctors</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              <li>Check Up</li>
              <li>Consultation</li>
              <li>Buy Medicine</li>
            </ul>
          </div>
          <div>
            <h2>Further Information</h2>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="copyright_policy">
          Medic✙ 2023. ALl Rights Reserved &copy;
        </div>
      </footer>
    </div>
  );
}

export default Home;
