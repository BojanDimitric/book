import { BASE_ENDPOINT } from '../shared/Constants';

const deletePost = (id) => {
    return fetch(`${BASE_ENDPOINT}/api/Posts/${id}`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        },
        body: JSON.stringify({
            'id': id
        })
    });
};

export {
    deletePost
};