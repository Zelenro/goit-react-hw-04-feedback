import React from 'react';
import { Notification } from '../notification/Notification';

export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = total === 0 ? 0 : Math.round((good * 100) / total);

  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
