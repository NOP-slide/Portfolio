// Typewriter effect
class TypeWriter {
    constructor(txtElement, words, waitTime = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = waitTime;
        this.type();
        this.isDeleting = false;
        this.cursorOn = true;
        this.cursorBlink = null;
    }

    // Main typing method
    type() {
        const current = this.wordIndex % this.words.length; // Cycle infinitely through word list
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class='${this.cursorOn ? 'cursor-on' : 'cursor-off'}'>${this.txt}</span>`;

        // Adjust typing speed for next letter
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // Reached the end of current word
        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;

            // Cursor blink effect
            if (this.cursorBlink === null) this.cursorBlink = setInterval(() => {
                this.cursorOn = !this.cursorOn;
                this.txtElement.innerHTML = `<span class='${this.cursorOn ? 'cursor-on' : 'cursor-off'}'>${this.txt}</span>`
            }, 500);

            // Start typing new word after current word is deleted
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = this.wait;

            // Cursor blink effect
            if (this.cursorBlink === null) this.cursorBlink = setInterval(() => {
                this.cursorOn = !this.cursorOn;
                this.txtElement.innerHTML = `<span class='${this.cursorOn ? 'cursor-on' : 'cursor-off'}'>${this.txt}</span>`
            }, 500);
        } else {
            // In the middle of a word, turn off cursor blink
            clearInterval(this.cursorBlink);
            this.cursorBlink = null;
            this.cursorOn = true;
        }


        setTimeout(() => this.type(), typeSpeed);
    }
}

// Typewriter init function
const initTypeWriter = () => {
    const txtElement = document.querySelector(".typewriter");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");

    new TypeWriter(txtElement, words, wait);
}