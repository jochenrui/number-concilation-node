import { getFirstNumberSet, getSecondNumberSet } from "./two-sets-api";
import * as concilation from "./number-concilation";

const main = async () => {
  const firstNumberSet = await getFirstNumberSet();
  const secondNumberSet = await getSecondNumberSet();

  console.log("First set:", firstNumberSet);
  console.log("Second set:", secondNumberSet);
  console.log(
    "Intersection of the 2 sets:",
    concilation.getIntersectionOfTwoSets(firstNumberSet, secondNumberSet)
  );
  console.log(
    "Numbers only in set 1:",
    concilation.getNumbersOnlyInFirstSet(firstNumberSet, secondNumberSet)
  );
  console.log(
    "Numbers only in set 2:",
    concilation.getNumbersOnlyInSecondSet(firstNumberSet, secondNumberSet)
  );
};

main();
