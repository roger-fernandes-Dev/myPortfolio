import {FaHtml5, FaCss3Alt, FaNodeJs, FaSass, FaReact} from "react-icons/fa";
import {DiJavascript} from "react-icons/di";
import {TbBrandNextjs} from "react-icons/tb";
import {SiTypescript, SiTailwindcss, SiGithub} from "react-icons/si"
import Image from 'next/image';
import generationRandonNumbers from "../../../public/generationRandomNumbers.png";
import simpleClassBasedCounter from "../../../public/simpleClassBasedCounter.png";
import simpleCalculator from "../../../public/simplecalculator.jpg";
export default function Projects(){
    return (
        <article className="w-full h-1200 mt-7 lg:w-1000 lg:h-600 flex flex-col justify-evenly items-center text-white">
            <h1 className="font-semibold text-3xl">My Experiences</h1>
            <section className="w-full flex justify-evenly mt-10">
                <FaHtml5 className="w-6 h-6 lg:w-10 lg:h-10 hover:fill-orange-500 transition-all duration-500"/>
                <FaCss3Alt className="w-6 h-6 lg:w-10 lg:h-10 hover:fill-pink-500 transition-all duration-500"/>
                <FaSass className="w-6 h-6 lg:w-10 lg:h-10 hover:fill-pink-300 transition-all duration-500"/>
                <SiTailwindcss className="w-6 h-6 lg:w-10 lg:h-10 hover:fill-blue-200 transition-all duration-500"/>
                <DiJavascript className="w-6 h-6 lg:w-10 lg:h-10 hover:fill-yellow-400 transition-all duration-500"/>
                <FaReact className="w-6 h-6 lg:w-10 lg:h-10 hover:fill-blue-200 transition-all duration-500"/>
                <TbBrandNextjs className="w-6 h-6 lg:w-10 lg:h-10 hover:fill-none transition-all duration-500"/>
                <FaNodeJs className="w-6 h-6 lg:w-10 lg:h-10 hover:fill-green-400 transition-all duration-500"/>
                <SiTypescript className="w-6 h-6 lg:w-10 lg:h-10 hover:fill-blue-400 transition-all duration-500"/>
                </section>

            <ul className="w-full h-full mt-4 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-7 md:gap-7 transition-all ease-in-out duration-300 ">
                <li className="w-4/5 h-96 flex flex-col justify-between items-center hover:scale-125 hover:-translate-y-6 transition-all ease-in-out duration-700 lg:w-4/5 lg:h-80 border-solid border-2 rounded-md border-green-400 ">

                    <header className="text-center font-semibold text-lg">Generation Random Numbers</header>
                    <figure className="flex flex-col items-center justify-evenly">
                        <Image src={generationRandonNumbers} width={260} height={260} alt="image project generation random numbers" />
                        <figcaption className="font-medium text-center p-3">My firs project with react and nextjs, a simple generation random numbers</figcaption>
                    </figure>
                    <a href="https://github.com/roger-fernandes-Dev/SimpleGenerateNumbers">
                        <button className="w-24 h-10 flex justify-evenly items-center border rounded-md text-green-400 border-green-400 trasition-all duration-700 hover:bg-green-400 hover:text-white">view <SiGithub /></button>
                    </a>                   
                </li>

                <li className="w-4/5 h-96 flex flex-col justify-between items-center hover:scale-125 hover:-translate-y-6 transition-all ease-in-out duration-700 lg:w-4/5 lg:h-80 border-solid border-2 rounded-md border-green-400 ">

                <header className="text-center font-semibold text-lg">simple class-based counter</header>
                    <figure className="flex flex-col items-center  justify-evenly">
                        <Image src={simpleClassBasedCounter} width={200} height={200} alt="simpleClassBasedCounter" />
                        <figcaption className="font-medium text-center p-3">simple design for studying class components using state</figcaption>
                    </figure>
                    <a href="https://github.com/roger-fernandes-Dev/simpleClassBasedCounter">
                        <button className="w-24 h-10 flex justify-evenly items-center border rounded-md text-green-400 border-green-400 trasition-all duration-700 hover:bg-green-400 hover:text-white">view <SiGithub /></button>
                    </a>
                </li>
                <li className="w-4/5 h-96 flex flex-col justify-between items-center hover:scale-125 hover:-translate-y-6 transition-all ease-in-out duration-700 lg:w-4/5 lg:h-80 border-solid border-2 rounded-md border-green-400 ">
                <header className="text-center font-semibold text-lg">Simple Calculator</header>
                    <figure className="flex flex-col items-center justify-around">
                        <Image src={simpleCalculator} width={200} height={200} alt="simpleClassBasedCounter" />
                        <figcaption className="font-medium text-center p-3">Calculator developed as an example of the Course</figcaption>
                    </figure>
                    <a href="https://github.com/roger-fernandes-Dev/calculadora---curso-javascript">
                        <button className="w-24 h-10 flex justify-evenly items-center border rounded-md text-green-400 border-green-400 trasition-all duration-700 hover:bg-green-400 hover:text-white">view <SiGithub /></button>
                    </a>
                </li>
            </ul>
        </article>
    )
}
