import { useEffect, useState } from 'react';

function useFetch(url) {
  const [value, setValue] = useState(null);

  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    setValue(data);
  }

  useEffect(() => {
    fetchData();
  });

  return value;
}

export default useFetch;
