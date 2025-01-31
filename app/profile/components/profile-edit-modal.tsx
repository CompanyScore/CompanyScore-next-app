"use client";

import { useState } from "react";
import { Button, Input, Modal, Title } from "@/ui";
import axios from "axios";
import { useUserStore } from "@/store/user-id";

export function ProfileEditModal() {
  const { userId, setUserId, clearUserId } = useUserStore();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState<string | Blob>("");
  const [toast, setToast] = useState({
    message: "",
    type: "success",
  }); // Состояние для тоста
  const [isToastVisible, setIsToastVisible] = useState(false);

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

    try {
      await axios.patch(`http://localhost:8080/users/${userId}`, formData);
      setToast({ message: "Профиль обновлен!", type: "success" });
    } catch (error) {
      setToast({ message: "Ошибка обновления профиля.", type: "error" });
    } finally {
      setIsToastVisible(true);
      setTimeout(() => setIsToastVisible(false), 3000); // Скрыть тост через 3 секунды
    }
  };

  return (
    <Modal id="profile_edit_modal">
      <Title size="3" position="center">
        Редактирование профиля
      </Title>
      <div className="flex flex-col items-center gap-4">
        <Input placeholder="Имя" onChange={setName} />
        <Input placeholder="Должность" onChange={setPosition} />
        <Input placeholder="О себе" onChange={setDescription} />
      </div>
      <input
        type="file"
        onChange={handleFileChange}
        className="file-input file-input-bordered file-input-primary w-full max-w-xs text-center m-auto"
      />
      <Button onClick={onSubmit}>
        <label htmlFor="toast_modal">Сохранить</label>
      </Button>
    </Modal>
  );
}
