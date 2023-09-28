import Image from 'next/image';

import CustomButton from './CustomButton';

const Footer = () => {
  return (
    <div className="main-bg-black-color pt-10 pb-12 text-white mt-28">
      <div className="container flex items- justify-between">
        <div>
          <h2 className="text-5xl font-normal">ЛОГО</h2>
          <p className="text-xs pt-6">© НАЗВАНИЕ 2023. Все права защищены</p>
        </div>

        <div className="flex items-center gap-20">
          <div className="text-sm">
            <p>Контакты</p>
            <p className="pt-3">Редакция</p>
          </div>

          <div className="text-sm">
            <p>Политика конфиденциальности</p>
            <p>Условия использования</p>
            <p>Реклама</p>
          </div>
        </div>

        <div className="text-sm">
          <p>
            По любым вопросам пишите на
            <br />
            <span className="main-orange-color">privet@yandex.com</span>
          </p>
          <div className="flex items-center pt-4 gap-2">
            <Image
              src="/./main-icons/telegram.png"
              alt="error"
              width={24}
              height={24}
            />
            <p className="text-xs">Подписаться</p>
          </div>
        </div>

        <div className="pt-10">
          <CustomButton
            title="Предложить новость"
            containerStyles="rounded-lg main-bg-orange-color py-2 px-4 text-sm font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
