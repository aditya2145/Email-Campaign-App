import React from 'react'
import stepDescriptions from '../data/emailStepDescription'

const UserProgressCard = ({user}) => {
    
    return (
        <div className="bg-white rounded-lg shadow border overflow-hidden">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-blue-100 text-blue-800">
                    <tr>
                        <th className="px-4 py-2" colSpan={2}>{user.email}</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {!user.completed && (
                        <tr>
                            <td className="px-4 py-2 font-medium w-1/3">Current Step:</td>
                            <td className="px-4 py-2">{stepDescriptions[user.currentStep]}</td>
                        </tr>
                    )}
                    {user.completed && (
                        <tr>
                            <td className="px-4 py-2 font-medium">Status:</td>
                            <td className="px-4 py-2">{user.status === 'interested' ? '✅ Interested' : '❌ Not Interested'}</td>
                        </tr>
                    )}
                    <tr>
                        <td className="px-4 py-2 font-medium">Completed:</td>
                        <td className="px-4 py-2">{user.completed ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 font-medium">Last Action At:</td>
                        <td className="px-4 py-2">{new Date(user.lastActionAt).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserProgressCard