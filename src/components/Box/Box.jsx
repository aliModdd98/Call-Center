import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./BoxStyle.css"
const CounterCell = ({ initialValue, inView }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < initialValue) {
            return prevCount + 1;
          } else {
            clearInterval(timer);
            return prevCount;
          }
        });
      }, 90);

      return () => {
        clearInterval(timer);
      };
    }
  }, [initialValue, inView]);

  return <span className="cell num">{count}</span>;
};

const Box = ({ title, counter }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="gridItem">
      <div className="titleGrid">
        <span><CounterCell initialValue={counter}/></span>
      </div>
      <div className="descGrid">
        <span>{title}</span> 
      </div>
    </div>
  );
};

export default Box;