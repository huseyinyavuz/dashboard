import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [pending, setPending] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        setPending(true);
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setData(res);
            setPending(false);
        })

    },[])

    return [data, pending];
}

export default useFetch;