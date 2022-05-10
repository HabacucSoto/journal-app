import axios from 'axios'

const journalAPI = axios.create({

    baseURL: 'https://vue-demos-c581e-default-rtdb.firebaseio.com'
    
})

export default journalAPI