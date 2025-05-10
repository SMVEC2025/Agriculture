import React, { useState, useRef } from 'react';

export default function Test() {
  const content = "Welcome to SMV College. We offer the best education.";
  const words = content.split(" ");
  const [currentWord, setCurrentWord] = useState(null);

  const speakWithHighlight = () => {
    const utterance = new SpeechSynthesisUtterance(content);

    const wordList = content.split(" ");
    let wordIndex = 0;

    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        setCurrentWord(wordIndex);
        wordIndex++;
      }
    };

    utterance.onend = () => {
      setCurrentWord(null);
    };

    speechSynthesis.speak(utterance);
  };

  return (
    <div style={{marginTop:"5rem"}}>
      <div style={{ fontSize: "1.2rem", lineHeight: "2" }}>
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              backgroundColor: i === currentWord ? "yellow" : "transparent",
              marginRight: "6px",
              transition: "0.2s"
            }}
          >
            {word}
          </span>
        ))}
      </div>

      <button onClick={speakWithHighlight}>🔊 Speak</button>
    </div>
  );
}
