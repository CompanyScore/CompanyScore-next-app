'use client';

import { ProfileEditModal } from '../modals';
// import { useProfileApi } from '@/api/index';
import { Error, Toast } from '@/shared/ui';
import { GetProfile } from '@/api';

export function ProfileCard() {
  // const { profile, loading, error, getProfile } = useProfileApi();

  // useEffect(() => {
  //   getProfile();
  // }, [getProfile]);

  const { data: profile, isLoading, error } = GetProfile();

  if (isLoading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (error) {
    return <Error text={error.message} />;
  }

  return (
    <div className="relative hero bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row items-start justify-start gap-20 w-full">
        <label
          htmlFor="profile_edit_modal"
          className="btn btn-neutral absolute top-4 right-10 rounded-md"
        >
          <img
            src="/icons/settings.svg"
            alt="Settings Icon"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </label>
        <img
          src={
            profile?.avatar
              ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${profile.avatar}`
              : '/imgs/avatar.jpg'
          }
          alt="ImageTable"
          width={400}
          height={400}
          className="max-w-sm rounded-lg shadow-2xl w-full"
        />
        <div className="w-full">
          <h1 className="text-5xl font-bold">{profile?.name}</h1>
          <p className="mt-4">{profile?.position}</p>
          <p className="mt-4">{profile?.description}</p>
        </div>
      </div>

      <ProfileEditModal />
      <Toast />
    </div>
  );
}
