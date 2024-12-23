import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import Loading from "../Shared/Loading";



const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
 
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return 
};

export default PrivateRoute;