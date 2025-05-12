import React, { useEffect } from 'react';

const AssistantReader = () => {
  const speakAndScroll = async () => {
    const synth = window.speechSynthesis;
    const elements = document.querySelectorAll('.read-section');

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      const text = el.textContent;

      // Scroll and highlight
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.backgroundColor = '#fffb91'; // Highlight color
      el.style.transition = 'background-color 0.3s';

      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);

      await new Promise(resolve => {
        utterance.onend = () => {
          el.style.backgroundColor = 'transparent'; // Remove highlight
          resolve();
        };
      });

      await new Promise(r => setTimeout(r, 300)); // Gap between texts
    }
  };

  useEffect(() => {
    speakAndScroll();
  }, []);

  return null; // It runs logic only, doesn't render anything
};

export default AssistantReader;
