'use client'
import { createContext, useState } from "react";


export const ResultContext = createContext({
});

const ResultProvider = (children) =>{
    const [result,setResult] = useState(null)
    const name = 'vitor'

    return (
        <ResultContext.Provider value={{result,setResult,name}}>
            {children}
        </ResultContext.Provider>
    )
}

export default ResultProvider;