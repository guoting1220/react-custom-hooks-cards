import {useState} from 'react';
import axios from "axios";
import { v4 as uuid } from 'uuid';


const useFlip = () => {
    const [state, setState] = useState(true);

    const flip = () => {
        setState(state => !state);
    }
    return [state, flip];
}


const useAxios = (baseUrl) => {
    const [dataArr, setDataArr]= useState([]);

    const addData = async (restUrl = "") => {    
        const response = await axios.get(`${baseUrl}${restUrl}`);
        setDataArr(dataArr => [...dataArr, { ...response.data, id: uuid()}]);
    }

    return [dataArr, addData];
}


export { useFlip, useAxios};