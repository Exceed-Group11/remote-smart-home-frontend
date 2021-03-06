import axios from 'axios';
import { getSessionId } from '../utils/cookie_util';


export async function login(username, password) {
    let sessionId = getSessionId();
    const res = await axios.post('https://ecourse.cpe.ku.ac.th/exceed11/api/user/signin/', {
        "username": username,
        "password": password,
        "token": sessionId
    })
}

export async function register(username, password, hardwareId) {
    const res = await axios.post('https://ecourse.cpe.ku.ac.th/exceed11/api/user/register/', {
        "username": username,
        "password": password,
        "hardwareId": hardwareId
    })
}

export async function logout() {
    let sessionId = getSessionId()
    axios({
        method: 'POST',
        url: "https://ecourse.cpe.ku.ac.th/exceed11/api/user/signout/",
        headers: {
            "Authorization": `Bearer ${sessionId}`
        }
    })
    console.log("Logged Out Success")
    window.location.assign('/')
}

