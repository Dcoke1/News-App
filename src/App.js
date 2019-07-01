import React from 'react';
import './App.css';
import Header from './Components/header.js';
import SideScroll from './Components/SideScroll.js';
import Grid from './Components/gridHeadlines.js';
import Footer from './Components/footer.js';


function App() {
  return (
    <div>
    <Header />
    <div className="App">
    <Body />
    <Footer />
    </div>
    </div>
  );
}

export default App;

class Body extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoaded: false,
      topHeadlines: [],
      business: [],
      technology: [],
      sports: [],
      entertainment: [],
      health: [],
      science: [],
      show: false,
      activeModal: null
    }; 
    this.handleShow = (e, index) => {
      this.setState({ show: true, activeModal: index });
    };

    this.handleHide = () => {
      this.setState({ show: false, activeModal: null });
    };
  }

componentDidMount () {
  const ApiKey = 'd798eacc25c3405e80856f0c5f5ef95a';

    fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=40&apiKey='+ ApiKey)
    .then(res => res.json()).then((top) => {
        this.setState({
         isLoaded: true,
         topHeadlines: top.articles
      });})

    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=20&apiKey='+ ApiKey)
    .then(res => res.json()).then((bus) => {
        this.setState({
          isLoaded: true,
          business: bus.articles
        });})

    fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=20&apiKey='+ ApiKey)
    .then(res => res.json()).then((tech) => {
        this.setState({
          isLoaded: true,
          technology: tech.articles
        });})

    fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=20&apiKey='+ ApiKey)
    .then(res => res.json()).then((sport) => {
        this.setState({
          isLoaded: true,
          sports: sport.articles
        });})

    fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=20&apiKey='+ ApiKey)
    .then(res => res.json()).then((ent) => {
        this.setState({
          isLoaded: true,
          entertainment: ent.articles
        });})

    fetch('https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=20&apiKey='+ ApiKey)
    .then(res => res.json()).then((health) => {
        this.setState({
          isLoaded: true,
          health: health.articles
        });})

    fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=20&apiKey='+ ApiKey)
    .then(res => res.json()).then((sci) => {
        this.setState({
          isLoaded: true,
          science: sci.articles
        });})
  }

render() {
  const { error, isLoaded, topHeadlines, business, technology, sports, entertainment, health, science } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
    <div>

      <h1 id="us" className="subHeader">Top US Headlines</h1>
        <div className="grid-container">
          {topHeadlines.slice(0,13).map((item1, index) =>

            <Grid key={index} 
            className={index} 
            titleA={item1.title} 
            storyA={item1.urlToImage}
            time={item1.publishedAt}
            click={e =>this.handleShow(e, index)} 
            A={this.state.activeModal === index }
            B={this.handleHide} 
            header={item1.description}
            snippet={item1.content}
            link={item1.url} 
            />)}

            </div>


      <h1 id="business" className="subHeaderS">Top Business Headlines</h1>
        <div className="slider-container">
          {business.map((item2, index) =>
      
            <SideScroll key={index + "item2"} 
            titleB={item2.title} 
            image={item2.urlToImage} 
            time={item2.publishedAt} 
            click={e =>this.handleShow(e, index + "item2")} 
            A={this.state.activeModal === index + "item2" }
            B={this.handleHide} 
            header={item2.description}
            snippet={item2.content}
            link={item2.url}  
            />)}

          </div>

      <h1 className="subHeader"></h1>
        <div className="grid-container-reverse">
          {topHeadlines.slice(14,27).map((item3, index) => 

            <Grid key={index + "item3"} 
            className={index} 
            titleA={item3.title} 
            storyA={item3.urlToImage} 
            time={item3.publishedAt}
            click={e =>this.handleShow(e, index + "item3")} 
            A={this.state.activeModal === index + "item3" }
            B={this.handleHide} 
            header={item3.description}
            snippet={item3.content}
            link={item3.url} 
            />)}

          </div>

      <h1 id="technology" className="subHeaderS">Top Technology Headlines</h1>
        <div className="slider-container">
          {technology.map((item4, index) =>
       
            <SideScroll key={index + "item4"}
            titleB={item4.title} 
            image={item4.urlToImage} 
            time={item4.publishedAt} 
            click={e =>this.handleShow(e, index + "item4")} 
            A={this.state.activeModal === index + "item4" }
            B={this.handleHide} 
            header={item4.description}
            snippet={item4.content}
            link={item4.url}
            />)}

          </div>

      <h1 className="subHeader"></h1>
        <div className="grid-container">
          {topHeadlines.slice(28,38).map((item5, index) => 
            
            <Grid key={index + "item5"} 
            className={index} 
            titleA={item5.title} 
            storyA={item5.urlToImage} 
            time={item5.publishedAt} 
            click={e =>this.handleShow(e, index + "item5")} 
            A={this.state.activeModal === index + "item5" }
            B={this.handleHide} 
            header={item5.description}
            snippet={item5.content}
            link={item5.url} 
            />)}

          </div>

      <h1 id="sports" className="subHeaderS">Top Sports Headlines</h1>
        <div className="slider-container slider-containerS">
          {sports.map((item6, index) =>
   
            <SideScroll key={index + "item6"} 
            titleB={item6.title} 
            image={item6.urlToImage} 
            time={item6.publishedAt} 
            click={e =>this.handleShow(e, index + "item6")} 
            A={this.state.activeModal === index + "item6" }
            B={this.handleHide} 
            header={item6.description}
            snippet={item6.content}
            link={item6.url} 
            />)}

          </div>

      <h1 id="entertainment" className="subHeader">Top Entertainment Headlines</h1>
        <div className="grid-container-reverse">
          {entertainment.slice(0,13).map((item7, index) =>

            <Grid key={index + "item7"} 
            className={index} 
            titleA={item7.title} 
            storyA={item7.urlToImage} 
            time={item7.publishedAt}
            click={e =>this.handleShow(e, index + "item7")} 
            A={this.state.activeModal === index + "item7" }
            B={this.handleHide} 
            header={item7.description}
            snippet={item7.content}
            link={item7.url} 
            />)}

            </div>

      <h1 id="health" className="subHeaderS">Top Health Headlines</h1>
        <div className="slider-container slider-containerS">
          {health.map((item8, index) =>
      
            <SideScroll key={index + "item8"} 
            titleB={item8.title} 
            image={item8.urlToImage} 
            time={item8.publishedAt} 
            click={e =>this.handleShow(e, index + "item8")} 
            A={this.state.activeModal === index + "item8" }
            B={this.handleHide} 
            header={item8.description}
            snippet={item8.content}
            link={item8.url}  
            />)}

          </div>

      <h1 id="science" className="subHeader">Top Science Headlines</h1>
        <div className="grid-container">
          {science.slice(0,13).map((item9, index) =>

            <Grid key={index + "item9"} 
            className={index} 
            titleA={item9.title} 
            storyA={item9.urlToImage} 
            time={item9.publishedAt}
            click={e =>this.handleShow(e, index + "item9")} 
            A={this.state.activeModal === index + "item9" }
            B={this.handleHide} 
            header={item9.description}
            snippet={item9.content}
            link={item9.url} 
            />)}

            </div>
    </div>
      );
    }
  }
}



