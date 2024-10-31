import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData()
    return (
        <div className="py-20">
            <h2 className="text-2xl font-bold">Hello user : <span className="text-blue-700 text-4xl"> {user.name}</span></h2>
        </div>
    );
};

export default UserDetails;