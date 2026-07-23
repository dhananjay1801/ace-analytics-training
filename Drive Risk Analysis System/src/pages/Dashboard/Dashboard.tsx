import { useEffect } from "react";
import Navbar from "../../components/Global/Navbar/Navbar"
import { useNavigate } from "react-router-dom";
import { getCurrUser } from "../../api/api";
import Summary from "../../components/Dashboard/Summary/Summary";
import ReportSummary from "../../components/Dashboard/ReportSummary/ReportSummary";

const Dashboard = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const checkAuth = async () => {
    //         try {
    //             await getCurrUser();
    //         } catch {
    //             navigate('/login', { replace: true });
    //         }
    //     };

    //     checkAuth();
    // }, [navigate]);
    return (
        <>
            <Navbar />
            <Summary/>
            <ReportSummary/>
        </>
    )
}

export default Dashboard
