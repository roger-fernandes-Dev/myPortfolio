import Image from 'next/image';
import photo_2 from "../../../public/photo_2.jpg";
export default function History() {
    return (
        <article className="w-full h-1000 flex flex-col mt-8 justify-center items-center text-white">
            <h1 className="w-full h-28 text-center text-3xl font-semibold">My history</h1>
            <section className="w-11/12 h-800 md:w-4/5 md:h-4/5 lg:w-1000 lg:h-800 flex flex-col justify-evenly items-center lg:flex-row lg:justify-evenly lg:items-center">
                   <section className="w-full h-2/5 md:w-9/12 md:h-2/5 lg:w-2/4 lg:h-full flex justify-center items-center">
                    <Image src={photo_2} width={300} height={300} alt="photo_perfil" className="hover:grayscale hover:scale-125 transition-all hover:ease-in duration-1000" />
                   </section>
                   <section className="w-full h-2/4 md:w-9/12 md:h-2/5 lg:w-2/4 lg:h-full flex justify-center items-center">
                        <section className="w-full h-full md:w-full lg:w-10/12 lg:h-3/4 flex justify-center items-center ">
                            <p className="lg:leading-10 lg:p-3 font-medium text-center">My interest in Web development arose during college, when I was studying computer science. I remember it was the peak of Facebook and the end of Orkut as well. So, self-taught, I started studying and gaining knowledge about the technologies that involve Web development. I went through versions of XHTML, when Flash was still widely used, and it was terrible to adapt pages to smaller monitors. Nowadays, i am seeking knowledge in frameworks such as React and Angular, and slowly learning about the integration of the Web3 world into web2 pages.</p>
                        </section>
                   </section>
            </section>            
        </article>
    )
}