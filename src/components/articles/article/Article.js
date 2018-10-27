import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Article extends Component {
  render() {
    return (
      <Card className="article">
        <a href={this.props.url} target="_blank">
          <CardImg
            top
            width="100%"
            src={this.props.urlToImage}
            alt="Article image"
          />
        </a>
        <CardBody>
          <CardTitle>
            <a href={this.props.url} target="_blank">
              {this.props.title}
            </a>
          </CardTitle>
          <CardText>{this.props.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

Article.propTypes = {
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Article;
