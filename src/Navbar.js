import img1 from './avatars/download.png';
import {Link} from "react-router-dom";
const Navbar = () => {
    
   return ( 
        <nav className="navbar"> 
           <h1>Write your thoughts </h1>
           <img src={img1} width="60px" borderRadius="13px" alt=""/>
           <div className="links">
              <Link to="/" style ={{color:"#039cc2"
    ,borderRadius:"4px"}}>Home</Link>
              <Link to="/create" style ={{color:"#039cc2"
    ,borderRadius:"4px"}}>Journals</Link>
              <a href ="/"style ={{color:"#039cc2"
    ,borderRadius:"4px"}}>Mpho_Mulaudzi</a>
 
             
           </div>
         
            
        </nav>


   );
}
 

export default Navbar