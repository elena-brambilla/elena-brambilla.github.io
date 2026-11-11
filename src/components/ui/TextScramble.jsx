import React, { useEffect, useState, useRef } from "react";

function TextScramble() {
  const [displayText, setDisplayText] = useState("");

  const stateRef = useRef({
    codeletters: "&#*+%?£@abcFAB$",
    messageIndex: 0,
    currentLength: 0,
    fadeBuffer: null,
    messages: ["Welcome to Nexus Multiversal Crossroads"],
    timeoutId: null,
  });

  useEffect(() => {
    const config = stateRef.current;

    const generateRandomString = (length) => {
      let randomText = "";
      while (randomText.length < length) {
        randomText += config.codeletters.charAt(
          Math.floor(Math.random() * config.codeletters.length)
        );
      }
      return randomText;
    };

    const animateIn = () => {
      const currentMessage = config.messages[config.messageIndex];

      if (config.currentLength < currentMessage.length) {
        config.currentLength += 2;
        if (config.currentLength > currentMessage.length) {
          config.currentLength = currentMessage.length;
        }

        const message = generateRandomString(config.currentLength);
        setDisplayText(message);

        config.timeoutId = setTimeout(animateIn, 20);
      } else {
        config.timeoutId = setTimeout(animateFadeBuffer, 20);
      }
    };

    const animateFadeBuffer = () => {
      const currentMessage = config.messages[config.messageIndex];

      if (!config.fadeBuffer) {
        config.fadeBuffer = [];
        for (let i = 0; i < currentMessage.length; i++) {
          config.fadeBuffer.push({
            c: Math.floor(Math.random() * 12) + 1,
            l: currentMessage.charAt(i),
          });
        }
      }

      let doCycles = false;
      let message = "";

      for (let i = 0; i < config.fadeBuffer.length; i++) {
        let fader = config.fadeBuffer[i];
        if (fader.c > 0) {
          doCycles = true;
          fader.c--;
          message += config.codeletters.charAt(
            Math.floor(Math.random() * config.codeletters.length)
          );
        } else {
          message += fader.l;
        }
      }

      setDisplayText(message);

      if (doCycles) {
        config.timeoutId = setTimeout(animateFadeBuffer, 50);
      } else {
        console.log("Scramble completato."); 
      }
    };

    config.timeoutId = setTimeout(animateIn, 0);

    return () => {
      if (config.timeoutId) clearTimeout(config.timeoutId);
    };
  }, []);

  return (
    <h1 className="message" id="messenger">{displayText}</h1>
  );
}

export default TextScramble;
