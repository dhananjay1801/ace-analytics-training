import Hero from '../../components/Home/Hero/Hero'
import Navbar from '../../components/Global/Navbar/Navbar'
import FindDoctors from '../../components/Home/FindDoctors/FindDoctors'
import DoctorsList from '../../components/Home/DoctorsList/DoctorsList'
import Appointment from '../../components/Global/Appointment/Appointment'
import styles from './Home.module.css'
import Footer from '../../components/Global/Footer/Footer'
import { doctors } from '../../data/data'
import { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination';

export interface DoctorProp {
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

const Home = () => {
  const [data, setData] = useState<DoctorProp[]>([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const specializations = [...new Set(data.map((doctor) => doctor.specialization))];

  const filteredDoctors = data.filter((doctor) => {
    const matchedNames = doctor.name.toLowerCase().includes(debouncedQuery.toLowerCase());
    const matchedSpecs = selectedSpec === "" || doctor.specialization === selectedSpec;

    return matchedNames && matchedSpecs;
  });

  const lastIndex = currentPage * 6;
  const firstindex = lastIndex - 6;
  const currentPageList = filteredDoctors.slice(firstindex, lastIndex);

  useEffect(() => {
    function fetchData() {
      try {
        setData(doctors);
      }
      catch (e) {
        console.log(e);
        return []
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query])

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedQuery, selectedSpec]);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.containerWrapper}>
        <FindDoctors query={query}
          setQuery={setQuery}
          specializations={specializations}
          selectedSpec={selectedSpec}
          setSelectedSpec={setSelectedSpec} />

        <DoctorsList doctors={currentPageList} />

        <Pagination className={styles.pagination} 
        count={Math.ceil(filteredDoctors.length / 6)} 
        variant="outlined" 
        color="primary" 
        onChange={(_, page) => {
          setCurrentPage(page)
        }}/>

      </div>
      <Appointment />
      <Footer />
    </div>
  )
}

export default Home