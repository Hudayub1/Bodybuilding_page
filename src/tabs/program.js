const programs = []

class Program {
     constructor(type, name, description) {
        this.type = type;
        this.name = name;
        this.description = description;
     }
}

function renderPrograms() {
    const div = document.getElementById('content')
    const createDiv = document.createElement("div")

    createDiv.innerHTML = `
        <section id="Description">
            <h1>This is where your bodybuilding journey begins</h1>
        </section>

        <section class="content" id="c-1">
            <h2>History of bodybuilding</h2>
        </section>

        <section class="content" id="c-2">
            <h2>The present</h2>
        </section>

        <section class="content" id="c-3">
            <h2>Where you fit in</h2>
        </section>

`

    div.appendChild(createDiv)
    
}


export {renderPrograms}