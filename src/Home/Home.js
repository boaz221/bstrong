import _ from 'lodash';
import Paper from 'material-ui/Paper';
import React, {Component} from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import './Home.css';
import homeStyle from './Home.css.js';
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
                <Paper className="articles-container-paper" zDepth={2} rounded={false} style={homeStyle.articlesContainerPaper}>
                    <div className="articles-container">
                        <h2 className="articles-header">Articles To Help You Get To Know The Suit</h2>
                        {
                            loaded ?
                                _.map(articles, (article, index) => <ArticlePreview key={index} index={++index}
                                                                                    article={article}/>)
                                :
                                <LinearProgress mode="indeterminate"/>
                        }
                    </div>
                </Paper>
            </div>
        );
    }
}
