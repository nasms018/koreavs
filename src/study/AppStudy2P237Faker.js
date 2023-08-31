import React from 'react'
import {faker} from '@faker-js/faker'

//faker.locale = "ko";


const bigList = [...Array(500)].map(() => ({
  name:faker.person.firstName(),
  email:faker.internet.email(),
  avatar:faker.internet.avatar()

}))

function List({ data = [], itemRenderMethod = f=>f, empty=<></> }) {
  if (!data || data.length == 0) {
    return empty;
  }
  return (<>
    {data.map((item, idx) => (<li key={idx}> {itemRenderMethod(item)} </li>))}
  </>)

}

export default function AppStudy2P237Faker() {
  const itemRenderMethod = (item) => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  )
  return (<List data={bigList}
    itemRenderMethod={itemRenderMethod}
  />
  )
}
