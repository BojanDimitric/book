import { BASE_ENDPOINT } from '../shared/Constants';
import { User } from '../entities/Entities'

const fetchUsers = () => {
    return fetch(`${BASE_ENDPOINT}/api/users`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        }
    })
        .then(response => response.json())
        .then(users => {
            return users.map(user => new User(user.id, user.name, user.about, user.lastPostDate, user.avatarUrl));
        });
};

export {
    fetchUsers
};