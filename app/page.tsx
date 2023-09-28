import MainNews from '@/components/MainNews';
import MainRibbon from '@/components/MainRibbon';
import Sidebar from '@/components/Sidebar';
import { mainNewsData, mainNewsSecondData } from '@/mock';

export default function Home() {
  return (
    <main className="pt-6">
      <div className="flex gap-3">
        <Sidebar />

        <div className="flex-[4_4_0%]">
          <MainRibbon />
          <MainNews title="Читайте также" mainNewsData={mainNewsData} />
          <MainNews
            title="Проишествия"
            mainNewsSecondData={mainNewsSecondData}
          />
        </div>
      </div>
    </main>
  );
}
