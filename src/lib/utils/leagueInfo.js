/*   STEP 1   */
export const leagueID = "980991570474283008"; // your league ID
export const leagueName = "Brockway Dynasty For Manly Men"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Some have called it, the greatest dynasty fantasy football league ever. Check out the blog if you're looking for the draft recap.</p>
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
        image: "/managers/Belmont.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
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
      
      "location": "Brockway", // (optional)
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
      "photo": "/managers/Wyatt.jpg", // square ratio recommended (no larger than 500x500)
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
      
      "location": "Here", // (optional)
      "bio": "Presenting TapThatPatty, the illustriously bewildering team manager of Joey B's Buttholes within the raucously rugged Brockway Dynasty of the Manly Men dynasty football league. With a beard that defies gravitational norms, TapThatPatty fearlessly navigates the touchdowns and tackles, all while orchestrating his team with the finesse of a maestro conducting a symphony of chaos. As skilled in psychological warfare as he is with his beard grooming routine, he keeps his opponents on their toes while indulging in his secret obsession: competitive quiche baking. From audacious audibles on the field to crafting the perfect quiche Lorraine off it, TapThatPatty proves that in the unpredictable world of fantasy football, a seasoned beard and a delectable pastry can be the ultimate game changers.",
      "photo": "/managers/Belmont.png", // square ratio recommended (no larger than 500x500)
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
      
      "location": "Here", // (optional)
      "bio": "In the dimly lit underbelly of the Brockway Dynasty, prowls ThunderSnuggles, the enigmatic manager of the Thundering Snugglers. With a name that rolls off the tongue smoother than a whispered secret, ThunderSnuggles navigates the treacherous seas of fantasy football like a detective chasing shadows. His team, a cohort of gridiron warriors handpicked for their cunning and a propensity for tactical snuggles, marches on under the cloak of the night. And just as his players gather 'round for strategic powwows, ThunderSnuggles reserves a special corner of his playbook for a certain elusive quarterback—none other than the enigmatic Trevor Lawrence. A glance, a nod, and the world itself seems to hold its breath, awaiting a spiraling pass that may just carry his team to greatness. In the labyrinthine streets of fantasy football, where strategy and emotion intermingle like wisps of smoke, ThunderSnuggles remains a constant, a man of mystery whose longing for QB greatness is only rivaled by the secrets that lay beneath the surface.",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2023, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rivals", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7523, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "ThunderSnuggles' draft philosophy is a symphony of swagger and calculated finesse, a nod to a legacy etched with past triumphs and crowned by his current dynamic duo of quarterbacks – the ethereal Trevor Lawrence and the magisterial Justin Herbert. Armed with a track record that's more polished than a gemstone heist, ThunderSnuggles saunters into each draft with an air of confidence that could put a noir detective's smugness to shame. His roster, a composition of gridiron maestros handpicked for their unrivaled prowess, marches forth with the assurance of those who have reveled in the taste of victory. While others puzzle over stats, he conjures strategies that could rival the grandest heist, and yet, there's a spark of vulnerability that lingers beneath the bravado – the uncertainty that shrouds all great gambles. As he readies his Thundering Snugglers for another campaign, the echo of past successes bolsters his swagger, and the tantalizing promise of his dual-QB juggernauts feeds his dreams of ruling the fantasy football underworld.", // (optional)
      "tradingScale": 8, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }, 
  {
      
      "managerID": "979435022841126912",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Alex",
     
      "location": "Earth", // (optional)
      "bio": "Hi, I'm Alex.",
      "photo": "/managers/DWI.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2006, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Matata", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Pumbaa.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1907, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Liberte, Egalite, Fraternite.", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    
      "managerID": "981752613492297728",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "JohnnyB",
     
      "location": "Here", // (optional)
      "bio": "Meet JohnnyB, the unassuming mild-mannered gent who moonlights as the dynamic dynasty football manager extraordinaire! By day, he's your regular Joe, sipping on milkshakes and keeping to himself. But when the sun dips below the horizon and the neon lights start to hum, JohnnyB transforms into a mastermind of the fantasy gridiron, a caped crusader of the Brockway Dynasty league. With a secret identity that could rival the slickest of spies, he maneuvers his unnamed team – known throughout the league as the Whiskey Warriors – with the finesse of a magician pulling rabbits out of helmets. Armed with spreadsheets that glow with the aura of arcane spells, JohnnyB dances through player stats and formations with the grace of a jitterbug champion. So when you see him tapping away at his typewriter in the morning light, remember that by night, he's the one rewriting the rules of dynasty football, one touchdown at a time!",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 294, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "JohnnyB's dynasty fantasy football philosophy is a dual identity, a paradox of strategic genius hidden beneath the veil of everyday normalcy. By day, he navigates the mundane world, his passion for spreadsheets and player stats concealed behind an unassuming facade. But as the sun sets and the stadium lights flicker to life, he transforms into a shrewd dynasty manager with an uncanny ability to turn overlooked picks into gold. His secret identity grants him the freedom to zig when others zag, to see opportunity where others see only risk. Just as a master illusionist weaves magic into the ordinary, JohnnyB conjures his fantasy football mastery from the threads of his ordinary life, all while harboring a covert grin that comes from knowing that by night, he's the architect of victory.", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
     
      "managerID": "981757413189582848",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Lapinski",
      "location": "Here", // (optional)
      "bio": "Prepare to meet the titan of the Brockway Dynasty, Lapinski, whose mere presence sends ripples of awe across the league, akin to a thunderous stampede of wildebeests down Main Street. At the helm of his yet-to-be-named team, let's whimsically christen them The Bearded Bruisers, Lapinski ushers in a strategy that blends the audacity of juggling flaming torches with the sage wisdom of an owl's library. With a beard that could shelter a family of squirrels and muscles that could outwrestle Zeus himself, he's assembling a roster brimming with proven veterans, more formidable than a battalion of knights. However, hidden among these proven gridiron titans lies the sparkling gem of a rookie running back, Bijon Robinson, an undiscovered treasure in the football treasure trove. As the league braces for the ultimate strategic showdown, Lapinski's arrival echoes like a bellowing battle cry, promising a season that's as thrilling and uproarious as his audacious, yet cunning, dynasty football conquests.",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7591, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Lapinski, the gridiron maestro of mythic proportions, strode into the draft arena with the presence of a grizzly bear entering a salmon-packed river. Positioned at the tail end of the snake draft, he faced the double-edged sword of back-to-back picks, a challenge that could leave lesser minds in a tailspin. With the strategic finesse of a chess grandmaster, Lapinski orchestrated a symphony of selections that blended the might of proven veterans with the dazzle of big-name stars, crafting a roster that could rival the pantheon of football gods. Just as a blacksmith forges masterpieces in the heart of roaring flames, Lapinski molded his team with each deft choice, yielding a juggernaut that's poised to shake the league to its core.", // (optional)
      "tradingScale": 4, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      
      "managerID": "982432208717697024",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "KCWARR",
      
      "location": "Here", // (optional)
      "bio": "Meet the enigma known as KCWARR, the maverick manager of an unnamed team - let's call them the Chaos Champs, because who needs a name anyway? Armed with a laissez-faire attitude that's as laid-back as a hammock on a sunny day, KCWARR takes fantasy football by storm with an approach that could only be described as autopilot with a twist. While others obsess over stats and lineups, he's busy riding the waves of destiny, trusting in the cosmic alignment of the football stars to guide his team to glory. His nonchalant swagger is matched only by his audacious drafting technique, resulting in a roster as eclectic as a thrift store collection. It's said that KCWARR consults his crystal ball as often as his fantasy app, a strategy that raised eyebrows until last year when he unexpectedly soared to victory, leaving the league in bewildered awe. As the pre-season power rankings place him atop the pyramid once again, KCWARR's unique blend of carefree genius has the league wondering if this year's chaos might just be the recipe for another championship contender.",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4035, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "KCWARR's dynasty fantasy football philosophy is a paradox of nonchalance and calculated brilliance. With an autopilot strategy that's as unconventional as it is effective, he assembles a roster of big names and seasoned veterans, creating a mosaic of experience that defies the norms of meticulous planning. It's as if he's choreographing a dance between fate and football, trusting that his eclectic ensemble of players will syncopate to victory. Last year's unexpected success catapulted him to the top of the league, and as he reigns supreme in the pre-season power rankings once more, KCWARR's audacious methodology raises the question: can carefree confidence triumph over painstaking precision?", // (optional)
      "tradingScale": 2, // 1 - 10 (optional)
      "preferredContact": "Carrier Pigeon",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   
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
    
