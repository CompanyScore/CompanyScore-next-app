"use client";

import {
  Button,
  Input,
  Modal,
  Textarea,
  Title,
  Dropdown,
  Toast,
  useToast,
} from "@/ui";
import { positions } from "@/shared";
import { useProfileStore } from "@/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const scheme = yup.object().shape({
  name: yup.string(),
  position: yup.string(),
  description: yup.string(),
  avatar: yup
    .mixed()
    .test("fileType", "Допустимые форматы: JPG, PNG", (value) => {
      return (
        !value ||
        (value instanceof File &&
          ["image/jpeg", "image/png"].includes(value.type))
      );
    }),
});

export function ProfileEditModal() {
  const { getProfile, updateProfile } = useProfileStore();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(scheme),
    defaultValues: {
      name: "",
      position: "",
      description: "",
      avatar: "",
    },
  });

  const showToast = useToast((state) => state.showToast);

  const closeModal = () => {
    const modal = document.getElementById(
      "companies_add_comment_modal",
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
      setValue("avatar", selectedFile, { shouldValidate: true });
    }
  };

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();

      if (data.name) formData.append("name", data.name);
      if (data.position) formData.append("position", data.position);
      if (data.description) formData.append("description", data.description);
      if (data.avatar) formData.append("avatarFile", data.avatar);

      await updateProfile(formData);
      await getProfile();
      showToast("Данные обновлены", "success");
      resetForm();
    } catch (e) {
      const error = useProfileStore.getState().error;
      showToast(error || "Ошибка", "error");
      resetForm();
    }
  };

  return (
    <Modal id="profile_edit_modal" className="max-h-[570px] h-full">
      <Title size="3" position="center">
        Редактирование профиля
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-4">
          <Input
            value={watch("name")}
            placeholder="Имя"
            onChange={(value) => setValue("name", value)}
          />

          <Dropdown
            width="430px"
            text="Должность"
            isFirstDisabled={true}
            options={positions}
            selectedValue={watch("position")}
            onSelect={(value) =>
              setValue("position", value, {
                shouldValidate: false,
                shouldDirty: true,
              })
            }
          />

          <Textarea
            placeholder="О себе"
            value={watch("description")}
            onChange={(value) => setValue("description", value)}
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
              !watch("name")?.trim() &&
              !watch("position") &&
              !watch("description")?.trim() &&
              !watch("avatar")
            }
            className="btn-primary w-full"
          >
            Сохранить
          </Button>
        </div>
      </form>

      <Toast />
    </Modal>
  );
}
