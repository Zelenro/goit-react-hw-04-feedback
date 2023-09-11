import React, { useState } from 'react';
import ReactDOM from 'react-dom'; 
import { Counter } from './counter/Counter';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;

  return (
    <div>
      <Counter
        good={good}
        neutral={neutral}
        bad={bad}
        onLeaveFeedback={handleLeaveFeedback}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


