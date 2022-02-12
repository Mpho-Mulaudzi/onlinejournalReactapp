import {useState} from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
      const [text,setTitle] =useState('');
      const history = useHistory();
         
      const handleSubmit =(e)=>{
      
         const journal ={text};
         //POST request -pushes our data to JSON server
          fetch('http://localhost:8000/journal/',{
              method: 'POST',
              headers: {"Content-Type" : "application/json"},
              body: JSON.stringify(journal)
            
          }).then(()=>{
            history.push('/');
          })
          //redirects back to the home page
      }

    return (<div className="create">
        <h2>Would you like to tell me about your day ?</h2>
           <form onSubmit={handleSubmit}>
               <label> Share your thoughts :</label>
               <textarea required 
               value={text}
               onChange= {(e)=>setTitle(e.target.value)}
               ></textarea>
               <button>Add Journal</button>
           </form>
    </div>  );
}
 
export default Create;
