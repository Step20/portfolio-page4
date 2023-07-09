import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { NavPage } from "./components/NavComponent";
import { Home } from "./components/HomeComponent";
import { Over } from "./components/OverComponent";
import { Over2 } from "./components/OverComponent2";
import { About } from "./components/AboutComponent";
import { Skills } from "./components/SkillsComponent";
import { Projects } from "./components/ProjectComponent";
import { Contact } from "./components/ContactComponent";
import logo from "./assets/nav-brand.png";
import { Footer } from "./components/FooterComponent";
import "./style/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2500);
  }
  render() {
    const { loading } = this.state;
    return loading ? (
      <div className="loading-out mx-auto">
        <div className="loading  mx-auto">
          <div className="loading-c  mx-auto">
            <img src={logo} />
          </div>
        </div>
      </div>
    ) : (
      <div className="App">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Over />
        <Over2 />
      </div>
    );
  }
}

export default App;
//<Route path="blogs" element={<Blogs />} />;
