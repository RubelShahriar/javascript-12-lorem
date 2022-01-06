const text = [
    `“Seeing Rhetorically” Writing Exercise My Roommates Bed - Positive My roommates bed is spotless. She always has it made. Never is a single pillow ruffled; no sheets peek out from under the comforter.`,
    `Theme Writing in a Five Paragraph Structured Form I'll just run off five quick paragraphs with a couple big words and a solid structure and I'll breeze through another paper. Let the nonsense begin. I never really liked my parents.`,
    `Over the summer, she and I decided to make animal print the dominant characteristic of our room. Although I stuck to zebra stripe, her bed linens incorporate every animal print imaginable. She chose a bed set that has small zebra print running the length. In between is a larger strip of dark leopard`,
    `Theme Writing in a Five Paragraph Structured Form I'll just run off five quick paragraphs with a couple big words and a solid structure and I'll breeze through another paper. Let the nonsense begin. I never really liked my parents.`,
    `I found out in high school that if you disagree with anyone, expect detention. Now I found myself in a new setting. I was surrounded by people yearning to write, straining to listen, dying to learn. I was in expository writing 220. I looked around and noticed that everyone`,
    `Over the summer, she and I decided to make animal print the dominant characteristic of our room. Although I stuck to zebra stripe, her bed linens incorporate every animal print imaginable. She chose a bed set that has small zebra print running the length. In between is a larger strip of dark leopard`,
    `Analysis of the First Paragraph in Porters Old Mortality First, I would like to make some broad generalizations about Katherine Anne Porters stories. The selections of stories that I have read could be considered stories about transition,`,
    `passage from an old world to a new. There is a prolific amount of life and death imagery related to changes from slavery to freedom, aristocracy to middle-class, and birth to death. Her stories contain characters from several generations and the narratives`,
    `Analysis of the First Paragraph in Porters Old Mortality First, I would like to make some broad generalizations about Katherine Anne Porters stories. The selections of stories that I have read could be considered stories about transition,`,
]
const form = document.querySelector('.lorem-form')
const amount = document.getElementById('amount')
const result = document.querySelector('.lorem-text')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const value = parseInt(amount.value)
    const randomNumber = Math.floor(Math.random() * text.length)
    if(isNaN(value) || value <= 0 || value > 9){
        result.innerHTML = `<p class="result">${text[randomNumber]}</p>`
    }
    else{
        let tempText = text.slice(0, value)
        tempText = tempText.map(function(item){
            return `<p class="result">${item}</p>`
        })
        .join('')
        result.innerHTML = tempText
    }
})