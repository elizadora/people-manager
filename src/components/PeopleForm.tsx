import { useEffect, useState } from 'react';
import { useGetById } from '../hooks/usePeople';

// type of the props
type PeopleFormProps = {
    onSubmit: (data: { name: string, email: string }) => void;
    editId: string | null;
}


export default function PeopleForm( { onSubmit, editId }: PeopleFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // get people by id
    const { data : people } = useGetById(editId || '');


    // set name and email if people exist
    useEffect(() => {
        if(people){
            setName(people.name);
            setEmail(people.email);
        }
    }
    , [people]) 


    // submit form
    const submitForm = () => {
        // check if name and email is empty
        // show alert if empty
        if(name === '' || email === ''){
            alert('Please fill all fields');
            return;
        }

        // call onSubmit function
        onSubmit({ name, email });
        setName('');
        setEmail('');
    }





    return (
        <div className="flex flex-col gap-4 p-4 w-80 border shadow-sm mb-12">
            <input className="border rounded-md" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="border rounded-md" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="button" className="bg-blue-500 text-white rounded-md py-2 cursor-pointer w-full" onClick={submitForm}>
                Save
            </button>
        </div>
    )
}