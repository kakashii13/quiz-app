import { createContext, useContext, useEffect, useState } from "react";

interface QuizData {
  category: number;
  difficulty: string;
}

interface PropChildren {
  children: JSX.Element | JSX.Element[];
}

interface ContextProps {
  quizData: QuizData;
  setCategory: (id: number) => void;
  setDifficulty: (difficulty: string) => void;
  addPoints: (points: number) => void;
  questions: QuizDB[];
  totalPoints: number;
}

interface QuizDB {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
}
const quizContext = createContext({} as ContextProps);

export const useQuizContext = () => useContext(quizContext);

export const QuizProvider = ({ children }: PropChildren) => {
  const [quizData, setQuizData] = useState<QuizData>({} as QuizData);
  const [questions, setQuestions] = useState<QuizDB[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);

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

  return (
    <quizContext.Provider
      value={{ quizData, setCategory, setDifficulty, questions, totalPoints, addPoints }}
    >
      {children}
    </quizContext.Provider>
  );
};
