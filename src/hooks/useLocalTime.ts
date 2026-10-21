import { useEffect, useState } from 'react';
import { getBarodaTimeString } from '@/lib/utils';

export function useLocalTime() {
  const [timeData, setTimeData] = useState(() => getBarodaTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeData(getBarodaTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeData;
}
