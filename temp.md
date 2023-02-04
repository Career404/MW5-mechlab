## Hello peoples

Story goes like this: I've tried playing vanilla recently and I kinda remember some mechs are pure **shit** and some are a steal... but it's so unclear, on every step of the way, what mechs are worth taking as salvage/bying, what are the hardpoints, how much free weight there is, etc etc. Compare MW5 interface to MWO for example, and you'll instantly see what I'm talking about. Not that anything new can be said about MW5 UI anyways.

So I found myself working on an online tool that is a mech lookup recource for basegame, then a mechlab, and then the same for YAML+stuff. The plan is to extract and use game data, since, you know, it's there and there's a crap ton of info in json files. The extracting part is done for base game and DLCs, now on to the implementation...

I'll start with questions and drop in what I learned I could use so far in the end:

* What features would you like to see in a basic [mechDB-like tool](https://mwo.nav-alpha.com/) for MW5?
* Modders: I totally need your help. What is the process of creating a new mech variant/mech chassis? MDA is the most reliable source of information on the mech and it is strictly neccessary? What about loadout files, do they have anything useful for this kind of project? Also - do you have these files as .json, or bake them in so that they're only accessible with MW5Editor (or not at all?)?
* YAML people, cszolee, trueg - first of all, thanks so much for making the mechlab and shooty-walkie fun and tunable, love it! Second, I'll come asking how this fancy mechlab works under the hood sometime soon...

Okay, now it's time to go through jsons and decide what info is usable. Probably boring stuff, unless you're into this... it's me sorting things out loud - you're warned:

### MDA:
 1. Let's start easy: chassisFullName and variantName are exactly what they sound like
 2. mechDataStats - baseStats is weight, free tonnage w/no armor (it is .tons-.baseTons)-  useful, then baseHeatCapacity and baseCoolingRate, that seem to be useful, but they should be tied to engine size anyways so, redundant, and finally cBill base value, repair/refit/upkeep costs, which a probably totally useless
 3. mechDataStats - moveStats is all kinds of speed, accel/decel, turn, jj, fall damage curves. Other than speed - useless (and then again, speed is just weight/engine calculation, no?)
 4.  mechDataStats - torsoStats is all about the range of movement, yaw/pitch, - don't let the name decieve you, it's about torso and arms. Probably useful to display what mechs have free range of arm motion.
 5.  mechDataStats - powerStats. I have no idea what it is, other than powerUp and powerDown times. Useless?
 6.  mechImportData - yummy! First we get baseMechInformation - there's armor, structure, heatsink type (engine hs are always singles still), then engineRating and bXLEngine, good stuff, and then... Artemis? Isn't it tied to installed launchers though?
 7.  mechImportData - componentInformation. As the name implies, it is about each component - head, CT, RT/LT and so on. Each component has 7 fields - bCASE, targetingComputer, bECM, bBeagleActiveProbe, heatsinks, componentAmmo, jumpjets. Useful to read sensor/ECM/JJ slots.
 8.  healthDataStats - max armor and max structure, easy
 9.  mechType - would be useful, but string format is weird and using weight brackets is extremely simple anyways
 10. description: Nice to have some flavour text
 11. selectedWeaponHardpoints - is it, what, default loadout? Correct me if I'm wrong, I probably am
 12. equipmentAllocation - fun stuff again. Equipped armor, structure, hs, jj - didn't we already go through those? Then there's slotData - recapping which slots mech has, how many of them and where. Gotta be useful, right? Then there's internal equipment and goodies again - totalTraitSlots
 13. For some reason MDA has engineRating and bXLEngine repeated again outside of mechImportData. Weird flex, but ok
 14. bIsHeroMech is great, baseChassisCost and salvageShareCost are probably nice to show in the app too, right?
 15. bIsDefaultVariant - please, someone, explain what it means? Because I don't have the slightest idea


### Loadout:
I'm not exactly sure it would be useful outside of the game. It has installed/current armor + structure, installed weapons and equipment, weapon groups and installed traits. Other than using the same schema for a mechlab, the file itself on a website has no use