import { parseGoogleMapsData } from "./parsers/google-maps-parser";
import { saveJsonFile } from "./utils/save-json";
import { generateMasterContext } from "./generators/master-context.generator";
import { generateDesignSystem } from "./generators/design-system.generator";
import { generateExperienceStrategy } from "./generators/experience-strategy.generator";
import { generateCreativeIntelligence } from "./generators/creative-intelligence.generator";
import { fileExists } from "./utils/file-exists";

const outputPath = "cafe-ibrahim/creative-intelligence.json";

const rawBusinessData = `
CAFE IBRAHIM
कैफे इब्राहिम
4.6
(591)·₹1–200
Cafe

Overview

Menu

Reviews

About


Directions


Save


Nearby


Send to phone


Share

Reserve a table

Order online
 

·

Dine-in
·

Drive-through
·

Delivery

 


Surve No 230/B, Lane No 5, Shop No 4, Sanjay Park, Airport Road, Plot No 22, Sanjay Park Main Rd, opposite Jeevan Super Market, Pune, Maharashtra 411032



Open · Closes 3 am

₹1–200 per person
Reported by 182 people


Find a table


085510 61614





HWC3+4J Pune, Maharashtra






Your Maps history

Add a label
 


Suggest an edit
 
Add missing information


Add website
 
Updates from customers

The place is great and the staff is professional and great ideal place for breakfast amazing food
3 years ago
 
Popular times

Wednesdays



LiveNot too busy
6a
9a
12p
3p
6p
9p
12a

Menu & highlights


Menu
Popular
Classic Shawarma

Grilled Bun Cheese Omelette
 

See more
 
Photos & videos

All

Menu

Food & drink

Vibe

Shawarma

By owner

Street View & 360°
 


Add photos & videos
 
Review summary

5	
4	
3	
2	
1	
4.6

591 reviews
 
"Great taste and quality of the food and very friendly service, love the place 😻"
 
"It was tasty filled with creamy ingredients and chicken to it."
 
"This is one of the best Cafe serving Irani chai, veg and non veg sandwiches."
 


Write a review
 
Reviews




Sort


All

shawarma
223

irani chai
21

bun maska
17

peri peri shawarma
13

+6


Shoeb Shaikh
1 review







7 months ago
Absolutely loved my experience at Café Ibrahim!
The speciality shawarma here has such a unique flavour — truly one of the best I’ve had. Their authentic Hyderabadi dum biryani is packed with rich aroma and … More


Like


Share
 
 


Vishnu suresh
10 reviews







4 months ago
Very unique and delicious shawarma. I prefer buying shawarma from cafe Ibrahim as they provide good service and the food quality and taste is much better than regular shawarma shops. Staffs are very helpful and took quick orders and not … More


Like


Share
 
 


Arbaz
1 review







6 months ago
Visited Ibrahim Cafe and tried their shawarma — absolutely worth it. The wrap was fresh, the chicken juicy, and the flavors well balanced with just the right amount of seasoning. Portions were generous, and the pricing felt fair for the … More


Like


Share
 

More reviews (588)
 
People also search for

Irani Cafe - Viman Nagar
4.2(8,580)
Cafe

CAFE CRAVER'S CROWN
4.8(204)
Cafe

The Unique Cafe
4.3(4)
Cafe

Irani bucks
3.8(5)
Cafe

Cafe Buddy's Espresso - Viman Nagar
4.4(301)
Cafe
 
Web results

 
About this data
`;

async function main() {
  try {
    if (!fileExists(outputPath)) {
      const result = await parseGoogleMapsData(rawBusinessData);
  
      console.log(result);
  
      const creativeIntelligence = await generateCreativeIntelligence(result);
  
      console.log(creativeIntelligence);
  
      saveJsonFile(
        "cafe-ibrahim",
        "creative-intelligence.json",
        creativeIntelligence,
      );
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
