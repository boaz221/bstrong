/*global require*/

import React from 'react';
import PropTypes from 'prop-types';

import "./ArticlePreview.css";

function ArticlePreview(props) {
    const {index, article} = props;

    return (
        <div className="article-preview-container">
            <h3 className="article-title"><span className="title-index">{index.toLocaleString('en-US', {minimumIntegerDigits: 2})}.</span> {article.title}</h3>
            <a className="link-to-article" href={article.link}>
                <img className="article-preview" alt="article-preview" src={`/api/articles/assets/${article.previewImageName}`}/>
            </a>
        </div>
    );
}

ArticlePreview.propTypes = {article: PropTypes.object.isRequired, index: PropTypes.number.isRequired};
ArticlePreview.defaultProps = {};

export default ArticlePreview;
