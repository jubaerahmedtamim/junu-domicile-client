import useAuth from "../../../../hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();

    return (
        <div className="ml-4 my-6 md:ml-6">
            <h3 className="text-2xl md:text-4xl">Welcome, <span className="text-cyan-600">{user?.displayName?.split(' ')[0]}</span> </h3>
        </div>
    );
};

export default AdminHome;