import { BASE_ENDPOINT } from '../shared/Constants';
import { Text, Image, Video } from '../entities/Entities';

const fetchFeeds = () => {
    return fetch(`${BASE_ENDPOINT}/api/Posts`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        }
    })
        .then(response => response.json())
        .then(feeds => {
            return feeds.map(feed => {
                if (feed.type || feed.type === "text") {
                    return new Text(feed.id, feed.type, feed.text, feed.commentsNum);
                } else if (feed.type || feed.type === "text") {
                    return new Image(feed.id, feed.type, feed.imageUrl, feed.commentsNum);
                } else if (feed.type || feed.type === "text") {
                    const videoUrl = (feed.videoUrl.includes('youtube') || feed.videoUrl.includes('embed')) ? feed.videoUrl : '';
                    return new Video(feed.id, feed.type, videoUrl, feed.commentsNum);
                } else {
                    return null;
                };
            });
        });
};

const fetchFeedID = (id) => {
    return fetch(`${BASE_ENDPOINT}/api/Posts/${id}`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        }
    })
        .then(response => response.json())
        .then(feed => {
            if (feed.type || feed.type === "text") {
                return new Text(feed.id, feed.type, feed.text, feed.commentsNum);
            } else if (feed.type || feed.type === "text") {
                return new Image(feed.id, feed.type, feed.imageUrl, feed.commentsNum);
            } else if (feed.type || feed.type === "text") {
                const videoUrl = (feed.videoUrl.includes('youtube') || feed.videoUrl.includes('embed')) ? feed.videoUrl : '';
                return new Video(feed.id, feed.type, videoUrl, feed.commentsNum);
            } else {
                return null;
            };
        });
};

export {
    fetchFeeds,
    fetchFeedID
};