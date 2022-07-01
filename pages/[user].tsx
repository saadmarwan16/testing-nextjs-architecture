import { observer } from "mobx-react-lite";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { homeProvider } from "../src/modules/home/home_provider";
import UserDetailsCard from "../src/modules/user_details/components/user_details_card";
import { userDetailsController } from "../src/modules/user_details/user_details_controller";
import Meta from "../src/shared/components/meta";

interface UserProps {
  userId: string;
}

const User: NextPage<UserProps> = ({ userId }) => {
  const user = userDetailsController.user;

  useEffect(() => {
    userDetailsController.getUser(userId);
  }, [userId]);

  return (
    <>
      <Meta title={userDetailsController.user?.name ?? 'Loading'} />

      {user && (
        <div className="flex items-center justify-center h-screen">
          <UserDetailsCard
            name={user.name}
            email={user.email}
            username={user.username}
            phone={user.phone}
          />
        </div>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: {
      userId: params?.user,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const results = await homeProvider.getUsers();
  const paths = results.map((user) => {
    return {
      params: {
        user: user.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export default observer(User);
