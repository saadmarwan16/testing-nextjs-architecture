import { observer } from "mobx-react-lite";
import type { NextPage } from "next";
import { useEffect } from "react";
import UserCard from "../src/modules/home/components/user_card";
import { homeController } from "../src/modules/home/home_controller";
import Meta from "../src/shared/components/meta";

const Home: NextPage = () => {
  const users = homeController.users;

  useEffect(() => {
    homeController.getUsers();
  }, []);

  return (
    <>
      <Meta title="Home" />

      {homeController.isLoading && <p>Loading UI</p>}

      {typeof users === "string" && <p>{users}</p>}

      {typeof users === "object" && (
        <div className="grid grid-cols-1 gap-4 p-4 sm:gap-6 md:gap-8 lg:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:p-8 md:p-12 lg:p-16">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              username={user.username}
              phone={user.phone}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center gap-3 pt-6">
        <button className="btn btn-primary">
          Testing Button On Production Primary
        </button>
        <button className="btn btn-outline">
          Testing Button On Production Outline
        </button>
        <button className="btn btn-secondary">
          Testing Button On Production Secondary
        </button>
      </div>
    </>
  );
};

export default observer(Home);
