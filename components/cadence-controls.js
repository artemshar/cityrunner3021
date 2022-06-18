import styles from './cadence-controls.module.scss'

export default function CadenceControls({ cadence, updateCadence }) {
  const maxRangeValue = 200;
  const minRangeValue = 70;

  return (
    <div className={styles.cadenceControls}>
      <div className={styles.cadenceControls__value}>{cadence} BPM</div>
      <div className={styles.cadenceControls__range}>
        <span className={styles.cadenceControls__rangeMin}>{minRangeValue}</span>
        <span className={styles.cadenceControls__rangeMax}>{maxRangeValue}</span>
        <input onChange={(e) => updateCadence(e.target.value)} className={styles.cadenceControls__rangeInput} type="range" id="bpm" name="bpm" min={minRangeValue} max={maxRangeValue} />
      </div>
    </div>
  )
}