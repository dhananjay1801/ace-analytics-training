import Btn from '../../Global/Btn/Btn'
import styles from './FindDoctors.module.css'
import AntSwitch from '../AntSwitch/AntSwitch'
import type { Dispatch, SetStateAction } from 'react'

interface FindProp{
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
    specializations: string[];
    selectedSpec: string;
    setSelectedSpec: Dispatch<SetStateAction<string>>;
}

const FindDoctors = (prop: FindProp) => {
    const{query, setQuery, specializations, selectedSpec, setSelectedSpec} = prop;

    return (
        <div className={styles.container}>
            <div className={styles.inputDiv}>
                <div className={styles.title}>Find a Doctor</div>

                <div className={styles.fields}>
                    <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} className={styles.nameInput} placeholder='Doctor Name' />

                    <select id="speciality" value={selectedSpec} onChange={(e) => setSelectedSpec(e.target.value)}>
                        <option value="" selected>
                            --Speciality--
                        </option>
                        {specializations.map(specialization => (
                            <option key={specialization} value={specialization}>
                                {specialization}
                            </option>
                        ))}
                    </select>

                    <div className={styles.toggleBtnTitle}>
                        Available
                        <AntSwitch
                            defaultChecked
                            slotProps={{ input: { 'aria-label': 'ant design' } }}
                        />
                    </div>
                </div>
            </div>

            <Btn text='Search' className={styles.wide} />
        </div>
    )
}

export default FindDoctors