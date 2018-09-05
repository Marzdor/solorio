import React, { Component } from "react";
import Header from "./assests/components/Header";
import Home from "./assests/components/Home";
import Menu from "./assests/components/Menu";
import About from "./assests/components/About";
import Contact from "./assests/components/Contact";
import Footer from "./assests/components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Home",
      component: <Home />,
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.changePage = this.changePage.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState(
      { width: window.innerWidth, height: window.innerHeight },
      () => {
        if (this.state.width >= 600) {
          document.querySelector("#video").height = "500px";
        }
      }
    );
  }

  changePage(name) {
    let page;
    switch (name) {
      case "Home":
        page = <Home />;
        break;
      case "Menu":
        page = <Menu />;
        break;
      case "About":
        page = <About />;
        break;
      case "Contact":
        page = <Contact />;
        break;
      default:
        console.log(name);
    }
    return page;
  }
  handleNavClick(e) {
    const pageName = e.target.innerHTML;
    const newComponent = this.changePage(pageName);
    this.setState({
      page: pageName,
      component: newComponent
    });
  }
  render() {
    return (
      <article className="container">
        <Header handleNavClick={this.handleNavClick} />
        {this.state.component}
        <Footer />
      </article>
    );
  }
}

export default App;
