import { useCallback, useEffect, useState } from "react";
 
import api from "../services/Api";
 
 
const initialState = {
    category_breakdown: [],
    delivery_mode_breakdown: [],
    monthly_trend: [],
    overview: null,
    recent_sessions: []
};
 
 
const getErrorMessage = (error) => {
    return error?.response?.data?.message || error?.message || "Failed to fetch dashboard data";
};
 
 
const useDashboardApi = () => {
    const [dashboardData, setDashboardData] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
 
    const fetchDashboard = useCallback(async () => {
        setLoading(true);
        setError("");
 
        try {
            const response = await api.get("/api/dashboard");
            setDashboardData({
                ...initialState,
                ...response.data
            });
        } catch (requestError) {
            setError(getErrorMessage(requestError));
        } finally {
            setLoading(false);
        }
    }, []);
 
    useEffect(() => {
        fetchDashboard();
    }, [fetchDashboard]);
 
    return {
        dashboardData,
        error,
        loading,
        refetch: fetchDashboard
    };
};
 
 
export default useDashboardApi;