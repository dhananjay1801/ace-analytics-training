import styles from './DoctorsList.module.css'
import Doctor from '../Doctor/Doctor'
import type { DoctorProp } from '../../../pages/Home/Home';

interface DoctorsListProps {
  doctors: DoctorProp[];
}

const DoctorsList = (prop: DoctorsListProps) => {

  const { doctors } = prop;

  return (
    <div className={styles.container}>
      <div className={styles.title}>Our Doctors</div>

      {doctors.length > 0 ? (
        <div className={styles.doctors}>
          {doctors.map(doc => (
            <Doctor key={doc.id} {...doc} />
          ))}
          </div>
          ) : (
          <div>No matches found.</div>
          )}
    </div>
  )
}

export default DoctorsList