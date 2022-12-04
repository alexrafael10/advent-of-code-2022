import path from "path";
import { processInputRaw } from "../../utils/file";

export const run = async () => {
  const input = (await processInputRaw(path.join(__dirname, "input.txt"))).split("\n");
  const caloriesByElf = [0];

  for (let i = 0; i < input.length; i++) {
    const currentCalories = input[i];

    if (currentCalories === "") {
      caloriesByElf.push(0);
    } else {
      const currentIndex = caloriesByElf.length - 1;
      caloriesByElf[currentIndex] += parseInt(currentCalories);
    }
  }

  const topThree = caloriesByElf.sort((a, b) => b - a).slice(0, 3);
  console.log(topThree.reduce((acc, curr) => acc + curr, 0));

};

if (require.main === module) {
  run();
}