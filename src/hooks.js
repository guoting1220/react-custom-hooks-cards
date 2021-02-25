import {useEffect, useState} from 'react';
import axios from "axios";
import { v4 as uuid } from 'uuid';


const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);

    const flip = () => {
        setState(state => !state);
    }
    return [state, flip];
}


const useAxios = (lsKey, baseUrl) => {
    const [dataArr, setDataArr] = useLocalStorage(lsKey);    

    const addData = async (formatter, restUrl = "") => {    
        const response = await axios.get(`${baseUrl}${restUrl}`);
        setDataArr(dataArr => [...dataArr, { ...formatter(response.data), id: uuid()}]);
    }

    const clearDataArr = () => {
        setDataArr([]);
    }

    return [dataArr, addData, clearDataArr];
}


const useLocalStorage = (lsKey) => {
    const [state, setState] = useState(() => {
        return JSON.parse(window.localStorage.getItem(lsKey)) || [];
    })

    useEffect(() => {
        window.localStorage.setItem(lsKey, JSON.stringify(state));
    }, [lsKey, state])

    return [state, setState]
}


export { useFlip, useAxios, useLocalStorage};