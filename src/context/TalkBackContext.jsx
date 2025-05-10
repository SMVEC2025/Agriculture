import React, { createContext, useContext } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TalkBackContext = createContext();

export const TalkBackProvider = ({ children }) => {
  const { speak, cancel, speaking } = useSpeechSynthesis();

  const speakText = (text) => {
    speak({ text });
  };

  const stopSpeaking = () => {
    cancel();
  };

  return (
    <TalkBackContext.Provider value={{ speakText, stopSpeaking, speaking }}>
      {children}
    </TalkBackContext.Provider>
  );
};

export const useTalkBack = () => useContext(TalkBackContext);
