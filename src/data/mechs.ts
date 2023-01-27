export const flatMechList = [
	'COMMANDO',
	'FIRESTARTER',
	'FLEA',
	'JAVELIN',
	'JENNER',
	'LOCUST',
	'PANTHER',
	'RAVEN',
	'SPIDER',
	'URBANMECH',
	'WOLFHOUND',
	'ASSASSIN',
	'BLACKJACK',
	'CENTURION',
	'CICADA',
	'CRAB',
	'DERVISH',
	'ENFORCER',
	'GRIFFIN',
	'HATCHETMAN',
	'HUNCHBACK',
	'KINTARO',
	'PHOENIX HAWK',
	'SHADOW HAWK',
	'TREBUCHET',
	'VINDICATOR',
	'VULCAN',
	'WOLVERINE',
	'ARCHER',
	'BLACK KNIGHT',
	'CATAPHRACT',
	'CATAPULT',
	'CHAMPION',
	'CRUSADER',
	'DRAGON',
	'GRASSHOPPER',
	'JAGERMECH',
	'MARAUDER',
	'ORION',
	'QUICKDRAW',
	'RIFLEMAN',
	'THUNDERBOLT',
	'WARHAMMER',
	'ANNIHILATOR',
	'ATLAS',
	'AWESOME',
	'BANSHEE',
	'BATTLEMASTER',
	'CHARGER',
	'CORSAIR',
	'CYCLOPS',
	'HIGHLANDER',
	'HATAMOTO-CHI',
	'KING CRAB',
	'MAULER',
	'MARAUDER 2',
	'NIGHTSTAR',
	'STALKER',
	'VICTOR',
	'ZEUS',
]

export interface MechChassis {
	weightclass:
		| 'ultralight'
		| 'light'
		| 'medium'
		| 'heavy'
		| 'assault'
		| 'superheavy'
	weight: number
	speed: number
	MASK?: boolean
	sensors?: boolean
	engineHS?: number
	DLC?: '' | 'HOTIS' | 'KESTREL' | 'ARMS' | 'RAS'
}
export interface MechVariant extends MechChassis {
	chassis: string
	slots?: {
		head: string[]
		ct: string[]
		rt: string[]
		lt: string[]
		ra: string[]
		la: string[]
		rl: string[]
		ll: string[]
	}
}

const COMMANDO: MechChassis = {
	weightclass: 'light',
	weight: 25,
	speed: 97,
}
const FIRESTARTER: MechChassis = {
	weightclass: 'light',
	weight: 35,
	speed: 97,
}
const FLEA: MechChassis = {
	weightclass: 'light',
	weight: 20,
	speed: 97,
}

export const mechList = {
	COMMANDO,
	FIRESTARTER,
	FLEA,
}
/*
		FLEA: '',
		JAVELIN: '',
		JENNER: '',
		LOCUST: '',
		PANTHER: '',
		RAVEN: '',
		SPIDER: '',
		URBANMECH: '',
		WOLFHOUND: '',
	},
	medium: {
		ASSASSIN: '',
		BLACKJACK: '',
		CENTURION: '',
		CICADA: '',
		CRAB: '',
		DERVISH: 'HOTIS',
		ENFORCER: '',
		GRIFFIN: '',
		HATCHETMAN: 'ARMS',
		HUNCHBACK: '',
		KINTARO: '',
		'PHOENIX HAWK': '',
		'SHADOW HAWK': '',
		TREBUCHET: '',
		VINDICATOR: '',
		VULCAN: '',
		WOLVERINE: '',
	},
	heavy: {
		ARCHER: '',
		'BLACK KNIGHT': '',
		CATAPHRACT: '',
		CATAPULT: '',
		CHAMPION: 'HOTIS',
		CRUSADER: 'RAS',
		DRAGON: '',
		GRASSHOPPER: '',
		JAGERMECH: '',
		MARAUDER: '',
		ORION: '',
		QUICKDRAW: '',
		RIFLEMAN: '',
		THUNDERBOLT: '',
		WARHAMMER: '',
	},
	assault: {
		ANNIHILATOR: '',
		ATLAS: '',
		AWESOME: '',
		BANSHEE: '',
		BATTLEMASTER: '',
		CHARGER: 'HOTIS',
		CORSAIR: 'HOTIS',
		CYCLOPS: '',
		HIGHLANDER: '',
		'HATAMOTO-CHI': 'HOTIS',
		'KING CRAB': '',
		MAULER: '',
		'MARAUDER 2': 'HOTIS',
		NIGHTSTAR: '',
		STALKER: '',
		VICTOR: '',
		ZEUS: '',
    */
