import { Sign } from "@/types/Sign";

const phrases: Sign[] = [
  {
    sign: "Aries",
    unicode: "♈︎",
    message:
      "Just as Mars, your ruling planet, suggests bold actions, it's the ideal time to break free from your financial limitations, Aries. Our diverse range of investment products can guide you on this new path. Take advantage of our specialized advisors who can customize a portfolio based on your ambitious plans.",
  },
  {
    sign: "Taurus",
    unicode: "♉︎",
    message:
      "With Venus as your guide, seek out security and prosperity, Taurus. As an Earth sign, you appreciate steady growth. Why not explore our long-term saving accounts or bonds? Our financial advisors can help you plant the seeds for your future growth.",
  },
  {
    sign: "Gemini",
    unicode: "♊︎",
    message:
      "Quick-witted Gemini, Mercury fuels your mental agility. Apply this in your financial world by exploring our cutting-edge digital banking services. Connect with one of our digital banking experts to understand how technology can simplify your financial life.",
  },
  {
    sign: "Cancer",
    unicode: "♋︎",
    message:
      "Safety and emotional security are core to your being, Cancer. Under the influence of the Moon, consider bolstering your safety net with our top-rated insurance policies. Let us protect what you hold dear, just as you do.",
  },
  {
    sign: "Leo",
    unicode: "♌︎",
    message:
      "As the Sun shines on you, Leo, use your natural charisma and leadership to influence your finances. Connect with our team to explore wealth management options that can put you in the financial spotlight, where you belong.",
  },
  {
    sign: "Virgo",
    unicode: "♍︎",
    message:
      "The meticulous and practical Virgo guided by Mercury can appreciate the attention to detail in our financial reports and assessments. Let our expert advisors help tailor a plan that suits your exact needs.",
  },
  {
    sign: "Libra",
    unicode: "♎︎",
    message:
      "Balance is your motto, Libra. Guided by Venus, you seek harmony in all aspects, including your finances. Speak to our financial advisors to balance your portfolio with the perfect mix of risk and return.",
  },
  {
    sign: "Scorpio",
    unicode: "♏︎",
    message:
      "As the sign ruled by Pluto and Mars, you appreciate transformation and power, Scorpio. Let's harness your intensity and focus it on building a robust financial strategy with our comprehensive banking services.",
  },
  {
    sign: "Sagittarius",
    unicode: "♐︎",
    message:
      "Guided by Jupiter, you're all about expansion, Sagittarius. Your natural optimism should guide you towards exploring new investment opportunities. Consult our advisors today and let's expand your financial horizons together.",
  },
  {
    sign: "Capricorn",
    unicode: "♑︎",
    message:
      "With Saturn as your guide, Capricorn, your disciplined and practical approach to life extends to your finances. Consider our high-interest fixed deposits that reflect your long-term perspective and offer steady returns.",
  },
  {
    sign: "Aquarius",
    unicode: "♒︎",
    message:
      "Your innovative spirit and focus on the future, Aquarius, make you an ideal candidate for our latest digital financial solutions. Allow our team to guide you on the journey of futuristic finance that aligns with your Uranian tendencies.",
  },
  {
    sign: "Pisces",
    unicode: "♓︎",
    message:
      "As a Pisces, guided by Neptune, you value dreams and intuition. Let us help turn your financial dreams into reality with our wealth management services. Dive deep into the world of finance with us, and see your dreams come to life.",
  },
];

const getPhrase = (date: string | null) => {
  if (!date) return null;

  const [year, month, day] = date.split("-").map((x) => parseInt(x));

  const dateRanges = [
    [3, 21, 4, 19], // index 0
    [4, 20, 5, 20], // index 1
    [5, 21, 6, 20], // index 2
    [6, 21, 7, 22], // index 3
    [7, 23, 8, 22], // index 4
    [8, 23, 9, 22], // index 5
    [9, 23, 10, 22], // index 6
    [10, 23, 11, 21], // index 7
    [11, 22, 12, 21], // index 8
    [12, 22, 1, 19], // index 9
    [1, 20, 2, 18], // index 10
    [2, 19, 3, 20], // index 11
  ];

  let index = 0;
  for (let i = 0; i < dateRanges.length; i++) {
    const [startMonth, startDay, endMonth, endDay] = dateRanges[i];
    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay)
    ) {
      index = i;
      break;
    }
  }

  return phrases[index];
};

export default getPhrase;
