import axios from 'axios'

const MyAxios= axios.create({
    baseURL:'https://onedeals-realty.onrender.com/api/admin/'
})
export default MyAxios