

  import { useNavigate } from 'react-router-dom';
  import img from '../../assets/service/404 Error with a cute animal-cuate.png'
  const Error = () => {
    const navigate = useNavigate()
  
    const backHome = () =>{
      navigate('/')
    }
  
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img className='w-60' src={img} alt="" />
      <p className="text-gray-700 text-lg mt-4">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={backHome}
        className="mt-8 px-6 py-3 bg-[#fb110d] text-white text-lg font-semibold rounded-lg shadow-lg  transition duration-300"
      >
        Back to Home
      </button>
    </div>
    );
  };
  
  export default Error;