import React from 'react';
import { FeedbackOptions } from '../feedback/FeedbackOptions';
import { Section } from 'components/section/Section';
import { Statistics } from 'components/statistics/Statistics';
import { Notification } from 'components/notification/Notification';

export const Counter = ({ good, neutral, bad, onLeaveFeedback }) => {
  const total = good + neutral + bad;
  const feedbackOptions = Object.keys({ good, neutral, bad });

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

