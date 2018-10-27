import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CardColumns } from 'reactstrap';
import Article from './article/Article';
import Spinner from '../Spinner/Spinner';
import * as actions from '../../store/actions/Articles';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      articles: []
    };
  }

  componentWillMount() {
    let route = this.props.location.pathname;
    this.props.onFetchArticles(route);
  }

  componentWillReceiveProps = nextProps => {
    let route = nextProps.location.pathname;
    if (route !== this.props.location.pathname) {
      this.props.onFetchArticles(route);
    }
  };

  render() {
    if (this.props.loading) return <Spinner />;

    return (
      <CardColumns>
        {this.props.articles.map((article, i) => (
          <Article
            key={i}
            url={article.url}
            urlToImage={article.urlToImage}
            title={article.title}
            description={article.description}
          />
        ))}
      </CardColumns>
    );
  }
}

Articles.propTypes = {
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  articles: state.articles.articles,
  loading: state.articles.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchArticles: route => dispatch(actions.fetchArticles(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
