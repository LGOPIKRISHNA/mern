import { useState } from "react"; 
export default function Feedback(){
    const [formData,SubmitFormData]=useState({name:"",roll:"",feedback:""});
    const [table,SubmitTable]=useState([]);
    function HandleChange(e){
        const {name,value}=e.target
        SubmitFormData({...formData,[name]:value})
    }
    function HandleSubmit(e){
        const {name,value}=e.target
        SubmitTable([...table,formData]);
        SubmitFormData({name:"",roll:"",feedback:""})
    }
    return(
        <div>
            <input type="text" name="name" onChange={HandleChange} value={formData.name} placeholder="enter your name"/>
            <input type="text" name="roll" onChange={HandleChange} value={formData.roll} placeholder="enter your rolnumber"/>
            <input type="text" name="feedback" onChange={HandleChange} value={formData.feedback} placeholder="enter your feedback"/>
            <button onClick={HandleSubmit}>submit</button>

            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>RollNumber</td>
                    <td>Feedback</td>
                </tr>
                </thead>
                <tbody>
                    {table.map((key,index)=>(
                    <tr>
                        <td>{key.name}</td>
                        <td>{key.roll}</td>
                        <td>{key.feedback}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}