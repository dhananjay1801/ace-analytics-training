import styles from './DoctorsList.module.css'
import Doctor from '../Doctor/Doctor'
import {doctors} from '../../../data/data'
import { useEffect, useState } from 'react';

interface DoctorProp {
  id: number,
  name: string,
  specialization: string,
  certificates: number,
  happyClients: string,
  description: string,
  availability: {
      weekdays: string,
      saturday: string,
  },
  image: string;
}

const DoctorsList = () => {
  const [data, setData] = useState<DoctorProp[]>([]);

  useEffect(() => {
      function fetchData(){
        try{
          setData(doctors);
        }
        catch(e){
          console.log(e);
          return []
        }
      }
      fetchData()
  }, [])

  return (
    <div className={styles.container}>
        <div className={styles.title}>Our Doctors</div>

        <div className={styles.doctors}>
          {data.map(doc => (
            <Doctor {...doc}/>
          ))}
        </div>
    </div>
  )
}

export default DoctorsList