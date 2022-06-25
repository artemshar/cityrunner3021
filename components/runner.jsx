import { useEffect, useState } from 'react'
import styles from './runner.module.scss'
import cn from 'classnames'

export default function Runner({ bpm }) {

  const updateCadenceStyle = () => {
    if (document) {
      document.documentElement.style
        .setProperty('--cadence', bpm);
    }
  };

  useEffect(() => {
    updateCadenceStyle();
  }, [bpm]);

  const displayAd = (

      <div className={cn(styles.ad, styles.ad__one)}>
        <a className={cn(styles.adWrap)} href={'https://www.instagram.com/cityrunner3021/'} target={'_blank'}>
          <div>
            Our sponsor. Maybe you?
          </div>
          <div>
            <a className={cn(styles.ad__linkContact)}>Contact</a>
          </div>
        </a>
      </div>
  )

  const displayBack = (
    <>
      <div className={cn(styles.back, styles.one)} />
      <div className={cn(styles.back, styles.two)} />
      <div className={cn(styles.back, styles.three)} />
      <div className={cn(styles.back, styles.four)} />
    </>
  )

  const displayFloor = (
    <div className={styles.floor}>
      <div className={cn(styles.rock, styles.one)} />
      <div className={cn(styles.rock, styles.two)} />
      <div className={cn(styles.rock, styles.three)} />
      <div className={cn(styles.grass, styles.one)} />
      <div className={cn(styles.grass, styles.two)} />
      <div className={cn(styles.grass, styles.three)} />
      <div className={cn(styles.grass, styles.four)} />
      <div className={cn(styles.grass, styles.five)} />
      <div className={cn(styles.grass, styles.six)} />
      <div className={cn(styles.grass, styles.seven)} />
      <div className={cn(styles.grass, styles.height)} />
      <div className={cn(styles.grass, styles.nine)} />
      <div className={cn(styles.grass, styles.ten)} />
    </div>
  )

  const displayCloud = (
    <>
      <div className={cn(styles.cloud, styles.one)} />
      <div className={cn(styles.cloud, styles.two)} />
      <div className={cn(styles.cloud, styles.three)} />
    </>
  )

  const displayMan = (
    <div className={cn(styles.man)}>
      <div className={cn(styles.head)} />
      <div className={cn(styles.arm, styles.left)}>
        <div className={cn(styles.bottom)} />
      </div>
      <div className={cn(styles.arm, styles.right)}>
        <div className={cn(styles.bottom)} />
      </div>
      <div className={cn(styles.leg, styles.left)}>
        <div className={cn(styles.bottom)} />
      </div>
      <div className={cn(styles.leg, styles.right)}>
        <div className={cn(styles.bottom)} />
      </div>
    </div>
  )

  return (
    <section className={styles.world}>
      {/* {displayBack} */}
      {displayFloor}
      {displayCloud}
      {displayAd}
      {displayMan}
    </section>
  )
}
