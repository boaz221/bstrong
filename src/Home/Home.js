import _ from 'lodash';
import React, {Component} from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import './Home.css';
import Navbar from '../Navbar/Navbar';
import ArticlesProvider from "./Articles.proxy";
import ArticlePreview from "./ArticlePreview/ArticlePreview";

export default class Home extends Component {
    state = {
        articles: [],
        loaded: false
    };

    async componentDidMount() {
        const articles = await ArticlesProvider.get();
        this.setState({articles, loaded: true});
    }

    render() {
        const {loaded, articles} = this.state;

        return (
            <div className="home page-container">
                <Navbar {...this.props}/>
                <div className="articles-container">
                    <h2 className="articles-header">Examples Articles To Help You Get To Know The Suit</h2>
                    {
                        loaded ?
                            _.map(articles, (article, index) => <ArticlePreview key={index} index={index} article={article}/>)
                            :
                            <LinearProgress mode="indeterminate"/>
                    }
                </div>
            </div>
        );
    }
}
