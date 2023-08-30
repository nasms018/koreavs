import React, { useEffect, useState } from 'react'



export default function AppStudy2P189() {
    const [val, setVal] = useState("");
    const [phrase, setPhrase] = useState("example prase")
    const createPhrase = () => {
      setPhrase(val);
      setVal("");
    }
    useEffect(()=>{
      //PWD 대 소 특 숫자 8글자 이상. 패턴 매칭
      console.log(`typing "${val}"`)
    }, [val])
    useEffect(()=>{
      console.log(`saved phrase: "${phrase}"`)
    }, [phrase])
  return (<div>
    <label>Favorite phrase</label>
    <input value={val} placeholder={phrase} onChange={e=>setVal(e.target.value)}/>
    <button onClick={createPhrase}>send</button>
    </div>
  )
}
