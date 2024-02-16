import { useEffect, useState } from "react";

const getRandomCookieKey = () => {
  const len = 15;
  const randomNum = Math.floor(Math.random() * len);
  console.log("Math.random()", Math.random());
  console.log("randomNum", randomNum);
  return `cookie_${randomNum + 1}`;
};

export const useRandomPhrase = () => {
  const [cookieKey, setCookieKey] = useState("");

  useEffect(() => {
    const randomCookieKey = getRandomCookieKey();
    setCookieKey(randomCookieKey);
  }, []);

  return {
    cookieKey,
  };
};
