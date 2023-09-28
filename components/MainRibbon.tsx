import { secondRibbon, ticker } from '@/mock';
import Image from 'next/image';

import CustomButton from './CustomButton';

const MainRibbon = () => {
  return (
    <div>
      <div className="flex gap-3">
        <div className="flex-[3_3_0%] pt-8">
          <div className="pl-8">
            <h2 className="font-medium text-3xl">Лента</h2>

            <div className="mt-4">
              {secondRibbon.map(items => (
                <div key={items.id} className="flex gap-2 mt-3">
                  <div>
                    <Image
                      src="/./main-icons/lightning.png"
                      alt="error"
                      width={24}
                      height={24}
                    />
                  </div>

                  <div>
                    <p className="text-base main-color">{items.text}</p>

                    <div className="flex gap-1 items-center pt-1">
                      <p className="main-gray-color text-sm">14:59</p>
                      <CustomButton
                        title="Политика"
                        containerStyles="text-cyan-50 rounded-full main-bg-orange-color py-1 px-1 text-xs"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ticker main-bg-color py-3 mt-6 rounded-bl-xl rounded-br-xl">
            <div className=" ticker__wrapper flex items-center gap-1">
              {ticker.map(items => (
                <>
                  <Image
                    key={items.id}
                    src="/./main-icons/firee.png"
                    alt="error"
                    width={24}
                    height={24}
                  />
                  <p className="text-base text-cyan-50">ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 py-3 px-3">
          <div className="flex gap-1">
            <p className="text-xs main-color">Ссылка на сайт</p>
            <p className="small-text main-gray-color">РЕКЛАМА</p>
          </div>

          <div className="w-full h-4/5 main-second-gray-color rounded-xl mt-2 mb-3 flex justify-center items-center">
            <p className="font-medium text-3xl text-black">Реклама</p>
          </div>

          <div>
            <p className="text-base main-color">
              Текст длинного рекламного объявления
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRibbon;
