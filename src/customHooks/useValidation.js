import { useEffect, useState } from 'react';

const useValidation = (e) => {
    debugger
    const [validation, setValidation] = useState({
        select: false,
        name: false,
        email: false,
        send: false
    });
    useEffect(() => {
        setValidation({select: true})
    }, []);
    console.log(e, validation)
    return console.log("funciona")
}

export default useValidation;