import { useEffect, useState } from 'react';

export function useTypingEffect(words, speed = 85, pause = 1300) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const finishedTyping = !deleting && subIndex === current.length;
    const finishedDeleting = deleting && subIndex === 0;
    const delay = finishedTyping ? pause : deleting ? speed / 2 : speed;

    const timeout = window.setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
        return;
      }

      if (finishedDeleting) {
        setDeleting(false);
        setIndex((value) => (value + 1) % words.length);
        return;
      }

      setSubIndex((value) => value + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, index, pause, speed, subIndex, words]);

  return words[index].slice(0, subIndex);
}
