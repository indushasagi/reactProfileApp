import React, { Component } from "react";
import SOCIAL_IMAGE from "./data/SocialImage";

import "../styles.css";

class PageView extends Component {
  constructor() {
    super();
    this.state = { likeCount: 0 };
  }

  handleEvent = countValue => {
    this.setState({ likeCount: countValue + 1 });
    console.log(this.state.likeCount);
  };
  render() {
    return (
      <div>
        <div className="flex-container">
          {SOCIAL_IMAGE.map(SOCIAL_IMG => {
            return (
              <ImageView
                count={this.state.likeCount}
                key={SOCIAL_IMG.id}
                socialImg={SOCIAL_IMG}
                handleParentEvent={this.handleEvent}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countLike: 0
    };
  }
  handleCount = () => {
    this.setState({ countLike: this.props.socialImg.likeCount });
  };
  handleEvent = () => {
    this.props.handleParentEvent(this.props.count);
  };
  render() {
    return (
      <div>
        <h4>{this.props.socialImg.title}</h4>
        <img src={this.props.socialImg.image} alt="project1_img" />
        <p onClick={this.handleEvent}>Like</p>
        <p>{this.props.socialImg.likeCount}</p>
      </div>
    );
  }
}
export default PageView;
