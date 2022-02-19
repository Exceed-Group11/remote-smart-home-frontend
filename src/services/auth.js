import axios from 'axios';
import { getSessionId } from '../utils/cookie_util';
import { useNavigate } from 'react-router-dom';


export async function login(username, password) {
    let sessionId = getSessionId();
    // axios({
    //     method: 'POST',
    //     headers: {
    //         "Authorization": "Bearer {SessionId}"
    //     },
    //     data: {

    //     }
    // })
    const res = await axios.post('https://ecourse.cpe.ku.ac.th/exceed11/api/user/signin/', {
        "username": username,
        "password": password,
        "token": sessionId
    })
    return true
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