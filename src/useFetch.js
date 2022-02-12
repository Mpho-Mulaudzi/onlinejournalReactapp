import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setdata]=useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errorhandle,setErrorhandle] =useState(null);

    useEffect(()=>{

        const abortcont = new AbortController();

        fetch(url,{signal:abortcont.signal})
        .then(res =>{
            if(!res.ok){
                throw Error("..could not load contents");
            }
          
            return res.json(); 
        })
        .then(data => {
            setIsPending(false);
            setdata(data);
            
            setErrorhandle(null);
          })
          .catch(err => {
              if(err.name==="Abort"){
                    console.log("Fetch Aborted");
              }
            // auto catches network / connection error
            setIsPending(false);
            setErrorhandle(err.message);
          })
          return ()=> abortcont.abort();
    },[url]);

    
    return{data,isPending,errorhandle};
}
 


export default useFetch