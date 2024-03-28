//name lists

{
	this['PerseiFirst'] = ['Lancelot', 'Zebulon', 'Isaark', 'Purcifull', 'Dorcas', 'Grissel', 'Zephaniah', 'Geryase', 'Parnell', 'Gulielma', 'Barbary', 'Springett', 'Tacey', 'Marrabilla', 'Tryall', 'Mascall', 'Provided', 'Zeruiah', 'Herodias', 'Seemerrie', 'Penticost', 'Job', 'Trustrum', 'Degery', 'Lettice', 'Waudlin', 'Allathyah', 'Arent', 'Babel', 'Barb', 'Broadbanke', 'Chardus', 'Alatheo', 'Charity', 'Comfort', 'Constant', 'Corn', 'Cotton', 'Didolis', 'Digworthy', 'Discipline', 'Dolphin', 'Dykes', 'Elizabeth', 'Ermine', 'Eustace', 'Experience', 'Farley', 'Fettiplace', 'Fountain', 'Furly', 'Gayes', 'Gey', 'God', 'Hallelujah', 'Henaretter', 'Hercules', 'Hester', 'Humble', 'Isabel', 'Isah', 'Israel', 'Jane', 'Jennix', 'Love', 'Loveday', 'Marvellous', 'Obedience', 'Old', 'Ould', 'Patience', 'Peace', 'Peregrine', 'Persilla', 'Philotesia', 'Plant', 'Prevents', 'Returne', 'Returned', 'Reuben', 'Rich', 'Robert', 'Were', 'Rutoron', 'Sarah', 'Scotting', 'Sentence', 'Sherlock', 'Silence', 'Squire', 'Susannah', 'Temperance', 'Thank', 'Thankfull', 'Theophilia', 'Thos (Thomas)', 'Eld', 'Try', 'Tryphona', 'Virgin', 'Wilde', 'Wonderfull'];
	
	this['PerseiLast'] = ['Stubbb', 'Whitehead', 'Toldervy', 'Hooton', 'Jelly', 'Snashfold', 'Tittery', 'Cockery', 'Wigglesworth', 'Peacock', 'Smedly', 'Crab', 'Hortlorke', 'Wright', 'Gibson', 'Bee', 'Plant', 'Eyre', 'Kill', 'Corn', 'Jolly', 'Groom', 'Shield', 'Brown', 'Russell', 'Carie', 'Marshall', 'Matthews', 'Munn', 'Alexander', 'Poope', 'Special', 'Pricket', 'Cuppage', 'Strettell', 'Brain', 'Church', 'Sterrey', 'Loosvelt', 'Band', 'Blessed', 'Fisher', 'Herbenson', 'Cross', 'Chester', 'Thatcher', 'Buttery', 'Young-Husband', 'Delight', 'Quitquit', 'Snowball', 'Dry', 'Bland', 'Wells', 'Beer', 'Butcher', 'Shapton', 'Allen', 'Killow', 'Scanfield', 'Waring', 'Adams', 'Craven', 'Fish', 'Rawbone', 'Love', 'Doyly', 'Pye', 'Owen', 'Fry', 'Parker', 'Towle', 'Elgar', 'Whale', 'Fox', 'Rettle', 'Sparkling', 'Potts', 'Grimes', 'Thorpe', 'Williams', 'Boone', 'Poor', 'Holland', 'Toone', 'Townsend', 'Doys', 'Grove', 'Wassey', 'Kent', 'Wilde', 'Warwicke'];
  
	this['VerasAdjective'] = ['Abundant', 'Accountable', 'Adaptable', 'Alert', 'Ambitious', 'Ardent', 'Attentive', 'Authentic', 'Balanced', 'Brilliant', 'Capable', 'Careful', 'Competent', 'Constant', 'Curious', 'Decisive', 'Dependable', 'Determined', 'Disciplined', 'Enthusiastic', 'Ethical', 'Expressive', 'Faithful', 'Fearless', 'Ferocious', 'Flexible', 'Focused', 'Friendly', 'Gentle', 'Harmonious', 'Helpful', 'Honorable', 'Humble', 'Idealistic', 'Imaginative', 'Intuitive', 'Insightful', 'Lawful', 'Learning', 'Loyal', 'Necessary', 'Optimistic', 'Original', 'Passionate', 'Peaceful', 'Playful', 'Pliable', 'Professional', 'Purposeful', 'Radical', 'Reflective', 'Rigorous', 'Satisfying', 'Secret', 'Significant', 'Spontaneous', 'Sustainable', 'Temperate', 'Tenacious', 'Thankful', 'Thorough', 'Tranquil', 'Understanding', 'Verified', 'Vigorous', 'Welcoming'];
  
	this['VerasNoun'] = ['Acceptance', 'Achievement', 'Altruism', 'Amusement', 'Beauty', 'Boldness', 'Bravery', 'Candor', 'Cleanliness', 'Commitment', 'Conclusion', 'Conviction', 'Creativity', 'Detachment', 'Devotion', 'Discipline', 'Encouragement', 'Endurance', 'Eternity', 'Fairness', 'Fidelity', 'Foresight', 'Freedom', 'Generosity', 'Happiness', 'Harmony', 'Honesty', 'Identity', 'Improvement', 'Interpretation', 'Justice', 'Kindness', 'Leadership', 'Liberty', 'Mastery', 'Modesty', 'Motivation', 'Order', 'Patience', 'Perserverance', 'Poise', 'Recognition', 'Reliability', 'Responsibility', 'Reverence', 'Satisfaction', 'Security', 'Serenity', 'Service', 'Silence', 'Sincerity', 'Solitude', 'Stability', 'Story', 'Tactfulness', 'Talent', 'Tolerance', 'Toughness', 'Trust', 'Unity', 'Validation', 'Valor', 'Visionary', 'Vitality', 'Wealth', 'Wisdom', 'Wonder']
}

//beginning of function
function parseName() { 
  //pull checked elements
	var group = document.getElementById("group").value;
	var output = document.getElementById("output");
	var results = document.getElementById("results");	      
	results.style.display = "block";

  	var background = 'darkgrey';
  	var text = 'black';
  	switch(group) {
	    case 'persei':
		break;
	    case 'veras':
		background = '#cd7f32'; //cd7f32 bronze; 804a00 dark bronze; daaa53 light bronze
		text = 'darkslategrey';
		break;
	    case 'attra':
		background = 'darkblue';
		text = 'silver'
		break;
	}
	output.style['background-color'] = background;
	results.style.color = text;

  	results.innerHTML = '';
	for(var i = 0; i < 5; i++) {
		results.innerHTML += getName(group)+'<br>';
	}
} //end function

function getName(group) {
  var name = '';
  switch(group) {
    case "persei":
      let middle = '';
      if(Math.floor(Math.random() * 10) == 0) {
        middle = getRandom(this['PerseiFirst'])+' ';
      }
      name = getRandom(this['PerseiFirst'])+' '+middle+getRandom(this['PerseiLast']);
      break;
      
    case "veras":
      let adj = getRandom(this['VerasAdjective']);
      let noun = getRandom(this['VerasNoun']);
      let port = adj.substring(0,3)+noun.substring(0,3).toLowerCase()+' / '+adj.substring(0,3)+noun.substring(0,2).toLowerCase()+' / '+adj.substring(0,2)+noun.substring(0,2).toLowerCase()+' / '+adj.substring(0,2)+noun.substring(0,3).toLowerCase();
      name = adj+' '+noun+' (<span style="font-weight:bold">'+port+'</span>)';
      break;
      
    case "attra":
      break;
  }
  return name;
} //end function


function getRandom(array) {
	return array[Math.floor(Math.random() * array.length)];
}

