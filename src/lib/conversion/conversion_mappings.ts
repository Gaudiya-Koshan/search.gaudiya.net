// IAST is the basis for all of the other scripts in this software.
// Everything will be compared against this table for the purpose of searching
// which obviously means that the database will need use IAST Unicode characters.

/*
a
ā
i
ī
u
ū
ṛ
ṝ
ḷ
ḹ
e
ai
o
au
ĕ
ŏ
æ
ǣ
ô
aṃ
aḥ
am̐
ka
kha
ga
gha
ṅa
ca
cha
ja
jha
ña
ṭa
ṭha
ḍa
ḍha
ṇa
ta
tha
da
dha
na
pa
pha
ba
bha
ma
ya
ra
la
va
śa
ṣa
sa
ha
l̤a
ḻa
ṟa
ṉa
qa
k͟ha
ġa
za
r̤a
r̤ha
fa
ẏa
n̆ga
n̆ja
n̆ḍa
n̆da
m̆ba
ka
kā
ki
kī
ku
kū
kṛ
kṝ
kḷ
kḹ
ke
kai
ko
kau
kĕ
kŏ
kæ
kǣ
kô
kaṃ
kaḥ
kam̐
k
'
oṃ
.
..
*/

const conversion_mappings = {
	a: {
		key: 1,
		description: 'short a',
		iast: 'a',
		english: ['a'],
		velthuis: 'a',
		itrans: 'a',
		harvard_kyoto: 'a',
		devanagari: 'अ',
		bangla: 'অ',
		oriya: 'ଅ',
		brahmi: '𑀅'
	},
	ā: {
		key: 2,
		description: 'long a',
		iast: 'ā',
		english: ['a', 'aa'],
		velthuis: 'aa',
		itrans: 'A',
		harvard_kyoto: 'A',
		devanagari: 'आ',
		bangla: 'আ',
		oriya: 'ଆ',
		brahmi: '𑀆'
	},
	i: {
		key: 3,
		description: 'short i',
		iast: 'i',
		english: ['i'],
		velthuis: 'i',
		itrans: 'i',
		harvard_kyoto: 'i',
		devanagari: 'इ',
		bangla: 'ই',
		oriya: 'ଇ',
		brahmi: '𑀇'
	},
	ī: {
		key: 4,
		description: 'long i',
		iast: 'ī',
		english: ['i', 'ee'],
		velthuis: 'ii',
		itrans: 'I',
		harvard_kyoto: 'I',
		devanagari: 'ई',
		bangla: 'ঈ',
		oriya: 'ଈ',
		brahmi: '𑀈'
	},
	u: {
		key: 5,
		description: 'short u',
		iast: 'u',
		english: ['u'],
		velthuis: 'u',
		itrans: 'u',
		harvard_kyoto: 'u',
		devanagari: 'उ',
		bangla: 'উ',
		oriya: 'ଉ',
		brahmi: '𑀉'
	},
	ū: {
		key: 6,
		description: 'long u',
		iast: 'ū',
		english: ['u', 'oo'],
		velthuis: 'uu',
		itrans: 'U',
		harvard_kyoto: 'U',
		devanagari: 'ऊ',
		bangla: 'ঊ',
		oriya: 'ଊ',
		brahmi: '𑀊'
	},
	ṛ: {
		key: 7,
		description: 'short r',
		iast: 'ṛ',
		english: ['ri'],
		velthuis: '.r',
		itrans: '.r',
		harvard_kyoto: '.r',
		devanagari: 'ऋ',
		bangla: 'ঋ',
		oriya: 'ଋ',
		brahmi: '𑀋'
	},
	ṝ: {
		key: 8,
		description: 'long r',
		iast: 'ṝ',
		english: ['rri'],
		velthuis: '.rr',
		itrans: '.R',
		harvard_kyoto: '.R',
		devanagari: 'ॠ',
		bangla: 'ৠ',
		oriya: 'ୠ',
		brahmi: '𑀌'
	},
	ḷ: {
		key: 9,
		description: 'short l',
		iast: 'ḷ',
		english: ['li'],
		velthuis: '.l',
		itrans: '.l',
		harvard_kyoto: '.l',
		devanagari: 'ऌ',
		bangla: 'ঌ',
		oriya: 'ଌ',
		brahmi: '𑀍'
	},
	ḹ: {
		key: 10,
		description: 'long l',
		iast: 'ḹ',
		english: ['lli'],
		velthuis: '.ll',
		itrans: '.L',
		harvard_kyoto: '.L',
		devanagari: 'ॡ',
		bangla: 'ৡ',
		oriya: 'ୡ',
		brahmi: '𑀎'
	},
	e: {
		key: 11,
		description: 'short e',
		iast: 'e',
		english: ['e'],
		velthuis: 'e',
		itrans: 'e',
		harvard_kyoto: 'e',
		devanagari: 'ए',
		bangla: 'এ',
		oriya: 'ଏ',
		brahmi: '𑀏'
	},
	ai: {
		key: 12,
		description: 'diphthong ai',
		iast: 'ai',
		english: ['ai'],
		velthuis: 'ai',
		itrans: 'ai',
		harvard_kyoto: 'ai',
		devanagari: 'ऐ',
		bangla: 'ঐ',
		oriya: 'ଐ',
		brahmi: '𑀐'
	},
	o: {
		key: 13,
		description: 'short o',
		iast: 'o',
		english: ['o'],
		velthuis: 'o',
		itrans: 'o',
		harvard_kyoto: 'o',
		devanagari: 'ओ',
		bangla: 'ও',
		oriya: 'ଓ',
		brahmi: '𑀑'
	},
	au: {
		key: 14,
		description: 'diphthong au',
		iast: 'au',
		english: ['au'],
		velthuis: 'au',
		itrans: 'au',
		harvard_kyoto: 'au',
		devanagari: 'औ',
		bangla: 'ঔ',
		oriya: 'ଔ',
		brahmi: '𑀒'
	},
	ĕ: {
		key: 15,
		description: 'short e breve',
		iast: 'ĕ',
		english: ['e (short)'],
		velthuis: 'e',
		itrans: 'e\\',
		harvard_kyoto: 'e\\',
		devanagari: 'ऎ',
		bangla: '঎',
		oriya: '଎',
		brahmi: '𑀓'
	},
	ŏ: {
		key: 16,
		description: 'short o breve',
		iast: 'ŏ',
		english: ['o (short)'],
		velthuis: 'o',
		itrans: 'o\\',
		harvard_kyoto: 'o\\',
		devanagari: 'ऒ',
		bangla: '঒',
		oriya: '଒',
		brahmi: '𑀔'
	},
	æ: {
		key: 17,
		description: 'ae ligature',
		iast: 'æ',
		english: ['ae'],
		velthuis: 'ae',
		itrans: 'ae',
		harvard_kyoto: 'ae',
		devanagari: 'ऐ',
		bangla: 'ঐ',
		oriya: 'ଐ',
		brahmi: '𑀐'
	},
	ǣ: {
		key: 18,
		description: 'long ae ligature',
		iast: 'ǣ',
		english: ['ae', 'ai'],
		velthuis: 'ae',
		itrans: 'ae',
		harvard_kyoto: 'ae',
		devanagari: 'ऐ',
		bangla: 'ঐ',
		oriya: 'ଐ',
		brahmi: '𑀐'
	},
	ô: {
		key: 19,
		description: 'o with circumflex',
		iast: 'ô',
		english: ['o'],
		velthuis: 'o',
		itrans: 'o^',
		harvard_kyoto: 'o^',
		devanagari: 'ओ',
		bangla: 'ও',
		oriya: 'ଓ',
		brahmi: '𑀑'
	},
	aṃ: {
		key: 20,
		description: 'nasalized a',
		iast: 'aṃ',
		english: ['am'],
		velthuis: 'a.m',
		itrans: 'aM',
		harvard_kyoto: 'aM',
		devanagari: 'अं',
		bangla: 'অং',
		oriya: 'ଅଁ',
		brahmi: '𑀵'
	},
	aḥ: {
		key: 21,
		description: 'visarga after a',
		iast: 'aḥ',
		english: ['ah'],
		velthuis: 'aH',
		itrans: 'aH',
		harvard_kyoto: 'aH',
		devanagari: 'अः',
		bangla: 'অঃ',
		oriya: 'ଅଃ',
		brahmi: '𑀶'
	},
	am̐: {
		key: 22,
		description: 'anusvara after a',
		iast: 'am̐',
		english: ['an'],
		velthuis: 'a.mN',
		itrans: 'a.m.',
		harvard_kyoto: 'a.m.',
		devanagari: 'अं',
		bangla: 'অঁ',
		oriya: 'ଅଁ',
		brahmi: '𑀵'
	},
	ka: {
		key: 23,
		description: 'velar ka',
		iast: 'ka',
		english: ['ka'],
		velthuis: 'ka',
		itrans: 'ka',
		harvard_kyoto: 'ka',
		devanagari: 'क',
		bangla: 'ক',
		oriya: 'କ',
		brahmi: '𑀓'
	},
	kha: {
		key: 24,
		description: 'velar kha',
		iast: 'kha',
		english: ['kha'],
		velthuis: 'kha',
		itrans: 'kha',
		harvard_kyoto: 'kha',
		devanagari: 'ख',
		bangla: 'খ',
		oriya: 'ଖ',
		brahmi: '𑀔'
	},
	ga: {
		key: 25,
		description: 'velar ga',
		iast: 'ga',
		english: ['ga'],
		velthuis: 'ga',
		itrans: 'ga',
		harvard_kyoto: 'ga',
		devanagari: 'ग',
		bangla: 'গ',
		oriya: 'ଗ',
		brahmi: '𑀕'
	},
	gha: {
		key: 26,
		description: 'velar gha',
		iast: 'gha',
		english: ['gha'],
		velthuis: 'gha',
		itrans: 'gha',
		harvard_kyoto: 'gha',
		devanagari: 'घ',
		bangla: 'ঘ',
		oriya: 'ଘ',
		brahmi: '𑀖'
	},
	ṅa: {
		key: 27,
		description: 'velar ṅa',
		iast: 'ṅa',
		english: ['nga'],
		velthuis: '.na',
		itrans: '.Na',
		harvard_kyoto: '.Na',
		devanagari: 'ङ',
		bangla: 'ঙ',
		oriya: 'ଙ',
		brahmi: '𑀗'
	},
	ca: {
		key: 28,
		description: 'palatal ca',
		iast: 'ca',
		english: ['ca'],
		velthuis: 'ca',
		itrans: 'cha',
		harvard_kyoto: 'ca',
		devanagari: 'च',
		bangla: 'চ',
		oriya: 'ଚ',
		brahmi: '𑀘'
	},
	cha: {
		key: 29,
		description: 'palatal cha',
		iast: 'cha',
		english: ['cha'],
		velthuis: 'cha',
		itrans: 'Cha',
		harvard_kyoto: 'cha',
		devanagari: 'छ',
		bangla: 'ছ',
		oriya: 'ଛ',
		brahmi: '𑀙'
	},
	ja: {
		key: 30,
		description: 'palatal ja',
		iast: 'ja',
		english: ['ja'],
		velthuis: 'ja',
		itrans: 'ja',
		harvard_kyoto: 'ja',
		devanagari: 'ज',
		bangla: 'জ',
		oriya: 'ଜ',
		brahmi: '𑀚'
	},
	jha: {
		key: 31,
		description: 'palatal jha',
		iast: 'jha',
		english: ['jha'],
		velthuis: 'jha',
		itrans: 'Jha',
		harvard_kyoto: 'jha',
		devanagari: 'झ',
		bangla: 'ঝ',
		oriya: 'ଝ',
		brahmi: '𑀛'
	},
	ña: {
		key: 32,
		description: 'palatal ña',
		iast: 'ña',
		english: ['nya'],
		velthuis: '.nya',
		itrans: '.Na',
		harvard_kyoto: '.Na',
		devanagari: 'ञ',
		bangla: 'ঞ',
		oriya: 'ଞ',
		brahmi: '𑀜'
	},
	ṭa: {
		key: 33,
		description: 'retroflex ṭa',
		iast: 'ṭa',
		english: ['ta'],
		velthuis: '.Ta',
		itrans: '.Ta',
		harvard_kyoto: '.Ta',
		devanagari: 'ट',
		bangla: 'ট',
		oriya: 'ଟ',
		brahmi: '𑀝'
	},
	ṭha: {
		key: 34,
		description: 'retroflex ṭha',
		iast: 'ṭha',
		english: ['tha'],
		velthuis: '.Tha',
		itrans: '.Tha',
		harvard_kyoto: '.Tha',
		devanagari: 'ठ',
		bangla: 'ঠ',
		oriya: 'ଠ',
		brahmi: '𑀞'
	},
	ḍa: {
		key: 35,
		description: 'retroflex ḍa',
		iast: 'ḍa',
		english: ['da'],
		velthuis: '.Da',
		itrans: '.Da',
		harvard_kyoto: '.Da',
		devanagari: 'ड',
		bangla: 'ড',
		oriya: 'ଡ',
		brahmi: '𑀟'
	},
	ḍha: {
		key: 36,
		description: 'retroflex ḍha',
		iast: 'ḍha',
		english: ['dha'],
		velthuis: '.Dha',
		itrans: '.Dha',
		harvard_kyoto: '.Dha',
		devanagari: 'ढ',
		bangla: 'ঢ',
		oriya: 'ଢ',
		brahmi: '𑀠'
	},
	ṇa: {
		key: 37,
		description: 'retroflex ṇa',
		iast: 'ṇa',
		english: ['na'],
		velthuis: '.na',
		itrans: '.Na',
		harvard_kyoto: '.Na',
		devanagari: 'ण',
		bangla: 'ণ',
		oriya: 'ଣ',
		brahmi: '𑀡'
	},
	ta: {
		key: 38,
		description: 'dental ta',
		iast: 'ta',
		english: ['ta'],
		velthuis: 'ta',
		itrans: 'Ta',
		harvard_kyoto: 'ta',
		devanagari: 'त',
		bangla: 'ত',
		oriya: 'ତ',
		brahmi: '𑀢'
	},
	tha: {
		key: 39,
		description: 'dental tha',
		iast: 'tha',
		english: ['tha'],
		velthuis: 'tha',
		itrans: 'Tha',
		harvard_kyoto: 'tha',
		devanagari: 'थ',
		bangla: 'থ',
		oriya: 'ଥ',
		brahmi: '𑀣'
	},
	da: {
		key: 40,
		description: 'dental da',
		iast: 'da',
		english: ['da'],
		velthuis: 'da',
		itrans: 'da',
		harvard_kyoto: 'da',
		devanagari: 'द',
		bangla: 'দ',
		oriya: 'ଦ',
		brahmi: '𑀤'
	},
	dha: {
		key: 41,
		description: 'dental dha',
		iast: 'dha',
		english: ['dha'],
		velthuis: 'dha',
		itrans: 'Dha',
		harvard_kyoto: 'dha',
		devanagari: 'ध',
		bangla: 'ধ',
		oriya: 'ଧ',
		brahmi: '𑀥'
	},
	na: {
		key: 42,
		description: 'dental na',
		iast: 'na',
		english: ['na'],
		velthuis: 'na',
		itrans: 'na',
		harvard_kyoto: 'na',
		devanagari: 'न',
		bangla: 'ন',
		oriya: 'ନ',
		brahmi: '𑀦'
	},
	pa: {
		key: 43,
		description: 'labial pa',
		iast: 'pa',
		english: ['pa'],
		velthuis: 'pa',
		itrans: 'pa',
		harvard_kyoto: 'pa',
		devanagari: 'प',
		bangla: 'প',
		oriya: 'ପ',
		brahmi: '𑀧'
	},
	pha: {
		key: 44,
		description: 'labial pha',
		iast: 'pha',
		english: ['pha'],
		velthuis: 'pha',
		itrans: 'Pha',
		harvard_kyoto: 'pha',
		devanagari: 'फ',
		bangla: 'ফ',
		oriya: 'ଫ',
		brahmi: '𑀨'
	},
	ba: {
		key: 45,
		description: 'labial ba',
		iast: 'ba',
		english: ['ba'],
		velthuis: 'ba',
		itrans: 'ba',
		harvard_kyoto: 'ba',
		devanagari: 'ब',
		bangla: 'ব',
		oriya: 'ବ',
		brahmi: '𑀩'
	},
	bha: {
		key: 46,
		description: 'labial bha',
		iast: 'bha',
		english: ['bha'],
		velthuis: 'bha',
		itrans: 'Bha',
		harvard_kyoto: 'bha',
		devanagari: 'भ',
		bangla: 'ভ',
		oriya: 'ଭ',
		brahmi: '𑀪'
	},
	ma: {
		key: 47,
		description: 'labial ma',
		iast: 'ma',
		english: ['ma'],
		velthuis: 'ma',
		itrans: 'ma',
		harvard_kyoto: 'ma',
		devanagari: 'म',
		bangla: 'ম',
		oriya: 'ମ',
		brahmi: '𑀫'
	},
	ya: {
		key: 48,
		description: 'semi-vowel ya',
		iast: 'ya',
		english: ['ya'],
		velthuis: 'ya',
		itrans: 'ya',
		harvard_kyoto: 'ya',
		devanagari: 'य',
		bangla: 'য',
		oriya: 'ଯ',
		brahmi: '𑀬'
	},
	ra: {
		key: 49,
		description: 'semi-vowel ra',
		iast: 'ra',
		english: ['ra'],
		velthuis: 'ra',
		itrans: 'ra',
		harvard_kyoto: 'ra',
		devanagari: 'र',
		bangla: 'র',
		oriya: 'ର',
		brahmi: '𑀭'
	},
	la: {
		key: 50,
		description: 'semi-vowel la',
		iast: 'la',
		english: ['la'],
		velthuis: 'la',
		itrans: 'la',
		harvard_kyoto: 'la',
		devanagari: 'ल',
		bangla: 'ল',
		oriya: 'ଲ',
		brahmi: '𑀮'
	},
	va: {
		key: 51,
		description: 'semi-vowel va',
		iast: 'va',
		english: ['va'],
		velthuis: 'va',
		itrans: 'va',
		harvard_kyoto: 'va',
		devanagari: 'व',
		bangla: 'ব',
		oriya: 'ବ',
		brahmi: '𑀩'
	},
	śa: {
		key: 52,
		description: 'palatal śa',
		iast: 'śa',
		english: ['sha'],
		velthuis: '.sa',
		itrans: '.Sa',
		harvard_kyoto: '.Sa',
		devanagari: 'श',
		bangla: 'শ',
		oriya: 'ଶ',
		brahmi: '𑀯'
	},
	ṣa: {
		key: 53,
		description: 'palatal ṣa',
		iast: 'ṣa',
		english: ['ṣa'],
		velthuis: '.za',
		itrans: '.za',
		harvard_kyoto: '.za',
		devanagari: 'ष',
		bangla: 'ষ',
		oriya: 'ଷ',
		brahmi: '𑀰'
	},
	sa: {
		key: 54,
		description: 'dental sa',
		iast: 'sa',
		english: ['sa'],
		velthuis: 'sa',
		itrans: 'sa',
		harvard_kyoto: 'sa',
		devanagari: 'स',
		bangla: 'স',
		oriya: 'ସ',
		brahmi: '𑀱'
	},

	ha: {
		key: 55,
		description: 'aspirate ha',
		iast: 'ha',
		english: ['ha'],
		velthuis: 'ha',
		itrans: 'ha',
		harvard_kyoto: 'ha',
		devanagari: 'ह',
		bangla: 'হ',
		oriya: 'ହ',
		brahmi: '𑀲'
	},
	l̤a: {
		key: 56,
		description: 'l̤a',
		iast: 'l̤a',
		english: ['la'],
		velthuis: 'l.a',
		itrans: '.la',
		harvard_kyoto: '.la',
		devanagari: 'ल़',
		bangla: 'ল়',
		oriya: 'ଲ଼',
		brahmi: '𑀷'
	},
	ḻa: {
		key: 57,
		description: 'ḻa',
		iast: 'ḻa',
		english: ['ḻa'],
		velthuis: '.la',
		itrans: '.z',
		harvard_kyoto: '.la',
		devanagari: 'ऴ',
		bangla: 'ऴ',
		oriya: 'ऴ',
		brahmi: '𑀻'
	},
	ṟa: {
		key: 58,
		description: 'ṟa',
		iast: 'ṟa',
		english: ['ṟa'],
		velthuis: '.ra',
		itrans: '.ra',
		harvard_kyoto: '.ra',
		devanagari: 'ऱ',
		bangla: '঱',
		oriya: 'ऱ',
		brahmi: '𑀼'
	},
	ṉa: {
		key: 59,
		description: 'ṉa',
		iast: 'ṉa',
		english: ['ṉa'],
		velthuis: '.na',
		itrans: '.Na',
		harvard_kyoto: '.Na',
		devanagari: 'ऩ',
		bangla: '঩',
		oriya: 'ऩ',
		brahmi: '𑀽'
	},
	qa: {
		key: 60,
		description: 'qa',
		iast: 'qa',
		english: ['qa'],
		velthuis: '.qa',
		itrans: '.qa',
		harvard_kyoto: '.qa',
		devanagari: 'ॻ',
		bangla: 'ॻ',
		oriya: 'ॻ',
		brahmi: '𑀣'
	},
	k͟ha: {
		key: 61,
		description: 'k͟ha',
		iast: 'k͟ha',
		english: ['kha'],
		velthuis: '.kha',
		itrans: '.kha',
		harvard_kyoto: '.kha',
		devanagari: 'ॺ',
		bangla: 'ॺ',
		oriya: 'ॺ',
		brahmi: '𑀤'
	},
	ġa: {
		key: 62,
		description: 'ġa',
		iast: 'ġa',
		english: ['ga'],
		velthuis: '.ga',
		itrans: '.ga',
		harvard_kyoto: '.ga',
		devanagari: 'ॹ',
		bangla: 'ॹ',
		oriya: 'ॹ',
		brahmi: '𑀥'
	},
	za: {
		key: 63,
		description: 'za',
		iast: 'za',
		english: ['za'],
		velthuis: '.za',
		itrans: '.za',
		harvard_kyoto: '.za',
		devanagari: 'ॼ',
		bangla: 'ॼ',
		oriya: 'ॼ',
		brahmi: '𑀦'
	},
	r̤a: {
		key: 64,
		description: 'r̤a',
		iast: 'r̤a',
		english: ['ra'],
		velthuis: '.ra',
		itrans: '.ra',
		harvard_kyoto: '.ra',
		devanagari: 'ॾ',
		bangla: 'ॾ',
		oriya: 'ॾ',
		brahmi: '𑀧'
	},
	r̤ha: {
		key: 65,
		description: 'r̤ha',
		iast: 'r̤ha',
		english: ['rha'],
		velthuis: '.rha',
		itrans: '.rha',
		harvard_kyoto: '.rha',
		devanagari: 'ॿ',
		bangla: 'ॿ',
		oriya: 'ॿ',
		brahmi: '𑀨'
	},
	fa: {
		key: 66,
		description: 'fa',
		iast: 'fa',
		english: ['fa'],
		velthuis: '.fa',
		itrans: '.fa',
		harvard_kyoto: '.fa',
		devanagari: '঺',
		bangla: '঺',
		oriya: '঺',
		brahmi: '𑀩'
	},
	ẏa: {
		key: 67,
		description: 'ẏa',
		iast: 'ẏa',
		english: ['ya'],
		velthuis: '.ya',
		itrans: '.ya',
		harvard_kyoto: '.ya',
		devanagari: 'য়',
		bangla: 'য়',
		oriya: 'ଯ଼',
		brahmi: '𑀪'
	},
	n̆ga: {
		key: 68,
		description: 'n̆ga',
		iast: 'n̆ga',
		english: ['nga'],
		velthuis: '.Nga',
		itrans: '.Nga',
		harvard_kyoto: '.Nga',
		devanagari: 'ং়',
		bangla: 'ং়',
		oriya: 'ং়',
		brahmi: '𑀡'
	},
	n̆ja: {
		key: 69,
		description: 'n̆ja',
		iast: 'n̆ja',
		english: ['nja'],
		velthuis: '.Nja',
		itrans: '.Nja',
		harvard_kyoto: '.Nja',
		devanagari: 'ঞ়',
		bangla: 'ঞ়',
		oriya: 'ଞ଼',
		brahmi: '𑀢'
	},
	n̆ḍa: {
		key: 70,
		description: 'n̆ḍa',
		iast: 'n̆ḍa',
		english: ['Nda'],
		velthuis: '.NDA',
		itrans: '.NDA',
		harvard_kyoto: '.NDA',
		devanagari: 'ड़',
		bangla: 'ড়',
		oriya: 'ଡ଼',
		brahmi: '𑀧'
	},
	n̆da: {
		key: 71,
		description: 'n̆da',
		iast: 'n̆da',
		english: ['Nda'],
		velthuis: '.Nda',
		itrans: '.Nda',
		harvard_kyoto: '.Nda',
		devanagari: 'ण़',
		bangla: 'ণ়',
		oriya: 'ଣ଼',
		brahmi: '𑀬'
	},
	m̆ba: {
		key: 72,
		description: 'm with underbar and b and a',
		iast: 'm̆ba',
		english: ['mba'],
		velthuis: 'mba',
		itrans: 'mba',
		harvard_kyoto: 'mba',
		devanagari: 'म्ब',
		bangla: 'ম্ব',
		oriya: 'ମ୍ବ',
		brahmi: '𑀢𑀺𑀃'
	},
	k: {
		key: 73,
		description: 'short k',
		iast: 'k',
		english: ['k'],
		velthuis: 'k',
		itrans: 'k',
		harvard_kyoto: 'k',
		devanagari: 'क',
		bangla: 'ক',
		oriya: 'କ',
		brahmi: '𑀓'
	},
	kā: {
		key: 74,
		description: 'long k',
		iast: 'kā',
		english: ['kaa'],
		velthuis: 'kaa',
		itrans: 'kA',
		harvard_kyoto: 'kA',
		devanagari: 'का',
		bangla: 'কা',
		oriya: 'କା',
		brahmi: '𑀓𑀾'
	},
	ki: {
		key: 75,
		description: 'short ki',
		iast: 'ki',
		english: ['ki'],
		velthuis: 'ki',
		itrans: 'ki',
		harvard_kyoto: 'ki',
		devanagari: 'कि',
		bangla: 'কি',
		oriya: 'କି',
		brahmi: '𑀓𑀨'
	},
	kī: {
		key: 76,
		description: 'long ki',
		iast: 'kī',
		english: ['kii'],
		velthuis: 'kii',
		itrans: 'kI',
		harvard_kyoto: 'kI',
		devanagari: 'की',
		bangla: 'কী',
		oriya: 'କୀ',
		brahmi: '𑀓𑀨𑀩'
	},
	ku: {
		key: 77,
		description: 'short ku',
		iast: 'ku',
		english: ['ku'],
		velthuis: 'ku',
		itrans: 'ku',
		harvard_kyoto: 'ku',
		devanagari: 'कु',
		bangla: 'কু',
		oriya: 'କୁ',
		brahmi: '𑀓𑀪'
	},
	kū: {
		key: 78,
		description: 'long ku',
		iast: 'kū',
		english: ['kuu'],
		velthuis: 'kuu',
		itrans: 'kU',
		harvard_kyoto: 'kU',
		devanagari: 'कू',
		bangla: 'কূ',
		oriya: 'କୂ',
		brahmi: '𑀓𑀪𑀫'
	},
	kṛ: {
		key: 79,
		description: 'short kr',
		iast: 'kṛ',
		english: ['kr'],
		velthuis: 'kr',
		itrans: 'kR',
		harvard_kyoto: 'kR',
		devanagari: 'कृ',
		bangla: 'কৃ',
		oriya: 'କୃ',
		brahmi: '𑀓𑀳'
	},
	kṝ: {
		key: 80,
		description: 'long kr',
		iast: 'kṝ',
		english: ['krr'],
		velthuis: 'krr',
		itrans: 'kRRi',
		harvard_kyoto: 'kRRi',
		devanagari: 'कॄ',
		bangla: 'কৄ',
		oriya: 'କୄ',
		brahmi: '𑀓𑀳𑁆'
	},
	kḷ: {
		key: 81,
		description: 'short kl',
		iast: 'kḷ',
		english: ['kl'],
		velthuis: 'kl',
		itrans: 'kL',
		harvard_kyoto: 'kL',
		devanagari: 'कॢ',
		bangla: 'ক্ল',
		oriya: 'କୢ',
		brahmi: '𑀓𑀴'
	},
	kḹ: {
		key: 82,
		description: 'long kl',
		iast: 'kḹ',
		english: ['kll'],
		velthuis: 'kll',
		itrans: 'kLLi',
		harvard_kyoto: 'kLLi',
		devanagari: 'कॣ',
		bangla: 'কৢ',
		oriya: 'କୣ',
		brahmi: '𑀓𑀴𑁆'
	},
	ke: {
		key: 83,
		description: 'short ke',
		iast: 'ke',
		english: ['ke'],
		velthuis: 'ke',
		itrans: 'ke',
		harvard_kyoto: 'ke',
		devanagari: 'के',
		bangla: 'কে',
		oriya: 'କେ',
		brahmi: '𑀓𑀲'
	},
	kai: {
		key: 84,
		description: 'kai',
		iast: 'kai',
		english: ['kai'],
		velthuis: 'kai',
		itrans: 'kai',
		harvard_kyoto: 'kai',
		devanagari: 'कै',
		bangla: 'কৈ',
		oriya: 'କୈ',
		brahmi: '𑀓𑀤'
	},
	ko: {
		key: 85,
		description: 'short ko',
		iast: 'ko',
		english: ['ko'],
		velthuis: 'ko',
		itrans: 'ko',
		harvard_kyoto: 'ko',
		devanagari: 'को',
		bangla: 'কো',
		oriya: 'କୋ',
		brahmi: '𑀓𑀧'
	},
	kau: {
		key: 86,
		description: 'kau',
		iast: 'kau',
		english: ['kau'],
		velthuis: 'kau',
		itrans: 'kau',
		harvard_kyoto: 'kau',
		devanagari: 'कौ',
		bangla: 'কৌ',
		oriya: 'କୌ',
		brahmi: '𑀓𑀥'
	},
	kĕ: {
		key: 87,
		description: 'k with e',
		iast: 'kĕ',
		english: ['ke'],
		velthuis: 'ke',
		itrans: 'ke',
		harvard_kyoto: 'ke',
		devanagari: 'कॆ',
		bangla: 'কে',
		oriya: 'କେ',
		brahmi: '𑀓𑀲'
	},
	kŏ: {
		key: 88,
		description: 'k with o',
		iast: 'kŏ',
		english: ['ko'],
		velthuis: 'ko',
		itrans: 'ko',
		harvard_kyoto: 'ko',
		devanagari: 'कॊ',
		bangla: 'কো',
		oriya: 'କୋ',
		brahmi: '𑀓𑀧'
	},
	kæ: {
		key: 89,
		description: 'short k with a',
		iast: 'kæ',
		english: ['ka'],
		velthuis: 'ka',
		itrans: 'ka',
		harvard_kyoto: 'ka',
		devanagari: 'कæ',
		bangla: 'কæ',
		oriya: 'କæ',
		brahmi: '𑀓𑀠'
	},
	kǣ: {
		key: 90,
		description: 'k with æ',
		iast: 'kǣ',
		english: ['kae'],
		velthuis: 'kae',
		itrans: 'kAE',
		harvard_kyoto: 'kAE',
		devanagari: 'कǣ',
		bangla: 'কǣ',
		oriya: 'କǣ',
		brahmi: '𑀓𑀟'
	},
	kô: {
		key: 91,
		description: 'k with o',
		iast: 'kô',
		english: ['ko'],
		velthuis: 'ko',
		itrans: 'ko',
		harvard_kyoto: 'ko',
		devanagari: 'कô',
		bangla: 'কô',
		oriya: 'କô',
		brahmi: '𑀓𑀧'
	},
	kaṃ: {
		key: 92,
		description: 'short ka with m',
		iast: 'kaṃ',
		english: ['kam'],
		velthuis: 'kam',
		itrans: 'kaM',
		harvard_kyoto: 'kaM',
		devanagari: 'कँ',
		bangla: 'কং',
		oriya: 'କଂ',
		brahmi: '𑀓𑀂'
	},
	kaḥ: {
		key: 93,
		description: 'short ka with ha',
		iast: 'kaḥ',
		english: ['kah'],
		velthuis: 'kah',
		itrans: 'kaH',
		harvard_kyoto: 'kaH',
		devanagari: 'कः',
		bangla: 'কঃ',
		oriya: 'କଃ',
		brahmi: '𑀓𑀄'
	},
	kam̐: {
		key: 94,
		description: 'short ka with aha',
		iast: 'kam̐',
		english: ['kam'],
		velthuis: 'kam',
		itrans: 'ka~M',
		harvard_kyoto: 'ka~M',
		devanagari: 'कँ',
		bangla: 'কঁ',
		oriya: 'କଁ',
		brahmi: '𑀓𑀂'
	},
	"'": {
		key: 95,
		description: 'apostrophe',
		iast: "'",
		english: ["'"],
		velthuis: "'",
		itrans: "'",
		harvard_kyoto: "'",
		devanagari: 'ऽ',
		bangla: 'ঽ',
		oriya: 'ଽ',
		brahmi: ''
	},
	oṃ: {
		key: 96,
		description: 'om',
		iast: 'oṃ',
		english: ['om'],
		velthuis: 'oM',
		itrans: 'oM',
		harvard_kyoto: 'oM',
		devanagari: 'ॐ',
		bangla: 'ওঁ',
		oriya: 'ଓଁ',
		brahmi: '𑀑𑀁'
	},
	'.': {
		key: 97,
		description: 'full stop',
		iast: '.',
		english: ['.'],
		velthuis: '.',
		itrans: '.',
		harvard_kyoto: '.',
		devanagari: '𑁇',
		bangla: '𑁇',
		oriya: '𑁇',
		brahmi: '𑁇'
	},
	'..': {
		key: 98,
		description: 'double full stop',
		iast: '..',
		english: ['..'],
		velthuis: '..',
		itrans: '..',
		harvard_kyoto: '..',
		devanagari: '॥',
		bangla: '॥',
		oriya: '॥',
		brahmi: '॥'
	},
	ṣ: {
		key: 99,
		description: 'palatal ṣ',
		iast: 'ṣ',
		english: ['s'],
		velthuis: '.za',
		itrans: '.za',
		harvard_kyoto: '.za',
		devanagari: 'ष',
		bangla: 'ষ',
		oriya: 'ଷ',
		brahmi: '𑀰'
	}
};

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
