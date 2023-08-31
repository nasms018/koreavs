import React from 'react'

const peaks = [
  {name:"Freel Peak", elevation:10891},
  {name:"Monument Peak", elevation:10067},
  {name:"Pyramid Peak", elevation:9983},
  {name:"Mt. Tallac", elevation:9735}
]

function List({data=[], itemRenderMethod={}, empty}){
  if(!data || data.length == 0){
    return empty;
  }
  return (<>
    {data.map((item, idx)=>(<li key={idx}> {itemRenderMethod(item)} </li>))}
  </>)

}

export default function AppStudy2P231RenderProps() {
    return (<List data={peaks}
      empty = {<p>this list is empty!</p>}
      itemRenderMethod = {
        (item) =>(
          <>
            {item.name} - {item.elevation.toLocaleString()}ft
          </>
        )}
      />
    )
}
