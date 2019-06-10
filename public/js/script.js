//
// TODO(you): Add the JavaScript necessary to complete your final project.
//

async function eventGet(ev)
{
    ev.preventDefault()
    var output = document.querySelector('#output')
    const resp = await fetch('/getev')
    const json = await resp.json()

    output.textContent = JSON.stringify(json, null, 2)
}

async function eventPost(ev)
{
    ev.preventDefault()
    var output = document.querySelector('#output')
    const resp = await fetch('/postev', {"method": 'post'})
    const json = await resp.json()

    output.textContent = JSON.stringify(json, null, 2)
    
}

function main() {
    var getButton = document.querySelector('#get')
    var postButton = document.querySelector('#post')

    getButton.addEventListener('click', eventGet)
    postButton.addEventListener('click', eventPost)
}

main()
