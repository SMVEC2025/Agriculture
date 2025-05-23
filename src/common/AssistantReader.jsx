import React, { useState, useEffect } from 'react';

const AssistantReader = () => {
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentElement, setCurrentElement] = useState(null);
  const [elementsQueue, setElementsQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getTalkElements = () => {
    const all = Array.from(document.querySelectorAll('[data-talk]'));
    return all.filter((el) => !el.closest('[data-talk] [data-talk]'));
  };

  const speakElement = (el, onComplete) => {
    const originalText = el.innerText;
    const utterance = new SpeechSynthesisUtterance(originalText);

    let charIndex = 0;

    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        const wordStart = event.charIndex;
        const wordEnd = wordStart + event.charLength || 1;
        const before = originalText.slice(0, wordStart);
        const word = originalText.slice(wordStart, wordEnd);
        const after = originalText.slice(wordEnd);

        el.innerHTML = `
          ${before}<span class="highlight-word">${word}</span>${after}
        `;
      }
    };

    utterance.onend = () => {
      el.innerText = originalText; // Restore original content
      onComplete();
    };

    utterance.onerror = (event) => {
      console.error('SpeechSynthesis error:', event);
      onComplete();
    };

    speechSynthesis.speak(utterance);
  };

  const speakElementsSequentially = (elements, index = 0) => {
    if (index >= elements.length) {
      completeReading();
      return;
    }

    const el = elements[index];
    setCurrentElement(el);
    setCurrentIndex(index);
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });

    speakElement(el, () => {
      if (!isPaused) {
        speakElementsSequentially(elements, index + 1);
      }
    });
  };

  const startAssistantReader = () => {
    if (isReading && !isPaused) return;
    
    const elements = getTalkElements();
    if (!elements.length) return;

    if (isPaused) {
      // Resume from where we paused
      setIsPaused(false);
      speakElementsSequentially(elementsQueue, currentIndex);
    } else {
      // Start fresh
      setIsReading(true);
      setElementsQueue(elements);
      speakElementsSequentially(elements);
    }
  };

  const pauseAssistantReader = () => {
    if (!isReading || isPaused) return;
    speechSynthesis.pause();
    setIsPaused(true);
  };

  const stopAssistantReader = () => {
    speechSynthesis.cancel();
    if (currentElement) currentElement.innerHTML = currentElement.innerText;
    completeReading();
  };

  const restartAssistantReader = () => {
    stopAssistantReader();
    setTimeout(() => {
      startAssistantReader();
    }, 100);
  };

  const completeReading = () => {
    setIsReading(false);
    setIsPaused(false);
    setCurrentElement(null);
    setCurrentIndex(0);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  return (
    <>
      <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
        {!isReading ? (
          <button onClick={startAssistantReader}>▶ Start</button>
        ) : isPaused ? (
          <button onClick={startAssistantReader}>▶ Resume</button>
        ) : (
          <button onClick={pauseAssistantReader}>⏸ Pause</button>
        )}
        <button onClick={stopAssistantReader} disabled={!isReading}>⏹ Stop</button>
        <button onClick={restartAssistantReader} disabled={!isReading && !isPaused}>🔄 Restart</button>
      </div>

      <style>{`
        .highlight-word {
          background-color: yellow;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default AssistantReader;