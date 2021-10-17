import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions"
import React from "react";
import Statistic from "components/Statistics/Statistic";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

class App extends React.Component {

state={
        good : 0,
        neutral : 0,
        bad : 0
    };

    countTotalFeedback = () => {
      //const {good, neutral, bad} = this.state; 
      return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        const {good, neutral, bad} = this.state;
        const total = good + neutral + bad;
        return total ? Math.round(good/total*100) : 0;

    }
     onLeaveFeedback = (target) => {
        const { option } = target.currentTarget.dataset;
        this.setState(prevState => {
          return { [option]: prevState[option] + 1 };
        });

     }


  render(){ 
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const isFeedback = total > 0;
    return (
      <div>
        <Section title="Please leave your feedback : ">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        {isFeedback ? (
        <Section title="Statistics : ">
        <Statistic good={this.state.good} neutral={this.state.neutral} 
            bad={this.state.bad} total={total} positiveFeedback={positiveFeedback}/>              
      </Section>) : 
      (<Notification message="No feedback given yet"/>)}
      </div>
    );
  }
 
 
}

export default App;
