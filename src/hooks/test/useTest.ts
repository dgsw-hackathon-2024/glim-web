import { testStore } from "src/store/testScore/testScoreStore";
import { useState } from "react";

const useTest = () => {
  const [score, setScore] = useState<number>(0);
  const setScoreStore = testStore((state) => state.setScoreStore);
  const IncreaseScore = () => {
    setScore((prev) => prev + 1);
    setScoreStore(score);
  };

  return {
    IncreaseScore,
  };
};

export default useTest;
