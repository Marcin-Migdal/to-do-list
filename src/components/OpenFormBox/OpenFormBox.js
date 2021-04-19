import React, { useContext } from 'react'
import { FormContext } from '../ContextProvider/ContextProvider';
import styles from './OpenFormBox.module.css'

export default function OpenFormBox() {
  const [isFormVisible, setIsFormVisible] = useContext(FormContext);

  const toogleAsAddForm = () => {
    isFormVisible ? setIsFormVisible(false) : setIsFormVisible('add')
  }

  return (
    <div className={styles.container}>
      <button
        disabled={isFormVisible === 'edit'}
        className={styles.openFormBox}
        onClick={() => toogleAsAddForm()}>
        <p className={styles.text}>+</p>
      </button>
    </div>
  )
}
