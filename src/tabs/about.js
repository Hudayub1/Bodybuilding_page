function renderAbout(){
    const div = document.getElementById('content')
    const createDiv = document.createElement("div")

    createDiv.innerHTML = `
        <section id="Description">
            <h1>This website is an open source or 
            free knowledge based bodybuilding</h1>
        </section>

        <section class="content" id="c-1">
            <h2>My journey in bodybuilding</h2>
        </section>

        <section class="content" id="c-2">
            <h2>My achievements</h2>
        </section>

        <section class="content" id="c-3">
            <h2>Where I'm headed</h2>
        </section>

`
    div.appendChild(createDiv)
    
}



export {renderAbout}