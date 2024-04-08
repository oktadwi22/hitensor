import React, { useState } from 'react';
import { sha256 } from 'js-sha256';

export interface data {
    gpu: string
    duration: string
    tx_hash: string
}

const EmailForm: React.FC<data> = ({
    gpu,
    duration,
    tx_hash
}) => {

    const [email, setEmail] = useState('');

    const fetchWithRetry = async (
        url: string,
        tries: number = 3
    ): Promise<any> => {
        try {
            const settings = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                   email: email,
                   gpu: gpu,
                   duration: duration ,
                    tx_hash: tx_hash ,
                    token: sha256(tx_hash)
                }),
            };

            const response = await fetch(
                url,
                settings
            );
            if (response.ok) {
                location.reload();
            }
        } catch (error) {
            return fetchWithRetry(
                url,
                tries - 1
            );
        }

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            fetchWithRetry("https://htaodatabase.cloud/api/email");
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="example@example.com"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>
        </form>
    );
};

export default EmailForm;
