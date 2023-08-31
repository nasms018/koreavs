import React, { useState, useEffect } from 'react';

export function AppStudy2P241UseFetch(uri) {
  const [data] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect (() => {
    if (!uri) return;
    fetch(uri)
      .then(data => data.json())
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading, data, error 
  };

}
