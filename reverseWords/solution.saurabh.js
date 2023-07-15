function reverseWords(input) {
    const reverse_words_arr = []
    let reverse_words_str = ''
    let temp = ''
    let index = 0
    for (const i of input) {
        index++
        if(i === " " || index === (input.length)){
            if(index === (input.length)){
                temp = temp + i
            }
            if(temp !== " ") reverse_words_arr.unshift(temp)
            temp = ""
        }else{
            temp = temp + i
        }
    }

    reverse_words_arr.forEach((word,index) => {
        if(reverse_words_str.at(-1) === " "){
            reverse_words_str = reverse_words_str + word
        }else{
            reverse_words_str = reverse_words_str + word + " "
        }
    });
    console.log(reverse_words_str);

}


reverseWords('Hello  World    OpenAI')