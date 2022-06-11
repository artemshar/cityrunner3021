import styles from './cadence-controls.module.scss'

export default function CadenceControls({cadence, updateCadence}) {

  return (
    <div className={styles.cadenceControls}>
      <div className={styles.cadenceControls__value}>{cadence}</div>
      <input onChange={(e) => updateCadence(e.target.value)} className={styles.cadenceControls__input} type="range" id="bpm" name="bpm" min="140" max="190"/>
    </div>
  )
}