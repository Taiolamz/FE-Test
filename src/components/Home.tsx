import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types/user';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); 
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl text-gray-700">Loading...</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">User Lists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <span className="text-lg font-medium text-gray-700 mb-4">{user.name}</span>
            <button className="bg-red-500 p-2 rounded-lg">
              <Link to={`/user/${user.id}`} className="text-white hover:underline">
                View Details
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
