import { Icons } from '@components';

type HeaderPropsType = {};

const Header = (props: HeaderPropsType) => {
  return (
    <div className="bg-black px-12 py-6">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <Icons.SvgLogo className="text-white cursor-pointer hover:text-red-300" />
          <Icons.SvgRiotBar className="ml-7" />
        </div>
        <div className="flex flex-row align-center items-center">
          <div className="ml-9 mr-10 text-13">
            <button className="text-gray-50 py-2 px-4 hover:bg-gray-100 rounded-7 mr-4 font-bold">OYUN BİLGİSİ</button>
            <button className="text-gray-50 py-2 px-4 hover:bg-gray-100 rounded-7 mr-4 font-bold">MEDYA</button>
            <button className="text-gray-50 py-2 px-4 hover:bg-gray-100 rounded-7 mr-4 font-bold cursor-not-allowed">
              HABERLER
            </button>
            <button className="text-gray-50 py-2 px-4 hover:bg-gray-100 rounded-7 mr-4 font-bold cursor-not-allowed">
              LİDERLİK TABLOSU
            </button>
            <button className="text-gray-50 py-2 px-4 hover:bg-gray-100 rounded-7 mr-4 font-bold cursor-not-allowed">
              DESTEK
            </button>
            <button className="text-gray-50 py-2 px-4 hover:bg-gray-100 rounded-7 mr-4 font-bold cursor-not-allowed">
              SOSYAL
            </button>
            <button className="text-gray-50 py-2 px-4 hover:bg-gray-100 rounded-7 mr-4 font-bold cursor-not-allowed">
              Daha Fazlası
            </button>
          </div>
        </div>
        <div className="flex flex-row align-center items-center">
          <div className="bg-gray-150 rounded-2xl py-1 px-3">
            <Icons.SvgSearch className=" text-white w-6 h-9 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            <Icons.SvgWorld className="ml-2" />
          </div>
          <div className="flex ml-3 border-transparent px-4 py-2 rounded-12 text-13 text-black font-bold bg-gradient-to-br cursor-pointer from-red-150 via-red-100 to-red-50 hover:bg-gradient-to-tr">
            HEMEN OYNA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
