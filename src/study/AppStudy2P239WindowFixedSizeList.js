import React from 'react';
import { faker } from '@faker-js/faker';
import { FixedSizeList } from 'react-window';
//faker.locale = "ko";

const bigList = [...Array(500)].map(() => ({
  name: faker.person.firstName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));

function MyList({ data = [], itemRenderMethod = f => f, empty = <></> }) {
  if (!data || data.length == 0) {
    return empty;
  }
  return (<>
    {data.map((item, idx) => (<li key={idx}> {itemRenderMethod(item)} </li>))}
  </>)

}

export default function AppStudy2P239WindowFixedSizeList() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );
  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
}
