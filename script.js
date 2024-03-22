//name lists
{
	this['First'] = ['Lancelot', 'Zebulon', 'Isaark', 'Purcifull', 'Dorcas', 'Grissel', 'Zephaniah', 'Geryase', 'Parnell', 'Gulielma', 'Barbary', 'Springett', 'Tacey', 'Marrabilla', 'Tryall', 'Mascall', 'Provided', 'Zeruiah', 'Herodias', 'Seemerrie', 'Penticost', 'Job', 'Trustrum', 'Degery', 'Lettice', 'Waudlin', 'Allathyah', 'Arent', 'Babel', 'Barb', 'Broadbanke', 'Chardus', 'Alatheo', 'Charity', 'Comfort', 'Constant', 'Corn', 'Cotton', 'Didolis', 'Digworthy', 'Discipline', 'Dolphin', 'Dykes', 'Elizabeth', 'Ermine', 'Eustace', 'Experience', 'Farley', 'Fettiplace', 'Fountain', 'Furly', 'Gayes', 'Gey', 'God', 'Hallelujah', 'Henaretter', 'Hercules', 'Hester', 'Humble', 'Isabel', 'Isah', 'Israel', 'Jane', 'Jennix', 'Love', 'Loveday', 'Marvellous', 'Obedience', 'Old', 'Ould', 'Patience', 'Peace', 'Peregrine', 'Persilla', 'Philotesia', 'Plant', 'Prevents', 'Returne', 'Returned', 'Reuben', 'Rich', 'Robert', 'Were', 'Rutoron', 'Sarah', 'Scotting', 'Sentence', 'Sherlock', 'Silence', 'Squire', 'Susannah', 'Temperance', 'Thank', 'Thankfull', 'Theophilia', 'Thos (Thomas)', 'Eld', 'Try', 'Tryphona', 'Virgin', 'Wilde', 'Wonderfull'];
	
	this['Last'] = ['Stubbb', 'Whitehead', 'Toldervy', 'Hooton', 'Jelly', 'Snashfold', 'Tittery', 'Cockery', 'Wigglesworth', 'Peacock', 'Smedly', 'Crab', 'Hortlorke', 'Wright', 'Gibson', 'Bee', 'Plant', 'Eyre', 'Kill', 'Corn', 'Jolly', 'Groom', 'Shield', 'Brown', 'Russell', 'Carie', 'Marshall', 'Matthews', 'Munn', 'Alexander', 'Poope', 'Special', 'Pricket', 'Cuppage', 'Strettell', 'Brain', 'Church', 'Sterrey', 'Loosvelt', 'Band', 'Blessed', 'Fisher', 'Herbenson', 'Cross', 'Chester', 'Thatcher', 'Buttery', 'Young-Husband', 'Delight', 'Quitquit', 'Snowball', 'Dry', 'Bland', 'Wells', 'Beer', 'Butcher', 'Shapton', 'Allen', 'Killow', 'Scanfield', 'Waring', 'Adams', 'Craven', 'Fish', 'Rawbone', 'Love', 'Doyly', 'Pye', 'Owen', 'Fry', 'Parker', 'Towle', 'Elgar', 'Whale', 'Fox', 'Rettle', 'Sparkling', 'Potts', 'Grimes', 'Thorpe', 'Williams', 'Boone', 'Poor', 'Holland', 'Toone', 'Townsend', 'Doys', 'Grove', 'Wassey', 'Kent', 'Wilde', 'Warwicke']
	
}

function parseName() { 
	let results = document.getElementById("results");	
	results.style.display = "block";
	results.innerHTML = '';
	for(var i = 0; i < 3; i++) {
    let middle = '';
    if(Math.floor(Math.random() * 10) == 0) {
      middle = getRandom(this['First'])+' ';
    }
		results.innerHTML += getRandom(this['First']) +' '+ middle + getRandom(this['Last'])+'<br>';
	}
} //end function

function getRandom(array) {
	return array[Math.floor(Math.random() * array.length)];
}
