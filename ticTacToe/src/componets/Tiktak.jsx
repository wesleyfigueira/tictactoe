import { useState } from 'react';
import styles from './Titak.module.css';

function Tiktak() {
  
  const [letters, setLetters] = useState(["W", "E", "S", "L", "E", "Y", "G", "H", "I"]);

  
  const handleClick = (index) => {
    const newLetters = [...letters];
    newLetters[index] = "X"; 
    setLetters(newLetters); 
  };


  return (
    <div className={styles.flex}>
      <h1 className={styles.text}>Tabela</h1>
      <div className={styles.grid}>
        {letters.map((letter, index) => (
          <div
            key={index}
            className={styles.index}
            onClick={() => handleClick(index)} 
          >
            {letter}
          </div>
          
        ))}

      </div>
      <div className={styles.button}>
          <button >Reset</button>
        </div>
    </div>
  );
}

export default Tiktak;
