import { useEffect, useState } from "react";
import seed from "../assets/images/seed.png";
import sprout from "../assets/images/sprout.png";
import leaf from "../assets/images/leaf.png";
import branch from "../assets/images/branch.png";
import tree from "../assets/images/tree.png";
import fruit from "../assets/images/fruit.png";

function useTier(accumulate) {
  const [tier, setTier] = useState("");
  const [tierImage, setTierImage] = useState("");
  const [nextTier, setNextTier] = useState("");
  const [nextTierDistance, setNextTierDistance] = useState(0);

  useEffect(() => {
    switch (true) {
      case accumulate < 50:
        setTier("씨앗");
        setTierImage(seed);
        setNextTier("새싹");
        setNextTierDistance(50 - accumulate);
        break;
      case accumulate < 500:
        setTier("새싹");
        setTierImage(sprout);
        setNextTier("잎새");
        setNextTierDistance(500 - accumulate);
        break;
      case accumulate < 1500:
        setTier("잎새");
        setTierImage(leaf);
        setNextTier("가지");
        setNextTierDistance(1500 - accumulate);
        break;
      case accumulate < 5000:
        setTier("가지");
        setTierImage(branch);
        setNextTier("나무");
        setNextTierDistance(5000 - accumulate);
        break;
      case accumulate < 10000:
        setTier("나무");
        setTierImage(tree);
        setNextTier("열매");
        setNextTierDistance(10000 - accumulate);
        break;
      default:
        setTier("열매");
        setTierImage(fruit);
        setNextTier("최고 등급 달성 ✨");
        setNextTierDistance(null);
    }
  }, [accumulate]);

  return { tier, tierImage, nextTier, nextTierDistance };
}

export default useTier;
