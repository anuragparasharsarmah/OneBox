'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem('authToken', token);
      console.log(token);      
      router.push('/dashboard');
    } else {
      router.push('/');
    }
  }, [router]);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Your dashboard content here */}
    </div>
  );
};

export default Dashboard;
