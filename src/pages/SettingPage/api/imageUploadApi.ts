
import { useMutation } from '@tanstack/react-query'
import { $api } from '@/shared/api/api'

interface UploadResponse {
    id: string;
    url: string;
};

export const useImage = () => {
    const { mutate, isPending, isError, data } = useMutation({
        mutationFn: (file: File) => {
            const formData = new FormData();
            formData.append('file', file);
            return $api.post<UploadResponse>('/uploads', formData);
        },
        onError: (error) => {
            console.error(error)
        }
    })

    return { mutate, isPending, isError, data }
}