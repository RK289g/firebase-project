import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../firebase/Firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  return (
    <div>
      <button>Google Login</button>
    </div>
  );
};

export default Login;
