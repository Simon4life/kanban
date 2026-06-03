import React from "react";
import styled from "styled-components";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import KanbanPreview from "../components/landing/KanbanPreview";
// import SocialProof from "../components/landing/SocialProof";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import FAQ from "../components/landing/FAQ";
import FeatureBreakdown from "../components/landing/FeatureBreakdown";
import CTA from "../components/landing/CTA";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <KanbanPreview />
        {/* <SocialProof /> */}
        <Features />
        <FeatureBreakdown />
        <FAQ/>
        <CTA />
      </main>

      <Footer />
    </>
  );
};

const Wrapper = styled.main`
  h1 {
    font-size: 2.5rem;
  }

  .logo {
    font-weight: bold;
    font-size: 2rem;
  }
.nav-center {
  display: flex;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
  padding: 2rem 0;
  .logo {
    font-size: 2rem;
    color: white;
    display: inline-block;
  }
}


.dark-bcg {
  background: var(--darker-black-bcg);
}
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    min-height: 80vh;
    .img-container {
      display: none;
    }
    p {
      line-height: 1.5;
      max-width: 45em;
      margin-bottom: 1rem;
      color: var(--clr-grey-5);
      font-size: 1rem;
    }
    @media (min-width: 992px) {
      h1 {
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.4rem;
      }
      .hero-btn {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      }
      .img-container {
        display: block;
        position: relative;
      }
      .main-img {
        width: 100%;
        height: 550px;
        position: relative;
        border-radius: var(--radius);
        display: block;
        object-fit: cover;
      }
    }
  }
  .temp-img {
    width: 100%;
    height: 400px;
    border-radius: 5px;
    object-fit: cover;
  }
  .hero-section-1 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.4rem;
    justify-content: center;
    margin: 0.5rem auto;
    padding: 1rem;
    margin-bottom: 1rem;
    h3 {
      font-size: 1.7rem;
    }
    p {
      text-align: justify;
    }
  }
  .hero-section-1 > .second {
    grid-row: 1/1;
  }

  @media (min-width: 992px) {
    .hero-section-1 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      place-items: center;
      object-fit: cover;
      .second {
        grid-row: auto;
      }
    }
  }
  section p {
    font-size: 1rem;
  }
  .site-footer {
    background-color: #26272b;
    padding: 45px 0 20px;
    font-size: 15px;
    line-height: 24px;
    color: #737373;
   
  }

  .site-footer hr.small {
    margin: 20px 0;
  }
  .site-footer h6 {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px;
  }
  .site-footer a {
    color: #737373;
  }
  .site-footer a:hover {
    color: #3366cc;
    text-decoration: none;
  }
  .copyright-text {
    margin: 0;
  }
  .copyright-text {
    display:flex;
    jusstify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .copyright-text p {
    margin-bottom: 0;
  }
  @media (max-width: 991px) {
    .site-footer{
      margin-bottom: 30px;
    }
  }
  @media (max-width: 767px) {
    .site-footer {
      padding-bottom: 0;
    }
    .site-footer .copyright-text,
    .site-footer {
      text-align: center;
    }
  }
  
  }
`;

export default Landing;
