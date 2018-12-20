import React, { Component, Fragment } from 'react';

import './feed.css';

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
            .then(feed => this.setState({ feed }));
    }

    render() {
        const { feed } = this.state;
        const post = <h1>This is not Feed!</h1>;
        if (feed.type || feed.type === "text") {
            post = <Textpost video={feed.text} comment={feed.comments} />;
        } else if (feed.type || feed.type === "image") {
            post = <Imagepost image={feed.image} comment={feed.comments} />;
        } else if (feed.type || feed.type === "video") {
            post = <Videopost video={feed.video} comment={feed.comments} />;
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