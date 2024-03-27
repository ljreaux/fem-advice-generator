import { useState, useEffect } from "react";
import dice from "../assets/images/icon-dice.svg";
import divider from "../assets/images/pattern-divider-desktop.svg";
import mobileDivider from "../assets/images/pattern-divider-desktop.svg";

export default function AdviceCard() {
  const [newAdvice, setNewAdvice] = useState({
    id: 0,
    advice: "",
  });
  const { id, advice } = newAdvice;

  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const { slip: data } = await response.json();
    console.log(data);
    setNewAdvice(data);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);
  async function handleClick() {
    fetchAdvice();
  }
  return (
    <main className="advice-card">
      <p className="advice-id">{`ADVICE #${id}`}</p>
      <p className="advice-text">{advice}</p>
      <img
        srcSet={`${mobileDivider} 295w, ${divider} 444w`}
        sizes="(max-width: 600px) 295px, 444px"
        src={divider}
        alt="divider"
        className="divider"
      />
      <button onClick={handleClick} className="dice-btn">
        <img src={dice} alt="dice" />
      </button>
    </main>
  );
}
