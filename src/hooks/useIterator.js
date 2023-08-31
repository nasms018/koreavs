import React, { useState, useCallback, useMemo } from 'react';
//P247
function useIterator(items=[], initIdx=0) {
  const [curIdx,setcurIdx] = useState(initIdx);
  const prev = useCallback(()=>{ curIdx === 0 ? setcurIdx(items.length-1) : setcurIdx(curIdx-1);});
  const next = useCallback(()=>{ curIdx === items.length-1 ? setcurIdx(0): setcurIdx(curIdx+1);})
  const memoizedItem = useMemo(()=>items[curIdx], [curIdx])

  return {items: memoizedItem||items[initIdx], prev, next};
}
export {useIterator};


/*
before memorization
function useIterator(item=[], initIdx=0) {
  const [curIdx,setcurIdx] = useState(initIdx);
  const prev = () => {
    curIdx === 0 ? setcurIdx(item.length-1) : setcurIdx(curIdx-1);
  }  
  const next = () => {
    curIdx === item.length-1 ? setcurIdx(0): setcurIdx(curIdx+1);
  }

  return {item:item[curIdx], prev, next};
}
export {useIterator}
*/