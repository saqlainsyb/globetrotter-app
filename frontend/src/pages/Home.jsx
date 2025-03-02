import { BackgroundBeams } from "../components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

function Home() {
  const navigate = useNavigate()
  return (
    <div className="h-dvh w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Helmet title="Welcome to Globetrotter Game"/>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-6xl leading-relaxed bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-purple-400 text-center font-sans font-bold whitespace-nowrap">
          Globetrotter Challenge
        </h1>
        <p></p>
        <p className="text-neutral-400 mx-auto my-2 mb-4 text-lg md:text-2xl text-center relative z-10 md:whitespace-nowrap">
          Guess the famous destination based on cryptic clues!
        </p>
        <div className="flex justify-center">
          <Button className="cursor-pointer z-20 hover:text-blue-400 transition-transform duration-150 active:scale-95" size="lg" onClick={() => navigate('/play-globetrotter')}>
            Start Game
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Home;
