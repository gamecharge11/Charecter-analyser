const text = document.getElementById('sentence');
const strt = document.getElementById('start')
const what = document.getElementById('what')
const output = document.getElementById('output')

function splitMulti(str, tokens){
    var tempChar = tokens[0];
    for(var i = 1; i < tokens.length; i++){
        str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
}

function find () {
    var value = text.value
    var letters = 0;
    document.getElementById('output').style.visibility="visible"
    document.getElementById('show').style.visibility="visible"
    if (text.value != ""){ 
        if (what.value == 'word') {
            var words = value.split(' ')
            var final = []
            for (let j = 0;j<words.length;j++) {
                if (words[j] != " ") {
                    final.push(words)
                }
            }
            document.getElementById('show').innerHTML=  "The text you have entered contains " + final.length + " words."
        } else if (what.value == 'sentence') {
            var sentences = splitMulti(value, ['?', '.', '!'])
            document.getElementById('show').innerHTML="The text you have entered contains " + Number(sentences.length - 1) + " sentences."
        } else if (what.value == 'alphabet') {
            var split = Array.from(value)
            for (let i=0;i<split.length;i++) {
                if (split[i] != " " && split[i] != "." && split[i] != "?" && split[i] != "!") {
                    letters++
                } else {
                    continue
                }
            }
            document.getElementById('show').innerHTML="The text you have entered contains " + letters + " letters"
        }
    } else {
        document.getElementById('output').style.visibility="hidden"
        alert("Please enter some text")
    }
}

