import { Link } from "react-router-dom";

const Renderlist = ({journal}) => {
   return (
        <div className="blog-list">
         { journal.map((jo) =>(
              <div className="blog-preview" key={jo.id}> 
               <Link to ={`journals/${jo.id}`}>
                  <h2>Journal {jo.id}</h2>
                  <p>{jo.text}</p>
                  </Link>
                  </div> 
         ))}
        
    </div> 

     );
}
 
export default Renderlist;