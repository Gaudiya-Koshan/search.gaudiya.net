// IAST is the basis for all of the other scripts in this software.
// Everything will be compared against this table for the purpose of searching
// which obviously means that the database will need use IAST Unicode characters.

// The comments for 'a' below describe what each object is composed of (although the keys are meant to make it self-explanatory).

export const conversion_mappings = {
	a: {
		key: 1, // just a numeric key for convenience
		description: 'short a', // explanation in English for what the character is
		english_iast: 'a', // International Alphabet of Sanskrit Transliteration = what our database must use for all fields
		english_plain: ['a'], // various English spellings that we anticipate the user might type into a search field
		english_velthuis: 'a', // the Velthuis system of transliteration is a (tragic) ASCII transliteration scheme, included here in case it's ever needed
		english_itrans: 'a', // Indian languages TRANSliteration (ITRANS) is another ASCII transliteration scheme that avoids diacritics
		english_harvard_kyoto: 'a', // Harvard-Kyoto Convention is another ASCII system. It is/was predominantly used informally in e-mail.
		devanāgarī: 'अ', // Unicode Devanāgarī characters
		bāṅlā: 'অ', // Unicode bāṅlā characters
		oṛiā: 'ଅ', // Unicode oṛiā characters
		brāhmī: '𑀅' // Unicode Brāhmī characters because ... why not?
	},
	ā: {
		key: 2,
		description: 'long a',
		english_iast: 'ā',
		english_plain: ['a', 'aa'],
		english_velthuis: 'aa',
		english_itrans: 'A',
		english_harvard_kyoto: 'A',
		devanāgarī: 'आ',
		bāṅlā: 'আ',
		oṛiā: 'ଆ',
		brāhmī: '𑀆'
	},
	i: {
		key: 3,
		description: 'short i',
		english_iast: 'i',
		english_plain: ['i'],
		english_velthuis: 'i',
		english_itrans: 'i',
		english_harvard_kyoto: 'i',
		devanāgarī: 'इ',
		bāṅlā: 'ই',
		oṛiā: 'ଇ',
		brāhmī: '𑀇'
	},
	ī: {
		key: 4,
		description: 'long i',
		english_iast: 'ī',
		english_plain: ['i', 'ee'],
		english_velthuis: 'ii',
		english_itrans: 'I',
		english_harvard_kyoto: 'I',
		devanāgarī: 'ई',
		bāṅlā: 'ঈ',
		oṛiā: 'ଈ',
		brāhmī: '𑀈'
	},
	u: {
		key: 5,
		description: 'short u',
		english_iast: 'u',
		english_plain: ['u'],
		english_velthuis: 'u',
		english_itrans: 'u',
		english_harvard_kyoto: 'u',
		devanāgarī: 'उ',
		bāṅlā: 'উ',
		oṛiā: 'ଉ',
		brāhmī: '𑀉'
	},
	ū: {
		key: 6,
		description: 'long u',
		english_iast: 'ū',
		english_plain: ['u', 'oo'],
		english_velthuis: 'uu',
		english_itrans: 'U',
		english_harvard_kyoto: 'U',
		devanāgarī: 'ऊ',
		bāṅlā: 'ঊ',
		oṛiā: 'ଊ',
		brāhmī: '𑀊'
	},
	ṛ: {
		key: 7,
		description: 'short r',
		english_iast: 'ṛ',
		english_plain: ['ri'],
		english_velthuis: '.r',
		english_itrans: '.r',
		english_harvard_kyoto: '.r',
		devanāgarī: 'ऋ',
		bāṅlā: 'ঋ',
		oṛiā: 'ଋ',
		brāhmī: '𑀋'
	},
	ṝ: {
		key: 8,
		description: 'long r',
		english_iast: 'ṝ',
		english_plain: ['rri'],
		english_velthuis: '.rr',
		english_itrans: '.R',
		english_harvard_kyoto: '.R',
		devanāgarī: 'ॠ',
		bāṅlā: 'ৠ',
		oṛiā: 'ୠ',
		brāhmī: '𑀌'
	},
	ḷ: {
		key: 9,
		description: 'short l',
		english_iast: 'ḷ',
		english_plain: ['li'],
		english_velthuis: '.l',
		english_itrans: '.l',
		english_harvard_kyoto: '.l',
		devanāgarī: 'ऌ',
		bāṅlā: 'ঌ',
		oṛiā: 'ଌ',
		brāhmī: '𑀍'
	},
	ḹ: {
		key: 10,
		description: 'long l',
		english_iast: 'ḹ',
		english_plain: ['lli'],
		english_velthuis: '.ll',
		english_itrans: '.L',
		english_harvard_kyoto: '.L',
		devanāgarī: 'ॡ',
		bāṅlā: 'ৡ',
		oṛiā: 'ୡ',
		brāhmī: '𑀎'
	},
	e: {
		key: 11,
		description: 'short e',
		english_iast: 'e',
		english_plain: ['e'],
		english_velthuis: 'e',
		english_itrans: 'e',
		english_harvard_kyoto: 'e',
		devanāgarī: 'ए',
		bāṅlā: 'এ',
		oṛiā: 'ଏ',
		brāhmī: '𑀏'
	},
	ai: {
		key: 12,
		description: 'diphthong ai',
		english_iast: 'ai',
		english_plain: ['ai'],
		english_velthuis: 'ai',
		english_itrans: 'ai',
		english_harvard_kyoto: 'ai',
		devanāgarī: 'ऐ',
		bāṅlā: 'ঐ',
		oṛiā: 'ଐ',
		brāhmī: '𑀐'
	},
	o: {
		key: 13,
		description: 'short o',
		english_iast: 'o',
		english_plain: ['o'],
		english_velthuis: 'o',
		english_itrans: 'o',
		english_harvard_kyoto: 'o',
		devanāgarī: 'ओ',
		bāṅlā: 'ও',
		oṛiā: 'ଓ',
		brāhmī: '𑀑'
	},
	au: {
		key: 14,
		description: 'diphthong au',
		english_iast: 'au',
		english_plain: ['au'],
		english_velthuis: 'au',
		english_itrans: 'au',
		english_harvard_kyoto: 'au',
		devanāgarī: 'औ',
		bāṅlā: 'ঔ',
		oṛiā: 'ଔ',
		brāhmī: '𑀒'
	},
	ĕ: {
		key: 15,
		description: 'short e breve',
		english_iast: 'ĕ',
		english_plain: ['e'],
		english_velthuis: 'e',
		english_itrans: 'e\\',
		english_harvard_kyoto: 'e\\',
		devanāgarī: 'ऎ',
		bāṅlā: null,
		oṛiā: null,
		brāhmī: '𑀓'
	},
	ŏ: {
		key: 16,
		description: 'short o breve',
		english_iast: 'ŏ',
		english_plain: ['o'],
		english_velthuis: 'o',
		english_itrans: 'o\\',
		english_harvard_kyoto: 'o\\',
		devanāgarī: 'ऒ',
		bāṅlā: null,
		oṛiā: null,
		brāhmī: '𑀔'
	},
	æ: {
		key: 17,
		description: 'ae ligature',
		english_iast: 'æ',
		english_plain: ['ae'],
		english_velthuis: 'ae',
		english_itrans: 'ae',
		english_harvard_kyoto: 'ae',
		devanāgarī: 'ऐ',
		bāṅlā: 'ঐ',
		oṛiā: 'ଐ',
		brāhmī: '𑀐'
	},
	ǣ: {
		key: 18,
		description: 'long ae ligature',
		english_iast: 'ǣ',
		english_plain: ['ae', 'ai'],
		english_velthuis: 'ae',
		english_itrans: 'ae',
		english_harvard_kyoto: 'ae',
		devanāgarī: 'ऐ',
		bāṅlā: 'ঐ',
		oṛiā: 'ଐ',
		brāhmī: '𑀐'
	},
	ô: {
		key: 19,
		description: 'o with circumflex',
		english_iast: 'ô',
		english_plain: ['o'],
		english_velthuis: 'o',
		english_itrans: 'o^',
		english_harvard_kyoto: 'o^',
		devanāgarī: 'ओ',
		bāṅlā: 'ও',
		oṛiā: 'ଓ',
		brāhmī: '𑀑'
	},
	aṃ: {
		key: 20,
		description: 'nasalized a',
		english_iast: 'aṃ',
		english_plain: ['am'],
		english_velthuis: 'a.m',
		english_itrans: 'aM',
		english_harvard_kyoto: 'aM',
		devanāgarī: 'अं',
		bāṅlā: 'অং',
		oṛiā: 'ଅଁ',
		brāhmī: '𑀵'
	},
	aḥ: {
		key: 21,
		description: 'visarga after a',
		english_iast: 'aḥ',
		english_plain: ['ah'],
		english_velthuis: 'aH',
		english_itrans: 'aH',
		english_harvard_kyoto: 'aH',
		devanāgarī: 'अः',
		bāṅlā: 'অঃ',
		oṛiā: 'ଅଃ',
		brāhmī: '𑀶'
	},
	am̐: {
		key: 22,
		description: 'anusvara after a',
		english_iast: 'am̐',
		english_plain: ['an'],
		english_velthuis: 'a.mN',
		english_itrans: 'a.m.',
		english_harvard_kyoto: 'a.m.',
		devanāgarī: 'अं',
		bāṅlā: 'অঁ',
		oṛiā: 'ଅଁ',
		brāhmī: '𑀵'
	},
	ka: {
		key: 23,
		description: 'velar ka',
		english_iast: 'ka',
		english_plain: ['ka'],
		english_velthuis: 'ka',
		english_itrans: 'ka',
		english_harvard_kyoto: 'ka',
		devanāgarī: 'क',
		bāṅlā: 'ক',
		oṛiā: 'କ',
		brāhmī: '𑀓'
	},
	kha: {
		key: 24,
		description: 'velar kha',
		english_iast: 'kha',
		english_plain: ['kha'],
		english_velthuis: 'kha',
		english_itrans: 'kha',
		english_harvard_kyoto: 'kha',
		devanāgarī: 'ख',
		bāṅlā: 'খ',
		oṛiā: 'ଖ',
		brāhmī: '𑀔'
	},
	ga: {
		key: 25,
		description: 'velar ga',
		english_iast: 'ga',
		english_plain: ['ga'],
		english_velthuis: 'ga',
		english_itrans: 'ga',
		english_harvard_kyoto: 'ga',
		devanāgarī: 'ग',
		bāṅlā: 'গ',
		oṛiā: 'ଗ',
		brāhmī: '𑀕'
	},
	gha: {
		key: 26,
		description: 'velar gha',
		english_iast: 'gha',
		english_plain: ['gha'],
		english_velthuis: 'gha',
		english_itrans: 'gha',
		english_harvard_kyoto: 'gha',
		devanāgarī: 'घ',
		bāṅlā: 'ঘ',
		oṛiā: 'ଘ',
		brāhmī: '𑀖'
	},
	ṅa: {
		key: 27,
		description: 'velar ṅa',
		english_iast: 'ṅa',
		english_plain: ['nga'],
		english_velthuis: '.na',
		english_itrans: '.Na',
		english_harvard_kyoto: '.Na',
		devanāgarī: 'ङ',
		bāṅlā: 'ঙ',
		oṛiā: 'ଙ',
		brāhmī: '𑀗'
	},
	ca: {
		key: 28,
		description: 'palatal ca',
		english_iast: 'ca',
		english_plain: ['ca'],
		english_velthuis: 'ca',
		english_itrans: 'cha',
		english_harvard_kyoto: 'ca',
		devanāgarī: 'च',
		bāṅlā: 'চ',
		oṛiā: 'ଚ',
		brāhmī: '𑀘'
	},
	cha: {
		key: 29,
		description: 'palatal cha',
		english_iast: 'cha',
		english_plain: ['cha'],
		english_velthuis: 'cha',
		english_itrans: 'Cha',
		english_harvard_kyoto: 'cha',
		devanāgarī: 'छ',
		bāṅlā: 'ছ',
		oṛiā: 'ଛ',
		brāhmī: '𑀙'
	},
	ja: {
		key: 30,
		description: 'palatal ja',
		english_iast: 'ja',
		english_plain: ['ja'],
		english_velthuis: 'ja',
		english_itrans: 'ja',
		english_harvard_kyoto: 'ja',
		devanāgarī: 'ज',
		bāṅlā: 'জ',
		oṛiā: 'ଜ',
		brāhmī: '𑀚'
	},
	jha: {
		key: 31,
		description: 'palatal jha',
		english_iast: 'jha',
		english_plain: ['jha'],
		english_velthuis: 'jha',
		english_itrans: 'Jha',
		english_harvard_kyoto: 'jha',
		devanāgarī: 'झ',
		bāṅlā: 'ঝ',
		oṛiā: 'ଝ',
		brāhmī: '𑀛'
	},
	ña: {
		key: 32,
		description: 'palatal ña',
		english_iast: 'ña',
		english_plain: ['nya'],
		english_velthuis: '.nya',
		english_itrans: '.Na',
		english_harvard_kyoto: '.Na',
		devanāgarī: 'ञ',
		bāṅlā: 'ঞ',
		oṛiā: 'ଞ',
		brāhmī: '𑀜'
	},
	ṭa: {
		key: 33,
		description: 'retroflex ṭa',
		english_iast: 'ṭa',
		english_plain: ['ta'],
		english_velthuis: '.Ta',
		english_itrans: '.Ta',
		english_harvard_kyoto: '.Ta',
		devanāgarī: 'ट',
		bāṅlā: 'ট',
		oṛiā: 'ଟ',
		brāhmī: '𑀝'
	},
	ṭha: {
		key: 34,
		description: 'retroflex ṭha',
		english_iast: 'ṭha',
		english_plain: ['tha'],
		english_velthuis: '.Tha',
		english_itrans: '.Tha',
		english_harvard_kyoto: '.Tha',
		devanāgarī: 'ठ',
		bāṅlā: 'ঠ',
		oṛiā: 'ଠ',
		brāhmī: '𑀞'
	},
	ḍa: {
		key: 35,
		description: 'retroflex ḍa',
		english_iast: 'ḍa',
		english_plain: ['da'],
		english_velthuis: '.Da',
		english_itrans: '.Da',
		english_harvard_kyoto: '.Da',
		devanāgarī: 'ड',
		bāṅlā: 'ড',
		oṛiā: 'ଡ',
		brāhmī: '𑀟'
	},
	ḍha: {
		key: 36,
		description: 'retroflex ḍha',
		english_iast: 'ḍha',
		english_plain: ['dha'],
		english_velthuis: '.Dha',
		english_itrans: '.Dha',
		english_harvard_kyoto: '.Dha',
		devanāgarī: 'ढ',
		bāṅlā: 'ঢ',
		oṛiā: 'ଢ',
		brāhmī: '𑀠'
	},
	ṇa: {
		key: 37,
		description: 'retroflex ṇa',
		english_iast: 'ṇa',
		english_plain: ['na'],
		english_velthuis: '.na',
		english_itrans: '.Na',
		english_harvard_kyoto: '.Na',
		devanāgarī: 'ण',
		bāṅlā: 'ণ',
		oṛiā: 'ଣ',
		brāhmī: '𑀡'
	},
	ta: {
		key: 38,
		description: 'dental ta',
		english_iast: 'ta',
		english_plain: ['ta'],
		english_velthuis: 'ta',
		english_itrans: 'Ta',
		english_harvard_kyoto: 'ta',
		devanāgarī: 'त',
		bāṅlā: 'ত',
		oṛiā: 'ତ',
		brāhmī: '𑀢'
	},
	tha: {
		key: 39,
		description: 'dental tha',
		english_iast: 'tha',
		english_plain: ['tha'],
		english_velthuis: 'tha',
		english_itrans: 'Tha',
		english_harvard_kyoto: 'tha',
		devanāgarī: 'थ',
		bāṅlā: 'থ',
		oṛiā: 'ଥ',
		brāhmī: '𑀣'
	},
	da: {
		key: 40,
		description: 'dental da',
		english_iast: 'da',
		english_plain: ['da'],
		english_velthuis: 'da',
		english_itrans: 'da',
		english_harvard_kyoto: 'da',
		devanāgarī: 'द',
		bāṅlā: 'দ',
		oṛiā: 'ଦ',
		brāhmī: '𑀤'
	},
	dha: {
		key: 41,
		description: 'dental dha',
		english_iast: 'dha',
		english_plain: ['dha'],
		english_velthuis: 'dha',
		english_itrans: 'Dha',
		english_harvard_kyoto: 'dha',
		devanāgarī: 'ध',
		bāṅlā: 'ধ',
		oṛiā: 'ଧ',
		brāhmī: '𑀥'
	},
	na: {
		key: 42,
		description: 'dental na',
		english_iast: 'na',
		english_plain: ['na'],
		english_velthuis: 'na',
		english_itrans: 'na',
		english_harvard_kyoto: 'na',
		devanāgarī: 'न',
		bāṅlā: 'ন',
		oṛiā: 'ନ',
		brāhmī: '𑀦'
	},
	pa: {
		key: 43,
		description: 'labial pa',
		english_iast: 'pa',
		english_plain: ['pa'],
		english_velthuis: 'pa',
		english_itrans: 'pa',
		english_harvard_kyoto: 'pa',
		devanāgarī: 'प',
		bāṅlā: 'প',
		oṛiā: 'ପ',
		brāhmī: '𑀧'
	},
	pha: {
		key: 44,
		description: 'labial pha',
		english_iast: 'pha',
		english_plain: ['pha'],
		english_velthuis: 'pha',
		english_itrans: 'Pha',
		english_harvard_kyoto: 'pha',
		devanāgarī: 'फ',
		bāṅlā: 'ফ',
		oṛiā: 'ଫ',
		brāhmī: '𑀨'
	},
	ba: {
		key: 45,
		description: 'labial ba',
		english_iast: 'ba',
		english_plain: ['ba'],
		english_velthuis: 'ba',
		english_itrans: 'ba',
		english_harvard_kyoto: 'ba',
		devanāgarī: 'ब',
		bāṅlā: 'ব',
		oṛiā: 'ବ',
		brāhmī: null
	},
	bha: {
		key: 46,
		description: 'labial bha',
		english_iast: 'bha',
		english_plain: ['bha'],
		english_velthuis: 'bha',
		english_itrans: 'Bha',
		english_harvard_kyoto: 'bha',
		devanāgarī: 'भ',
		bāṅlā: 'ভ',
		oṛiā: 'ଭ',
		brāhmī: '𑀪'
	},
	ma: {
		key: 47,
		description: 'labial ma',
		english_iast: 'ma',
		english_plain: ['ma'],
		english_velthuis: 'ma',
		english_itrans: 'ma',
		english_harvard_kyoto: 'ma',
		devanāgarī: 'म',
		bāṅlā: 'ম',
		oṛiā: 'ମ',
		brāhmī: '𑀫'
	},
	ya: {
		key: 48,
		description: 'semi-vowel ya',
		english_iast: 'ya',
		english_plain: ['ya'],
		english_velthuis: 'ya',
		english_itrans: 'ya',
		english_harvard_kyoto: 'ya',
		devanāgarī: 'य',
		bāṅlā: 'য',
		oṛiā: 'ଯ',
		brāhmī: '𑀬'
	},
	ra: {
		key: 49,
		description: 'semi-vowel ra',
		english_iast: 'ra',
		english_plain: ['ra'],
		english_velthuis: 'ra',
		english_itrans: 'ra',
		english_harvard_kyoto: 'ra',
		devanāgarī: 'र',
		bāṅlā: 'র',
		oṛiā: 'ର',
		brāhmī: '𑀭'
	},
	la: {
		key: 50,
		description: 'semi-vowel la',
		english_iast: 'la',
		english_plain: ['la'],
		english_velthuis: 'la',
		english_itrans: 'la',
		english_harvard_kyoto: 'la',
		devanāgarī: 'ल',
		bāṅlā: 'ল',
		oṛiā: 'ଲ',
		brāhmī: '𑀮'
	},
	va: {
		key: 51,
		description: 'semi-vowel va',
		english_iast: 'va',
		english_plain: ['va'],
		english_velthuis: 'va',
		english_itrans: 'va',
		english_harvard_kyoto: 'va',
		devanāgarī: 'व',
		bāṅlā: 'ব',
		oṛiā: 'ବ',
		brāhmī: null
	},
	śa: {
		key: 52,
		description: 'palatal śa',
		english_iast: 'śa',
		english_plain: ['sha'],
		english_velthuis: '.sa',
		english_itrans: '.Sa',
		english_harvard_kyoto: '.Sa',
		devanāgarī: 'श',
		bāṅlā: 'শ',
		oṛiā: 'ଶ',
		brāhmī: '𑀯'
	},
	ṣa: {
		key: 53,
		description: 'palatal ṣa',
		english_iast: 'ṣa',
		english_plain: ['ṣa'],
		english_velthuis: '.za',
		english_itrans: '.za',
		english_harvard_kyoto: '.za',
		devanāgarī: 'ष',
		bāṅlā: 'ষ',
		oṛiā: 'ଷ',
		brāhmī: '𑀰'
	},
	sa: {
		key: 54,
		description: 'dental sa',
		english_iast: 'sa',
		english_plain: ['sa'],
		english_velthuis: 'sa',
		english_itrans: 'sa',
		english_harvard_kyoto: 'sa',
		devanāgarī: 'स',
		bāṅlā: 'স',
		oṛiā: 'ସ',
		brāhmī: '𑀱'
	},

	ha: {
		key: 55,
		description: 'aspirate ha',
		english_iast: 'ha',
		english_plain: ['ha'],
		english_velthuis: 'ha',
		english_itrans: 'ha',
		english_harvard_kyoto: 'ha',
		devanāgarī: 'ह',
		bāṅlā: 'হ',
		oṛiā: 'ହ',
		brāhmī: '𑀲'
	},
	l̤a: {
		key: 56,
		description: 'l̤a',
		english_iast: 'l̤a',
		english_plain: ['la'],
		english_velthuis: 'l.a',
		english_itrans: '.la',
		english_harvard_kyoto: '.la',
		devanāgarī: 'ल़',
		bāṅlā: 'ল়',
		oṛiā: 'ଲ଼',
		brāhmī: '𑀷'
	},
	ḻa: {
		key: 57,
		description: 'ḻa',
		english_iast: 'ḻa',
		english_plain: ['ḻa'],
		english_velthuis: '.la',
		english_itrans: '.z',
		english_harvard_kyoto: '.la',
		devanāgarī: 'ऴ',
		bāṅlā: 'ऴ',
		oṛiā: 'ऴ',
		brāhmī: '𑀻'
	},
	ṟa: {
		key: 58,
		description: 'ṟa',
		english_iast: 'ṟa',
		english_plain: ['ṟa'],
		english_velthuis: '.ra',
		english_itrans: '.ra',
		english_harvard_kyoto: '.ra',
		devanāgarī: 'ऱ',
		bāṅlā: null,
		oṛiā: 'ऱ',
		brāhmī: '𑀼'
	},
	ṉa: {
		key: 59,
		description: 'ṉa',
		english_iast: 'ṉa',
		english_plain: ['ṉa'],
		english_velthuis: '.na',
		english_itrans: '.Na',
		english_harvard_kyoto: '.Na',
		devanāgarī: 'ऩ',
		bāṅlā: null,
		oṛiā: 'ऩ',
		brāhmī: '𑀽'
	},
	qa: {
		key: 60,
		description: 'qa',
		english_iast: 'qa',
		english_plain: ['qa'],
		english_velthuis: '.qa',
		english_itrans: '.qa',
		english_harvard_kyoto: '.qa',
		devanāgarī: 'ॻ',
		bāṅlā: 'ॻ',
		oṛiā: 'ॻ',
		brāhmī: '𑀣'
	},
	k͟ha: {
		key: 61,
		description: 'k͟ha',
		english_iast: 'k͟ha',
		english_plain: ['kha', 'ka'],
		english_velthuis: '.kha',
		english_itrans: '.kha',
		english_harvard_kyoto: '.kha',
		devanāgarī: 'ॺ',
		bāṅlā: 'ॺ',
		oṛiā: 'ॺ',
		brāhmī: '𑀤'
	},
	ġa: {
		key: 62,
		description: 'ġa',
		english_iast: 'ġa',
		english_plain: ['ga'],
		english_velthuis: '.ga',
		english_itrans: '.ga',
		english_harvard_kyoto: '.ga',
		devanāgarī: 'ॹ',
		bāṅlā: 'ॹ',
		oṛiā: 'ॹ',
		brāhmī: '𑀥'
	},
	za: {
		key: 63,
		description: 'za',
		english_iast: 'za',
		english_plain: ['za'],
		english_velthuis: '.za',
		english_itrans: '.za',
		english_harvard_kyoto: '.za',
		devanāgarī: 'ॼ',
		bāṅlā: 'ॼ',
		oṛiā: 'ॼ',
		brāhmī: '𑀦'
	},
	r̤a: {
		key: 64,
		description: 'r̤a',
		english_iast: 'r̤a',
		english_plain: ['ra'],
		english_velthuis: '.ra',
		english_itrans: '.ra',
		english_harvard_kyoto: '.ra',
		devanāgarī: 'ॾ',
		bāṅlā: 'ॾ',
		oṛiā: 'ॾ',
		brāhmī: '𑀧'
	},
	r̤ha: {
		key: 65,
		description: 'r̤ha',
		english_iast: 'r̤ha',
		english_plain: ['rha'],
		english_velthuis: '.rha',
		english_itrans: '.rha',
		english_harvard_kyoto: '.rha',
		devanāgarī: 'ॿ',
		bāṅlā: 'ॿ',
		oṛiā: 'ॿ',
		brāhmī: '𑀨'
	},
	fa: {
		key: 66,
		description: 'fa',
		english_iast: 'fa',
		english_plain: ['fa'],
		english_velthuis: '.fa',
		english_itrans: '.fa',
		english_harvard_kyoto: '.fa',
		devanāgarī: null,
		bāṅlā: null,
		oṛiā: null,
		brāhmī: null
	},
	ẏa: {
		key: 67,
		description: 'ẏa',
		english_iast: 'ẏa',
		english_plain: ['ya'],
		english_velthuis: '.ya',
		english_itrans: '.ya',
		english_harvard_kyoto: '.ya',
		devanāgarī: 'য়',
		bāṅlā: 'য়',
		oṛiā: 'ଯ଼',
		brāhmī: '𑀪'
	},
	n̆ga: {
		key: 68,
		description: 'n̆ga',
		english_iast: 'n̆ga',
		english_plain: ['nga'],
		english_velthuis: '.Nga',
		english_itrans: '.Nga',
		english_harvard_kyoto: '.Nga',
		devanāgarī: 'ং়',
		bāṅlā: 'ং়',
		oṛiā: 'ং়',
		brāhmī: '𑀡'
	},
	n̆ja: {
		key: 69,
		description: 'n̆ja',
		english_iast: 'n̆ja',
		english_plain: ['nja'],
		english_velthuis: '.Nja',
		english_itrans: '.Nja',
		english_harvard_kyoto: '.Nja',
		devanāgarī: 'ঞ়',
		bāṅlā: 'ঞ়',
		oṛiā: 'ଞ଼',
		brāhmī: '𑀢'
	},
	n̆ḍa: {
		key: 70,
		description: 'n̆ḍa',
		english_iast: 'n̆ḍa',
		english_plain: ['Nda'],
		english_velthuis: '.NDA',
		english_itrans: '.NDA',
		english_harvard_kyoto: '.NDA',
		devanāgarī: 'ड़',
		bāṅlā: 'ড়',
		oṛiā: 'ଡ଼',
		brāhmī: '𑀧'
	},
	n̆da: {
		key: 71,
		description: 'n̆da',
		english_iast: 'n̆da',
		english_plain: ['Nda'],
		english_velthuis: '.Nda',
		english_itrans: '.Nda',
		english_harvard_kyoto: '.Nda',
		devanāgarī: 'ण़',
		bāṅlā: 'ণ়',
		oṛiā: 'ଣ଼',
		brāhmī: '𑀬'
	},
	m̆ba: {
		key: 72,
		description: 'm with underbar and b and a',
		english_iast: 'm̆ba',
		english_plain: ['mba'],
		english_velthuis: 'mba',
		english_itrans: 'mba',
		english_harvard_kyoto: 'mba',
		devanāgarī: 'म्ब',
		bāṅlā: 'ম্ব',
		oṛiā: 'ମ୍ବ',
		brāhmī: '𑀢𑀺𑀃'
	},
	k: {
		key: 73,
		description: 'short k',
		english_iast: 'k',
		english_plain: ['k'],
		english_velthuis: 'k',
		english_itrans: 'k',
		english_harvard_kyoto: 'k',
		devanāgarī: 'क',
		bāṅlā: 'ক',
		oṛiā: 'କ',
		brāhmī: '𑀓'
	},
	kā: {
		key: 74,
		description: 'long k',
		english_iast: 'kā',
		english_plain: ['kaa'],
		english_velthuis: 'kaa',
		english_itrans: 'kA',
		english_harvard_kyoto: 'kA',
		devanāgarī: 'का',
		bāṅlā: 'কা',
		oṛiā: 'କା',
		brāhmī: '𑀓𑀾'
	},
	ki: {
		key: 75,
		description: 'short ki',
		english_iast: 'ki',
		english_plain: ['ki'],
		english_velthuis: 'ki',
		english_itrans: 'ki',
		english_harvard_kyoto: 'ki',
		devanāgarī: 'कि',
		bāṅlā: 'কি',
		oṛiā: 'କି',
		brāhmī: '𑀓𑀨'
	},
	kī: {
		key: 76,
		description: 'long ki',
		english_iast: 'kī',
		english_plain: ['kii'],
		english_velthuis: 'kii',
		english_itrans: 'kI',
		english_harvard_kyoto: 'kI',
		devanāgarī: 'की',
		bāṅlā: 'কী',
		oṛiā: 'କୀ',
		brāhmī: '𑀓𑀨𑀩'
	},
	ku: {
		key: 77,
		description: 'short ku',
		english_iast: 'ku',
		english_plain: ['ku'],
		english_velthuis: 'ku',
		english_itrans: 'ku',
		english_harvard_kyoto: 'ku',
		devanāgarī: 'कु',
		bāṅlā: 'কু',
		oṛiā: 'କୁ',
		brāhmī: '𑀓𑀪'
	},
	kū: {
		key: 78,
		description: 'long ku',
		english_iast: 'kū',
		english_plain: ['kuu'],
		english_velthuis: 'kuu',
		english_itrans: 'kU',
		english_harvard_kyoto: 'kU',
		devanāgarī: 'कू',
		bāṅlā: 'কূ',
		oṛiā: 'କୂ',
		brāhmī: '𑀓𑀪𑀫'
	},
	kṛ: {
		key: 79,
		description: 'short kr',
		english_iast: 'kṛ',
		english_plain: ['kr'],
		english_velthuis: 'kr',
		english_itrans: 'kR',
		english_harvard_kyoto: 'kR',
		devanāgarī: 'कृ',
		bāṅlā: 'কৃ',
		oṛiā: 'କୃ',
		brāhmī: '𑀓𑀳'
	},
	kṝ: {
		key: 80,
		description: 'long kr',
		english_iast: 'kṝ',
		english_plain: ['krr'],
		english_velthuis: 'krr',
		english_itrans: 'kRRi',
		english_harvard_kyoto: 'kRRi',
		devanāgarī: 'कॄ',
		bāṅlā: 'কৄ',
		oṛiā: 'କୄ',
		brāhmī: '𑀓𑀳𑁆'
	},
	kḷ: {
		key: 81,
		description: 'short kl',
		english_iast: 'kḷ',
		english_plain: ['kl'],
		english_velthuis: 'kl',
		english_itrans: 'kL',
		english_harvard_kyoto: 'kL',
		devanāgarī: 'कॢ',
		bāṅlā: 'ক্ল',
		oṛiā: 'କୢ',
		brāhmī: '𑀓𑀴'
	},
	kḹ: {
		key: 82,
		description: 'long kl',
		english_iast: 'kḹ',
		english_plain: ['kll'],
		english_velthuis: 'kll',
		english_itrans: 'kLLi',
		english_harvard_kyoto: 'kLLi',
		devanāgarī: 'कॣ',
		bāṅlā: 'কৢ',
		oṛiā: 'କୣ',
		brāhmī: '𑀓𑀴𑁆'
	},
	ke: {
		key: 83,
		description: 'short ke',
		english_iast: 'ke',
		english_plain: ['ke'],
		english_velthuis: 'ke',
		english_itrans: 'ke',
		english_harvard_kyoto: 'ke',
		devanāgarī: 'के',
		bāṅlā: 'কে',
		oṛiā: 'କେ',
		brāhmī: '𑀓𑀲'
	},
	kai: {
		key: 84,
		description: 'kai',
		english_iast: 'kai',
		english_plain: ['kai'],
		english_velthuis: 'kai',
		english_itrans: 'kai',
		english_harvard_kyoto: 'kai',
		devanāgarī: 'कै',
		bāṅlā: 'কৈ',
		oṛiā: 'କୈ',
		brāhmī: '𑀓𑀤'
	},
	ko: {
		key: 85,
		description: 'short ko',
		english_iast: 'ko',
		english_plain: ['ko'],
		english_velthuis: 'ko',
		english_itrans: 'ko',
		english_harvard_kyoto: 'ko',
		devanāgarī: 'को',
		bāṅlā: 'কো',
		oṛiā: 'କୋ',
		brāhmī: '𑀓𑀧'
	},
	kau: {
		key: 86,
		description: 'kau',
		english_iast: 'kau',
		english_plain: ['kau'],
		english_velthuis: 'kau',
		english_itrans: 'kau',
		english_harvard_kyoto: 'kau',
		devanāgarī: 'कौ',
		bāṅlā: 'কৌ',
		oṛiā: 'କୌ',
		brāhmī: '𑀓𑀥'
	},
	kĕ: {
		key: 87,
		description: 'k with e',
		english_iast: 'kĕ',
		english_plain: ['ke'],
		english_velthuis: 'ke',
		english_itrans: 'ke',
		english_harvard_kyoto: 'ke',
		devanāgarī: 'कॆ',
		bāṅlā: 'কে',
		oṛiā: 'କେ',
		brāhmī: '𑀓𑀲'
	},
	kŏ: {
		key: 88,
		description: 'k with o',
		english_iast: 'kŏ',
		english_plain: ['ko'],
		english_velthuis: 'ko',
		english_itrans: 'ko',
		english_harvard_kyoto: 'ko',
		devanāgarī: 'कॊ',
		bāṅlā: 'কো',
		oṛiā: 'କୋ',
		brāhmī: '𑀓𑀧'
	},
	kæ: {
		key: 89,
		description: 'short k with a',
		english_iast: 'kæ',
		english_plain: ['ka'],
		english_velthuis: 'ka',
		english_itrans: 'ka',
		english_harvard_kyoto: 'ka',
		devanāgarī: 'कæ',
		bāṅlā: 'কæ',
		oṛiā: 'କæ',
		brāhmī: '𑀓𑀠'
	},
	kǣ: {
		key: 90,
		description: 'k with æ',
		english_iast: 'kǣ',
		english_plain: ['kae'],
		english_velthuis: 'kae',
		english_itrans: 'kAE',
		english_harvard_kyoto: 'kAE',
		devanāgarī: 'कǣ',
		bāṅlā: 'কǣ',
		oṛiā: 'କǣ',
		brāhmī: '𑀓𑀟'
	},
	kô: {
		key: 91,
		description: 'k with o',
		english_iast: 'kô',
		english_plain: ['ko'],
		english_velthuis: 'ko',
		english_itrans: 'ko',
		english_harvard_kyoto: 'ko',
		devanāgarī: 'कô',
		bāṅlā: 'কô',
		oṛiā: 'କô',
		brāhmī: '𑀓𑀧'
	},
	kaṃ: {
		key: 92,
		description: 'short ka with m',
		english_iast: 'kaṃ',
		english_plain: ['kam'],
		english_velthuis: 'kam',
		english_itrans: 'kaM',
		english_harvard_kyoto: 'kaM',
		devanāgarī: 'कँ',
		bāṅlā: 'কং',
		oṛiā: 'କଂ',
		brāhmī: '𑀓𑀂'
	},
	kaḥ: {
		key: 93,
		description: 'short ka with ha',
		english_iast: 'kaḥ',
		english_plain: ['kah'],
		english_velthuis: 'kah',
		english_itrans: 'kaH',
		english_harvard_kyoto: 'kaH',
		devanāgarī: 'कः',
		bāṅlā: 'কঃ',
		oṛiā: 'କଃ',
		brāhmī: '𑀓𑀄'
	},
	kam̐: {
		key: 94,
		description: 'short ka with aha',
		english_iast: 'kam̐',
		english_plain: ['kam'],
		english_velthuis: 'kam',
		english_itrans: 'ka~M',
		english_harvard_kyoto: 'ka~M',
		devanāgarī: 'कँ',
		bāṅlā: 'কঁ',
		oṛiā: 'କଁ',
		brāhmī: '𑀓𑀂'
	},
	"'": {
		key: 95,
		description: 'apostrophe',
		english_iast: "'",
		english_plain: ["'"],
		english_velthuis: "'",
		english_itrans: "'",
		english_harvard_kyoto: "'",
		devanāgarī: 'ऽ',
		bāṅlā: 'ঽ',
		oṛiā: 'ଽ',
		brāhmī: ''
	},
	oṃ: {
		key: 96,
		description: 'om',
		english_iast: 'oṃ',
		english_plain: ['om', 'aum', 'omkara'],
		english_velthuis: 'oM',
		english_itrans: 'oM',
		english_harvard_kyoto: 'oM',
		devanāgarī: 'ॐ',
		bāṅlā: 'ওঁ',
		oṛiā: 'ଓଁ',
		brāhmī: '𑀑𑀁'
	},
	'.': {
		key: 97,
		description: 'full stop',
		english_iast: '.',
		english_plain: ['.'],
		english_velthuis: '.',
		english_itrans: '.',
		english_harvard_kyoto: '.',
		devanāgarī: '𑁇',
		bāṅlā: '𑁇',
		oṛiā: '𑁇',
		brāhmī: '𑁇'
	},
	'..': {
		key: 98,
		description: 'double full stop',
		english_iast: '..',
		english_plain: ['..'],
		english_velthuis: '..',
		english_itrans: '..',
		english_harvard_kyoto: '..',
		devanāgarī: '॥',
		bāṅlā: '॥',
		oṛiā: '॥',
		brāhmī: '॥'
	},
	ṣ: {
		key: 99,
		description: 'palatal ṣ',
		english_iast: 'ṣ',
		english_plain: ['sh', 's'],
		english_velthuis: '.s',
		english_itrans: 'Sh',
		english_harvard_kyoto: 'S',
		devanāgarī: 'ष्',
		bāṅlā: 'ষ্',
		oṛiā: 'ଷ୍',
		brāhmī: '𑀱𑁆'
	},
	ś: {
		key: 100,
		description: 'palatal ś',
		english_iast: 'ś',
		english_plain: ['sh', 's'],
		english_velthuis: '"s',
		english_itrans: 'sh',
		english_harvard_kyoto: 'z',
		devanāgarī: 'श्',
		bāṅlā: 'শ্',
		oṛiā: 'ଶ୍',
		brāhmī: '𑀰𑁆'
	}
};

// ----------------------------------------------------------------
// ----------------------------------------------------------------

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
