import styles from './Btn.module.css'

interface BtnProps{
    text: string;
    className?: string;
}

const Btn = (prop: BtnProps) => {
    const {text, className} = prop;
    
  return (
    <button className={`${styles.btn} ${className ?? ""}`}>
        {text}
    </button>
  )
}

export default Btn