import styles from './Btn.module.css'

interface BtnProp {
    text: string;
    className?: string;
    icon?: string;
}

const Btn = (prop: BtnProp) => {
    const { text, className, icon } = prop;


    return (
        <button className={`${styles.customBtn} ${className}`}>
            {text}
            {icon && 
                <img src={icon} />
            }
        </button>
    )
}

export default Btn