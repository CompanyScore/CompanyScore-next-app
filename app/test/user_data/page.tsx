'use client';

import { useEffect, useState } from 'react';
import { LogoutButton } from '@/components/logout-button';

interface UserData {
  id: string;
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  preferred_username: string;
  roles: string[];
  email_verified: boolean;
  locale: string;
  updated_at: number;
}

export default function UserDataPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/me');

        if (!response.ok) {
          if (response.status === 401) {
            setError('Unauthorized');
          } else {
            setError('Failed to fetch data');
          }
          return;
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError('Network error: ' + err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg"></div>
          <p className="mt-4">Loading user data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-error text-xl mb-4">{error}</div>
          <LogoutButton variant="button" />
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-error text-xl mb-4">User data not found</div>
          <LogoutButton variant="button" />
        </div>
      </div>
    );
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString('en-US');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">User Data</h1>
            <LogoutButton variant="button" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Basic Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    User ID
                  </label>
                  <p className="mt-1 text-sm text-gray-900 font-mono bg-gray-100 p-2 rounded">
                    {userData.id}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <p className="mt-1 text-sm text-gray-900">{userData.email}</p>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                      userData.email_verified
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {userData.email_verified ? 'Verified' : 'Not verified'}
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Full Name
                  </label>
                  <p className="mt-1 text-sm text-gray-900">{userData.name}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    First Name
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {userData.given_name || 'Not specified'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Last Name
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {userData.family_name || 'Not specified'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Preferred Username
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {userData.preferred_username || 'Not specified'}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Additional Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Roles
                  </label>
                  <div className="mt-1">
                    {userData.roles.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {userData.roles.map((role, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No roles assigned</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Locale
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {userData.locale || 'Not specified'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Last Updated
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {userData.updated_at
                      ? formatDate(userData.updated_at)
                      : 'Not specified'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* JSON Data */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
              JSON Data
            </h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              {JSON.stringify(userData, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
