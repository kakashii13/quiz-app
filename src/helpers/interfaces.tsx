export interface QuizData {
  category: number;
  difficulty: string;
}

export interface PropChildren {
  children: JSX.Element | JSX.Element[];
}

export interface ContextProps {
  quizData: QuizData;
  setCategory: (id: number) => void;
  setDifficulty: (difficulty: string) => void;
  addPoints: (points: number) => void; // score
  questions: QuizDB[];
  totalPoints: number;
}

export interface QuizDB {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
}
