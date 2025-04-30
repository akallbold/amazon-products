export interface ProductData {
  name: string;        // Unique string identifier for the product
  answer: string;      // Correct description of what the product is used for
  attempted: boolean;  // Whether the user has made at least one guess
  warmth: number;      // Warmth score (0–100) indicating guess closeness
  answered: boolean;   // Whether the correct answer has been guessed
}

// Example product data entries
export const productsData: ProductData[] = [
  { name: 'mouse-jiggler', answer: 'This product is used to move your mouse so when you are working from home and need people to think you are at your computer it moves your mouse for you to keep your status as active.', attempted: false, warmth: 0, answered: false },
  { name: 'ipad-artist', answer: 'This glove is used by people who draw on their ipads. This way they can use their stylus but also rest their hand on the ipad screen and it wont register as a touch.', attempted: false, warmth: 0, answered: false },
  { name: 'bingo-chips', answer: 'These are magentic chips and a chip collector. You can use the wand to magnetically pick up bingo chips.', attempted: false, warmth: 0, answered: false },
  { name: 'hark', answer: 'This is just a toy, but wtf!?', attempted: false, warmth: 0, answered: false },
  { name: 'baby-spinner', answer: 'This is a toy for babies to spin and put in their mouths.', attempted: false, warmth: 0, answered: false },
  { name: 'egg-cracker', answer: 'This is a device that you put on a hardboiled egg. When you drop the small metal ball it creates the perfect crack in your egg so you can eat it with a spoon.FIND NAME IN GERMAN', attempted: false, warmth: 0, answered: false },
  { name: 'breastfeeding-shirt', answer: 'This is a shirt that is used for breastfeeding so you do not need to remove your shirt.', attempted: false, warmth: 0, answered: false },
  { name: 'bug-puppet', answer: 'This is a puppet that is a bug for kids.', attempted: false, warmth: 0, answered: false },
  { name: 'iron-tool', answer: 'This Broad-Head Bull Pin is a tool used primarily by ironworkers and steelworkers to align bolt holes in metal structures during construction.', attempted: false, warmth: 0, answered: false },
  { name: 'zipper-handles', answer: 'This is a thing you can put on your zippers to help you open and close zippers.', attempted: false, warmth: 0, answered: false },
  { name: 'vinyl-weeding', answer: 'People that make things with vinyl can use this to clean the tip of their vinyl weeding tools. It holds as a storage for discarded vinyl scraps.', attempted: false, warmth: 0, answered: false },
  { name: 'computer-fan', answer: 'Computer fan to cool down your computer.', attempted: false, warmth: 0, answered: false },
  { name: 'baby-spoons', answer: 'This is a set of baby spoons used for feeding babies. Its silicone so you cannot hurt them.', attempted: false, warmth: 0, answered: false },
  { name: 'sexy-pry-bar', answer: 'This is an extendable pry bar used for prying, lifting, aligning, or breaking things apart.', attempted: false, warmth: 0, answered: false },
  { name: 'cooling-shawl', answer: 'This is a shawl slash arm sleeve that actually makes you cooler somehow (not warmer!)', attempted: false, warmth: 0, answered: false },
  { name: 'wire-stripper', answer: 'This is a wire stripper that electricians use.', attempted: false, warmth: 0, answered: false },
  { name: 'star-trek-comms', answer: 'This is a replica of a Star Trek communicator from the original TV series.', attempted: false, warmth: 0, answered: false },
  { name: 'bath-liner', answer: 'This is a liner for your bathtub. It is mostly used at spas, salons, or hotels so the tub is clean between uses.', attempted: false, warmth: 0, answered: false },
  { name: 'bag-hook', answer: 'This is a hook that you can use to hang your bag on.', attempted: false, warmth: 0, answered: false },
  { name: 'magnets', answer: 'These are fridge magnets.', attempted: false, warmth: 0, answered: false },
  { name: 'vinyl-weight-stabilizer', answer: 'This is a Vinyl Record Weight Stabilizer. By adding mass to the center of the spinning record, it reduces unwanted vibrations and keeps the records spinning evenly and from warping shape.', attempted: false, warmth: 0, answered: false },
  { name: 'presentation-clicker', answer: 'This is a bluetooth remote that is used to control a presentation when you are not at your computer.', attempted: false, warmth: 0, answered: false },
  { name: 'reusable-glow-sticks', answer: 'These are reusable glow sticks.', attempted: false, warmth: 0, answered: false },
  { name: 'airpods-case', answer: 'This is a Geometric AirPods Pro Case', attempted: false, warmth: 0, answered: false },
  { name: 'rod-case', answer: 'This is a case for your fishing rods.', attempted: false, warmth: 0, answered: false },
  { name: 'tooth-timer', answer: 'This is a simple two-minute timer for kids to ensure they brush their teeth for enough time.', attempted: false, warmth: 0, answered: false },
  { name: 'rail-protector', answer: 'This is used to protect your hand rails when you put holiday garlands up for Christmas.', attempted: false, warmth: 0, answered: false },
  { name: 'glass-stand', answer: 'This is used to shine a light through crystal or glass art displays. It helps you see the design in the glass or crystal more clearly.', attempted: false, warmth: 0, answered: false },
  { name: 'indian-clubs', answer: 'This is called an indian club. Its something you can use during your workouts to get stronger. Its similar to a medicine ball but its called an indian club.', attempted: false, warmth: 0, answered: false },
  { name: 'electronic-whistle', answer: 'This is a referee or coach whistle that is electronic. It works the same way as an old-fashioined whistle but it is charged by usb', attempted: false, warmth: 0, answered: false },
  { name: 'foot-undeez', answer: 'FootUndeez are minimalist dance shoes designed to give dancers the sensation of dancing barefoot while providing essential protection and support.', attempted: false, warmth: 0, answered: false },
  { name: 'windlass', answer: 'This is a tool used to wind up a rope or cable to raise or lower a weight or load. Often used to raise and lower an anchor on a boat. It is called a windlass.', attempted: false, warmth: 0, answered: false },
  { name: 'knitting-machine', answer: 'This is a knitting machine.', attempted: false, warmth: 0, answered: false },



];
