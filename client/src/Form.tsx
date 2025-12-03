import React, { useState } from 'react';
import Button from './Button';
import './App.css'; 

function Form() {
    const [feedback, setFeedback] = useState("");
    const [score, setScore] = useState(5);
    const [isSending, setIsSending] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSending(true);

        const adat = { 
            score: score, 
            feedback: feedback 
        };

        try {
            await fetch('http://localhost:5000/api/ratings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(adat)
            });
            
            setTimeout(() => {
                alert("Thank you for your feedback! 🚀");
                setFeedback("");
                setScore(5);
                setIsSending(false);
            }, 500);

        } catch (error) {
            console.error(error);
            alert("Error occurred while sending.");
            setIsSending(false);
        }
    }

    return (
        <div className="feedback-container glass-panel">
            <h3>Feedback</h3>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Rate this webapp from 1 to 10</label>
                    <input 
                        className="glass-input"
                        type="number" 
                        min="1" 
                        max="10" 
                        value={score} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setScore(Number(e.target.value))} 
                    />
                </div>

                <div className="form-group">
                    <label>Your short opinion</label>
                    <input 
                        className="glass-input"
                        type="text" 
                        maxLength={50}
                        placeholder="E.g. It was super fast!"
                        value={feedback}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFeedback(e.target.value)}
                    />
                    <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '5px' }}>
                        {feedback.length}/50
                    </div>
                </div>
                
                <div className="form-actions">
                    <Button 
                        text={isSending ? "Sending..." : "Send feedback"} 
                        disabled={isSending}
                        className="analyze-btn"
                    />
                </div>
            </form>
        </div>
    );
}

export default Form;