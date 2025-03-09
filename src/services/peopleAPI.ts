import axios from "axios";
import { People } from "../types/people";

const API_URL = "http://localhost:3001/people";

// fetch all people
export const fetchPeople = async (): Promise<People[]> => {
    const response = await axios.get<People[]>(API_URL);
    return response.data;

}

// fetch a people by id
export const fetchPeopleById = async (id: string): Promise<People> => {
    const response = await axios.get<People>(`${API_URL}/${id}`);
    return response.data;
}

// post a people
export const createPeople = async (people: Omit<People, 'id'>): Promise<People> => {
    const response = await axios.post(API_URL, people);
    return response.data;
}

// put people
export const updatePeople = async (people: People): Promise<People> => {
    const response = await axios.put<People>(`${API_URL}/${people.id}`, people);
    return response.data;

};


// delete people
export const deletePeople = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);

}