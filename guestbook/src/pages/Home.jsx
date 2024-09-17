import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const handleLogout = async () => {
   try {
    const response = await signOut(auth)
    console.log('sign out');
    navigate('/login')
   } catch(error) {
    console.error(error);
   }
  }
  if (loading) return <p>User info loading...</p>;
  return (
    <>
      <div>Welcome, {user.email}</div>
      <button
        className="bg-black text-white rounded-sm p-1"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}

export default Home;
