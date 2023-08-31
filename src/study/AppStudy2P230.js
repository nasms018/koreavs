import React, { useEffect, useState } from 'react'

const loadJSON = (key) => {
  key && JSON.parse(localStorage.getItem(key));
}

const saveJSON = (key, data) => {
  console.log(`saveJSON의 키 ${key}  데이터 ${JSON.stringify(data)}`);
  localStorage.setItem(key, JSON.stringify(data));
}

//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
//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
function GithubUser({ loginId }) {
  console.log(`콘솔로그확인user:${loginId}`)
  const [savedUserData] = useState(loadJSON(`user:${loginId}`));
  const [userData, setUserData] = useState();
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
    if(savedUserData && savedUserData.updated_at === userData.updated_at) {
       console.log("저장되어있음"); return;
      }
    console.log(`userData 저장 한다!!`) 
    const {login, name, location, avatar_url, html_url, updated_at} = userData;
    const saveDataImage = {login, name, location, avatar_url, html_url, updated_at};
    console.log(`${saveDataImage} 이렇게 저장했다`);
    saveJSON(`user:${login}`,{
      login, name, location, avatar_url, html_url, updated_at })
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

export default function AppStudy2P230() {
  return (
    <GithubUser loginId="nasms018" />
  )
}
