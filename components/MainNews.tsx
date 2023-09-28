import Image from 'next/image';

import CustomButton from './CustomButton';

interface Props {
  title: string;
  mainNewsData?: MainNewsDataItem[];
  mainNewsSecondData?: MainNewsDataItem[];
}

const MainNews = ({ title, mainNewsData, mainNewsSecondData }: Props) => {
  if (mainNewsData) {
    return (
      <div className="py-8 px-8">
        <h2 className="text-3xl font-medium main-color">{title}</h2>

        <div className="pt-6 flex gap-4">
          {mainNewsData.map(items => (
            <div key={items.id}>
              <div className="flex items-center gap-2">
                <CustomButton
                  title={`${items.title}`}
                  containerStyles="text-cyan-50 rounded-full main-bg-orange-color py-1 px-1 text-xs"
                />
                <p className="text-xs main-third-gray-color">
                  1.01.2023, 13:53
                </p>
              </div>

              <div className="pt-2">
                <p className="font-medium text-base main-black-color">
                  {items.text}
                </p>
              </div>

              <div className="flex gap-2 pt-6">
                <div className="flex items-center gap-1">
                  <Image
                    src="/./main-icons/love-emoji.png"
                    alt="error"
                    width={14}
                    height={14}
                  />
                  <p className="text-sm main-third-gray-color">23</p>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src="/./main-icons/angry-emoji.png"
                    alt="error"
                    width={14}
                    height={14}
                  />
                  <p className="text-sm main-third-gray-color">23</p>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src="/./main-icons/shit-emoji.png"
                    alt="error"
                    width={14}
                    height={14}
                  />
                  <p className="text-sm main-third-gray-color">23</p>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src="/./main-icons/comment-icon.png"
                    alt="error"
                    width={14}
                    height={14}
                  />
                  <p className="text-sm main-gray-color">7</p>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src="/./main-icons/save-icon.png"
                    alt="error"
                    width={14}
                    height={14}
                  />
                  <p className="text-sm main-gray-color">14</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-4 mt-3">
      <h2 className="text-3xl font-medium main-color pl-8">{title}</h2>

      <div className="pt-4 flex gap-3">
        {mainNewsSecondData?.map(items => (
          <div key={items.id}>
            <Image src={`${items.src}`} alt="error" width={264} height={164} />

            <div className="pt-2 pb-3 px-3">
              <p className="text-xs main-gray-color">1.01.2023, 13:53</p>
              <p className="main-black-color text-base font-medium">
                {items.text}
              </p>

              <div className="flex gap-2 pt-4">
                <div className="flex items-center gap-1">
                  <Image
                    src="/./main-icons/love-emoji.png"
                    alt="error"
                    width={14}
                    height={14}
                  />
                  <p className="text-sm main-third-gray-color">23</p>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src="/./main-icons/angry-emoji.png"
                    alt="error"
                    width={14}
                    height={14}
                  />
                  <p className="text-sm main-third-gray-color">23</p>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src="/./main-icons/shit-emoji.png"
                    alt="error"
                    width={14}
                    height={14}
                  />
                  <p className="text-sm main-third-gray-color">23</p>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src="/./main-icons/comment-icon.png"
                    alt="error"
                    width={14}
                    height={14}
                  />
                  <p className="text-sm main-gray-color">7</p>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src="/./main-icons/save-icon.png"
                    alt="error"
                    width={14}
                    height={14}
                  />
                  <p className="text-sm main-gray-color">14</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
