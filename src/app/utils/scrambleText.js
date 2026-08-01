const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function scrambleText(target, text, { chars = DEFAULT_CHARS, interval = 50 } = {}) {
  if (!target || !text) return;

  let iterations = 0;
  const totalLength = text.length;

  const scrambleStep = () => {
    const scrambled = text
      .split("")
      .map((char, index) =>
        index < iterations ? char : chars[Math.floor(Math.random() * chars.length)]
      )
      .join("");

    target.textContent = scrambled;

    if (iterations <= totalLength) {
      iterations += 1;
      setTimeout(scrambleStep, interval);
    }
  };

  scrambleStep();
}
