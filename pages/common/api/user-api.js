import axios  from 'axios';
const SERVER = `http://localhost:5000`

export const memberLogin = loginRequest => axios.post(`${SERVER}/member/login`, loginRequest)

