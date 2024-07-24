function countVowelsAndConsonants() {
    const text = document.getElementById('textInput').value;
    const vowels = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ';
    const consonants = 'бвгджзйклмнпрстфхцчшщБВГДЖЗЙКЛМНПРСТФХЦЧШЩ';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of text) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    document.getElementById('result').innerText = 
        `Гласные: ${vowelCount}, Согласные: ${consonantCount}`;
} 