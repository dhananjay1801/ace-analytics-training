import React from 'react'
import styles from './Btn.module.css'

interface BtnProp{
    text: string;
}

const Btn = (prop: BtnProp) => {
    const text = prop.text;

    return (
        <div className={styles.buyBtn}>
            {text}
        </div>
    )
}

export default Btn