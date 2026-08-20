import { useState } from "react";
function FormDemo() {
    const [name,setName] = useState("");
    function handleChange(event) {
        setName(event.target.value);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        alert("Submitted name: "+name);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h4>Form Demo</h4>
            Name:
            <input type="text"
                value = {name}
                onChange = {handleChange}
            />
            <button type="submit">Submit</button>
            <p>Entered name is: {name}</p>
        </form>
    );
}

export default FormDemo;