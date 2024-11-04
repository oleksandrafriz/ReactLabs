import { useState, useCallback } from "react";

export default function useClipboard (){
    const[isCopy, setIsCopy] = useState(false);

    const copyToClipboard = useCallback((text) => {
        if(navigator.clipboard){
            navigator.clipboard.writeText(text).then(() =>{
                setIsCopy(true);
                setTimeout(() => setIsCopy(false), 3000)
            })
        } else{
            return console.error('Clipboard API not supported')
        }
    }, [])

    return {isCopy, copyToClipboard}
}