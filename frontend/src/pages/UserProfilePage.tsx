import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} />
    </div>
  );
};

export default UserProfilePage;
