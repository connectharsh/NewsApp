import React, { Component } from 'react'
import MyCard from './MyCard';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    pageSize: 9,
    country: 'in',
    category: 'general',
    currSize: 1,
  }
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  }
  // adding a single default item to our articles array.
  articles = [

  ]

  // setting the stae by using constructor
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
      totalResults:0,
      loading: true,
    }
  }

  //this function runs after adding the dom
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=364e8e98229640c68ba584320bb61b7b&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    data = await data.json()
    this.setState({ articles: data.articles, totalResults: data.totalResults, loading: false, });
  }

  fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=364e8e98229640c68ba584320bb61b7b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    data = await data.json()
    this.setState({
      articles: this.state.articles.concat(data.articles),
      page: this.state.page + 1,
    })
  }

  //simple rendering the files
  render() {
    return (
      <>
        {<h1 id='mainHeading'>{this.state.loading ? 'loading': 'Top Headlines'}</h1>}

        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>This is the end of the page toalResults, = {this.state.totalResults}</b>
            </p>

          }>
          <div className="myContainer">
            {!this.state.loading && this.state.articles.map((element) => {
              let publishedAT = new Date(element.publishedAt);
              publishedAT = `${publishedAT.getDate()}/${publishedAT.getMonth()}/${publishedAT.getFullYear()}`
              return <MyCard key={element.url} title={element.title} description={element.description} image={element.urlToImage} date={publishedAT} author={element.author} />
            })}

          </div>
        </InfiniteScroll>
      </>
    )
  }
}
export default News;
