export interface MechChassis {
	chassis: string
	weightclass:
		| 'ultralight'
		| 'light'
		| 'medium'
		| 'heavy'
		| 'assault'
		| 'superheavy'
	weight: number
	speed: number
	variants?: string[]
	DLC: '' | 'HOTIS' | 'KESTREL' | 'ARMS' | 'RAS'
}
export interface MechVariant extends MechChassis {
	MASK?: boolean
	sensors?: boolean
	engineHS?: number
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
export class MechChassis {
	constructor(
		public chassis: string,
		public weightclass:
			| 'ultralight'
			| 'light'
			| 'medium'
			| 'heavy'
			| 'assault'
			| 'superheavy',
		public weight: number,
		public speed: number,
		public DLC: '' | 'HOTIS' | 'KESTREL' | 'ARMS' | 'RAS' = '',
		public variants?: string[]
	) {}
}
const COMMANDO = new MechChassis('COMMANDO', 'light', 25, 97)
const FIRESTARTER = new MechChassis('FIRESTARTER', 'light', 35, 97)
const FLEA = new MechChassis('FLEA', 'light', 20, 97)
const JAVELIN = new MechChassis('JAVELIN', 'light', 30, 97)
const JENNER = new MechChassis('JENNER', 'light', 35, 118)
const LOCUST = new MechChassis('LOCUST', 'light', 20, 129)
const PANTHER = new MechChassis('PANTHER', 'light', 35, 64)
const RAVEN = new MechChassis('RAVEN', 'light', 35, 97)
const SPIDER = new MechChassis('SPIDER', 'light', 30, 129)
const URBANMECH = new MechChassis('URBANMECH', 'light', 30, 32)
const WOLFHOUND = new MechChassis('WOLFHOUND', 'light', 35, 97)
const ASSASSIN = new MechChassis('ASSASSIN', 'medium', 40, 118)
const BLACKJACK = new MechChassis('BLACKJACK', 'medium', 45, 64)
const CENTURION = new MechChassis('CENTURION', 'medium', 50, 64)
const CICADA = new MechChassis('CICADA', 'medium', 40, 129)
const CRAB = new MechChassis('CRAB', 'medium', 50, 86)
const DERVISH = new MechChassis('DERVISH', 'medium', 55, 86, 'HOTIS')
const ENFORCER = new MechChassis('ENFORCER', 'medium', 50, 964)
const GRIFFIN = new MechChassis('GRIFFIN', 'medium', 55, 86)
const HATCHETMAN = new MechChassis('HATCHETMAN', 'medium', 45, 64, 'ARMS')
const HUNCHBACK = new MechChassis('HUNCHBACK', 'medium', 50, 64)
const KINTARO = new MechChassis('KINTARO', 'medium', 55, 86)
const PHOENIXHAWK = new MechChassis('PHOENIX HAWK', 'medium', 45, 97)
const SHADOWHAWK = new MechChassis('SHADOW HAWK', 'medium', 55, 86)
const TREBUCHET = new MechChassis('TREBUCHET', 'medium', 50, 86)
const VINDICATOR = new MechChassis('VINDICATOR', 'medium', 45, 64)
const VULCAN = new MechChassis('VULCAN', 'medium', 40, 97)
const WOLVERINE = new MechChassis('WOLVERINE', 'medium', 55, 86)
const ARCHER = new MechChassis('ARCHER', 'heavy', 70, 64)
const BLACKKNIGHT = new MechChassis('BLACK KNIGHT', 'heavy', 75, 64)
const CATAPHRACT = new MechChassis('CATAPHRACT', 'heavy', 70, 64)
const CATAPULT = new MechChassis('CATAPULT', 'heavy', 65, 64)
const CHAMPION = new MechChassis('CHAMPION', 'heavy', 60, 86, 'HOTIS')
const CRUSADER = new MechChassis('CRUSADER', 'heavy', 65, 64, 'RAS')
const DRAGON = new MechChassis('DRAGON', 'heavy', 65, 86)
const GRASSHOPPER = new MechChassis('GRASSHOPPER', 'heavy', 70, 64)
const JAGERMECH = new MechChassis('JAGERMECH', 'heavy', 65, 64)
const MARAUDER = new MechChassis('MARAUDER', 'heavy', 70, 64)
const ORION = new MechChassis('ORION', 'heavy', 75, 64)
const QUICKDRAW = new MechChassis('QUICKDRAW', 'heavy', 60, 86)
const RIFLEMAN = new MechChassis('RIFLEMAN', 'heavy', 60, 64)
const THUNDERBOLT = new MechChassis('THUNDERBOLT', 'heavy', 65, 64)
const WARHAMMER = new MechChassis('WARHAMMER', 'heavy', 70, 64)
const ANNIHILATOR = new MechChassis('ANNIHILATOR', 'assault', 100, 32)
const ATLAS = new MechChassis('ATLAS', 'assault', 100, 54)
const AWESOME = new MechChassis('AWESOME', 'assault', 80, 54)
const BANSHEE = new MechChassis('BANSHEE', 'assault', 95, 64)
const BATTLEMASTER = new MechChassis('BATTLEMASTER', 'assault', 85, 64)
const CHARGER = new MechChassis('CHARGER', 'assault', 80, 86, 'HOTIS')
const CORSAIR = new MechChassis('CORSAIR', 'assault', 95, 48, 'HOTIS')
const CYCLOPS = new MechChassis('CYCLOPS', 'assault', 90, 64)
const HIGHLANDER = new MechChassis('HIGHLANDER', 'assault', 90, 54)
const HATAMOTOCHI = new MechChassis('HATAMOTO-CHI', 'assault', 80, 64, 'HOTIS')
const KINGCRAB = new MechChassis('KING CRAB', 'assault', 100, 54)
const MAULER = new MechChassis('MAULER', 'assault', 90, 54)
const MARAUDER2 = new MechChassis('MARAUDER 2', 'assault', 100, 54, 'HOTIS')
const NIGHTSTAR = new MechChassis('NIGHTSTAR', 'assault', 95, 54)
const STALKER = new MechChassis('STALKER', 'assault', 85, 54)
const VICTOR = new MechChassis('VICTOR', 'assault', 80, 64)
const ZEUS = new MechChassis('ZEUS', 'assault', 80, 64)

export const mechList = [
	COMMANDO,
	FIRESTARTER,
	FLEA,
	JAVELIN,
	JENNER,
	LOCUST,
	PANTHER,
	RAVEN,
	SPIDER,
	URBANMECH,
	WOLFHOUND,
	ASSASSIN,
	BLACKJACK,
	CENTURION,
	CICADA,
	CRAB,
	DERVISH,
	ENFORCER,
	GRIFFIN,
	HATCHETMAN,
	HUNCHBACK,
	KINTARO,
	PHOENIXHAWK,
	SHADOWHAWK,
	TREBUCHET,
	VINDICATOR,
	VULCAN,
	WOLVERINE,
	ARCHER,
	BLACKKNIGHT,
	CATAPHRACT,
	CATAPULT,
	CHAMPION,
	CRUSADER,
	DRAGON,
	GRASSHOPPER,
	JAGERMECH,
	MARAUDER,
	ORION,
	QUICKDRAW,
	RIFLEMAN,
	THUNDERBOLT,
	WARHAMMER,
	ANNIHILATOR,
	ATLAS,
	AWESOME,
	BANSHEE,
	BATTLEMASTER,
	CHARGER,
	CORSAIR,
	CYCLOPS,
	HIGHLANDER,
	HATAMOTOCHI,
	KINGCRAB,
	MAULER,
	MARAUDER2,
	NIGHTSTAR,
	STALKER,
	VICTOR,
	ZEUS,
]

export const lightMechs = mechList.filter((mech) => mech.weightclass == 'light')
export const mediumMechs = mechList.filter(
	(mech) => mech.weightclass == 'medium'
)
export const heavyMechs = mechList.filter((mech) => mech.weightclass == 'heavy')
export const assaultMechs = mechList.filter(
	(mech) => mech.weightclass == 'assault'
)
export const flatMechList = mechList.map((obj) => obj.chassis)
