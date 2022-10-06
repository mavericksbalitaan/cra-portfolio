import moment from 'moment';
import { useEffect, useState } from 'react';
import '../stylesheets/clock.scss';

function Clock() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format('DD-MMM-YY hh:mm:ss A'));
    }, 1000);
  }, []);

  return <span className="timer">{time}</span>;
}

export default Clock;
