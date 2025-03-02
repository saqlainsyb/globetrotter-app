import { BackgroundBeams } from "../components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation } from "@tanstack/react-query";
import { checkAnswer, getRandomQuestion } from "@/api";
import { useState } from "react";
import Confetti from "react-confetti";
import { ChevronsDown, RefreshCw } from "lucide-react";
import sadAnimation from "@/assets/sad-animation.gif";
import ChallengeFriend from '@/components/challengeFriend'
import { Helmet } from 'react-helmet-async';

function Globetrotter() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null); // null = no answer yet, true = correct, false = wrong
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSadAnimation, setShowSadAnimation] = useState(false);
  const [funFacts, setFunFacts] = useState(null);

  const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);

  const {
    isLoading,
    error,
    data: randomQuestionData,
    refetch,
  } = useQuery({
    queryKey: ["randomQuestion"],
    queryFn: () => getRandomQuestion(),
  });

  const checkAnswerMutation = useMutation({
    mutationFn: ({ destinationId, userAnswer }) =>
      checkAnswer(destinationId, userAnswer),
    onSuccess: (data) => {
      if (data.isCorrect) {
        setShowConfetti(true);
        setShowSadAnimation(false);
        setCorrectCount((prev) => prev + 1);
      } else {
        setShowConfetti(false);
        setShowSadAnimation(true);
        setIncorrectCount((prev) => prev + 1);
      }
      setFunFacts(data.funFact);
      setIsCorrect(data.isCorrect);
    },
    onError: () => {
      alert("Something went wrong checking your answer. Please try again.");
    },
  });

  const handleAnswerClick = (choice) => {
    setSelectedAnswer(choice);
    if (randomQuestionData) {
      checkAnswerMutation.mutate({
        destinationId: randomQuestionData._id,
        userAnswer: choice,
      });
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowConfetti(false);
    setShowSadAnimation(false);
    setFunFacts(null);
    refetch(); // Fetch a new question
  };

  const resetScores = () => {
    setCorrectCount(0);
    setIncorrectCount(0);
  };

  return (
    <div className="h-dvh w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased p-6">
        <Helmet title="Play Globetrotter"/>
        {/* Score Section */}
        <div className="absolute top-6 left-6 flex items-center gap-4 bg-neutral-900/80 p-3 rounded-full border border-neutral-700 shadow-lg">
        <div className="flex items-center gap-2 text-white font-medium">
            <span className="w-5 h-5 bg-blue-500 rounded-full inline-block"></span>
            <span className="text-lg">Correct:</span>
            <span className="font-bold text-blue-400 text-lg">{correctCount}</span>
        </div>
        <div className="flex items-center gap-2 text-white font-medium">
            <span className="w-5 h-5 bg-red-500 rounded-full inline-block"></span>
            <span className="text-lg">Incorrect:</span>
            <span className="font-bold text-lg text-red-400">{incorrectCount}</span>
        </div>
        <Button onClick={resetScores} variant="icon" className="bg-amber-100 active:bg-amber-200 rounded-full px-6 cursor-pointer z-50 transition-transform duration-150 active:scale-95"><RefreshCw /></Button>
        </div>

      {showConfetti && (
        <Confetti className="fixed top-0 left-0 w-full h-full z-50" />
      )}
      <div className="text-center space-y-6">
        <div className="relative">
          {showSadAnimation && (
            <div className="absolute top-[-100px] left-[calc(50%-35px)] roght-0 flex justify-center">
              <img
                src={sadAnimation}
                alt="Sad animation"
                className="w-[70px]"
              />
            </div>
          )}
          <h1 className="text-3xl font-bold text-white">🌍 Guess the city !</h1>
        </div>
        <p className="text-purple-400 flex items-center justify-center">Clues Below <ChevronsDown className="w-5 h-5 text-green-200 inline-block" /></p>
        {/* Clues Section */}
        <div className="space-y-2">
          {randomQuestionData &&
            randomQuestionData?.clues.map((clue, index) => (
              <p key={index} className="text-lg text-amber-300">
                {randomQuestionData?.clues.length > 1 && <span className="text-amber-400">({index+1})</span>} {clue} 
              </p>
            ))}
        </div>

        {/* Choices Section */}
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto z-20">
          {randomQuestionData &&
            randomQuestionData?.choices.map((choice) => (
              <Button
                key={choice}
                onClick={() => handleAnswerClick(choice)}
                variant="secondary"
                className={`w-full text-base z-50 cursor-pointer transition-transform duration-150 active:scale-95
                                ${
                                  selectedAnswer === choice
                                    ? isCorrect === null
                                      ? "bg-blue-500 text-white" // Initial click state
                                      : isCorrect
                                      ? "bg-green-500 text-white hover:bg-green-500 hover:text-white" // Correct answer
                                      : "bg-red-500 text-white hover:bg-red-500 hover:text-white animate-shake" // Wrong answer
                                    : ""
                                }`}
                disabled={selectedAnswer !== null && selectedAnswer !== choice}
              >
                {choice}
              </Button>
            ))}
        </div>
        {/* Fun Fact Section */}
        {selectedAnswer && funFacts && (
          <div className="mt-6 p-4 bg-neutral-800 text-neutral-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-2">
              Did you know? <span className="bg-gradient-to-b from-purple-400 to-blue-400 bg-clip-text text-transparent">(Fun Fact)</span>
            </h2>
            <ul className="space-y-2 pl-5">
              {funFacts?.map((fact, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-neutral-300"
                >
                  <span className="text-blue-400 mt-0.5">✦</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
      {/* Next Question Button */}
      {selectedAnswer && (
          <Button
            onClick={() => handleNextQuestion()}
            variant="outline"
            className="mt-4 text-lg transition-transform duration-150 active:scale-95 z-100 pe-2 cursor-pointer"
          >
            Next ➡️
          </Button>
        )}
      <BackgroundBeams />
      <ChallengeFriend correctCount={correctCount} incorrectCount={incorrectCount}/>
    </div>
  );
}

export default Globetrotter;
