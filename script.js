function getRandomQuote()
{
const quote = {
    "content":"ka kla kha ga gla nga ca cha ja nya ta tha da na pa pla pha fa fla ba bla ma mla tsa tsha dza ya ra la ha hla va sa sha wa a ya ra aa i o oo u uu e k m l n p r t nyin-do kang ran nukta ta-rol nyet thyoom ta-rol cer-wa tshook cer-wa tshook 1 2 3 4 5 6 7 8 9 tta ttha dda "
}
console.log(quote.content)
}

function findMatch(inputText, languageMap) {
	const pattern = new RegExp(Object.keys(languageMap).sort((a, b) => b.length - a.length).join('|'), 'g')
	const convertedText = inputText.replace(pattern,match=>languageMap[match])

	return convertedText 
}




getRandomQuote()

const language_map = {'ka': 'ᰀ', 'kla': 'ᰁ', 'kha': 'ᰂ', 'ga': 'ᰃ', 'gla': 'ᰄ', 'nga': 'ᰅ', 'ca': 'ᰆ', 'cha': 'ᰇ', 'ja': 'ᰈ', 'nya': 'ᰉ', 'ta': 'ᰊ', 'tha': 'ᰋ', 'da': 'ᰌ', 'na': 'ᰍ', 'pa': 'ᰎ', 'pla': 'ᰏ', 'pha': 'ᰐ', 'fa': 'ᰑ', 'fla': 'ᰒ', 'ba': 'ᰓ', 'bla': 'ᰔ', 'ma': 'ᰕ', 'mla': 'ᰖ', 'tsa': 'ᰗ', 'tsha': 'ᰘ', 'dza': 'ᰙ', 'ya': 'ᰤ', 'ra': 'ᰥ', 'la': 'ᰜ', 'ha': 'ᰝ', 'hla': 'ᰞ', 'va': 'ᰟ', 'sa': 'ᰠ', 'sha': 'ᰡ', 'wa': 'ᰢ', 'a': 'ᰣ', 'aa': 'ᰦ', 'i': 'ᰧ', 'o': 'ᰨ', 'oo': 'ᰩ', 'u': 'ᰪ', 'uu': 'ᰫ', 'e': 'ᰬ', 'k': 'ᰭ', 'm': 'ᰮ', 'l': 'ᰯ', 'n': 'ᰰ', 'p': 'ᰱ', 'r': 'ᰲ', 't': 'ᰳ', 'nyin-do': 'ᰴ', 'kang': 'ᰵ', 'ran': 'ᰶ', 'nukta': '᰷', 'ta-rol': '᰻', 'nyet thyoom ta-rol': '᰼', 'cer-wa': '᰽', 'tshook cer-wa': '᰾', 'tshook': '᰿', '0': '᱀', '1': '᱁', '2': '᱂', '3': '᱃', '4': '᱄', '5': '᱅', '6': '᱆', '7': '᱇', '8': '᱈', '9': '᱉', 'tta': 'ᱍ', 'ttha': 'ᱎ', 'dda': 'ᱏ'}


//const inputText="rong aring la dyula jyuk khat bam"

//const result = findMatch(inputText,language_map)

//console.log(result)