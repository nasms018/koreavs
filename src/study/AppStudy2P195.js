import React, { useEffect, useState } from 'react'
//메모 도입부

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();
  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

function WordCount({children =""}){
  //랜더링 강제화
  useAnyKeyToRender()
  const word = children.split(" ")

  useEffect(() => {
    //반복적으로 구동되는 군!! 노리는 효과가 아님..
    console.log("refresh render111");
  }, [word]);
}

export default function AppStudy2P195() {
  return (
    <WordCount>You are not going to believe this but...
      </WordCount>
  )
}
