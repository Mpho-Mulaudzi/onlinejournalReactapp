import { useEffect, useState } from "react";
import Renderlist from './renderlist';
import useFetch from './useFetch';
const Journals = () => {
   const {data:journal,isPending,errorhandle} = useFetch('http://localhost:8000/journal');
    return (
    <div> { errorhandle && <div>{ errorhandle }</div> }
          {isPending && <h2>loading...</h2>}  
          <h1>Journal(s) list - pun unintended :)</h1>   
        {journal&& <Renderlist journal={journal}/>}</div>
    );
}
 
export default Journals