import Header from './../components/header/Header';
import Projects from './../components/listProjects/Projects';
import History from './../components/myHistory/History';
import About from './../components/about/About';
export default function Home() {
  return (
    <main className="w-full scroll-smooth bg-black flex flex-col items-center">
      <Header />
      <Projects />
      <History />
      <About />
    </main>
  )
}
