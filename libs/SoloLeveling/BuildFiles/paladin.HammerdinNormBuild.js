/**
 *    @filename		paladin.HammerdinBuild.js
 *    @desc			paladin build for hammerdin.
 * 					skills based on https://www.diabloii.net/forums/threads/max-damage-hammerdin-guide-by-captain_bogus-repost.127596/
 */

var build = {
	caster: true,
	skillstab: 24, //combat
	wantedskills: [112, 113], // hammers, concentration
	usefulskills: [117, 108], // holy shield, blessed aim
	stats: [
		["strength", 35], 
		["energy",   30], 
		["vitality", 100], 
		["strength", 47], 
		["vitality", 300], 
		["strength", 95], 
		["vitality", 330], 
		["dexterity", "block"], 
		["vitality", "all"]
	],
	skills: [
		[113,1], // concentration
		[112,1], // blessed hammers
		[115,1], // vigor
		[97, 1], // smite
		[107,1], // charge
		[108, 7], // blessed aim
		[113, 2], // concentration
		[112, 2], // blessed hammers
		[115, 2], // vigor
		[112, 7], // blessed hammers
		[117, 1], // holy shield
		[120, 1], // mediation
		[112,13], // blessed hammers
		[124, 1], // redemption
		[112,20], // max hammers
		[113, 3], // level concentration
		[115, 3], // level vigor
		[113, 4], // level concentration
		[115, 4], // level vigor
		[113, 5], // level concentration
		[115, 5], // level vigor
		[113, 6], // level concentration
		[115, 6], // level vigor
		[113, 7], // level concentration
		[115, 7], // level vigor
		[113, 8], // level concentration
		[115, 8], // level vigor
		[113, 9], // level concentration
		[115, 9], // level vigor
		[113, 10], // level concentration
		[115, 10], // level vigor
		[113, 11], // level concentration
		[115, 11], // level vigor
		[113, 12], // level concentration
		[115, 12], // level vigor
		[113, 13], // level concentration
		[115, 13], // level vigor
		[113, 14], // level concentration
		[115, 14], // level vigor
		[113, 15], // level concentration
		[115, 15], // level vigor
		[113, 16], // level concentration
		[115, 16], // level vigor
		[113, 17], // level concentration
		[115, 17], // level vigor
		[113, 18], // level concentration
		[115, 18], // level vigor
		[113, 19], // level concentration
		[115, 19], // level vigor
		[113, 20], // max concentration
		[115, 20], // max vigor
		[108, 20], // max blessed aim
		[117, 20]  // max holy shield
	]
};
