import React from 'react'
import styles from './BigButton.module.css'
import completeIcon from '../../resourses/completeIcon.png'
import trashBinIcon from '../../resourses/trashBinIcon.png'

export default function BigButton({ onClick, isFormVisible, isComplete, type }) {
  return (
    <div className={type === 'delete' ? styles.deleteButtonContainer : styles.completeButtonContainer}>
      <button
        onClick={onClick}
        className={(isComplete || isFormVisible === 'edit') ? styles.disabledButton : styles.button}
        disabled={isComplete || isFormVisible === 'edit'}>
        <img
          className={type === 'delete' ? styles.deleteIcon : styles.completeIcon}
          src={type === 'delete' ? trashBinIcon : completeIcon}
          alt={type === 'delete' ? 'D' : 'C'} />
      </button>
    </div>
  )
}
