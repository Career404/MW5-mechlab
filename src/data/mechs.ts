import CPLTJMDA from './MDA/CPLT-J_MDA.json'

export interface MechChassis {
	chassis: string
	short: string
	weightclass:
		| 'ultralight'
		| 'light'
		| 'medium'
		| 'heavy'
		| 'assault'
		| 'superheavy'
	weight: number
	variants?: string[]
	DLC?: 'HOTIS' | 'KESTREL' | 'ARMS' | 'RAS'
}
export class MechChassis implements MechChassis {
	constructor(
		public chassis: string,
		public short: string,
		public weight: number,
		public DLC?: 'HOTIS' | 'KESTREL' | 'ARMS' | 'RAS'
	) {
		this.weightclass =
			this.weight <= 15
				? 'ultralight'
				: weight <= 35
				? 'light'
				: weight <= 55
				? 'medium'
				: weight <= 75
				? 'heavy'
				: weight <= 100
				? 'assault'
				: 'superheavy'
	}
}
const COMMANDO = new MechChassis('COMMANDO', 'COM', 25)
const FIRESTARTER = new MechChassis('FIRESTARTER', 'FS9', 35)
const FLEA = new MechChassis('FLEA', 'FLE', 20)
const JAVELIN = new MechChassis('JAVELIN', 'JVN', 30)
const JENNER = new MechChassis('JENNER', 'JR7', 35)
const LOCUST = new MechChassis('LOCUST', 'LCT', 20)
const PANTHER = new MechChassis('PANTHER', 'PNT', 35)
const RAVEN = new MechChassis('RAVEN', 'RVN', 35)
const SPIDER = new MechChassis('SPIDER', 'SDR', 30)
const URBANMECH = new MechChassis('URBANMECH', 'UM', 30)
const WOLFHOUND = new MechChassis('WOLFHOUND', 'WLF', 35)
const ASSASSIN = new MechChassis('ASSASSIN', 'ASN', 40)
const BLACKJACK = new MechChassis('BLACKJACK', 'BJ', 45)
const CENTURION = new MechChassis('CENTURION', 'CN9', 50)
const CICADA = new MechChassis('CICADA', 'CDA', 40)
const CRAB = new MechChassis('CRAB', 'CRB', 50)
const DERVISH = new MechChassis('DERVISH', 'DV', 55, 'HOTIS')
const ENFORCER = new MechChassis('ENFORCER', 'ENF', 50)
const GRIFFIN = new MechChassis('GRIFFIN', 'GRF', 55)
const HATCHETMAN = new MechChassis('HATCHETMAN', 'HCT', 45, 'ARMS')
const HUNCHBACK = new MechChassis('HUNCHBACK', 'HBK', 50)
const KINTARO = new MechChassis('KINTARO', 'KTO', 55)
const PHOENIXHAWK = new MechChassis('PHOENIX HAWK', 'PXH', 45)
const SHADOWHAWK = new MechChassis('SHADOW HAWK', 'SHD', 55)
const TREBUCHET = new MechChassis('TREBUCHET', 'TBT', 50)
const VINDICATOR = new MechChassis('VINDICATOR', 'VND', 45)
const VULCAN = new MechChassis('VULCAN', 'VL', 40)
const WOLVERINE = new MechChassis('WOLVERINE', 'WVR', 55)
const ARCHER = new MechChassis('ARCHER', 'ARC', 70)
const BLACKKNIGHT = new MechChassis('BLACK KNIGHT', 'BL', 75)
const CATAPHRACT = new MechChassis('CATAPHRACT', 'CTF', 70)
const CATAPULT = new MechChassis('CATAPULT', 'CPLT', 65)
const CHAMPION = new MechChassis('CHAMPION', 'CHP', 60, 'HOTIS')
const CRUSADER = new MechChassis('CRUSADER', 'CRD', 65, 'RAS')
const DRAGON = new MechChassis('DRAGON', 'DRG', 65)
const GRASSHOPPER = new MechChassis('GRASSHOPPER', 'GHR', 70)
const JAGERMECH = new MechChassis('JAGERMECH', 'JM6', 65)
const MARAUDER = new MechChassis('MARAUDER', 'MAD', 70)
const ORION = new MechChassis('ORION', 'ON1', 75)
const QUICKDRAW = new MechChassis('QUICKDRAW', 'QKD', 60)
const RIFLEMAN = new MechChassis('RIFLEMAN', 'RFL', 60)
const THUNDERBOLT = new MechChassis('THUNDERBOLT', 'TDR', 65)
const WARHAMMER = new MechChassis('WARHAMMER', 'WHM', 70)
const ANNIHILATOR = new MechChassis('ANNIHILATOR', 'ANH', 100)
const ATLAS = new MechChassis('ATLAS', 'AS7', 100)
const AWESOME = new MechChassis('AWESOME', 'AWS', 80)
const BANSHEE = new MechChassis('BANSHEE', 'BNC', 95)
const BATTLEMASTER = new MechChassis('BATTLEMASTER', 'BLR', 85)
const CHARGER = new MechChassis('CHARGER', 'CGR', 80, 'HOTIS')
const CORSAIR = new MechChassis('CORSAIR', 'COR', 95, 'HOTIS')
const CYCLOPS = new MechChassis('CYCLOPS', 'CP', 90)
const HIGHLANDER = new MechChassis('HIGHLANDER', 'HGN', 90)
const HATAMOTOCHI = new MechChassis('HATAMOTO-CHI', 'HTM', 80, 'HOTIS')
const KINGCRAB = new MechChassis('KING CRAB', 'KGC', 100)
const MAULER = new MechChassis('MAULER', 'MAL', 90)
const MARAUDER2 = new MechChassis('MARAUDER II', 'MAD', 100, 'HOTIS')
const NIGHTSTAR = new MechChassis('NIGHTSTAR', 'NSR', 95)
const STALKER = new MechChassis('STALKER', 'STK', 85)
const VICTOR = new MechChassis('VICTOR', 'VTR', 80)
const ZEUS = new MechChassis('ZEUS', 'ZEU', 80)

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

//!

type MDA = typeof CPLTJMDA

export class MechObject {
	public name?: string
	public mda?: MDA
	public mechChassis?: MechChassis
	public isComplete: boolean = false
	public DLC: '' | 'HOTIS' | 'KESTREL' | 'ARMS' | 'RAS'
	constructor(mda: MDA) {
		this.mda = mda
		this.name = mda.mechStats.keyName
		const foundMechChassis = mechList.find((arrElement) => {
			this.name.indexOf(arrElement.short) !== -1
		})
		if (foundMechChassis !== undefined) {
			this.mechChassis = foundMechChassis
		} else {
			this.mechChassis = new MechChassis(
				this.mda.chassisFullName,
				this.mda.variantName.substring(0, this.mda.variantName.indexOf('-')),
				this.mda.mechDataStats.baseStats.tons
			)
			mechList.push(this.mechChassis)
		}
		this.DLC = this.mechChassis.DLC ? this.mechChassis.DLC : findDLC(this.name)
		this.isComplete = this.name && this.mda && this.mechChassis ? true : false
	}
}
function findDLC(str) {
	const DLC1VariantsArray = [
		'ARC-AGC',
		'ARC-T',
		'ASN-27',
		'ASN-DD',
		'BNC-3P',
		'BLR-1P',
		'BL-6-KNT',
		'BL-6B-KNT',
		'CTF-0X',
		'CTF-0XP',
		'CHP-1N',
		'CHP-1N2',
		'CHP-1NB',
		'CHP-2N',
		'CGR-1A1',
		'CGR-1A5',
		'CGR-3K',
		'CGR-N7',
		'COM-2P',
		'COR-PVT',
		'CP-11-P',
		'DV-6M',
		'DV-7D',
		'DV-FR',
		'DRG-SDW',
		'ENF-GH',
		'FS9-S',
		'FS9-S1',
		'FLE-17',
		'GHR-4P',
		'GRF-2N',
		'HTM-26T',
		'HTM-27T',
		'HTM-27W',
		'JR7-P',
		'KGC-CAR',
		'LCT-PB',
		'MAD-4A',
		'MAD-5A',
		'ON1-YAJ',
		'PXH-1B',
		'PXH-2',
		'PXH-3S',
		'PXH-KB',
		'QKD-4P',
		'RVN-1X',
		'RVN-3L',
		'RFL-DNA',
		'SHD-2P',
		'STK-3FB',
		'TBT-LG',
		'VTR-BSK',
		'VL-2P',
		'VL-2T',
		'VL-5T',
		'VL-BL',
		'WLF-GR',
		'WVR-7H',
		'ZEU-SK',
	]
	const DLC2VariantsArray = [
		'ARC-2K',
		'ARC-2RB',
		'ARC-2S',
		'ARC-2W',
		'BJ-1DB',
		'CPLT-C1B',
		'DRG-1G',
		'FS9-M',
		'KTO-19B',
		'LCT-1S',
		'MAD-2R',
		'MAD-3D',
		'MAD-3L',
		'MAD-3M',
		'QKD-5A',
		'RFL-4D',
		'TDR-5SD',
		'TDR-5SE',
		'VND-1SIC',
		'WHM-6K',
		'WHM-6L',
		'WHM-6RB',
		'WVR-6M',
		'ZEU-5T',
	]
	const DLC3VariantsArray = [
		'BL-P-KNT2',
		'CN9-YLW2',
		'HTM-ON',
		'HGN-RS',
		'QKD-SC',
		'ARC-2P',
		'ASN-25',
		'AS7-P',
		'BNC-2P',
		'BLR-1M',
		'BL-7-KNT-P',
		'CTF-2P',
		'CN9-P',
		'CGR-1P5',
		'CP-10-P',
		'GHR-5M',
		'GRF-1P',
		'HTM-26P',
		'HGN-733PP',
		'HBK-4HP',
		'KTO-18P',
		'PXH-1P',
		'QKD-5P',
		'SHD-1P',
		'TBT-5P',
		'VTR-9P',
		'VND-1P',
		'WVR-6P',
	]
	const DLC4VariantsArray = [
		[
			'CRD-2R',
			'CRD-3D',
			'CRD-3K',
			'CRD-3L',
			'CRD-3R',
			'CRD-4D',
			'CRD-4K',
			'CRD-4L',
			'CRD-5M',
			'CRD-5S',
			'CRD-CR',
		],
	]
	if (DLC1VariantsArray.includes(str)) {
		return 'HOTIS'
	}
	if (DLC2VariantsArray.includes(str)) {
		return 'KESTREL'
	}
	if (DLC3VariantsArray.includes(str)) {
		return 'ARMS'
	}
	if (DLC4VariantsArray.includes(str)) {
		return 'RAS'
	}
	return ''
}
