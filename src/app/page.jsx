'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../public/Logo.svg';

const Login = () => {
  const router = useRouter();

  const handleGoogleLogin = () => {
    const googleLoginUrl = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/dashboard';
    window.location.href = googleLoginUrl;
  };

  return (
    <div className='bg-black max-w-[1440px] h-screen m-auto text-white flex flex-col justify-between'>
      <div className="w-full h-16 flex justify-center items-center border border-slate-800">
        <Image src={Logo} alt="reachinbox-logo" width={156.77} height={24} className="h-7" />
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='m-auto w-[460px] h-auto md:h-[312px] bg-[#111214] rounded-2xl border border-gray-700 py-6 px-10'>
          <div className='w-[380px] m-auto text-center'>
            <p className='text-xl mb-6'>Create a new account</p>
            <div className='rounded border border-gray-500 h-12 flex justify-center items-center gap-2.5 mb-12'>
              <img src="https://static.vecteezy.com/system/resources/previews/013/760/951/non_2x/colourful-google-logo-in-dark-background-free-vector.jpg" alt="Google logo" className='bg-black rounded-full h-5 mt-0.5'/>
              <button className='text-sm text-gray-400 cursor-pointer' onClick={handleGoogleLogin}>
                Sign Up with Google
              </button>
            </div>
            <button className='w-[195px] h-[48px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded m-auto text-center py-2.5 mb-6 cursor-pointer'>
              Create an Account
            </button>
            <p className='text-base text-gray-500'>Already have an account? <span className='cursor-pointer text-white'>Sign In</span></p>
          </div>
        </div>
      </div>
      <div className="w-full h-8 flex justify-center items-center border border-slate-800">
        <p className='h-5 text-gray-600 text-xs'>©️ 2023 Reachinbox. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;