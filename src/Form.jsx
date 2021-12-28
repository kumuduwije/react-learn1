import React, {useState} from "react";


function MyForm(){
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('The name you entered was: ' + name)

    }

    return <>

        <h4>Form Using React </h4>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    </>


}

export default MyForm;