import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPeople, deletePeople, fetchPeople, updatePeople, fetchPeopleById } from "../services/peopleAPI";


// hook for fetching all people
export function useGetAll() {
    return useQuery({
        queryKey: ['people-list'],
        queryFn: fetchPeople,
    })
}

// hook for fetching a people by id
// if id is null, return null
// if id is not null, return the data
export function useGetById(id: string) {
    return useQuery({
        queryKey: ['people', id],
        queryFn: () => (id ? fetchPeopleById(id) : null),
        enabled: !!id,
    })
}


// hook for creating a people
// invalidate the cache after success
export function useCreatePeople() {
    // acess react query client
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['add-people'],
        mutationFn: createPeople,

        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['people-list']});
        },
    })
}


// hook for updating a people
// invalidate the cache after success
export function useUpdatePeople(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['update-people'],
        mutationFn: updatePeople,

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['people-list']});
        }
    })
}


// hook for deleting a people
// invalidate the cache after success
export function useDeletePeople(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['delete-people'],
        mutationFn: deletePeople,

        onSuccess: () =>{
            queryClient.invalidateQueries({queryKey: ['people-list']});
        }
    })
}