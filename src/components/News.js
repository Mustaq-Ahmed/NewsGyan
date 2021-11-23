import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1
        };
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4913711554894a459e262a21b1e97a5c&page=1&pagesize=18";
        let data = await fetch(url);
        let res = await data.json();
        console.log(res);
        this.setState({ articles: res.articles, totalResults: res.totalResults });
    }

    handleOnPrevClick = async () => {
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4913711554894a459e262a21b1e97a5c&page=${this.state.page - 1}&pagesize=18`;
        let data = await fetch(url);
        let res = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: res.articles
        });
    }
    handleOnNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {

        }
        else {
            console.log("Next");
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4913711554894a459e262a21b1e97a5c&page=${this.state.page + 1}&pagesize=18`;
            let data = await fetch(url);
            let res = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: res.articles
            });
        }
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h1>NewsGyan - Top Headlines</h1>
                    <div className="row">
                        {this.state.articles.map((ele) => {
                            return <div className="col-md-4" key={ele.url}>
                                <NewsItems title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description ? ele.description.slice(0, 85) : ""} imgUrl={ele.urlToImage} newsUrl={ele.url} />
                            </div>
                        })}

                    </div>
                </div>
                <div className="container d-flex justify-content-between my-4">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleOnPrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleOnNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
