

  import { useNavigate } from 'react-router-dom';
  
  const Error = () => {
    const navigate = useNavigate()
  
    const backHome = () =>{
      navigate('/')
    }
  
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <p className="text-gray-700 text-lg mt-4">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={backHome}
        className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Back to Home
      </button>
    </div>
    );
  };
  
  export default Error;