import React, { useEffect, useState } from 'react'


//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
//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
function GithubUser({ loginId }) {
  const [userData, setUserData] = useState();
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
  if (userData) {
    return <pre>{JSON.stringify(userData, null, 2)}</pre>
  } else { return null; }
}

export default function AppStudy2P223() {
  return (
    <GithubUser loginId="nasms018" />
  )
}
