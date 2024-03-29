import styles from './select.module.css'

type SelectOptions = {
    label: string
    value: number
}


type SelectProps = {
    options: SelectOptions
    value?: SelectOptions | undefined
    onChange: (value: SelectOptions | undefined) => void
}


export function Select({ value, onChange, options }: SelectProps) {
    return (
       
        
        <div tabIndex={0} className={styles.container}>        
            <span className={styles.value} >Value</span>
            <button className={styles['clear-btn']}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.option} ${styles.show}`}>
                {options.map(option => (
                    <li key={option.label} className={styles.option}>
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>  
        
    )
}
