
import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { $api } from '@/shared/api/api'
import { AxiosError, AxiosResponse } from 'axios';

interface UploadResponse {
    id: string;
    url: string;
};

export const useImage = (): { mutation: UseMutationResult<AxiosResponse<UploadResponse>, AxiosError, File> } => {
    const mutation = useMutation<AxiosResponse<UploadResponse>, AxiosError, File>({
        mutationFn: (file: File) => {
            const formData = new FormData();
            formData.append('file', file);
            return $api.post('/uploads', formData);
        },
        onError: (error) => {
            console.error(error)
        }
    })

    return { mutation }
}