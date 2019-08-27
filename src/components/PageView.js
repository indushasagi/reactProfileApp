import React, { Component } from "react";
import project1 from "../assets/project1.png";
import SOCIAL_IMAGE from "./data/SocialImage";

import "../styles.css";

class PageView extends Component {
  constructor() {
    super();
    this.state = { likeCount: 0 };
  }
  handleEvent = () => {
    this.setState(prevState => {
      return { likeCount: prevState.likeCount + 1 };
    });
  };
  render() {
    return (
      <div>
        <div className="flex-container">
          <ImageView />
          <div>
            <h4>test1</h4>
            <img src={project1} alt="project1_img" />
            <p onClick={this.handleEvent}>Like</p>
            <p>{this.state.likeCount} Likes</p>
          </div>
          <div>
            <h4>test2</h4>
          </div>
          <div>
            <h4>test3</h4>
          </div>
        </div>
      </div>
    );
  }
}

class ImageView extends Component {
  constructor() {
    super();
    this.state = { likeCount: 0 };
  }
  render() {
    return <div />;
  }
}
export default PageView;
