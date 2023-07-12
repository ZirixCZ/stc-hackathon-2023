const phrases = [
        january: ""
]

// create a function that will return a phrase depending on the date.
//  Aries (March 21 - April 19): Today is a great day for Aries to take charge of their finances. Consider exploring new investment opportunities or starting a side hustle to boost your income. However, be cautious of impulsive purchases and take time to evaluate the potential risks and rewards before making any major financial decisions.

 

// Taurus (April 20 - May 20): Taurus individuals should focus on their long-term financial goals today. Consider reviewing your investment portfolio and make any necessary adjustments to ensure stability and growth. Additionally, look for opportunities to save or invest in assets that provide a sense of security.
//
//  
//
// Gemini (May 21 - June 20): Gemini, today is a day to diversify your financial ventures. Consider exploring different investment options, such as stocks, real estate, or even cryptocurrency. Stay well-informed about market trends and seize opportunities for growth and expansion.
//
//  
//
// Cancer (June 21 - July 22): Cancerians should prioritize financial security today. Review your budget and identify areas where you can cut back on unnecessary expenses. Focus on saving and consider exploring passive income streams, such as rental properties or dividend-paying stocks.
//
//  
//
// Leo (July 23 - August 22): Leo, today is a favorable day to showcase your financial prowess. Consider networking with like-minded individuals who can offer valuable insights and opportunities. Leverage your natural leadership skills to explore new income-generating ventures or negotiate better financial terms.
//
//  
//
// Virgo (August 23 - September 22): Virgos should put their analytical skills to work today. Take a close look at your financial statements, analyze your spending patterns, and identify areas where you can optimize your budget. Consider researching and learning about investment strategies that align with your practical nature.
//
//  
//
// Libra (September 23 - October 22): Libras should focus on achieving financial harmony today. Balance your desire for luxury and indulgence with responsible financial habits. Consider setting aside a portion of your income for savings or investments, while still allowing yourself some room for enjoyment and self-care.
//
//  
//
// Scorpio (October 23 - November 21): Today is a day for Scorpios to dive deep into their financial goals. Engage in thorough research and due diligence before making any major financial decisions. Consider seeking the guidance of a financial advisor who can help you navigate complex investment opportunities.
//
//  
//
// Sagittarius (November 22 - December 21): Sagittarians should embrace their adventurous nature and explore new financial horizons today. Consider diversifying your investment portfolio and exploring opportunities beyond traditional assets. However, be cautious and conduct thorough research before taking any significant financial risks.
//
//  
//
// Capricorn (December 22 - January 19): Capricorns should focus on building a solid foundation for their financial future today. Review your financial goals and make a plan to achieve them step by step. Consider setting up automatic savings or investment contributions to stay disciplined and on track.
//
//  
//
// Aquarius (January 20 - February 18): Aquarians should focus on financial innovation and forward-thinking today. Explore alternative investment options or consider investing in socially responsible companies that align with your values. Stay open to new financial concepts and technologies that can offer growth and impact.
//
//  
//
// Pisces (February 19 - March 20): Today, Pisces individuals should trust their intuition when it comes to financial decisions. Pay attention to any gut feelings or intuitive nudges related to your finances. However, balance your dreams with practicality and seek guidance from financial professionals to ensure a well-rounded approach.
//
const phrases = [
        "january": {
                "Today is a great day for Aries to take charge of their finances. Consider exploring new investment opportunities or starting a side hustle to boost your income. However, be cautious of impulsive purchases and take time to evaluate the potential risks and rewards before making any major financial decisions.",
        }
]

const getPhrase = (date: string) => {
        const month = date.getMonth();
        const day = date.getDate();
        const year = date.getFullYear();
        
        const phrase = phrases[month][day];
        
        return phrase;
                 
}
