import React from "react";
import "./howItWorks.css";
import { Link } from "react-router-dom";
import Layout from "../../component/Layout/Layout";

const HowItWorks = () => {
    return (
        <Layout>
      <div className="how-it-works-container">
      <h2>How EvangadiForum Works</h2>
      <p>Welcome to EvangadiForum! Here's a simple guideline to get started:</p>
      <ul>
        <li>Feel free to ask any questions.</li>
        <li>Provide answers to questions that you know.</li>
        <li>Always be polite and respectful to others.</li>
        <li>Keep your questions and answers precise and concise.</li>
      </ul>
      <br />
      <p>
        If you're new here, <Link to="/login">sign up</Link> to join our community. Already have an account?{' '}
        <Link to="/">Sign in</Link> now.
      </p>
    </div>
        </Layout>
    );
};

export default HowItWorks;