import {Quadrado} from'@/componentes/Quadrado'
import {Circulo} from "@/componentes/Circulo";
import {Pessoa} from "@/componentes/Pessoa";


const Page =()=>{
    return (
        <>
            <h1 className=" text-lg text-indigo-500">Pablo Farias</h1>
            <span>Amo minha familia</span>
            <Quadrado/>
            <Circulo/>
            <Pessoa/>
        </>
    )
}


export default Page;