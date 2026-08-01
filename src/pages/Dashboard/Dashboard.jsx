import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <section className="py-16 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="flex items-center gap-4">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
              {(user?.displayName || user?.email || "?")
                .charAt(0)
                .toUpperCase()}
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold">
              Welcome, {user?.displayName || user?.email}!
            </h1>
            <p className="text-gray-500">
              You are logged in. This is a protected page.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-xl text-sm text-gray-600">
          <p><strong>Email:</strong> {user?.email}</p>
          <p className="mt-1">
            <strong>Name:</strong> {user?.displayName || "Not set"}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-white mt-8"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
