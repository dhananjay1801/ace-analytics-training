import axios from "axios";
import type { PaginatedReports, RiskAnalysis, RiskSummary } from "../components/Dashboard/Summary/SummaryTypes";

const api = axios.create({
    baseURL: '',
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true',
    }
})

// Auth
export interface AuthResponse{
    id: string;
    email: string;
    canAccessDrive?: boolean;
}

export const getErrorMessage = (err: any): string => {
    const data = err?.response?.data;
    if (!data) return '';
    if (typeof data === 'string') return data;
    const message = data.error ?? data.message;
    return Array.isArray(message) ? message.join(', ') : message ?? '';
}

export const login = async (email: string, password: string) => {
    const {data} = await api.post("/api/auth/login", {
        email,
        password,
    })
    return data;
}

export const signin = async(email: string, password: string): Promise<AuthResponse> => {
    const {data} = await api.post("/api/auth/register", {
        email,
        password,
    });
    return data;
}

export const logout = async() => {
    const {data} = await api.post('/api/auth/logout');
    return data;
}

export const getCurrUser = async () => {
    const {data} = await api.get('/api/auth/me');
    return data;
}


// Risk
export const getSummary = async (): Promise<RiskSummary> => {
    const {data} = await api.get('/api/risk/summary')
    return data;
}


export const analyzeDrive = async () => {
    const {data} = await api.post('/api/risk/analyze');
    return data;
}

export const getReports = async (page = 1, pageSize = 20, riskLevel?: string): Promise<PaginatedReports> => {
    const {data} = await api.get('/api/risk/reports', {
        params: {
            page,
            pageSize,
            ...(riskLevel && riskLevel !== 'ALL' ? { riskLevel } : {}),
        },
    });

    if (Array.isArray(data)) {
        return { data, total: data.length, page: 1, pageSize: data.length };
    }

    const list: RiskAnalysis[] = Array.isArray(data?.data)
        ? data.data
        : Array.isArray(data?.reports)
            ? data.reports
            : [];

    return {
        data: list,
        total: data?.total ?? list.length,
        page: data?.page ?? page,
        pageSize: data?.pageSize ?? pageSize,
    };
}
