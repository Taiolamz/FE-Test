import React from 'react';
import { User } from '../types/user';

interface UserDetailProps {
    user: User;
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
    const { email, phone, website, company, address, ...rest } = user;

    const details = [
        { label: 'Email', value: email },
        { label: 'Phone', value: phone },
        { label: 'Website', value: website },
        { label: 'Company', value: company.name },
        { label: 'Address', value: `${address.street}, ${address.city}` },
        ...Object.entries(rest).map(([key, value]) => ({
            label: key.charAt(0).toUpperCase() + key.slice(1),
            value: value,
        }))
    ];

    return (
        <div className="space-y-2 bg-white shadow-lg hover:scale-105 duration-300  p-5">
            {details.map(({ label, value }, index) => (
                <p key={index}>
                    <strong className="font-medium">{label}:</strong> {value}
                </p>
            ))}
        </div>
    );
};

export default UserDetail;
