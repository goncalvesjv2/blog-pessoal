import { api } from '../src/services/api';

export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts');
        console.log('Posts retornados:', data);
        return data || [];
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return [];
    }
};

export const getPostBySlug = async (id) => {
    try {
        const { data } = await api.get(`/posts?id=eq.${id}`);
        return data?.[0] || {};
    } catch (error) {
        console.error('Erro ao buscar post específico:', error);
        return {};
    }
};