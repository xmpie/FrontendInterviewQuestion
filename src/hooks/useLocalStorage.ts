import { useState, useEffect } from 'react';

type ChangeValue<T> = (value: Set<T>) => void;

export function useSetLocalStorage<T>(key: string, initialValue: Set<T>): [Set<T>, ChangeValue<T>] {
  const [storedValue, setStoredvalue] = useState<Set<T>>(() => {
    const item = window.localStorage.getItem(key);
    return item ? new Set(JSON.parse(item)) : initialValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(Array.from(storedValue)));
  }, [key, storedValue]);

  const changeValue = (value: Set<T>) => {
    setStoredvalue(value);
  };

  return [storedValue, changeValue];
}
