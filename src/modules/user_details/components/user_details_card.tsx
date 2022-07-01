import { FunctionComponent } from "react";
import Meta from "../../../shared/components/meta";
import { userDetailsController } from "../user_details_controller";

interface UserDetailsCardProps {
  name: string;
  email: string;
  username: string;
  phone: string;
}

const UserDetailsCard: FunctionComponent<UserDetailsCardProps> = ({
  name,
  email,
  username,
  phone,
}) => {
  return (
    <div className="w-full p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="p-4 text-center border border-teal-200 rounded-lg cursor-pointer hover:border-teal-500 hover:bg-teal-50">
        <div className="text-xl font-semibold truncate">{name}</div>
        <div className="font-medium truncate">{email}</div>
        <div className="italic text-blue-600 truncate">@{username}</div>
        <div className="text-gray-400 truncate">{phone}</div>
        {/* <p className="text-xl font-semibold truncate">{name}</p>
        <p className="font-medium truncate">{email}</p>
        <p className="italic text-blue-600 truncate">@{username}</p>
        <p className="text-gray-400 truncate">{phone}</p> */}
      </div>
    </div>
  );
};

export default UserDetailsCard;
