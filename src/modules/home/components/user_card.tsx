import Link from "next/link";
import { FunctionComponent } from "react";

interface UserCardProps {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
}

const UserCard: FunctionComponent<UserCardProps> = ({
  id,
  name,
  email,
  username,
  phone,
}) => {
  return (
    <Link href={`/${id}`}>
      <a>
        <div className="w-full p-4 text-center border border-teal-200 rounded-lg cursor-pointer hover:border-teal-500 hover:bg-teal-50">
          <div className="text-xl font-semibold truncate">{name}</div>
          <div className="font-medium truncate">{email}</div>
          <div className="italic text-blue-600 truncate">@{username}</div>
          <div className="text-gray-400 truncate">{phone}</div>
          {/* <p className="text-xl font-semibold truncate">{name}</p>
          <p className="font-medium truncate">{email}</p>
          <p className="italic text-blue-600 truncate">@{username}</p>
          <p className="text-gray-400 truncate">{phone}</p> */}
        </div>
      </a>
    </Link>
  );
};

export default UserCard;
