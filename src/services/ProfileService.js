import { BASE_ENDPOINT } from '../shared/Constants';
import { Profile } from '../entities/Entities';

const fetchProfile = () => {
    return fetch(`${BASE_ENDPOINT}/api/Profile`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        }
    })
        .then(response => response.json())
        .then(profile => {
            return new Profile(profile.userId, profile.name, profile.email, profile.aboutShort, profile.about, profile.avatarUrl, profile.postsCount, profile.commentsCount);
        });
};

const fetchProfileID = (id) => {
    return fetch(`${BASE_ENDPOINT}/api/users/${id}`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        }
    })
        .then(response => response.json())
        .then(profile => {
            return new Profile(profile.userId, profile.name, profile.email, profile.aboutShort, profile.about, profile.avatarUrl, profile.postsCount, profile.commentsCount);
        });
};

export {
    fetchProfile,
    fetchProfileID
};
