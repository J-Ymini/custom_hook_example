import { useState, useEffect } from "react";

const useTimer = (mm: number, ss: number) => {
  const [minutes, setMinute] = useState(mm);
  const [seconds, setSeconds] = useState(ss);
  const [initialState, isInitialState] = useState(true);

  const activateTimer = (minutes: number, seconds: number) => {
    isInitialState(false);
    setMinute(minutes);
    setSeconds(seconds);
  };

  const getMinutes = (minutes: number): string => {
    const stringifyMinutes = minutes.toString();

    if (minutes < 10) {
      return `0${stringifyMinutes}`;
    }
    return stringifyMinutes;
  };

  const getSeconds = (seconds: number): string => {
    const stringifySeconds = seconds.toString();

    if (seconds < 10) {
      return `0${stringifySeconds}`;
    }
    return stringifySeconds;
  };

  const resetTimer = () => {
    setMinute(0);
    setSeconds(0);
  };

  useEffect(() => {
    const countDown = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
        return;
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countDown);
          return;
        }

        if (minutes !== 0) {
          setSeconds(59);
          setMinute((prev) => prev - 1);
          return;
        }
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [minutes, seconds]);

  return {
    minutes: getMinutes(minutes),
    seconds: getSeconds(seconds),
    initialState,
    activateTimer,
    resetTimer,
  };
};

export default useTimer;
