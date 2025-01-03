import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../types/user';
import UserDetail from './userDetail';


const UserDetails: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [user, setUser] = useState<User | null>(null);


    useEffect(() => {
        const fetchUserDetails = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data: User = await response.json();
            setUser(data);
        };
        if (userId) {
            fetchUserDetails();
        }
    }, [userId]);

    if (!user) return <div className="flex justify-center items-center h-screen">
        <span className="text-xl text-gray-700">Loading...</span>
    </div>

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{user.name}'s Profile</h2>
            <div className="space-y-4">
                <UserDetail user={user} />
            </div>
        </div>
    );
};

export default UserDetails;
