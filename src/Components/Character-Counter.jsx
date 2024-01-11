import { useState } from "react";
import { Counters } from "./Counter";

export const CharacterCounter = () => {
  const [userInput, setUserInput] = useState("");
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [remaining, setRemaining] = useState(150);

  const changeHandler = (e) => {
    const option = e.target.value;
    setUserInput(option);
    setTotalCharacters(option.length);
    setRemaining(150 - option.length);
  };

  return (
    <>
      <div className="container">
        <h2>Write your message!</h2>
        <textarea
          value={userInput}
          onChange={changeHandler}
          placeholder="Add your text here..."
          className="textarea"
          maxLength={150}
        />
        <Counters totalCharacters={totalCharacters} remaining={remaining} />
      </div>
      {userInput.length > 150 && (
        <div className="ad">
          <p>
            Upgrade to <b>Premium</b> to write longer post and apply formatting
            such as bold and italics!
          </p>
          <a href="#">Upgrade</a>
        </div>
      )}
    </>
  );
};
