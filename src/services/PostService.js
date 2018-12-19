import { BASE_ENDPOINT } from '../shared/Constants';

const createTextPost = (post) => {
    return fetch(`${BASE_ENDPOINT}/api/TextPosts`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        },
        body: JSON.stringify({
            text: post
        })
    }).then(res => res.json());
};

const createImagePost = (post) => {
    return fetch(`${BASE_ENDPOINT}/api/ImagePosts`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        },
        body: JSON.stringify({
            text: post
        })
    }).then(res => res.json());
};

const createVideoPost = (post) => {
    return fetch(`${BASE_ENDPOINT}/api/VideoPosts`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        },
        body: JSON.stringify({
            text: post
        })
    }).then(res => res.json());
};

export {

    createTextPost,
    createImagePost,
    createVideoPost
};