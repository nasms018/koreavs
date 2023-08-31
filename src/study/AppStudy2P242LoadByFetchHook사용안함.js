import React, { useFetch } from 'react';

export function AppStudy2P242UseFetch({loginId}) {
  const {loading, userData, error}= useFetch(`https://api.github.com/users/${loginId}`);
  
    if (loading) return <h1>loading...</h1>
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  
      return (<div>
        <img src={userData.avatar_url} alt={userData.login}  style={{width:200}}/>
        <div>
          <h1>{userData.login}</h1>
          {userData.name && <p>{userData.name}</p>}
          {userData.location && <p>{userData.location}</p>}
        </div>
      </div>
      )
  } 