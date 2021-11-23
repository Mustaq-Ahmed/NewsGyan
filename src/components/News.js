import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "ABC News",
            "title": "Coach Justin Langer not on panel to select Tim Paine's replacement as Australian Test captain",
            "description": "Cricket Australia will soon name its 47th men's Test captain, having finalised the five-person panel that will mull whether to elevate Pat Cummins.",
            "url": "http://www.abc.net.au/news/2021-11-23/justin-langer-not-on-panel-to-select-new-captain-tim-paine/100645014",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/972e5008cc44bd0106546c617e2f1aac?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=257&width=862&height=485",
            "publishedAt": "2021-11-23T08:28:29Z",
            "content": "Cricket Australia has firmed up the process that is expected to result in Pat Cummins' ascension as the 47th captain of the national men's Test side.\r\n<ul><li>Justin Langer will not sit on the five-p… [+3738 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "Treatment of Paine has been 'appalling'",
            "description": "The treatment of Tim Paine has been the \"worst of an Australia Test captain in 50 years\", says Cricket Tasmania.",
            "url": "http://www.bbc.co.uk/sport/cricket/59384682",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/CA68/production/_121761815_paine_epa.jpg",
            "publishedAt": "2021-11-23T08:22:24.1219243Z",
            "content": "The treatment of Tim Paine has been the \"worst of an Australia Test captain in 50 years\", says Cricket Tasmania.\r\nPaine stepped down on Friday over an investigation into sexually explicit texts he se… [+2194 chars]"
        },
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "Ellen Coulter",
            "title": "Tim Paine's treatment by Cricket Australia 'appalling', Cricket Tasmania says",
            "description": "The board of Cricket Tasmania condemns the treatment of former Test captain Tim Paine by Cricket Australia, saying the national body regarded him as \"dispensable\".",
            "url": "http://www.abc.net.au/news/2021-11-23/tim-paine-treatment-cricket-tasmania-condemns-cricket-australia/100642478",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/57705f9aad6878814e2a52b71d92034b?impolicy=wcms_crop_resize&cropH=2354&cropW=4185&xPos=225&yPos=459&width=862&height=485",
            "publishedAt": "2021-11-23T03:11:00Z",
            "content": "The board of Cricket Tasmania has condemned the treatment of former Test captain Tim Paine by Cricket Australia (CA), after his resignation due to a sexting scandal on Friday.\r\nKey points:\r\n<ul><li>C… [+6307 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "How is cricket tackling its diversity problem?",
            "description": "A South Asian Action Plan was launched in 2018 to improve diversity in cricket - so what's happened since?",
            "url": "http://www.bbc.co.uk/sport/cricket/59376476",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/DAED/production/_121754065_headingley.jpg",
            "publishedAt": "2021-11-22T18:37:26.9788193Z",
            "content": "Former Yorkshire cricketer Azeem Rafiq has described this as a 'watershed' moment\r\nAzeem Rafiq's testimony on racism in cricket has led to a period of soul-searching within the sport - which England … [+11155 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        console.log("This is my constructor function in Inheritance class")
        this.state = {
            articles : this.articles,
            loading : false
        };
    }
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2>NewsGyan - Top Headlines</h2>
                    <div className="row">
                        {this.state.articles.map( (ele) => {                      
                         return <div className="col-md-4" key={ele.url}>
                            <NewsItems title={ele.title.slice(0,45)} description={ele.description.slice(0,85)} imgUrl={ele.urlToImage} newsUrl={ele.url}/>
                        </div> })}

                    </div>
                </div>
            </div>
        )
    }
}

export default News
