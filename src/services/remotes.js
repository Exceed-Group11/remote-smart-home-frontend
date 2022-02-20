import axios from 'axios'
import { getSessionId } from '../utils/cookie_util'


export async function getRemoteById(id) {
    const response = await axios.get(`https://ecourse.cpe.ku.ac.th/exceed11/api/remote/${id}/structure/`)
    return response.data
}

export async function deleteRemote(id) {
    let sessionId = getSessionId()
    axios({
        method: 'DELETE',
        url: `https://ecourse.cpe.ku.ac.th/exceed11/api/remote/${id}/`,
        headers: {
            "Authorization": `Bearer ${sessionId}`
        }
    })
}

export async function getRemoteStatusById(id) {
    let sessionId = getSessionId()
    const response = await axios({
        method: 'GET',
        url: `https://ecourse.cpe.ku.ac.th/exceed11/api/remote/${id}/`,
        headers: {
            "Authorization": `Bearer ${sessionId}`
        }
    })
    return response.data
}