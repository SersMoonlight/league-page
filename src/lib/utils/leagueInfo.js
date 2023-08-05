/*   STEP 1   */
export const leagueID = "980991570474283008"; // your league ID
export const leagueName = "Brockway Dynasty For Manly Men"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>In the magical land of Brockway, a once-in-a-lifetime event was taking place—the Brockway Dynasty for Manly Men Fantasy Start-up Draft. This draft wasn't just for bragging rights or fantasy glory; it was an essential ritual to determine the fate of the land's greatest football dynasty.</p>
  <p>The draft was held in the majestic Providence Clubhouse, a grand structure that seemed to touch the sky. Each team owner was represented by a mystical creature, embodying their team's spirit. Alexbogen was represented by a powerful dragon, known for its cunning strategies. CoachMatata had a wise owl, symbolizing wisdom and adaptability. Mmrnmhrm had a nimble fox, known for its quick thinking. TapThatPatty's creature was a lion, representing courage and leadership. KCWARR had a fierce tiger, standing for strength and determination. JhnnyB951 had a cunning raccoon, renowned for its ability to find hidden gems. Ssjnelly's creature was a swift cheetah, representing speed and agility. ThunderSnuggles had a mighty bear, symbolizing power and resilience. BigDaddyKlimko had a wise and imposing elephant, standing for strength and wisdom. And finally, Lapinski54 was represented by a loyal and noble wolf, embodying teamwork and unity.</p>
  <p>The draft began, and each team owner carefully chose their players, using their mystical creatures' guidance to make the best choices for their dynasty. The first round saw the selection of star quarterbacks—Patrick Mahomes, Josh Allen, Jalen Hurts, Joe Burrow, and Justin Fields were all chosen by different teams, each hoping to secure a long-lasting dynasty.</p>
  <p>As the rounds progressed, the teams drafted their running backs, wide receivers, and tight ends, all while sharing camaraderie and laughter during the process. However, as the draft continued, there were also moments of intense rivalry and tension, as each team fought for the players they believed would lead them to greatness.</p>
  <p>CoachMatata's wise owl advised him to pick Jahmyr Gibbs, a running back known for his versatility and explosive plays. BigDaddyKlimko's elephant wisely chose Nick Chubb, a powerful and elusive running back. ThunderSnuggles' bear decided on Trevor Lawrence, a talented young quarterback with immense potential. Ssjnelly's cheetah traded for Kyler Murray, a lightning-fast quarterback with a powerful arm.</p>
  <p>With each pick, the fate of the dynasty seemed to shift, and the tension in the room grew. Lapinski54's wolf wisely chose Stefon Diggs, a wide receiver known for his incredible catches. JhnnyB951's raccoon cunningly selected DK Metcalf, a wide receiver with speed and strength.</p>
  <p>Finally, after many rounds of intense decision-making and excitement, the draft came to an end. Each team had built a roster of talented players, hoping that their dynasty would stand the test of time and lead them to victory.</p>
  <p>The creatures returned to their owners, and the team owners left the Providence Clubhouse, each with a newfound sense of hope and determination. The land of Brockway buzzed with anticipation, as the football season was about to begin, and the fate of the dynasty was now in the hands of the team owners and their mystical creatures.</p>
  <p>As the season unfolded, the teams faced challenges and triumphs, with some players exceeding expectations, while others faced setbacks. The rivalry between the teams was fierce, but there was also mutual respect and admiration among the team owners, who had bonded over their shared love for the game.</p>
  <p>In the end, only time would tell which dynasty would rise to greatness and become a legend in the land of Brockway. But one thing was certain—the Brockway Dynasty for Manly Men Fantasy Start-up Draft had created an unforgettable experience for all involved, and the spirit of competition and camaraderie would forever be etched in the hearts of the team owners and their mystical creatures.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      
      "managerID": "980961622812377088",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "John",
      
      "location": "Carmel", // (optional)
      "bio": "A former Vietnam veteran and highly skilled Green Beret, John returned from the war as a decorated, but disturbed hero. He is filled with self-loathing and hates killing, but is willing to use his skills to protect those close to him.",
      "photo": "/managers/Rambo.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "TapThatPatty", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7591, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "ELE - Everybody Love Everybody", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }, 
  {
      
      "managerID": "981497484151169024",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Matata",
      
      "location": "Next Door", // (optional)
      "bio": "Introducing Coach Matata, the enigmatic maestro of our dynasty fantasy football realm. Not only does Coach Matata possess an uncanny knack for predicting player performance, but his mystical connection to a parallel football dimension grants him periodic glimpses into alternate realities where game outcomes are reversed! With an otherworldly insight into the ebb and flow of fantasy matchups, Coach Matata weaves an extraordinary tapestry of wins and losses, often leaving fellow league members wondering if they're competing against a mere mortal or a football oracle from a cosmic realm.",
      "photo": "/managers/Pumbaa.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Soon", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4017, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "In the realm of dynasty fantasy football, Coach Matata embraces a unique philosophy that melds the wisdom of the ages with a twist. Believing that every player's journey is akin to a hero's saga, Coach Matata seeks not only statistical prowess but also the narrative essence that defines each athlete. Just as his mystical abilities allow him glimpses into alternate football realities, Coach Matata cherishes the long game, nurturing emerging talents and predicting breakout moments that shape dynasties. For Coach Matata, the gridiron isn't just a field, but a canvas upon which tales of triumph and valor are painted, inviting fellow managers to witness the enchanting dance of strategy and destiny.", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Grindr",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      
      "managerID": "873427679511207936",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "SSJNelly",
      
      "location": "Not Carmel", // (optional)
      "bio": "Venture into the realm of dynasty fantasy football alongside SSJNelly, whose passion for the pigskin is only matched by his remarkable ability to communicate with woodland creatures. A true enchantment dwells within SSJNelly, as he navigates both the virtual gridiron and the verdant tapestries of nature with equal finesse. Whether strategizing lineups or orchestrating conversations with the forest's inhabitants, SSJNelly's league presence is a symphony of strategy and harmony. With whispers of advice from squirrels and sage advice from owls, SSJNelly's connection to the animal kingdom infuses a touch of whimsy and wonder into our fantasy football journey.",
      "photo": "/managers/Vegeta.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2023, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Soon", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 941, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "SSJNelly approaches fantasy football with a philosophy rooted in his unparalleled power and cosmic vision. Drawing on his extraordinary ability to harness the energy of the stars, SSJNelly perceives each player as a celestial body within the vast galaxy of the league. With an outlandish trait that allows him to channel cosmic forces, SSJNelly navigates the virtual gridiron with an ethereal perspective, recognizing the ebb and flow of player performances as constellations of potential. Just as stars align in the night sky, SSJNelly orchestrates trades and strategies that bring together talents in ways that illuminate the path to victory. His league presence is a testament to the infinite possibilities that unfold when otherworldly insights combine with earthly competition, reminding us all that in the cosmos of fantasy football, even the stars play a role.", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }, 
  {
      
      "managerID": "980999174231470080",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "BigDaddyKlimko",
      
      "location": "There", // (optional)
      "bio": "Meet BigDaddyKlimko, the towering titan at the helm of first round pickett in the uproarious arena of the Brockway Dynasty for Manly Men dynasty football league. Renowned for his unyielding affection for tight ends (TEs), he drafts them with a fervor that rivals a squirrel collecting acorns for winter. With a strategic prowess that mirrors his meticulous tea-brewing rituals, BigDaddyKlimko navigates the league's tumultuous terrain like a majestic albatross riding the fantasy football winds. Off the field, he boasts a collection of rare, enchanted spatulas that he insists bring good luck to his team – a quirk that has rivals wondering if it's the spatulas or his TE-savvy strategy that propels him forward. So, whether he's sipping his chamomile tea or meticulously analyzing TE stats, BigDaddyKlimko is a force to be reckoned with, both in the realm of football strategy and culinary superstitions.",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2023, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Soon", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4040, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "BigDaddyKlimko's draft philosophy is as bold as it is tightly focused, resembling a ship steadfastly sailing into the storm despite the mocking waves. His undying love for tight ends (TEs) forms the cornerstone of his strategy, often prompting fellow managers to quip that his team could be called 'Tight End Extravaganza.' While his past seasons have seen more fumbles than touchdowns, BigDaddyKlimko clings to his dream of TE glory with the resilience of a rubber band stretched to its limits. He envisions a triumphant future where his TE-centric approach finally pays off, a vision that fuels his draft day enthusiasm. He eagerly anticipates the day when he can smugly raise his TE-laden roster above his critics' heads, proving that in the wild world of fantasy football, even the quirkiest strategies can one day emerge victorious, much like the coveted touchdown catches he imagines his TEs making.", // (optional)
      "tradingScale": 8, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }, 
 {
      
      "managerID": "980272752240250880",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "TapThatPatty",
      
      "location": "There", // (optional)
      "bio": "Presenting TapThatPatty, the illustriously bewildering team manager of Joey B's Buttholes within the raucously rugged Brockway Dynasty of the Manly Men dynasty football league. With a beard that defies gravitational norms, TapThatPatty fearlessly navigates the touchdowns and tackles, all while orchestrating his team with the finesse of a maestro conducting a symphony of chaos. As skilled in psychological warfare as he is with his beard grooming routine, he keeps his opponents on their toes while indulging in his secret obsession: competitive quiche baking. From audacious audibles on the field to crafting the perfect quiche Lorraine off it, TapThatPatty proves that in the unpredictable world of fantasy football, a seasoned beard and a delectable pastry can be the ultimate game changers.",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2023, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "John", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Rambo.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "TapThatPatty approaches dynasty fantasy football with a unique blend of calculated strategy and fearless audacity. As the mastermind behind Joey B's Buttholes in the Brockway Dynasty league, he believes in staying one step ahead of the competition while embracing the thrill of the unpredictable. With a penchant for discovering hidden talent and a knack for turning the tides in his favor, TapThatPatty's philosophy revolves around building a roster that mirrors his dynamic approach to the game. Just as he appreciates the delicate balance of ingredients in his favorite dishes, he understands the delicate balance between risk and reward in player decisions. For TapThatPatty, dynasty football isn't just a pastime—it's a relentless pursuit of victory that echoes his unwavering dedication and commitment to success.", // (optional)
      "tradingScale": 2, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }, 
  {
      
      "managerID": "981499127395614720",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "ThunderSnuggles",
      
      "location": "There", // (optional)
      "bio": "Presenting TapThatPatty, the illustriously bewildering team manager of Joey B's Buttholes within the raucously rugged Brockway Dynasty of the Manly Men dynasty football league. With a beard that defies gravitational norms, TapThatPatty fearlessly navigates the touchdowns and tackles, all while orchestrating his team with the finesse of a maestro conducting a symphony of chaos. As skilled in psychological warfare as he is with his beard grooming routine, he keeps his opponents on their toes while indulging in his secret obsession: competitive quiche baking. From audacious audibles on the field to crafting the perfect quiche Lorraine off it, TapThatPatty proves that in the unpredictable world of fantasy football, a seasoned beard and a delectable pastry can be the ultimate game changers.",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2023, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "John", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Rambo.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "TapThatPatty approaches dynasty fantasy football with a unique blend of calculated strategy and fearless audacity. As the mastermind behind Joey B's Buttholes in the Brockway Dynasty league, he believes in staying one step ahead of the competition while embracing the thrill of the unpredictable. With a penchant for discovering hidden talent and a knack for turning the tides in his favor, TapThatPatty's philosophy revolves around building a roster that mirrors his dynamic approach to the game. Just as he appreciates the delicate balance of ingredients in his favorite dishes, he understands the delicate balance between risk and reward in player decisions. For TapThatPatty, dynasty football isn't just a pastime—it's a relentless pursuit of victory that echoes his unwavering dedication and commitment to success.", // (optional)
      "tradingScale": 2, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }, 
    // {
    //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
