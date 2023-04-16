import { useState, useEffect } from 'react';

type ChangeValue<T> = (value: T) => void;

export function useLocalStorage<T>(key: string, initialValue: T): [T, ChangeValue<T>] {
  const [storedValue, setStoredvalue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  const changeValue = (value: T) => {
    setStoredvalue(value);
  };

  return [storedValue, changeValue];
}
