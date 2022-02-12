import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Journaldetails = () => {
    
    
    const {id} = useParams();
    const {data :journal,isPending, errorhandle} = useFetch('http://localhost:8000/journal/' + id)
    const history = useHistory();
    const handledelete =()=>{

       fetch('http://localhost:8000/journal/' + journal.id,{
           method:"DELETE"
       }).then(()=>{
           history.push("/");
       })
    }
   
   
   return (<div className="blog-details">
               { isPending && <div>Loading...</div>}
               { errorhandle && <div>{errorhandle}  </div>}
              {journal && <article>
                  <h2>{journal.text}</h2>
              </article>}
             <button onClick={handledelete}>Delete</button>      

    </div>  );
}
 
export default Journaldetails;