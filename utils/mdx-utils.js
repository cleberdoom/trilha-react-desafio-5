
import { api } from '../services/api';

export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts'); 

        if (data) {
            console.log('Posts:', data);
            return data
            ;
        }

        return [];
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export const getPostBySlug = async (id) => {
    try {
        const response = await api.get(`/posts?id=eq.${id}`);
        const post = response.data[0];
        return post;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};
