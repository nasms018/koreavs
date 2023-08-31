import React, { useEffect, useState, useMemo } from 'react'


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
  const words = useMemo(()=>{
    console.log("children.split 재계산");
    
    return children.split(" ")
  },[]);
  

  useEffect(() => {
    //반복적으로 구동되는 군!! 노리는 효과가 아님..
    console.log("refresh render222");
  }, [words]);
}

async function requestGithubUser(loginId) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${loginId}`

    )
    const userData = await response.json();
    console.log(userData);
  } catch (err) {
    console.error(err);
  }
}

export default function AppStudy2P196() { //&P221
  //let welcomeChime = new Audio("resources/audio/bell.wav");
  //welcomeChime.play();
  requestGithubUser("nasms018");
  return (
    <WordCount>You are not going to believe this but...
      </WordCount>
  )
}
