import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1/',
    headers: {
        'Content-Type': 'application/json',
        'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        'Prefer': 'return=representation'
    }
});

// Adicionando interceptor para debug
api.interceptors.response.use(
    response => response,
    error => {
        console.error('Erro na API:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);