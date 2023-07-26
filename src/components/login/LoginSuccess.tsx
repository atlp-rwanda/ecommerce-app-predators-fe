import { useEffect } from "react";

const LoginSuccess = () => {
  useEffect(() => {
    setTimeout(() =>{
      window.close();
    }, 1000);
  }, []);
  
  return (
    <div>Login Successful</div>
  )
}

export default LoginSuccess
