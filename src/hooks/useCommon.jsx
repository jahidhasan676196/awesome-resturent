import axios from 'axios';


const axionCommon=axios.create({
    baseURL: 'http://localhost:5000'
})
const useCommon = () => {
    return axionCommon
};

export default useCommon;