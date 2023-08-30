import React, { useEffect, useState } from 'react'


const useAnyKeyToRender = () => {
  const [, forceRender] = useState();
  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};
export default function AppStudy2P194() {
  useAnyKeyToRender();
  //기본형 변수의 동등 비교는 같다. 변화가 없기에 효과 발생 안됨
  const word = "Asdf";
  //참조 객체가 다시 만들어 질 경우 주소가 다르니 변화되었다고 인식한다.
  const words = ["adsaf", "adsffs"]
  useEffect(() => { console.log("fresh render") }, [word])
  return (
    <h1> Open the console</h1>
  )
}
