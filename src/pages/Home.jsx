import { useState } from "react";
import Header from "../components/Header/Header";
import { MdFilterAlt } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const json_bufet = [
  {
    "id": 1,
    "name": "Buffet A",
    "description": "Buffet A é conhecido por sua comida deliciosa e atendimento excepcional.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5x6oH_iKND6JPLEXzOiTjGoTnCn44JsI8Fw&s",
    "link": "https://example.com/buffet-a",
    "endereco": "endereço de teste"
  },
  {
    "id": 2,
    "name": "Buffet B",
    "description": "Buffet B oferece uma variedade de pratos para atender a todos os gostos.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5x6oH_iKND6JPLEXzOiTjGoTnCn44JsI8Fw&s",
    "link": "https://example.com/buffet-a",
    "endereco": "endereço de teste"
  },
  {
    "id": 3,
    "name": "Buffet C",
    "description": "Buffet C é especializado em eventos corporativos e festas de casamento.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5x6oH_iKND6JPLEXzOiTjGoTnCn44JsI8Fw&s",
    "link": "https://example.com/buffet-a",
    "endereco": "endereço de teste"
  }
  ,
  {
    "id": 3,
    "name": "Buffet C",
    "description": "Buffet C é especializado em eventos corporativos e festas de casamento.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5x6oH_iKND6JPLEXzOiTjGoTnCn44JsI8Fw&s",
    "link": "https://example.com/buffet-a",
    "endereco": "endereço de teste"
  },
  {
    "id": 3,
    "name": "Buffet C",
    "description": "Buffet C é especializado em eventos corporativos e festas de casamento.",
    "price": 1500,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5x6oH_iKND6JPLEXzOiTjGoTnCn44JsI8Fw&s",
    "link": "https://example.com/buffet-a",
    "endereco": "endereço de teste"
  }
];
function Home() {
  const [buffets_exibir, setBuffetsExibir] = useState(json_bufet);
  const [nomePesquisa, setNomePesquisa] = useState('');
  const handleResultPesquisa = () => {
    const buffetsFiltrados = json_bufet.filter((buffet) =>
      buffet.name.toLowerCase().includes(nomePesquisa.toLowerCase())
    );
    return buffetsFiltrados;
  }
  return (
    <div>
      <Header />
      <div className="w-[80%] m-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl text-[#022946] font-bold text-center mt-10">Bem-vindo ao Nexora!</h1>
        <p className="text-center mt-5">Aqui você encontrará os melhores buffets para o seu evento.</p>
        <div className='w-full mt-10'>

          <div className="flex w-full gap-2 items-center justify-center">
            <div className="flex w-full justify-center items-center">
              <input type="text" placeholder="Procure por nome do buffet"
                value={nomePesquisa}
                onChange={(e) => setNomePesquisa(e.target.value)}
                className="w-[95%] rounded-tl-md rounded-bl-md bg-[#f2f2f2] px-4 py-2 outline-none" />
              <button
                onClick={() => setBuffetsExibir(handleResultPesquisa())}
                className="bg-[#022946] text-white font-bold text-[14px] flex justify-center items-center w-[5%] py-[7.3px] rounded-tr-md rounded-br-md cursor-pointer"><MdSearch size={25} /></button>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="cursor-pointer  px-[10px] ">{<MdFilterAlt size={27} color="#6b6b6b" />}</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10 mb-10">
          {buffets_exibir.map((buffet) => (
            <Link to={buffet.link} key={buffet.id} className="bg-white rounded-lg shadow-md p-5">
              <img src={buffet.image} alt={buffet.name} className="w-full h-[200px] object-cover rounded-t-lg" />
              <h2 className="text-xl font-bold mt-2">{buffet.name}</h2>
              <p className="text-gray-600 my-3">{buffet.description}</p>
              <p className="text-[#022946] font-bold text-[14px]">{buffet.endereco}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
