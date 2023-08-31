import React, { useEffect, useState } from 'react'

const loadJSON = (key) => {
  key && JSON.parse(localStorage.getItem(key));
}

const saveJSON = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

//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
//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
function GithubUser({ loginId }) {
  const [userData, setUserData] = useState(loadJSON(`user:${loginId}`));
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loginId) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${loginId}`,{
      method: "Get",
      headers: {Authorization: `Bearer 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`}
    })
      .then(response => response.json())
      .then(setUserData)
      .then(()=>setLoading(false))
      .catch(setError);
  }, [loginId])

  useEffect(() => {
    if(!userData) return;
    console.log(`userData 저장 준비중!!`)
    if(userData.login === loginId) return;
    console.log(`userData 저장 한다!!`) 
    const {login, name, location, avatar_url, html_url} = userData;
    saveJSON(`user:${login}`,{
      login, name, location, avatar_url, html_url })
  }, [userData])

  if (loading) return <h1>loading...</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (userData) {
    return <div>
      <img src={userData.avatar_url} alt={userData.login}  style={{width:200}}/>
      <div>
        <h1>{userData.login}</h1>
        {userData.name&&<p>{userData.name}</p>}
        {userData.location&&<p>{userData.location}</p>}
      </div>
    </div>
  } else { return null; }
}

export default function AppStudy2P229() {
  return (
    <GithubUser loginId="nasms018" />
  )
}
