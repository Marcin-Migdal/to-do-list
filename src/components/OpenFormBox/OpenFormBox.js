import React, { useContext } from 'react'
import { FormContext } from '../ContextProvider/ContextProvider';
import styles from './OpenFormBox.module.css'

export default function OpenFormBox() {
  const [isFormVisible, setIsFormVisible] = useContext(FormContext);

  const toggleAsAddForm = () => {
    isFormVisible ? setIsFormVisible(false) : setIsFormVisible('add')
  }

  return (
    <button
      disabled={isFormVisible === 'edit'}
      className={styles.openFormBox}
      onClick={() => toggleAsAddForm()}>
      <p className={styles.text}>Add new task</p>
    </button>
  )
}
