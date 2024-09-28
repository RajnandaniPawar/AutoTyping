const span = document.querySelector('h1 span');
const span2 = document.querySelector('h2 span');


const wordList = ['Developer.', 'Coder.', 'Youtuber.', 'Writter.', 'Dancer.'];
const wordList2 = ['Student.', 'Singer.', 'painter.', 'Player.'];



const word = 'Developer';

function autoType(wordList, element){
    let wordIndex = 0;
    let charecterIndex = 0;
    let skipUpdate = 0;
    let reverseType = false;

const IntervalId = setInterval( ()=>{
    if(skipUpdate){
        skipUpdate--;
        return;
    }
    if(!reverseType){
        skipUpdate = 2;
        element.innerText += wordList[wordIndex][charecterIndex];
        charecterIndex++;
    }else{
        element.innerText = element.innerText.slice(0, element.innerText.length -1)
        charecterIndex--;
    }

    if(charecterIndex === wordList[wordIndex].length){
        // clearInterval(IntervalId);
        reverseType = true;
    }

    if(element.innerText.length === 0 && reverseType){
        reverseType = false;
        charecterIndex = 0;
        wordIndex++;
    }

    if(wordIndex === wordList.length){
        wordIndex = 0;
    }
   
 },200);
}

// autoType(wordList2, span2);
autoType(wordList, span);