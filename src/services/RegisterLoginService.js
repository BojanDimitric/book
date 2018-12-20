import { BASE_ENDPOINT } from '../shared/Constants';

const registerUser = (username, email) => {
    return fetch(`${BASE_ENDPOINT}/register`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        },
        body: JSON.stringify({
            "username": username,
            "sessionId": "00000000-0000-0000-0000-000000000000",
            "name": "Pera",
            "surname": "Peric",
            "email": email,
            "avatarUrl": "pera.peric@bgit.rs"
        }).then(response => response.json())
    });
};

const loginUser = (username, email) => {
    return fetch(`${BASE_ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'no-cords',
            'Content-Type': 'application/json',
            'Key': 'bitbookdev',
            'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
        },
        body: JSON.stringify({
            "username": username,
            "sessionId": "00000000-0000-0000-0000-000000000000",
            "name": "Pera",
            "surname": "Peric",
            "email": email,
            "avatarUrl": "pera.peric@bgit.rs"
        }).then(response => response.json())
    });
};

export {
    registerUser,
    loginUser
};