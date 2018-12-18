import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './feed.css'

import { fetchFeeds } from '../../services/FeedService';

import { Textpost } from '../partials/Textpost';
import { Imagepost } from '../partials/Imagepost';
import { Videopost } from '../partials/Videopost';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeds: []
        };
    }

    componentDidMount() {
        fetchFeeds()
            .then(feeds => {
                this.setState({
                    feeds
                });
            });
    }

    render() {
        const feedPosts = this.state.feeds.map((feed) => {
            switch (feed.type) {
                case 'text':
                    return <Link to={`/post/${feed.type}/${feed.id}`}><Textpost video={feed.text} comment={feed.comments} /></Link>;
                case 'image':
                    return <Link to={`/post/${feed.type}/${feed.id}`}><Imagepost image={feed.image} comment={feed.comments} /></Link>;
                case 'video':
                    return <Link to={`/post/${feed.type}/${feed.id}`}><Videopost video={feed.video} comment={feed.comments} /></Link>;
                default:
                    return <h1>This is not Feed!</h1>;
            };
        });

        return (
            <div className="container mtb-80auto70">
                {feedPosts}
            </div>
        );
    };
}

export {
    Feed
};