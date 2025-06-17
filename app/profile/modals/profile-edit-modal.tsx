'use client';

import { Button, Input, Modal, Textarea, Title, Select, useToast } from '@/ui';
import { positions } from '@/constants';
import { useProfileStore } from '@/store';
import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileEditSchema } from '@/utils/profileEditSchema';

type ProfileEditFormData = {
  name?: string;
  position?: string;
  description?: string;
  avatar?: File | undefined;
};

export const useProfileEditForm = () => {
  return useForm<ProfileEditFormData>({
    resolver: yupResolver(profileEditSchema),
    defaultValues: {
      name: '',
      position: '',
      description: '',
      avatar: undefined,
    },
  });
};

export function ProfileEditModal() {
  const { getProfile, updateProfile } = useProfileStore();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useProfileEditForm();

  const toast = useToast();

  const closeModal = () => {
    const modal = document.getElementById(
      'companies_add_comment_modal',
    ) as HTMLInputElement;
    if (modal) {
      modal.checked = false; // Закрывает модалку в daisyUI
    }
  };

  const resetForm = () => {
    reset();
    closeModal();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setValue('avatar', selectedFile, { shouldValidate: true });
    }
  };

  const onSubmit: SubmitHandler<ProfileEditFormData> = async data => {
    try {
      const formData = new FormData();

      if (data.name) formData.append('name', data.name);
      if (data.position) formData.append('position', data.position);
      if (data.description) formData.append('description', data.description);
      if (data.avatar) formData.append('avatarFile', data.avatar);

      await updateProfile(formData);
      await getProfile();
      toast.success('Данные обновлены');
      resetForm();
    } catch {
      const error = useProfileStore.getState().error;
      toast.error(error || 'Ошибка');
      resetForm();
    }
  };

  const positionOptions = positions.map(p => ({
    label: p,
    value: p,
  }));

  return (
    <Modal id="profile_edit_modal" className="max-h-[570px] h-full">
      <Title position="center">Редактирование профиля</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-4">
          <Input
            value={watch('name')}
            placeholder="Имя"
            onChange={value => setValue('name', String(value))}
          />

          <Select
            placeholder="Должность"
            options={positionOptions}
            value={
              positionOptions.find(p => p.value === watch('position')) ?? null
            }
            onChange={option =>
              setValue('position', String(option?.value), {
                shouldValidate: false,
                shouldDirty: true,
              })
            }
          />

          <Textarea
            placeholder="О себе"
            value={watch('description')}
            onChange={value => setValue('description', value)}
          />

          <input
            type="file"
            accept="image/jpeg, image/png"
            onChange={handleFileChange}
            className="file-input file-input-bordered file-input-neutral w-full text-center m-auto"
          />

          {errors.avatar && (
            <p className="text-error text-sm">{errors.avatar.message}</p>
          )}

          <Button
            disabled={
              !watch('name')?.trim() &&
              !watch('position') &&
              !watch('description')?.trim() &&
              !watch('avatar')
            }
            className="btn-primary w-full"
          >
            Сохранить
          </Button>
        </div>
      </form>
    </Modal>
  );
}
