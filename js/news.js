//Temporarily store data here
const PostsData = [
  {
    category: "2023",
    title: "COEP Zest’23 | Marathon and Cyclothon",
    text: "Zest is the 5th largest engineering sports fest in India...",
    image: "./img/2023-1.png",
  },

  {
    category: "2023",
    title: "COEP Zest'23 Marathon in January",
    text: "ZEST 23 is organising it's Marathon on 8th of January 2023...",
    image: "./img/2023-2.jpeg",
  },

  {
    category: "2022",
    title: "COEP Zest’22 | 10th March",
    text: "Sports instills plenty of values that help individuals to cruise through life with honesty and responsibility...",
    image: "./img/2022-1.png",
  },

  {
    category: "2022",
    title: "COEP Zest Cyclothon",
    text: "Leaving behind luxury cars and opting for cycling seems to be a popular fitness mantra in the post-Covid world...",
    image: "./img/2022-2.jpeg",
  },

  {
    category: "2020",
    title: "Zest’20, The Sports Fest By COEP",
    text: "Zest’20, is the annual, national-level sports extravaganza conducted by COEP...",
    image: "./img/2020-1.png",
  },

  {
    category: "2020",
    title: "STAGE SET FOR ZESTﾒ20",
    text: "The College of Engineering Pune (COEP) sports fest ZEST’20 marks its 18th year with the theme of ‘EDIFY THE CORE’ kicks off later today with a bang....",
    image: "./img/2020-2.jpeg",
  },
];

// Start App

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: {},
    };
  }
  componentWillMount() {
    this.setState({
      posts: PostsData,
    });
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      null /*#__PURE__*/,
      React.createElement("header", { className: "app-header" }) /*#__PURE__*/,
      React.createElement(Title, null) /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "app-card-list", id: "app-card-list" },

        Object.keys(this.state.posts).map((key) =>
          /*#__PURE__*/ React.createElement(Card, {
            key: key,
            index: key,
            details: this.state.posts[key],
          })
        )
      )
    );
  }
}

class Title extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "section",
      { className: "app-title" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "app-title-content" } /*#__PURE__*/,
        React.createElement("h1", null, "MEDIA COVERAGE") /*#__PURE__*/,
        React.createElement("p", null, "Latest News") /*#__PURE__*/
      )
    );
  }
}

class Button extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "button",
      { className: "button button-primary" } /*#__PURE__*/,
      React.createElement("i", { className: "fa fa-chevron-right" }),
      " Find out more"
    );
  }
}

class CardHeader extends React.Component {
  render() {
    const { image, category } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")",
    };

    return /*#__PURE__*/ React.createElement(
      "header",
      { style: style, className: "card-header" } /*#__PURE__*/,
      React.createElement("h4", { className: "card-header--title" }, category)
    );
  }
}

class CardBody extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "card-body" } /*#__PURE__*/,
      React.createElement("hr", null),

      // // React.createElement("p", { className: "date" }, "COEP") /*#__PURE__*/,
      // React.createElement("hr", null),
      React.createElement("h3", null, this.props.title) /*#__PURE__*/,

      React.createElement(
        "p",
        { className: "body-content" },
        this.props.text
      ) /*#__PURE__*/,

      React.createElement(Button, null)
    );
  }
}

class Card extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "article",
      { className: "card" } /*#__PURE__*/,
      React.createElement(CardHeader, {
        category: this.props.details.category,
        image: this.props.details.image,
      }) /*#__PURE__*/,
      React.createElement(CardBody, {
        title: this.props.details.title,
        text: this.props.details.text,
      })
    );
  }
}

ReactDOM.render(
  /*#__PURE__*/
  React.createElement(Main, null),
  document.getElementById("app")
);
