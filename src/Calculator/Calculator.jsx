import styles from "./Calculator.module.css";

function Calculator() {
  return (
    <div>
      <div className={styles.screen}></div>
      <div className={styles.controllers}>
        <button className={styles.button}>-</button>
        <input type="text" className={`${styles.input} ${styles.common}`} />
        <button className={styles.button}>+</button>
      </div>
    </div>
  );
}

export default Calculator;
