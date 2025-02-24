"use client";

import { useState } from "react";
import { Button, Input, Modal, Textarea, Title } from "@/ui";
import { useUserStore } from "@/store/user-id";
import { Dropdown } from "@/ui";
import { positions } from "@/shared";
import { useProfileStore } from "@/store";

export function ProfileEditModal() {
  const { userId } = useUserStore();
  const { getProfile, updateProfile } = useProfileStore();

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState<string | Blob>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setAvatar(selectedFile);
    }
  };

  const onSubmit = async () => {
    const formData = new FormData();
    if (name) formData.append("name", name);
    if (position) formData.append("position", position);
    if (description) formData.append("description", description);
    if (avatar) formData.append("avatarFile", avatar);

    for (const [key, value] of formData) {
      console.log(`${key}: ${value}`);
    }

    if (userId) await updateProfile(userId, formData);
    if (userId) getProfile(userId);
    // ДОБАВИТЬ ТОСТ
  };

  return (
    <Modal id="profile_edit_modal" className="max-h-[570px] h-full">
      <Title size="3" position="center">
        Редактирование профиля
      </Title>
      <div className="flex flex-col items-center gap-4">
        <Input placeholder="Имя" onChange={setName} />

        <Dropdown
          width="430px"
          text="Должность"
          isFirstDisabled={true}
          options={positions}
          selectedValue={position}
          onSelect={setPosition}
        />

        <Textarea placeholder="О себе" onChange={setDescription} />
      </div>
      <input
        type="file"
        onChange={handleFileChange}
        className="file-input file-input-bordered file-input-neutral w-full max-w-xs text-center m-auto"
      />
      <Button className="btn-primary" onClick={onSubmit}>
        <label htmlFor="profile_edit_modal">Сохранить</label>
      </Button>
    </Modal>
  );
}
