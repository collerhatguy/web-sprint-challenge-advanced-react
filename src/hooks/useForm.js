// write your custom hook here to control your checkout form
import { useState } from "react"

const useForm = (initialValues) => {

    const [err, setErr] = useState(true);
    const [values, setValues] = useState(initialValues);
  
    const change = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    
    const submit = (e) => {
        e.preventDefault();
        setErr(false);
    };

    return [change, submit, err, values]
}

export default useForm;
