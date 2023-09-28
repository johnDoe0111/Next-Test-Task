import Image from 'next/image';

const Header = () => {
  return (
    <div className="pt-5 pb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-28">
          <h1 className="font-medium text-3xl">ЛОГО</h1>
          <div className="flex flex-1 gap-9">
            <div className="flex gap-1 items-center">
              <Image
                src="/icons_small.png"
                alt="error"
                width={24}
                height={24}
              />
              <p className="text-sm font-normal">ПН, 4.08.2023</p>
            </div>

            <div className="flex gap-1 items-center">
              <Image
                src="/icons_small2.png"
                alt="error"
                width={24}
                height={24}
              />
              <p className="text-sm font-normal">96.34</p>
            </div>

            <div className="flex gap-1 items-center">
              <Image
                src="/icons_small3.png"
                alt="error"
                width={24}
                height={24}
              />
              <p className="text-sm font-normal">104.61</p>
            </div>

            <div className="flex gap-1 items-center">
              <Image
                src="/icons_small4.png"
                alt="error"
                width={24}
                height={24}
              />
              <p className="text-sm font-normal">25.725</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Image src="/search-icon.png" alt="error" width={36} height={36} />
          <Image src="/user-avatar.png" alt="error" width={36} height={36} />
        </div>
      </div>
    </div>
  );
};

export default Header;
