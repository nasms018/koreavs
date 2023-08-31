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
  useEffect(() => {
    if (!loginId) return;
    fetch(`https://api.github.com/users/${loginId}`,{
      method: "Get",
      headers: {Authorization: `Bearer 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`}
    })
      .then(response => response.json())
      .then(setUserData)
      .catch(console.error);
  }, [loginId])

  useEffect(() => {
    if(!userData) return;
    console.log(`userData 저장 준비중!!`)
    if(userData.login === loginId) return;
    console.log(`userData 저장 한다!!`) //moonhighway에서만 저장됨
    const {login, name, location, avatar_url, html_url} = userData;
    saveJSON(`user:${login}`,{
      login, name, location, avatar_url, html_url })
  }, [userData])


  if (userData) {
    return <pre>{JSON.stringify(userData, null, 2)}</pre>
  } else { return null; }
}

export default function AppStudy2P225() {
  return (
    <GithubUser loginId="moonhighway" />
  )
}
