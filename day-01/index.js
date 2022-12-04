import path from "path";
import { processInputRaw } from "../utils/file";

export const run = async () => {
  const input = (await processInputRaw(path.join(__dirname, "input.txt"))).split("\n");
  const caloriesByElf = [0];
  let major = -1;

  for (let i = 0; i < input.length; i++) {
    const currentCalories = input[i];

    if (currentCalories === "") {
      caloriesByElf.push(0);
    } else {
      const currentIndex = caloriesByElf.length - 1;
      caloriesByElf[currentIndex] += parseInt(currentCalories);
      if (caloriesByElf[currentIndex] > (caloriesByElf[major] || 0)) {
        major = currentIndex;
      }
    }
  }

  console.log(caloriesByElf[major]);
  

};

if (require.main === module) {
  run();
}