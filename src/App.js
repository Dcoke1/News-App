import React from "react";
import "./App.scss";
import "./Assets/globaljs.js";
import Header from "./Components/Header.js";
import Container from "./Components/Container.js";
import Stories from "./Components/Stories.js";
import Footer from "./Components/footer.js";

function App() {
  return (
    <div>
      <Header name={'Douglas'} />
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
      election: [],
      topHeadlines: [],
      money: [],
      technology: [],
      sports: [],
      entertainment: [],
      forex: [],
      science: [],
      fashion: [],
      business: [],
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

  componentDidMount() {
    const ApiKey = "e359ddf642c54d8696cd2ec524408d32";

    const date = this.isDays();
    let category, phrase;

    fetch(
      "https://newsapi.org/v2/everything?q=+us+election+2020&language=en&from=" +
        date +
        "&sortBy=publishedAt&apiKey=" +
        ApiKey
    )
      .then(res => res.json())
      .then(evry => {
        this.setState({
          isLoaded: true,
          election: evry.articles
        });
      });

    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&pageSize=40&apiKey=" +
        ApiKey
    )
      .then(res => res.json())
      .then(top => {
        this.setState({
          isLoaded: true,
          topHeadlines: top.articles
        });
      });

    fetch(
      "https://newsapi.org/v2/everything?q=+finance&language=en&from=" +
        date +
        "&sortBy=relevancy&apiKey=" +
        ApiKey
    )
      .then(res => res.json())
      .then(bus => {
        this.setState({
          isLoaded: true,
          money: bus.articles
        });
      });

    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=20&apiKey=" +
        ApiKey
    )
      .then(res => res.json())
      .then(tech => {
        this.setState({
          isLoaded: true,
          technology: tech.articles
        });
      });

    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=20&apiKey=" +
        ApiKey
    )
      .then(res => res.json())
      .then(sport => {
        this.setState({
          isLoaded: true,
          sports: sport.articles
        });
      });

    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=20&apiKey=" +
        ApiKey
    )
      .then(res => res.json())
      .then(ent => {
        this.setState({
          isLoaded: true,
          entertainment: ent.articles
        });
      });

    fetch(
      "https://newsapi.org/v2/everything?q=+forex&language=en&from=" +
        date +
        "&sortBy=relevancy&apiKey=" +
        ApiKey
    )
      .then(res => res.json())
      .then(forex => {
        this.setState({
          isLoaded: true,
          forex: forex.articles
        });
      });

    fetch(
      "https://newsapi.org/v2/everything?q=+fashion&language=en&from=" +
        date +
        "&sortBy=relevancy&apiKey=" +
        ApiKey
    )
      .then(res => res.json())
      .then(fash => {
        this.setState({
          isLoaded: true,
          fashion: fash.articles
        });
      });

    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" +
        ApiKey
    )
      .then(res => res.json())
      .then(bus => {
        this.setState({
          isLoaded: true,
          business: bus.articles
        });
      });

    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=20&apiKey=" +
        ApiKey
    )
      .then(res => res.json())
      .then(sci => {
        this.setState({
          isLoaded: true,
          science: sci.articles
        });
      });
  }

  isDays() {
    var daysAgo = 1
    let newDate = new Date();
    newDate.setDate(newDate.getDate() - daysAgo);
    let daysInPast = newDate.toISOString().slice(0, 10);

    return daysInPast;
  }

  getUser() {

  }

  render() {
    const {
      error,
      isLoaded,
      election,
      business,
      topHeadlines,
      money,
      technology,
      sports,
      entertainment,
      forex,
      science,
      fashion
    } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    } else {
      return (
        <div>
        
          <Container
            href={"#"}
            id={"topStories"}
            backGround
            textColor
            categoryTop={"Top Headlines"}
            categoryBtm={"Top Headlines"}
            storyHolder={topHeadlines.slice(0, 5).map((item1, index) => (
              <Stories
                key={index}
                image={item1.urlToImage}
                source={item1.source["name"]}
                title={item1.title}
                time={item1.publishedAt}
                click={e => this.handleShow(e, index + "item1")}
                open={this.state.activeModal === index + "item1"}
                close={this.handleHide}
                snippet={item1.content}
                link={item1.url}
              />
            ))}
          />

          <Container
            href={"#"}
            id={"moreNews"}
            backGround
            textColor
            categoryTop={"News For You"}
            storyHolder={technology.slice(0, 9).map((item2, index) => (
              <Stories
                key={index}
                image={item2.urlToImage}
                source={item2.source["name"]}
                title={item2.title}
                time={item2.publishedAt}
                click={e => this.handleShow(e, index + "item2")}
                open={this.state.activeModal === index + "item2"}
                close={this.handleHide}
                snippet={item2.content}
                link={item2.url}
              />
            ))}
          />

          <Container
            href={"#"}
            id={"Entertainment"}
            backGround
            textColor
            categoryTop={"Entertainment"}
            categoryBtm={"Entertainment"}
            storyHolder={entertainment.slice(0, 5).map((item3, index) => (
              <Stories
                key={index}
                image={item3.urlToImage}
                source={item3.source["name"]}
                title={item3.title}
                time={item3.publishedAt}
                click={e => this.handleShow(e, index + "item3")}
                open={this.state.activeModal === index + "item3"}
                close={this.handleHide}
                snippet={item3.content}
                link={item3.url}
              />
            ))}
          />

          <Container
            href={"#"}
            id={"moreNews"}
            backGround
            textColor
            categoryTop={"Money"}
            categoryBtm={"Money"}
            storyHolder={money.slice(0, 5).map((item4, index) => (
              <Stories
                key={index}
                image={item4.urlToImage}
                source={item4.source["name"]}
                title={item4.title}
                time={item4.publishedAt}
                click={e => this.handleShow(e, index + "item4")}
                open={this.state.activeModal === index + "item4"}
                close={this.handleHide}
                snippet={item4.content}
                link={item4.url}
              />
            ))}
          />

          <Container
            href={"#"}
            id={"Election2020"}
            backGround
            textColor
            categoryTop={"Election 2020"}
            categoryBtm={"Election 2020"}
            storyHolder={election.slice(0, 5).map((item5, index) => (
              <Stories
                key={index}
                image={item5.urlToImage}
                source={item5.source["name"]}
                title={item5.title}
                time={item5.publishedAt}
                click={e => this.handleShow(e, index + "item5")}
                open={this.state.activeModal === index + "item5"}
                close={this.handleHide}
                snippet={item5.content}
                link={item5.url}
              />
            ))}
          />

          <Container
            href={"#"}
            id={"moreNews"}
            backGround
            textColor
            categoryTop={"More Forex For You"}
            storyHolder={forex.slice(0, 5).map((item6, index) => (
              <Stories
                key={index}
                image={item6.urlToImage}
                source={item6.source["name"]}
                title={item6.title}
                time={item6.publishedAt}
                click={e => this.handleShow(e, index + "item6")}
                open={this.state.activeModal === index + "item6"}
                close={this.handleHide}
                snippet={item6.content}
                link={item6.url}
              />
            ))}
          />

          <Container
            href={"#"}
            id={"Sports"}
            backGround
            textColor
            categoryTop={"Sports"}
            categoryBtm={"Sports"}
            storyHolder={sports.slice(0, 5).map((item7, index) => (
              <Stories
                key={index}
                image={item7.urlToImage}
                source={item7.source["name"]}
                title={item7.title}
                time={item7.publishedAt}
                click={e => this.handleShow(e, index + "item7")}
                open={this.state.activeModal === index + "item7"}
                close={this.handleHide}
                snippet={item7.content}
                link={item7.url}
              />
            ))}
          />

          <Container
            href={"#"}
            id={"Fashion"}
            backGround
            textColor
            categoryTop={"Fashion"}
            categoryBtm={"Fashion"}
            storyHolder={fashion.slice(0, 5).map((item8, index) => (
              <Stories
                key={index}
                image={item8.urlToImage}
                source={item8.source["name"]}
                title={item8.title}
                time={item8.publishedAt}
                click={e => this.handleShow(e, index + "item8")}
                open={this.state.activeModal === index + "item8"}
                close={this.handleHide}
                snippet={item8.content}
                link={item8.url}
              />
            ))}
          />

          <Container
            href={"#"}
            id={"cover"}
            backGround
            textColor
            categoryTop={"Cover Story"}
            storyHolder={science.slice(0, 1).map((item9, index) => (
              <Stories
                key={index}
                image={item9.urlToImage}
                source={item9.source["name"]}
                title={item9.description}
                time={item9.publishedAt}
                click={e => this.handleShow(e, index + "item9")}
                open={this.state.activeModal === index + "item9"}
                close={this.handleHide}
                snippet={item9.content}
                link={item9.url}
              />
            ))}
          />

          <Container
            href={"#"}
            id={"moreNews"}
            backGround
            textColor
            categoryTop={"Business"}
            categoryBtm={"Business"}
            storyHolder={business.slice(0, 7).map((item10, index) => (
              <Stories
                key={index}
                image={item10.urlToImage}
                source={item10.source["name"]}
                title={item10.description}
                time={item10.publishedAt}
                click={e => this.handleShow(e, index + "item10")}
                open={this.state.activeModal === index + "item10"}
                close={this.handleHide}
                snippet={item10.content}
                link={item10.url}
              />
            ))}
          />

        </div>
      );
    }
  }
}
