import { Button, Container, Input, Textarea, Title } from '@/ui';
import {
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from '@tabler/icons-react';

const socialIcons = [
  { name: 'LinkedIn', icon: <IconBrandLinkedin /> },
  { name: 'Telegram', icon: <IconBrandTelegram /> },
  { name: 'WhatsApp', icon: <IconBrandWhatsapp /> },
];

export const Contacts = () => {
  return (
    <div className="md:pt-0 md:mt-0 md:max-w-7xl m-auto">
      <Container>
        <div className="flex flex-col">
          <p className="md:mt-4 mb-3 md:mb-2 text-xs font-semibold uppercase tracking-tighter text-neutral-400">
            / КОНТАКТЫ /
          </p>
          <Title className="mt-3 md:mt-3 text-xl md:text-xl md:leading-[1.2] md:w-1/2">
            Мы&nbsp;всегда на&nbsp;связи и&nbsp;готовы ответить на&nbsp;ваши
            вопросы, предложения и&nbsp;отзывы!
          </Title>
        </div>

        <div className="flex flex-col md:flex-row justify-between pt-10">
          <div className="flex flex-col gap-2">
            <p className="text-neutral-400 text-sm md:leading-[1.4]">Почта</p>
            <p className="">support@companyscore.ru</p>
            <p className="text-neutral-400 mt-6">Социальные сети</p>
            <div className="flex flex-row items-center gap-4 ">
              {socialIcons.map(social => (
                <Button
                  key={social.name}
                  className="btn-secondary rounded-full w-12 h-10 p-0 md:p-0"
                >
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center w-full h-auto max-w-[600px] bg-neutral-100 rounded-[20px] p-8">
            <Title className="text-2xl md:text-2xl text-center">
              Напишите нам
            </Title>
            <form className="mt-6">
              <label>Ваше имя</label>
              <Input placeholder="" onChange={() => {}} />
              <label>Email</label>
              <Input placeholder="" onChange={() => {}} />
              <label>Тема сообщения</label>
              <Input placeholder="" onChange={() => {}} />
              <label>Сообщение</label>
              <Textarea
                className="max-w-full md:max-w-full w-full"
                placeholder=""
                onChange={() => {}}
              />
            </form>
            <Button className="md:mt-7 text-center max-w-[135px]">
              Отправить
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
