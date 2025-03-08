import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPeople, fetchPeople } from "../services/peopleAPI";



export function getAll() {
    return useQuery({
        queryKey: ['people-list'],
        queryFn: fetchPeople,
    })
}

export function postPeople() {
    // acess react query client
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createPeople,

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['people-list']})
        },
    })
}