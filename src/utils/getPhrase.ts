import { Sign } from "@/types/Sign";

const phrases: Sign[] = [
  {
    sign: "Aries",
    message:
      "Today is a great day for Aries to take charge of their finances. Consider exploring new investment opportunities or starting a side hustle to boost your income. However, be cautious of impulsive purchases and take time to evaluate the potential risks and rewards before making any major financial decisions.",
  },
  {
    sign: "Taurus",
    message:
      "Taurus individuals should focus on their long-term financial goals today. Consider reviewing your investment portfolio and make any necessary adjustments to ensure stability and growth. Additionally, look for opportunities to save or invest in assets that provide a sense of security.",
  },
  {
    sign: "Gemini",
    message:
      "Gemini, today is a day to diversify your financial ventures. Consider exploring different investment options, such as stocks, real estate, or even cryptocurrency. Stay well-informed about market trends and seize opportunities for growth and expansion.",
  },
  {
    sign: "Cancerians",
    message:
      "Cancerians should prioritize financial security today. Review your budget and identify areas where you can cut back on unnecessary expenses. Focus on saving and consider exploring passive income streams, such as rental properties or dividend-paying stocks.",
  },
  {
    sign: "Leo",
    message:
      "Leo, today is a favorable day to showcase your financial prowess. Consider networking with like-minded individuals who can offer valuable insights and opportunities. Leverage your natural leadership skills to explore new income-generating ventures or negotiate better financial terms.",
  },
  {
    sign: "Virgos",
    message:
      "Virgos should put their analytical skills to work today. Take a close look at your financial statements, analyze your spending patterns, and identify areas where you can optimize your budget. Consider researching and learning about investment strategies that align with your practical nature.",
  },
  {
    sign: "Libras",
    message:
      "Libras should focus on achieving financial harmony today. Balance your desire for luxury and indulgence with responsible financial habits. Consider setting aside a portion of your income for savings or investments, while still allowing yourself some room for enjoyment and self-care.",
  },
  {
    sign: "Scorpios",
    message:
      "Today is a day for Scorpios to dive deep into their financial goals. Engage in thorough research and due diligence before making any major financial decisions. Consider seeking the guidance of a financial advisor who can help you navigate complex investment opportunities.",
  },
  {
    sign: "Sagittarians",
    message:
      "Sagittarians should embrace their adventurous nature and explore new financial horizons today. Consider diversifying your investment portfolio and exploring opportunities beyond traditional assets. However, be cautious and conduct thorough research before taking any significant financial risks.",
  },
  {
    sign: "Capricors",
    message:
      "Capricorns should focus on building a solid foundation for their financial future today. Review your financial goals and make a plan to achieve them step by step. Consider setting up automatic savings or investment contributions to stay disciplined and on track.",
  },
  {
    sign: "Aquarians",
    message:
      "Aquarians should focus on financial innovation and forward-thinking today. Explore alternative investment options or consider investing in socially responsible companies that align with your values. Stay open to new financial concepts and technologies that can offer growth and impact.",
  },
  {
    sign: "Pisces",
    message:
      "Today, Pisces individuals should trust their intuition when it comes to financial decisions. Pay attention to any gut feelings or intuitive nudges related to your finances. However, balance your dreams with practicality and seek guidance from financial professionals to ensure a well-rounded approach.",
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
