/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
		title: "There's always money in the Banana Stand",
		date: "Sep 4th, 2019",
		firstParagraph: `You burn down the storage unit? Oh, most definitely. In prison, you just have to close your eyes and take it, but here you have to close your eyes and give it. If that man's straight, then I am sober. I'm not a prostitute. Michael: Then I shall let you live! Obviously this blue part here is the land. Saw this on the highway and almost blue myself. Hop on? Mr. Zuckerkorn, you've been warned about touching. You said spanking.`,

		secondParagraph: `Taste the happy, Michael! Taste it! Everyone's laughing, and riding, and cornholing except Buster. This is the best free scrapbooking class I've ever taken! I figured out a way to make money while I'm working! It's one banana Michael, what could it cost, ten dollars? Get rid of the Seaward. Lucille: I'll leave when I'm good and ready.`,

		thirdParagraph: `Hey, look at that – you're mean sober, too. Turn this skiff around! A sea of waiters and no one will take a drink order. They frame my junk. In prison, you just have to close your eyes and take it, but here you have to close your eyes and give it. So you take your mom to work every day? Bummer. Moms are such a pain in the ass, huh? It's, like, die already! So did you see the new Poof? His name's Gary, and we don't need anymore lawsuits.`
	},
	{
		title:
			"The Greatest News Article In The History Of Our Country, Believe Me!",
		date: "Sep 4th, 2019",
		firstParagraph: `i am so proud of our great country. god bless america! because of #fakenews my people are not getting the credit they deserve for doing a great job. as seen here they are all doing a great job! iran just test-fired a ballistic missile capable of reaching israel.they are also working with north korea.not much of an agreement we have! thank you to doug parker and american airlines for all of the help you have given to the u.s. with hurricane flights. fantastic job! big meetings today at the united nations. so many interesting leaders. america first will make america great again! we were let down by all of the democrats and a few republicans. most republicans were loyal terrific & worked really hard. we will return! democrats slam gop healthcare proposal as obamacare premiums & deductibles increase by over 100%.`,

		secondParagraph: `i think senator blumenthal should take a nice long vacation in vietnam where he lied about his service so he can at least say he was there sanctions were not discussed at my meeting with president putin. nothing will be done until the ukrainian & syrian problems are solved! ...case against him & now wants to clear his name by showing "the false or misleading testimony by james comey john brennan..." witch hunt! obamacare is in serious trouble. the dems need big money to keep it going - otherwise it dies far sooner than anyone would have thought.`,

		thirdParagraph: `8 dems control the senate! wow senator luther strange picked up a lot of additional support since my endorsement. now in september runoff. strong on wall & crime! congratulation to roy moore and luther strange for being the final two and heading into a september runoff in alabama. exciting race! good news out of the house with the passing of 'no sanctuary for criminals act.' hopefully senate will follow. make america great again! #riyadhsummit #potusabroad?? the fake news media is officially out of control. they will do or say anything in order to get attention - never been a time like this! watch @foxandfriends now on podesta and russia!.`
	}
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

const articles = document.querySelector('.articles');

data.forEach(item => {
  articles.appendChild(
    createArticle (
      item.title,
      item.date,
      item.firstParagraph,
      item.secondParagraph,
      item.thirdParagraph,
    )
  );
});

function createArticle (
  title,
  date,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
) {
  // define elements
  const article = document.createElement('div');
  const headline = document.createElement('h2');
  const day = document.createElement('p');
  const content1 = document.createElement('p');
  const content2 = document.createElement('p');
  const content3 = document.createElement('p');
  const button = document.createElement('span');

  //structure
  article.appendChild(headline);
  article.appendChild(day);
  article.appendChild(content1);
  article.appendChild(content2);
  article.appendChild(content3);
  article.appendChild(button);

  //class names
  article.classList.add('article');
  day.classList.add('date');
  button.classList.add('expandButton');

  //text content
  headline.textContent = title;
  day.textContent = date;
  content1.textContent = firstParagraph;
  content2.textContent = secondParagraph;
  content3.textContent = thirdParagraph;
  button.textContent = 'Expand';

  //event
  button.addEventListener('click', e => {
    console.log('button clicked', e.target);
    article.classList.toggle('article-open');
  });
  return article;
}