import { ribbon } from '@/mock';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-3 text-cyan-50 main-bg-color rounded-xl py-3 pl-5">
        <Image
          src="/./main-icons/flash.png"
          alt="error"
          width={32}
          height={32}
        />
        <p className="text-lg">Лента</p>
      </div>

      {ribbon.map(items => (
        <div
          key={items.id}
          className="flex items-center gap-3 main-color pl-5 py-3">
          <Image src={items.src} alt="error" width={32} height={32} />
          <p className="text-lg">{items.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
