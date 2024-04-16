import React, { useState } from 'react';
import axios from 'axios';
import classes from './HeritageHub.module.css';

const HeritageQuestions = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleQuestionChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setQuestion(e.target.value);
    };

    const submitQuestion = async () => {
        try {
            const response = await axios.post('http://localhost:3000/ask', { question });
            setAnswer(response.data.answer);
        } catch (error) {
            console.error('Error submitting question:', error);
            setAnswer('Failed to get an answer. Please try again.');
        }
    };

    return (
        <div>
                <div className={classes.chatBoxPage}>
                    <input
                        type="text"
                        className={classes.chatBoxSubmit}
                        value={question}
                        onChange={handleQuestionChange}
                        placeholder="Ask about your heritage..."
                    />
                    <button className={classes.sendLetter} onClick={submitQuestion}>Ask</button>
                    {/* <div className={classes.howCanIHelpYou}>How can I help you?</div> */}
                    {/* <p className={classes.gpt}>{answer}</p> Assuming you want to display the answer here */}
                </div>
        </div>
    );
};


export default HeritageQuestions;
export {};
