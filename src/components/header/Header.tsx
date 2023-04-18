import Image from 'next/image';
import photoProfile from "../../../public/media.png";
import { GrLinkedin, GrGithub } from 'react-icons/Gr';
import { BsArrowDownCircle } from 'react-icons/Bs';

export default function Header(){

    const downloadCurriculo = () =>{
        window.location.href= "/curriculo.pdf";
    }

    return(
        <article className="w-full sm:h-600 lg:h-1000 max-w-7xl bg-black grid grid-rows-2 lg:grid lg:grid-rows-1 lg:grid-cols-2">
            <header className="flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-6xl lg:text-8xl text-center">I´m Roger Fernandes</h1>
                <p className="animate-bounce text-green-400 text-center mt-10 text-2xl lg:text-3xl font-semibold ">Front End Developer</p>
                <span className="relative flex h-3 w-3 mt-5 ml-32">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <button onClick={downloadCurriculo} className="w-32 h-10 border rounded-md text-green-400 border-green-400 trasition-all duration-700 hover:bg-green-400 hover:text-white">Download CV</button>
            </header>
            <section className="flex items-center justify-center">
                <Image src={photoProfile} width={300} height={300} 
                className="animate-fade-in origin-top transition-all duration-700 delay-100 lg:w-500 lg:h-600" alt="photo_personal"/>
            </section>
        </article>
    )
}