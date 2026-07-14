import styles from './Btn.module.css'

interface BtnProps{
    text: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Btn = (prop: BtnProps) => {
    const {text, className, onClick} = prop;
    
  return (
    <button className={`${styles.btn} ${className ?? ""}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Btn