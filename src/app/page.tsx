import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Button} from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Page = () => {
    return (
        <div
            className='roboto bg-gray-950 h-screen w-screen flex flex-col  text-slate-50 justify-center items-center text-6xl '>


            <div className='flex gap-6 text-xl md:text-2xl absolute top-6 left-6'>
                <span className="font-extralight">Pablo Farias <span
                    className="text-indigo-500 font-normal">| Developer</span></span>
            </div>

            <div className='flex gap-6 text-2xl absolute top-6 right-6'>
                <Sheet>
                    <SheetTrigger><FontAwesomeIcon icon={faBars} size="1x"/></SheetTrigger>
                    <SheetContent className='bg-gray-950 border-0 text-slate-100'>
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <SheetDescription>
                               <ul className='gap-6 text-center text-xl text-slate-100'>
                                   <li className='p-4'>Inicio</li>
                                   <li className='p-4'>Sobre</li>
                                   <li className='p-4'>Serviços</li>
                                   <li className='p-4'>Portifolio</li>
                                   <li className='p-4'>Contato</li>
                               </ul>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            <h1 className='text-4xl md:text-6xl'>&lt;Pablo Farias/&gt;</h1>

            <p className="mt-6 text-xl md:text-2xl font-light"><span
                className="text-xl md:text-2xl text-indigo-500">FullStack |</span> Developer</p>

            <div className='flex gap-6 text-3xl absolute bottom-6 center-0'>
                <FontAwesomeIcon icon={faGithub} size="1x" className='hover:text-slate-500'/>
                <FontAwesomeIcon icon={faInstagram} size="1x" className='hover:text-rose-500'/>
                <FontAwesomeIcon icon={faLinkedin} size="1x" className='hover:text-blue-500'/>

            </div>


        </div>
    )
}


export default Page;