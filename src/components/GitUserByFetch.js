import Fetch from "components/toolbox/Fetch.js";
import GitUserRepositories from "./GitUserRepositories";
export default function GitUserByFetch({ loginId }) {
  const uri = `https://api.github.com/users/${loginId}`;
  // 아래 renderSuccess함수로 할때
  /*
  const renderSuccess = data => (<div>
    <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
    <div>
      <h1>{data.login}</h1>
      {data.name && <p>{data.name}</p>}
      {data.location && <p>{data.location}</p>}
    </div>
  </div>);
//*/
  return <Fetch uri={uri} renderSuccess={renderSuccess} />

}

function renderSuccess({data}) {
  return (<div>
    <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
    <div>
      <h1>{data.login}</h1>
      {data.name && <p>{data.name}</p>}
      {data.location && <p>{data.location}</p>}
    </div>
    <GitUserRepositories loginId={"nasms018"} />
  </div>
  
  
  
  );
} 