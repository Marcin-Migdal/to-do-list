import React from 'react'
import styles from './OpenFormBox.module.css'

export default function OpenFormBox({ toogleAsAddForm, isFormVisible }) {
  return (
    <div className={styles.container}>
      <button
        disabled={isFormVisible === 'edit'}
        className={styles.openFormBox}
        onClick={toogleAsAddForm}>
        <p className={styles.text}>+</p>
      </button>
    </div>
  )
}
