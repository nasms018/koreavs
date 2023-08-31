import { useEffect } from "react";
import {useIterator} from "hooks/useIterator";

export default function RepoItem({repositories, onSelect = f=>f}) {
    const {item, prev, next} = useIterator(repositories);

    useEffect(()=>{
        if (!item) return;
        onSelect(item);
    }, [item]);
    
    return <div style={{display:"flex"}}>
        <button onClick={prev}>&lt;</button>
        <p>{item.name}</p>
        <button onClick={next}>&gt;</button>
    </div>; 
}