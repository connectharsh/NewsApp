import React, { Component } from 'react'
import MyCard from './MyCard';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    pageSize:9,
    country:'in',
    category:'general',
  }
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category:PropTypes.string,
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
      loading: true,
    }
  }

//this function runs after adding the dom
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=364e8e98229640c68ba584320bb61b7b&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    data = await data.json()
    this.setState({ articles: data.articles,totalResults:data.totalResults,loading:false, });
    
  }

  //this handle the previous click and change the url page number 
  handlePreviousClick = async()=> {
    this.setState(
      {loading:true,}
    )
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=364e8e98229640c68ba584320bb61b7b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    data = await data.json()
    this.setState({ articles: data.articles,
    page: this.state.page-1, 
    loading:false,})

    console.log('previous clicked');
  }
  // handling the next click 
  handleNextClick= async()=> {
    this.setState(
      {loading:true,}
    )
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=364e8e98229640c68ba584320bb61b7b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    data = await data.json()
    this.setState({ articles: data.articles,
    page: this.state.page+1, 
    loading:false,})
    console.log('next clicked');
  }

  //simple rendering the files
  render() {
    return (
      <>
        {this.state.loading && <Spinner/>}
        {<h1 id='mainHeading'>{this.state.loading?'loading':'Top Headlines'}</h1>}
        <div className="myContainer">
          {!this.state.loading && this.state.articles.map((element) => {
            return <MyCard key={element.url} title={element.title} description={element.description} image={element.urlToImage} />
          })}
        </div>
        {!this.state.loading && <div id="buttons">
          <button className="button btn btn-primary mx-2 my-2" disabled = {this.state.page<=1} onClick={this.handlePreviousClick}>&#8249;</button>
          <button className="button btn btn-primary mx-2 my-2" disabled = {Math.ceil(this.state.totalResults/this.props.pageSize)===this.state.page}onClick={this.handleNextClick}>&#8250;</button>
        </div>}
      </>
    )
  }
}
export default News;
