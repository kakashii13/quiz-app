import { createContext, useContext, useEffect, useState } from "react";
import {
  ContextProps,
  PropChildren,
  QuizData,
  QuizDB,
} from "../helpers/interfaces";

const quizContext = createContext({} as ContextProps);

export const useQuizContext = () => useContext(quizContext);

export const QuizProvider = ({ children }: PropChildren) => {
  const [quizData, setQuizData] = useState<QuizData>({} as QuizData);
  const [questions, setQuestions] = useState<QuizDB[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!quizData.category && !quizData.difficulty) return;
    const getTriviadb = async () => {
      const { category, difficulty } = quizData;
      const db = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
      );
      const response = await db.json();
      const results = response.results;
      setQuestions(results);
    };

    getTriviadb();
  }, [quizData]);

  const setCategory = (id: number) => {
    setQuizData({ ...quizData, category: id });
  };

  const setDifficulty = (difficulty: string) => {
    setQuizData({ ...quizData, difficulty: difficulty });
  };

  const addPoints = (points: number) => {
    setTotalPoints((totalPoints) => totalPoints + points);
  };

  const resetScore = () => setTotalPoints(0);

  const handleStarted = () => setIsStarted(true);

  return (
    <quizContext.Provider
      value={{
        quizData,
        setCategory,
        setDifficulty,
        questions,
        totalPoints,
        addPoints,
        resetScore,
        handleStarted,
        isStarted,
      }}
    >
      {children}
    </quizContext.Provider>
  );
};
