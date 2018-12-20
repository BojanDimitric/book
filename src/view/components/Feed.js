import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './feed.css'

import { fetchFeeds } from '../../services/FeedService';

import { Textpost } from '../partials/Textpost';
import { Imagepost } from '../partials/Imagepost';
import { Videopost } from '../partials/Videopost';
import { Newpost } from './Newpost';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeds: []
        };
    }

    loadPosts = () => {
        fetchFeeds()
            .then(feeds => {
                this.setState({
                    feeds
                });
            });
    };

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        const feedPosts = this.state.feeds.map((feed) => {
            switch (feed.type) {
                case 'text':
                    return <Link to={`/Post/${feed.id}`}><Textpost video={feed.text} comment={feed.comments} /></Link>;
                case 'image':
                    return <Link to={`/Post/${feed.id}`}><Imagepost image={feed.image} comment={feed.comments} /></Link>;
                case 'video':
                    return <Link to={`/Post/${feed.id}`}><Videopost video={feed.video} comment={feed.comments} /></Link>;
                default:
                    return <h1>This is not Feed!</h1>;
            };
        });

        return (
            <Fragment>
                <div className="container mtb-80auto70">
                    {feedPosts}
                </div>
                <Newpost afterCreation={this.loadPosts} />
            </Fragment>
        );
    };
}

export {
    Feed
};