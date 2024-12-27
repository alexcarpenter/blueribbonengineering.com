"use client";

import { useEffect, useState } from "react";

export function Datetime() {
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toUTCString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date().toUTCString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <time suppressHydrationWarning>{currentDateTime}</time>;
}
