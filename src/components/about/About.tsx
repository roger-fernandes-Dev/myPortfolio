export default function About(){
    return (
        <article className="w-full h-500 flex flex-col text-white">
            <header className="w-full text-white flex justify-center text-3xl font-semibold">
                <h1>Education</h1>
            </header>
            <section className="w-full h-full flex flex-col lg:flex-row justify-center items-center">
                <section className="w-11/12 h-2/4 lg:w-500 lg:h-full flex flex-col justify-evenly items-center">
                    <header className="w-full h-11 flex justify-center items-center">
                        <h1 className="text-xl font-medium text-green-400 border-b-4 border-green-400"><i>knowlegdes</i></h1>
                    </header>
                    <ul className="w-full h-40 flex flex-col justify-evenly">
                        <li className="font-medium transition-all duration-300 hover:text-green-400 cursor-pointer">Computer Science - (2012-2016) UNIP</li>
                        <li className="font-medium transition-all duration-300 hover:text-green-400 cursor-pointer">CERTIFICATION LINUX LPI ESSENTIALS - 2018 ALURA</li>
                        <li className="font-medium transition-all duration-300 hover:text-green-400 cursor-pointer">Web Design responsive - 2017 ALURA</li>
                        <li className="font-medium transition-all duration-300 hover:text-green-400 cursor-pointer">Front End - 2018 ALURA</li>
                        <li className="font-medium transition-all duration-300 hover:text-green-400 cursor-pointer">Bootstrap - 2017 ALURA</li>
                    </ul>
                </section>
                <section className="w-11/12 h-2/4 lg:w-500 lg:h-full flex flex-col justify-evenly items-center0">
                    <header className="w-full h-11 flex justify-center items-center0">
                        <h1 className="text-xl font-medium text-green-400 border-b-4 border-green-400"><i>Non-technical Skills</i></h1>
                    </header>
                    <ul  className="w-full h-40 flex flex-col justify-evenly">
                        <li className="font-medium transition-all duration-300 hover:text-green-400 cursor-pointer">Strong desire to learn.</li>
                        <li className="font-medium transition-all duration-300 hover:text-green-400 cursor-pointer">Strong listening and communication skills.</li>
                        <li className="font-medium transition-all duration-300 hover:text-green-400 cursor-pointer">Organized and detail-oriented.</li>
                        <li className="font-medium transition-all duration-300 hover:text-green-400 cursor-pointer">Willing to tackle new challenges and solve problems creatively.</li>
                    </ul>
                </section>
            </section>
        </article>
    )
}