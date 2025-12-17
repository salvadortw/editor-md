import { useState, useEffect } from "react";

function useLocalStorage(localStorageKey, defaulValue) {
  const inititalValue =
    JSON.parse(localStorage.getItem(localStorageKey)) || defaulValue;
  const [value, setValue] = useState(inititalValue);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
