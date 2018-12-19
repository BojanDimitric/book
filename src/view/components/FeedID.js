import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './feed.css'

import { fetchFeedID } from '../../services/FeedService';

import { Textpost } from '../partials/Textpost';
import { Imagepost } from '../partials/Imagepost';
import { Videopost } from '../partials/Videopost';

class FeedID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: {}
        };
    }

    componentDidMount() {
        fetchFeedID(this.props.match.params.id)
            .then(feed => {
                this.setState({
                    feed
                });
            });
    }

    render() {
        const { feed } = this.state;
        console.log(feed);
        const post = <h1>This is not Feed!</h1>;
        if (feed.type === "text") {
            post = <Link to={`/post/${feed.type}/${feed.id}`}><Textpost video={feed.text} comment={feed.comments} /></Link>;
        } else if (this.state.feed.type === "image") {
            post = <Link to={`/post/${feed.type}/${feed.id}`}><Imagepost image={feed.image} comment={feed.comments} /></Link>;
        } else if (this.state.feed.type === "video") {
            post = <Link to={`/post/${feed.type}/${feed.id}`}><Videopost video={feed.video} comment={feed.comments} /></Link>;
        };
        return (
            <Fragment>
                <div className="container mtb-80auto70">
                    {post}
                </div>
            </Fragment>
        );
    };
}

export {
    FeedID
};