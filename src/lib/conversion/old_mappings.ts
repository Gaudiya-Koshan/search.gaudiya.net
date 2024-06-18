const conversion_mappings2 = {
	ā: {
		key: 1,
		description: 'long a',
		iast: 'ā',
		english: ['a', 'aa'],
		velthuis: 'aa',
		itrans: 'A',
		harvard_kyoto: 'A',
		devanagari: 'आ',
		bangla: 'আ',
		oriya: 'ଆ'
	},
	ī: {
		key: 2,
		description: 'long i',
		iast: 'ī',
		english: ['i', 'ii'],
		velthuis: 'ii',
		itrans: 'I',
		harvard_kyoto: 'I',
		devanagari: 'ई',
		bangla: 'ঈ',
		oriya: 'ଈ'
	},
	ū: {
		key: 3,
		description: 'long u',
		iast: 'ū',
		english: ['u', 'uu'],
		velthuis: 'uu',
		itrans: 'U',
		harvard_kyoto: 'U',
		devanagari: 'ऊ',
		bangla: 'ঊ',
		oriya: 'ଊ'
	},
	ṛ: {
		key: 4,
		description: 'vocalic r',
		iast: 'ṛ',
		english: ['r', 'ri'],
		velthuis: '.r',
		itrans: 'RRi',
		harvard_kyoto: 'R',
		devanagari: 'ऋ',
		bangla: 'ঋ',
		oriya: 'ଋ'
	},
	ṝ: {
		key: 5,
		description: 'long vocalic r',
		iast: 'ṝ',
		english: ['r', 'ree'],
		velthuis: '.rr',
		itrans: 'RRI',
		harvard_kyoto: 'RR',
		devanagari: 'ॠ',
		bangla: 'ৠ',
		oriya: 'ୠ'
	},
	ḷ: {
		key: 6,
		description: 'vocalic l',
		iast: 'ḷ',
		english: ['l', 'luh', 'lu'],
		velthuis: '.l',
		itrans: 'LLi',
		harvard_kyoto: 'L',
		devanagari: 'ऌ',
		bangla: 'ঌ',
		oriya: 'ଌ'
	},
	ḹ: {
		key: 7,
		description: 'long vocalic l',
		iast: 'ḹ',
		english: ['l', 'loo', 'lu'],
		velthuis: '.ll',
		itrans: 'LLI',
		harvard_kyoto: 'LL',
		devanagari: 'ॡ',
		bangla: 'ৡ',
		oriya: 'ୡ'
	},
	ṅ: {
		key: 8,
		description: 'velar nasal',
		iast: 'ṅ',
		english: ['n', 'ng'],
		velthuis: 'n.g',
		itrans: '~N',
		harvard_kyoto: 'G',
		devanagari: 'ङ',
		bangla: 'ঙ',
		oriya: 'ଙ'
	},
	ñ: {
		key: 9,
		description: 'palatal nasal',
		iast: 'ñ',
		english: ['n', 'ny'],
		velthuis: 'n~n',
		itrans: 'JN',
		harvard_kyoto: 'J',
		devanagari: 'ञ',
		bangla: 'ঞ',
		oriya: 'ଞ'
	},
	ṭ: {
		key: 10,
		description: 'retroflex t',
		iast: 'ṭ',
		english: ['t', 'tt'],
		velthuis: '.t',
		itrans: 'T',
		harvard_kyoto: 'T',
		devanagari: 'ट',
		bangla: 'ট',
		oriya: 'ଟ'
	},
	ḍ: {
		key: 11,
		description: 'retroflex d',
		iast: 'ḍ',
		english: ['d', 'dd'],
		velthuis: '.d',
		itrans: 'D',
		harvard_kyoto: 'D',
		devanagari: 'ड',
		bangla: 'ড',
		oriya: 'ଡ'
	},
	ṇ: {
		key: 12,
		description: 'retroflex n',
		iast: 'ṇ',
		english: ['n', 'nn'],
		velthuis: '.n',
		itrans: 'N',
		harvard_kyoto: 'N',
		devanagari: 'ण',
		bangla: 'ণ',
		oriya: 'ଣ'
	},
	ś: {
		key: 13,
		description: 'palatal s',
		iast: 'ś',
		english: ['sh'],
		velthuis: "'s",
		itrans: 'sh',
		harvard_kyoto: 'z',
		devanagari: 'श',
		bangla: 'শ',
		oriya: 'ଶ'
	},
	ṣ: {
		key: 14,
		description: 'retroflex s',
		iast: 'ṣ',
		english: ['sh'],
		velthuis: '.s',
		itrans: 'Sh',
		harvard_kyoto: 'S',
		devanagari: 'ष',
		bangla: 'ষ',
		oriya: 'ଷ'
	},
	ṃ: {
		key: 15,
		description: 'anusvāra',
		iast: 'ṃ',
		english: ['m'],
		velthuis: 'm.',
		itrans: '.n',
		harvard_kyoto: 'M',
		devanagari: 'ं',
		bangla: 'ং',
		oriya: 'ଂ'
	},
	ḥ: {
		key: 16,
		description: 'visarga',
		iast: 'ḥ',
		english: ['h'],
		velthuis: 'h.',
		itrans: '.h',
		harvard_kyoto: 'H',
		devanagari: 'ः',
		bangla: 'ঃ',
		oriya: 'ଃ'
	},
	a: {
		key: 17,
		description: 'short a',
		iast: 'a',
		english: ['a'],
		velthuis: 'a',
		itrans: 'a',
		harvard_kyoto: 'a',
		devanagari: 'अ',
		bangla: 'অ',
		oriya: 'ଅ'
	},
	i: {
		key: 18,
		description: 'short i',
		iast: 'i',
		english: ['i'],
		velthuis: 'i',
		itrans: 'i',
		harvard_kyoto: 'i',
		devanagari: 'इ',
		bangla: 'ই',
		oriya: 'ଇ'
	},
	u: {
		key: 19,
		description: 'short u',
		iast: 'u',
		english: ['u'],
		velthuis: 'u',
		itrans: 'u',
		harvard_kyoto: 'u',
		devanagari: 'उ',
		bangla: 'উ',
		oriya: 'ଉ'
	},
	e: {
		key: 20,
		description: 'short e',
		iast: 'e',
		english: ['e'],
		velthuis: 'e',
		itrans: 'e',
		harvard_kyoto: 'e',
		devanagari: 'ए',
		bangla: 'এ',
		oriya: 'ଏ'
	},
	o: {
		key: 21,
		description: 'short o',
		iast: 'o',
		english: ['o'],
		velthuis: 'o',
		itrans: 'o',
		harvard_kyoto: 'o',
		devanagari: 'ओ',
		bangla: 'ও',
		oriya: 'ଓ'
	},
	k: {
		key: 22,
		description: 'velar k',
		iast: 'k',
		english: ['k'],
		velthuis: 'k',
		itrans: 'k',
		harvard_kyoto: 'k',
		devanagari: 'क',
		bangla: 'ক',
		oriya: 'କ'
	},
	kh: {
		key: 23,
		description: 'velar kh',
		iast: 'kh',
		english: ['kh'],
		velthuis: 'kh',
		itrans: 'kh',
		harvard_kyoto: 'kh',
		devanagari: 'ख',
		bangla: 'খ',
		oriya: 'ଖ'
	},
	g: {
		key: 24,
		description: 'velar g',
		iast: 'g',
		english: ['g'],
		velthuis: 'g',
		itrans: 'g',
		harvard_kyoto: 'g',
		devanagari: 'ग',
		bangla: 'গ',
		oriya: 'ଗ'
	},
	gh: {
		key: 25,
		description: 'velar gh',
		iast: 'gh',
		english: ['gh'],
		velthuis: 'gh',
		itrans: 'gh',
		harvard_kyoto: 'gh',
		devanagari: 'घ',
		bangla: 'ঘ',
		oriya: 'ଘ'
	},
	c: {
		key: 26,
		description: 'palatal c',
		iast: 'c',
		english: ['ch'],
		velthuis: 'c',
		itrans: 'c',
		harvard_kyoto: 'c',
		devanagari: 'च',
		bangla: 'চ',
		oriya: 'ଚ'
	},
	ch: {
		key: 27,
		description: 'palatal ch',
		iast: 'ch',
		english: ['chh'],
		velthuis: 'ch',
		itrans: 'ch',
		harvard_kyoto: 'ch',
		devanagari: 'छ',
		bangla: 'ছ',
		oriya: 'ଛ'
	},
	j: {
		key: 28,
		description: 'palatal j',
		iast: 'j',
		english: ['j'],
		velthuis: 'j',
		itrans: 'j',
		harvard_kyoto: 'j',
		devanagari: 'ज',
		bangla: 'জ',
		oriya: 'ଜ'
	},
	jh: {
		key: 29,
		description: 'palatal jh',
		iast: 'jh',
		english: ['jh'],
		velthuis: 'jh',
		itrans: 'jh',
		harvard_kyoto: 'jh',
		devanagari: 'झ',
		bangla: 'ঝ',
		oriya: 'ଝ'
	},
	t: {
		key: 30,
		description: 'dental t',
		iast: 't',
		english: ['t'],
		velthuis: 't',
		itrans: 't',
		harvard_kyoto: 't',
		devanagari: 'त',
		bangla: 'ত',
		oriya: 'ତ'
	},
	th: {
		key: 31,
		description: 'dental th',
		iast: 'th',
		english: ['th'],
		velthuis: 'th',
		itrans: 'th',
		harvard_kyoto: 'th',
		devanagari: 'थ',
		bangla: 'থ',
		oriya: 'ଥ'
	},
	d: {
		key: 32,
		description: 'dental d',
		iast: 'd',
		english: ['d'],
		velthuis: 'd',
		itrans: 'd',
		harvard_kyoto: 'd',
		devanagari: 'द',
		bangla: 'দ',
		oriya: 'ଦ'
	},
	dh: {
		key: 33,
		description: 'dental dh',
		iast: 'dh',
		english: ['dh'],
		velthuis: 'dh',
		itrans: 'dh',
		harvard_kyoto: 'dh',
		devanagari: 'ध',
		bangla: 'ধ',
		oriya: 'ଧ'
	},
	n: {
		key: 34,
		description: 'dental n',
		iast: 'n',
		english: ['n'],
		velthuis: 'n',
		itrans: 'n',
		harvard_kyoto: 'n',
		devanagari: 'न',
		bangla: 'ন',
		oriya: 'ନ'
	},
	p: {
		key: 35,
		description: 'labial p',
		iast: 'p',
		english: ['p'],
		velthuis: 'p',
		itrans: 'p',
		harvard_kyoto: 'p',
		devanagari: 'प',
		bangla: 'প',
		oriya: 'ପ'
	},
	ph: {
		key: 36,
		description: 'labial ph',
		iast: 'ph',
		english: ['ph'],
		velthuis: 'ph',
		itrans: 'ph',
		harvard_kyoto: 'ph',
		devanagari: 'फ',
		bangla: 'ফ',
		oriya: 'ଫ'
	},
	b: {
		key: 37,
		description: 'labial b',
		iast: 'b',
		english: ['b'],
		velthuis: 'b',
		itrans: 'b',
		harvard_kyoto: 'b',
		devanagari: 'ब',
		bangla: 'ব',
		oriya: 'ବ'
	},
	bh: {
		key: 38,
		description: 'labial bh',
		iast: 'bh',
		english: ['bh'],
		velthuis: 'bh',
		itrans: 'bh',
		harvard_kyoto: 'bh',
		devanagari: 'भ',
		bangla: 'ভ',
		oriya: 'ଭ'
	},
	m: {
		key: 39,
		description: 'labial m',
		iast: 'm',
		english: ['m'],
		velthuis: 'm',
		itrans: 'm',
		harvard_kyoto: 'm',
		devanagari: 'म',
		bangla: 'ম',
		oriya: 'ମ'
	},
	y: {
		key: 40,
		description: 'semi-vowel y',
		iast: 'y',
		english: ['y'],
		velthuis: 'y',
		itrans: 'y',
		harvard_kyoto: 'y',
		devanagari: 'य',
		bangla: 'য',
		oriya: 'ୟ'
	},
	r: {
		key: 41,
		description: 'semi-vowel r',
		iast: 'r',
		english: ['r'],
		velthuis: 'r',
		itrans: 'r',
		harvard_kyoto: 'r',
		devanagari: 'र',
		bangla: 'র',
		oriya: 'ର'
	},
	l: {
		key: 42,
		description: 'semi-vowel l',
		iast: 'l',
		english: ['l'],
		velthuis: 'l',
		itrans: 'l',
		harvard_kyoto: 'l',
		devanagari: 'ल',
		bangla: 'ল',
		oriya: 'ଲ'
	},
	v: {
		key: 43,
		description: 'semi-vowel v',
		iast: 'v',
		english: ['v'],
		velthuis: 'v',
		itrans: 'v',
		harvard_kyoto: 'v',
		devanagari: 'व',
		bangla: 'ব',
		oriya: 'ବ'
	},
	h: {
		key: 44,
		description: 'aspirate h',
		iast: 'h',
		english: ['h'],
		velthuis: 'h',
		itrans: 'h',
		harvard_kyoto: 'h',
		devanagari: 'ह',
		bangla: 'হ',
		oriya: 'ହ'
	},
	s: {
		key: 45,
		description: 'dental s',
		iast: 's',
		english: ['s'],
		velthuis: 's',
		itrans: 's',
		harvard_kyoto: 's',
		devanagari: 'स',
		bangla: 'স',
		oriya: 'ସ'
	}
};

/// -------------------------------------------------------------------------------------------

// This object attempts to list all of the English spellings (ignoring diacritics)
// that a typical user may type into the search field
const itransToEnglish = {
	1: { ā: ['a', 'aa'] }, // long a
	2: { ī: ['i', 'ii'] }, // long i
	3: { ū: ['u', 'uu'] }, // long u
	4: { ṛ: ['r', 'ri'] }, // vocalic r
	5: { ṝ: ['r', 'ree'] }, // long vocalic r
	6: { ḷ: ['l', 'luh', 'lu'] }, // vocalic l
	7: { ḹ: ['l', 'loo', 'lu'] }, // long vocalic l
	8: { ṅ: ['n', 'ng'] }, // velar nasal
	9: { ñ: ['n', 'ny'] }, // palatal nasal
	10: { ṭ: ['t', 'tt'] }, // retroflex t
	11: { ḍ: ['d', 'dd'] }, // retroflex d
	12: { ṇ: ['n', 'nn'] }, // retroflex n
	13: { ś: ['sh'] }, // palatal s
	14: { ṣ: ['sh'] }, // retroflex s
	15: { ṃ: ['m'] }, // anusvāra
	16: { ḥ: ['h'] }, // visarga
	17: { a: ['a'] }, // short a
	18: { i: ['i'] }, // short i
	19: { u: ['u'] }, // short u
	20: { e: ['e'] }, // e
	21: { o: ['o'] }, // o
	22: { k: ['k', 'kuh'] }, // velar k
	23: { kh: ['kh', 'kuh'] }, // velar kh
	24: { g: ['g', 'guh'] }, // velar g
	25: { gh: ['gh', 'guh'] }, // velar gh
	26: { c: ['c', 'ch', 'chuh'] }, // palatal c
	27: { ch: ['c', 'ch', 'chuh'] }, // palatal ch
	28: { j: ['j', 'juh'] }, // palatal j
	29: { jh: ['jh', 'juh'] }, // palatal jh
	30: { t: ['t', 'tuh'] }, // dental t
	31: { th: ['th', 'tuh'] }, // dental th
	32: { d: ['d', 'duh'] }, // dental d
	33: { dh: ['dh', 'duh'] }, // dental dh
	34: { n: ['n', 'nuh'] }, // dental n
	35: { p: ['p', 'puh'] }, // labial p
	36: { ph: ['ph', 'puh'] }, // labial ph
	37: { b: ['b', 'buh'] }, // labial b
	38: { bh: ['bh', 'buh'] }, // labial bh
	39: { m: ['m', 'muh'] }, // labial m
	40: { y: ['y'] }, // semi-vowel y
	41: { r: ['r', 'ruh'] }, // semi-vowel r
	42: { l: ['l', 'luh'] }, // semi-vowel l
	43: { v: ['v', 'vuh'] }, // semi-vowel v
	44: { h: ['h'] }, // aspirate h
	45: { s: ['s'] } // dental s
};

// This IAST is the main reference for all of the other comparisons
const iast = {
	1: 'ā', // long a
	2: 'ī', // long i
	3: 'ū', // long u
	4: 'ṛ', // vocalic r
	5: 'ṝ', // long vocalic r
	6: 'ḷ', // vocalic l
	7: 'ḹ', // long vocalic l
	8: 'ṅ', // velar nasal
	9: 'ñ', // palatal nasal
	10: 'ṭ', // retroflex t
	11: 'ḍ', // retroflex d
	12: 'ṇ', // retroflex n
	13: 'ś', // palatal s
	14: 'ṣ', // retroflex s
	15: 'ṃ', // anusvāra
	16: 'ḥ', // visarga
	17: 'a', // short a
	18: 'i', // short i
	19: 'u', // short u
	20: 'e', // e
	21: 'o', // o
	22: 'k', // velar k
	23: 'kh', // velar kh
	24: 'g', // velar g
	25: 'gh', // velar gh
	26: 'c', // palatal c
	27: 'ch', // palatal ch
	28: 'j', // palatal j
	29: 'jh', // palatal jh
	30: 't', // dental t
	31: 'th', // dental th
	32: 'd', // dental d
	33: 'dh', // dental dh
	34: 'n', // dental n
	35: 'p', // labial p
	36: 'ph', // labial ph
	37: 'b', // labial b
	38: 'bh', // labial bh
	39: 'm', // labial m
	40: 'y', // semi-vowel y
	41: 'r', // semi-vowel r
	42: 'l', // semi-vowel l
	43: 'v', // semi-vowel v
	44: 'h', // aspirate h
	45: 's' // dental s
};

const devanagari = {
	1: 'आ', // ā -> long a
	2: 'ई', // ī -> long i
	3: 'ऊ', // ū -> long u
	4: 'ऋ', // ṛ -> vocalic r
	5: 'ॠ', // ṝ -> long vocalic r
	6: 'ऌ', // ḷ -> vocalic l
	7: 'ॡ', // ḹ -> long vocalic l
	8: 'ङ', // ṅ -> velar nasal
	9: 'ञ', // ñ -> palatal nasal
	10: 'ट', // ṭ -> retroflex t
	11: 'ड', // ḍ -> retroflex d
	12: 'ण', // ṇ -> retroflex n
	13: 'श', // ś -> palatal s
	14: 'ष', // ṣ -> retroflex s
	15: 'ं', // ṃ -> anusvāra
	16: 'ः', // ḥ -> visarga
	17: 'अ', // a -> short a
	18: 'इ', // i -> short i
	19: 'उ', // u -> short u
	20: 'ए', // e
	21: 'ओ', // o
	22: 'क', // k -> velar k
	23: 'ख', // kh -> velar kh
	24: 'ग', // g -> velar g
	25: 'घ', // gh -> velar gh
	26: 'च', // c -> palatal c
	27: 'छ', // ch -> palatal ch
	28: 'ज', // j -> palatal j
	29: 'झ', // jh -> palatal jh
	30: 'त', // t -> dental t
	31: 'थ', // th -> dental th
	32: 'द', // d -> dental d
	33: 'ध', // dh -> dental dh
	34: 'न', // n -> dental n
	35: 'प', // p -> labial p
	36: 'फ', // ph -> labial ph
	37: 'ब', // b -> labial b
	38: 'भ', // bh -> labial bh
	39: 'म', // m -> labial m
	40: 'य', // y -> semi-vowel y
	41: 'र', // r -> semi-vowel r
	42: 'ल', // l -> semi-vowel l
	43: 'व', // v -> semi-vowel v
	44: 'ह', // h -> aspirate h
	45: 'स' // s -> dental s
};

const bangla = {
	1: 'আ', // ā -> long a
	2: 'ঈ', // ī -> long i
	3: 'ঊ', // ū -> long u
	4: 'ঋ', // ṛ -> vocalic r
	5: 'ৠ', // ṝ -> long vocalic r
	6: 'ঌ', // ḷ -> vocalic l
	7: 'ৡ', // ḹ -> long vocalic l
	8: 'ঙ', // ṅ -> velar nasal
	9: 'ঞ', // ñ -> palatal nasal
	10: 'ট', // ṭ -> retroflex t
	11: 'ড', // ḍ -> retroflex d
	12: 'ণ', // ṇ -> retroflex n
	13: 'শ', // ś -> palatal s
	14: 'ষ', // ṣ -> retroflex s
	15: 'ং', // ṃ -> anusvāra
	16: 'ঃ', // ḥ -> visarga
	17: 'অ', // a -> short a
	18: 'ই', // i -> short i
	19: 'উ', // u -> short u
	20: 'এ', // e
	21: 'ও', // o
	22: 'ক', // k -> velar k
	23: 'খ', // kh -> velar kh
	24: 'গ', // g -> velar g
	25: 'ঘ', // gh -> velar gh
	26: 'চ', // c -> palatal c
	27: 'ছ', // ch -> palatal ch
	28: 'জ', // j -> palatal j
	29: 'ঝ', // jh -> palatal jh
	30: 'ত', // t -> dental t
	31: 'থ', // th -> dental th
	32: 'দ', // d -> dental d
	33: 'ধ', // dh -> dental dh
	34: 'ন', // n -> dental n
	35: 'প', // p -> labial p
	36: 'ফ', // ph -> labial ph
	37: 'ব', // b -> labial b (Bengali has both व and ব representing 'v')
	38: 'ভ', // bh -> labial bh
	39: 'ম', // m -> labial m
	40: 'য', // y -> semi-vowel y
	41: 'র', // r -> semi-vowel r
	42: 'ল', // l -> semi-vowel l
	43: 'व', // v -> semi-vowel v (Bengali has both व and ব representing 'v')
	44: 'হ', // h -> aspirate h
	45: 'স' // s -> dental s
};

const oriya = {
	1: 'ଆ', // ā -> long a
	2: 'ଈ', // ī -> long i
	3: 'ଊ', // ū -> long u
	4: 'ଋ', // ṛ -> vocalic r
	5: 'ୠ', // ṝ -> long vocalic r
	6: 'ଌ', // ḷ -> vocalic l
	7: 'ୡ', // ḹ -> long vocalic l
	8: 'ଙ', // ṅ -> velar nasal
	9: 'ଞ', // ñ -> palatal nasal
	10: 'ଟ', // ṭ -> retroflex t
	11: 'ଡ', // ḍ -> retroflex d
	12: 'ଣ', // ṇ -> retroflex n
	13: 'ଶ', // ś -> palatal s
	14: 'ଷ', // ṣ -> retroflex s
	15: 'ଂ', // ṃ -> anusvāra
	16: 'ଃ', // ḥ -> visarga
	17: 'ଅ', // a -> short a
	18: 'ଇ', // i -> short i
	19: 'ଉ', // u -> short u
	20: 'ଏ', // e
	21: 'ଓ', // o
	22: 'କ', // k -> velar k
	23: 'ଖ', // kh -> velar kh
	24: 'ଗ', // g -> velar g
	25: 'ଘ', // gh -> velar gh
	26: 'ଚ', // c -> palatal c
	27: 'ଛ', // ch -> palatal ch
	28: 'ଜ', // j -> palatal j
	29: 'ଝ', // jh -> palatal jh
	30: 'ତ', // t -> dental t
	31: 'ଥ', // th -> dental th
	32: 'ଦ', // d -> dental d
	33: 'ଧ', // dh -> dental dh
	34: 'ନ', // n -> dental n
	35: 'ପ', // p -> labial p
	36: 'ଫ', // ph -> labial ph
	37: 'ବ', // b -> labial b (Odia has both व and ବ representing 'v')
	38: 'ଭ', // bh -> labial bh
	39: 'ମ', // m -> labial m
	40: 'ଯ', // y -> semi-vowel y
	41: 'ର', // r -> semi-vowel r
	42: 'ଲ', // l -> semi-vowel l
	43: 'ଵ', // v -> semi-vowel v (Odia has both व and ବ representing 'v')
	44: 'ହ', // h -> aspirate h
	45: 'ସ' // s -> dental s
};

const velthuis = {
	1: 'aa', // ā -> long a
	2: 'ii', // ī -> long i
	3: 'uu', // ū -> long u
	4: '.r', // ṛ -> vocalic r
	5: '.rr', // ṝ -> long vocalic r
	6: '.l', // ḷ -> vocalic l
	7: '.ll', // ḹ -> long vocalic l
	8: 'n.g', // ṅ -> velar nasal
	9: 'n~n', // ñ -> palatal nasal
	10: '.t', // ṭ -> retroflex t
	11: '.d', // ḍ -> retroflex d
	12: '.n', // ṇ -> retroflex n
	13: "'s", // ś -> palatal s
	14: '.s', // ṣ -> retroflex s
	15: 'm.', // ṃ -> anusvāra
	16: 'h.', // ḥ -> visarga
	17: 'a', // a -> short a
	18: 'i', // i -> short i
	19: 'u', // u -> short u
	20: 'e', // e
	21: 'o', // o
	22: 'k', // k -> velar k
	23: 'kh', // kh -> velar kh
	24: 'g', // g -> velar g
	25: 'gh', // gh -> velar gh
	26: 'c', // c -> palatal c
	27: 'ch', // ch -> palatal ch
	28: 'j', // j -> palatal j
	29: 'jh', // jh -> palatal jh
	30: 't', // t -> dental t
	31: 'th', // th -> dental th
	32: 'd', // d -> dental d
	33: 'dh', // dh -> dental dh
	34: 'n', // n -> dental n
	35: 'p', // p -> labial p
	36: 'ph', // ph -> labial ph
	37: 'b', // b -> labial b
	38: 'bh', // bh -> labial bh
	39: 'm', // m -> labial m
	40: 'y', // y -> semi-vowel y
	41: 'r', // r -> semi-vowel r
	42: 'l', // l -> semi-vowel l
	43: 'v', // v -> semi-vowel v
	44: 'h', // h -> aspirate h
	45: 's' // s -> dental s
};

const itrans = {
	1: 'A', // ā -> long a
	2: 'I', // ī -> long i
	3: 'U', // ū -> long u
	4: 'RRi', // ṛ -> vocalic r
	5: 'RRI', // ṝ -> long vocalic r
	6: 'LLi', // ḷ -> vocalic l
	7: 'LLI', // ḹ -> long vocalic l
	8: '~N', // ṅ -> velar nasal
	9: 'JN', // ñ -> palatal nasal
	10: 'T', // ṭ -> retroflex t
	11: 'D', // ḍ -> retroflex d
	12: 'N', // ṇ -> retroflex n
	13: 'sh', // ś -> palatal s
	14: 'Sh', // ṣ -> retroflex s
	15: '.n', // ṃ -> anusvāra
	16: '.h', // ḥ -> visarga
	17: 'a', // a -> short a
	18: 'i', // i -> short i
	19: 'u', // u -> short u
	20: 'e', // e
	21: 'o', // o
	22: 'k', // k -> velar k
	23: 'kh', // kh -> velar kh
	24: 'g', // g -> velar g
	25: 'gh', // gh -> velar gh
	26: 'ch', // c -> palatal ch
	27: 'Ch', // ch -> palatal Ch
	28: 'j', // j -> palatal j
	29: 'jh', // jh -> palatal jh
	30: 't', // t -> dental t
	31: 'th', // th -> dental th
	32: 'd', // d -> dental d
	33: 'dh', // dh -> dental dh
	34: 'n', // n -> dental n
	35: 'p', // p -> labial p
	36: 'ph', // ph -> labial ph
	37: 'b', // b -> labial b
	38: 'bh', // bh -> labial bh
	39: 'm', // m -> labial m
	40: 'y', // y -> semi-vowel y
	41: 'r', // r -> semi-vowel r
	42: 'l', // l -> semi-vowel l
	43: 'v', // v -> semi-vowel v
	44: 'h', // h -> aspirate h
	45: 's' // s -> dental s
};

const harvard_kyoto = {
	1: 'A', // ā -> long a
	2: 'I', // ī -> long i
	3: 'U', // ū -> long u
	4: 'R', // ṛ -> vocalic r
	5: 'RR', // ṝ -> long vocalic r
	6: 'L', // ḷ -> vocalic l
	7: 'LL', // ḹ -> long vocalic l
	8: 'G', // ṅ -> velar nasal
	9: 'J', // ñ -> palatal nasal
	10: 'T', // ṭ -> retroflex t
	11: 'D', // ḍ -> retroflex d
	12: 'N', // ṇ -> retroflex n
	13: 'z', // ś -> palatal s
	14: 'S', // ṣ -> retroflex s
	15: 'M', // ṃ -> anusvāra
	16: 'H', // ḥ -> visarga
	17: 'a', // a -> short a
	18: 'i', // i -> short i
	19: 'u', // u -> short u
	20: 'e', // e
	21: 'o', // o
	22: 'k', // k -> velar k
	23: 'kh', // kh -> velar kh
	24: 'g', // g -> velar g
	25: 'gh', // gh -> velar gh
	26: 'c', // c -> palatal c
	27: 'ch', // ch -> palatal ch
	28: 'j', // j -> palatal j
	29: 'jh', // jh -> palatal jh
	30: 't', // t -> dental t
	31: 'th', // th -> dental th
	32: 'd', // d -> dental d
	33: 'dh', // dh -> dental dh
	34: 'n', // n -> dental n
	35: 'p', // p -> labial p
	36: 'ph', // ph -> labial ph
	37: 'b', // b -> labial b
	38: 'bh', // bh -> labial bh
	39: 'm', // m -> labial m
	40: 'y', // y -> semi-vowel y
	41: 'r', // r -> semi-vowel r
	42: 'l', // l -> semi-vowel l
	43: 'v', // v -> semi-vowel v
	44: 'h', // h -> aspirate h
	45: 's' // s -> dental s
};
