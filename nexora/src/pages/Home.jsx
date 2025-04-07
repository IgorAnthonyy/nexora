import Header from "../components/Header/Header";
import { MdFilterAlt } from "react-icons/md"; 
import { MdSearch } from "react-icons/md"; 
function Home() {
  return (
    <div>
        <Header />
        <div className="w-[80%] m-auto flex flex-col justify-center items-center">
            <h1 className="text-4xl text-[#022946] font-bold text-center mt-10">Bem-vindo ao Nexora!</h1>
            <p className="text-center mt-5">Aqui você encontrará os melhores buffets para o seu evento.</p>
            <div className="flex w-full gap-2 items-center justify-center mt-10">
              <div className="flex w-full justify-center items-center">
                <input type="text" placeholder="Procure por nome do buffet" className="w-[95%] rounded-tl-md rounded-bl-md bg-[#f2f2f2] px-4 py-2"/>
                <button className="bg-[#022946] text-white font-bold text-[14px] flex justify-center items-center w-[5%] py-[7.3px] rounded-tr-md rounded-br-md cursor-pointer"><MdSearch size={25}/></button>
              </div>
              <button className="cursor-pointer">{<MdFilterAlt size={27} color="#6b6b6b"/>}</button>
            </div>
        </div>
    </div>
  );
}

export default Home;
