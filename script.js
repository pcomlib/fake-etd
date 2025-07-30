function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

window.addEventListener('load', function(event) { 
	let str = '';
	let i=0;
	let first_names = ["Claire", "George", "Chris", "Bob", "Veronica", "Jennifer", "Elijah", "Yazmin", "Jamie", "Jefferson", "Chloë", "Annabel", "Addison", "June", "James", "Sigmund", "Heather", "Blayne", "Herman", "Stephanie", "Erika", "Johnathan", "Enrique", "Jordan", "Ricky", "Renée", "François", "Agnès", "Kylie", "Otto", "Marie", "Maria", "Cliff", "Charlie", "Cheryl", "Lee", "Shannon", "Jackie", "Lao", "Gus", "Kerby", "Fiona", "Sven", "Ivan", "Jean", "Albert", "Abraham", "Carl", "Frank", "Kim", "Heathcliff", "Soo", "Jamie", "Ellen", "Hilda", "Susan", "Helen", "Fred", "Charles", "Carl", "Karl", "Carla", "Pat", "William"];
	let last_names = ["Darwin", "Edison", "Linnaeus", "Köhne", "Strauß", "McGee", "Bond", "Livingstone", "Marx", "Wiley", "Mayo", "Stephens", "Anderson", "Elsevier", "Freud", "Jung", "Piaget", "Maslow", "Erikson", "Pavlov", "Wang", "Wright", "Campos", "Fair", "Seay", "Denton", "Anderson", "Desantis", "Bigelow", "Blum", "Kaur", "Calderon", "Roque", "Matthews", "Mathis", "Amador", "Terrell", "Gunderson", "Berman", "Washington", "King", "Lincoln", "Chan", "Kim", "Nagy", "Smith", "Jones", "Nguyễn", "Robinson", "Adams", "Kim", "Jones", "Bloom", "Rubik", "Cage", "Stein", "Frankl"]; 


	document.getElementById('submitter').value = '';

	let first = first_names[getRandomInt(first_names.length)];
	document.getElementById('firstname').value = first;
	let last = last_names[getRandomInt(last_names.length)];
	document.getElementById('lastname').value = last;

	let pcom = first.substr(0,7).toLowerCase() + last.substr(0,2).toLowerCase() + "@pcom.edu";
	pcom = pcom.replace('è','e').replace('é','e').replace('ë','e').replace('ö','o').replace('ễ','e').replace('ç','c').replace('ß','ss');
	document.getElementById('pcom_email').value = pcom;

	document.getElementById('contact_email').value = '';

	let suffixes = ["Jr", "Sr", "III", "IV"];
	if(Math.random() < 0.2) 
		document.getElementById('suffix').value = suffixes[getRandomInt(suffixes.length)];
	else
		document.getElementById('suffix').value = '';

	// phone
	str = '' + (1 + getRandomInt(7));
	for(i=0; i<2; i++)
		str = str + getRandomInt(10);
	str = str + '-555-';
		for(i=0; i<4; i++)
		str = str + getRandomInt(10);
	document.getElementById('phone').value = str;
	
	// advisors
	let degrees = ["PsyD", "PhD", "EdD", "MS", "MLIS", "MFA", "MBA", "JD", "MD", "DO", "PharmD"];
	
	first = first_names[getRandomInt(first_names.length)];	
	last = last_names[getRandomInt(last_names.length)];
	document.getElementById('advisor').value = first + ' ' + last + ', ' + degrees[getRandomInt(degrees.length)];
	
	pcom = first.substr(0,7).toLowerCase() + last.substr(0,2).toLowerCase() + "@pcom.edu";
	pcom = pcom.replace('è','e').replace('é','e').replace('ë','e').replace('ö','o').replace('ễ','e').replace('ç','c').replace('ß','ss');
	document.getElementById('advisoremail').value = pcom;
	
	str = '';
	let n = 2 + getRandomInt(3);
	for(i=0; i<n; i++) {
		if(i>0)
			str += '\n';
		first = first_names[getRandomInt(first_names.length)];	
		last = last_names[getRandomInt(last_names.length)];
		str += first + ' ' + last + ', ' + degrees[getRandomInt(degrees.length)];
	}
	document.getElementById('committee').value = str;
	
	let titles = ["How Can Badgers Help Promote Innovation? A Primer for Leaders",
		"A Qualitative Study of the Social Experiences of Undergraduate Students Researching Badgers",
		"Is Fire the Future of Psychology: An Epistemological Perspective",
		"Freudian Ontologies of Platypuses Reframed for Modern Psychology",
		"Octopus Mathematical Problem-Solving",
		"Effects of Lasers on Olfactory Performance of Sushi Chefs",
		"Sleepwalking in Cats and Frontal Lobe Dysfunctions",
		"Solving the Rubik's Cube Among Uncontacted Tribes",
		"Obsession and Compulsion Among Kobold Roleplayers in D&D 5e",
		"Dragons: Invoking Hallucinations of Fiery Lizards via Electrical Stimuli of the Hippocampus",
		"The Role of Satyrs in Early Childhood Development of Self-Realization",
		"Toast Doneness Preferences and Amygdala Disorders: A New Diagnostic Criteria",
		"The Moana Effect: Impact of Watery Stimuli on Bladder Awareness",
		"Coffee Ingestion and Lack of Sleep Make Student Go...",
		"Ramen versus Macaroni: Implications for College Student Success",
		"Pachyderms and Psychedelics: A Continuation of the Elephants on LSD Studies",
		"Five Years of My Life Condensed into 232 Pages: A Study of Poor Sleep Habits",
		"Foucault, Goffman, and Hegel: Promising New Leads Combatting Insomnia among Students",
		"Impact of Centripetal Force on Labor Speed and Infant IQ",
		"Iocaine Powder, Advanced Logic, and Classroom Size Mitigation",
		"Amputation Impacts on Flea Hearing",
		"Litter Boxes in the Classroom: An Equity Issue?",
		"Beer Bottles, Concussions, and Difficulty Requesting Research Funding",
		"Chicken Preferences for Human Beauty: Impact of Ergot Contamination",
		"Adding Ergot to the Local Food Supply; An Observational Recount of a Bad Idea",
		"Hiccup Cures and Post-Traumatic Stress: Sugar versus Scares",
		"Pigeons as Art Instructors: An Education Budget Breakthrough",
		"Coffee? Coffee. Coffee!",
		"How Much Lettuce is Too Much on a Sandwich?",
		"Raisins versus Chocolate Chips: Oatmeal Cookie Preferences as a Psychological Indicator",
		"Why They Always Screw Up Scallops on Hell's Kitchen: The Dunning-Kruger Effect",
		"Tattooing Scarlet As on Adulterers: A Hawthorne Effect in a Hawthorne Study",
		"Navel Gazing, Lint Color, and Writing a Dissertation in Two Months",
		"What if Unicorns Were Real and Could Vote? The Brilliant Ramblings of my Slacker Roommate",
		"The Knowledge: London Cabbies versus Google Maps",
		"How Propaganda Led to a Flooding River: Impact of Pro-Union Pamphlets on Beavers in the Wild",
		"Incorrect Q-Tip Usage and Auditory Processing Disorders",
		"The Wizard of Id and the Warlock of Ego",
		"Detecting Sarcasm in Rats: They Really Hate the Lab Mice and Interns",
		"Yawning, Spider Swallowing, and Fetishes Involving Lime Gelatin",
		"Licking of Elbows as Signs of Savant Abilities",
		"Subliminal Messagi--You Will Pass Me--ng in Printed Text",
		"Dreams of Marshmallow Diets and the Pillow Shortage of 2013",
		"Using Carrier and Homing Pigeons as a Means of Distributed Cognition and External Memory",
		"Why Only the Scorpio Horoscopes are Correct: Never Date Them",
		"Couch Length Correlations with CBT Success Rates and Length of Treatment",
		"Peoria Syndrome Among Parisians: Culture Shock in Illinois",
		"Fingerpainting as a Novel Means of Scholarly Communication",
		"Cubicles or Corner Offices: Impacts on Claustrophobic CEOs",
		"Tuxedo Cats Cannot Do Taxes Despite Linguistic Similarities",
		"Nachos are Awesome",
		"Booster Seats Inflate Egos of Toddlers Beyond Human Conception"
		];
		
	document.getElementById('title').value = titles[getRandomInt(titles.length)];
	
	document.getElementById('generatePDF').addEventListener('click', function(evt) {
		window.jsPDF = window.jspdf.jsPDF;

		let lMargin = 30; //left margin in mm
		let rMargin = 30; //right margin in mm
		let pdfInMM = 210;  // width of A4 in mm
		let doc = new jsPDF("p","mm","a4");

		let title = document.getElementById('title').value;
		
		let first = document.getElementById('firstname').value;
		let last = document.getElementById('lastname').value;
		let suffix = document.getElementById('suffix').value;
		
		let name = first + ' ' + last;
		if(suffix.length > 0)
			name = name + ', ' + suffix;
		name = name.trim();
		
		let text = title + '\n\n' + name;

		let lines = doc.splitTextToSize(text, (pdfInMM - lMargin - rMargin));
		doc.text(pdfInMM /2, 20, lines, { align:"center" } );
		
		let ABSTRACTS = 
		["The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over a week since their last meal and they were getting desperate. The cubs would make a good meal, but there were high risks taking on the mother Grizzly. A decision had to be made and the wrong choice could signal the end of the pack. The viscera would benefit their cartilage, but they would be avoiding brains due to fear of canine kuru and other prion diseases.",
		"There was something in the sky. What exactly was up there wasn't immediately clear. But there was definitely something in the sky and it was getting bigger and bigger. The cornea struggled to focus but the visual cortex compensated as the aqueous humor began to boil out and the retinas slipped.",
		"Eating raw fish didn't sound like a good idea. It being a delicacy in Japan didn't seem to make it any more appetizing. Raw fish is raw fish, delicacy or not. The chances of getting a parasite infection or a fungal disease of the adenoids were too high given my recent allographic kidney transplant. Plus, this sushi was from a garage named Qi of Botulism.",
		"It was going to rain. The weather forecast didn't say that, but the steel plate in his hip did. His plastic patella was throbbing. The ceramic replacement in his cranium sensed lightning. His orthopedic surgeon had said he minored in meteorology. It was going to rain, so he better get outside and prepare. ",
		"She had come to the conclusion that you could tell a lot about a person by their ears. The way they stuck out and the size of the earlobes could give you wonderful insights into the person. Of course, she couldn't scientifically prove any of this, but that didn't matter to her. Before anything else, she would size up the ears of the person she was talking to. Audiology had always fascinated her, but not as much as horoscopes and alternative science like ear candling, placebos, and mutations.",
		"You can decide what you want to do in life, but I suggest doing something that creates. Something that leaves a tangible thing once you're done. That way even after you're gone, you will still live on in the things you created. Your remains decompose quickly and return to the environment thanks to the bacteria in your gut. Death is only the beginning, but sometimes the hospice extends your life.",
		"Have you ever wondered about toes? Why 10 toes and not 12. Why are some bigger than others? Some people can use their toes to pick up things while others can barely move them on command. Some toes are nice to look at while others are definitely not something you want to look at. Toes can be stubbed and make us scream. Toes help us balance and walk. 10 toes are just something to ponder. And why does paralysis go from the brain down instead of the toes up? Couldn't we rewire the neurons to better make a full circuit with the spine. ",
		"She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning? Sure, bird flu was a possibility, but she had kissed pigs all through her childhood and only occasionally got worms.",
		"He swung back the fishing pole and cast the line which fell 25 feet away into the river. The lure landed in the perfect spot and he was sure he would soon get a bite. He never expected that the bite would come from behind in the form of a bear. Especially a bear who had recently seen a dentist and was still numb from novocaine after getting a root canal.",
		"I'm going to hire professional help tomorrow. I can't handle this anymore. She fell over the coffee table and now there is blood in her catheter. This is much more than I ever signed up to do. ",
		"I used canned chicken to make a lovely chicken salad for lunch.",
		"AI is worse than useless!",
		"Literally there are hundreds of other banana varieties that are also cultivated and some that aren't that people eat that aren't so perfectly shaped as Ray Comfort claims.",
		"That cartoon gave me an extremely unrealistic expectation of the size of a road runner.",
		"The dividing line between Old English and Middle English is generally considered 1066.", 
		"A two-inch layer of freshly fallen snow covered the yard. Stacey peeked outside. To most, it would have been a beautiful sight worthy of taking a photo to put on Instagram. For Stacey, it meant something different. The first snow of the year brought back the witches as the fairies in the yard had to seek shelter to avoid the cold. Yes, these hallucinogens were good but now she had a craving for coffee and raw steak plus a rabies vaccination.",
		"After completing thousands of autopsies, I had finally collected enough body parts to build my creation. Being a coroner provided me with all the tissue, organs, limbs, and bodily fluids I needed. Certainly I faced the challenge of the immune system and rejection, but my creation would live tonight. I am no mere mad scientist with a hunchback assistant. I am a living god."];
		
		let all_keywords = ['Guinea Worms', 'Rabies', 'Mad Cow Disease', 'Stomach', 'Cornea', 'Vitamin D', 'Elves', 'Sassafras', 'Urchin', 'Motility', 'Wurst', 'Quintuplets', 'Calcium Carbonate', 'Dragons', 'Lizard People', 'Macaroni and Cheese', 'Fish Sticks', 'Kuru', 'Prions', 'Faulkner', 'Graphic medicine', 'LSD', 'Greased Lightning', 'Lemon Law', 'Flea Market'];
		let shuffle = fisherYates(ABSTRACTS.length);
		
		
		text = 'Abstract:\n';
		text = text + ABSTRACTS[shuffle[0]] + '\n\n' + ABSTRACTS[shuffle[1]];
		if(Math.random() < 0.3) 
			text = text + '\n\n' + ABSTRACTS[shuffle[2]];	
		
		shuffle = fisherYates(all_keywords.length);
		text = text + '\n\n\nKeywords:\n';
		let n = 2 + getRandomInt(4);
		text = text + all_keywords[shuffle[0]];
		for(i=1; i<n; i++)
			text = text + ', ' + all_keywords[shuffle[i]];
		
		lines = doc.splitTextToSize(text, (pdfInMM - lMargin - rMargin));
		doc.text(lMargin, 60, lines, { align:"left" } );
		
		
		let filename = document.getElementById('pcom_email').value.replace('@pcom.edu','') + '.pdf'; 
		doc.save(filename);
	});
		
});


function fisherYates(length) {
	let i, array = [];
	for(i=0; i<length; i++)
		array.push(i);
	i = array.length;
	while (--i > 0) {
		let temp = Math.floor(Math.random() * (i + 1));
		[array[temp], array[i]] = [array[i], array[temp]];
	}
	return array;
}

