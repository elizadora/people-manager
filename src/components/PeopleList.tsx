import { useGetAll, useDeletePeople } from '../hooks/usePeople';
import { People } from '../types/people';

// type of the props
type PeopleListProps = {
    onEdit: (people: People) => void;
}

export default function PeopleList({ onEdit }: PeopleListProps) {
    // query hook and mutation hook
    const { data } = useGetAll();
    const { mutate: deletePeople } = useDeletePeople();

    // delete people
    const onDelete = (id: string) => {
        deletePeople(id)
    }

    return (

        <table className="border-collapse border-2 border-gray-500 w-[800px] text-center">
            <thead className="bg-gray-200">
                <tr>
                    <th className="border border-gray-500">Name</th>
                    <th className="border border-gray-500">Email</th>
                    <th className="border border-gray-500">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((people) => (
                    <tr key={people.id}>
                        <td className="border border-gray-500">{people.name}</td>
                        <td className="border border-gray-500">{people.email}</td>
                        <td className="border border-gray-500">
                            <button className="bg-yellow-500 text-white rounded-full py-1 px-4 mr-2 cursor-pointer" onClick={() => onEdit(people)}>
                                Edit
                            </button>
                            <button className="bg-red-500 text-white rounded-full py-1 px-4 cursor-pointer" onClick={() => onDelete(people.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}