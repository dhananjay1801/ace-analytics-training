import React from 'react'
import styles from './BuyNowBtn.module.css'

interface BtnProp{
    text: string;
}

const BuyNowBtn = (prop: BtnProp) => {
    const text = prop.text;

    return (
        <div className={styles.buyBtn}>
            {text}
        </div>
    )
}

export default BuyNowBtn