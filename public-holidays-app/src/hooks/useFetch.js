import { useState, useEffect } from 'react';

export default function useFetch(url, check) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        if (check === true) {
          if (response.status === 204) {
            setData(false);
          }
          if (response.status === 200) {
            setData(true);
          }
        }
        else{
          const jsonData = await response.json();
          setData(jsonData);
        }
      
        setError(null);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url,check]);
  return { data, isLoading, error };
}
