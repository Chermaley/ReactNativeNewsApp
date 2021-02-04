import {useState, useCallback} from 'react';

export type useHttpType = {
    error: Error | null,
    loading: boolean,
    request: (url: string, method?: string, body?: any, headers?: any) =>  Promise<any>,
    clearError: () => void
}

export const useHttp = ():useHttpType => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const request = useCallback(async (url: string, method = "GET", body = null, headers = {}) => {
        setLoading(true);
        try {
            const response = await fetch(url, {method, body, headers})
            const data = await response.json();

            if(!response.ok) {
                throw new Error(`Что-то пошло не так`);
            }

            setLoading(false);

            return data;
        }catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = () => setError(null);

    return {error, loading, request, clearError}
}