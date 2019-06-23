class OverviewScreen {
    constructor(container, eventClickShowImage, imgData) {
        this.container = container
        this.eventClickShowImage = eventClickShowImage.bind(this)
        this.eventClickShowArticle = this.eventClickShowArticle.bind(this)
        // this.eventSearch = this.eventSearch.bind(this)
        // document.getElementById('search-button').addEventListener('click', this.eventSearch)
        this._showContent("")
    }

    async _showContent() {
        const resp = await fetch('/getoverview', {
            method: 'POST',
            body: JSON.stringify({ id: 'idx' }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        this.result = await resp.json()
        // console.log(result)
        let idx = 0
        for (let da of this.result) {
            let div = document.createElement('div')
            console.log(da['url'])
            div.classList.add('col-sm-3', 'mb-4', 'slidein')
            div.innerHTML = `
                    <div  class="image-frame">
                        <img src="${da['img']}" id="${da['id']}" alt="err" height="200vh">
                        <p id="${da['url']}">${da['title']}</p>
                    </div>
            `
            //                         <button id="${da['id']}" class="btn btn-dark">顯示圖片</button>

            this.container.appendChild(div)
            document.getElementById(`${da['id']}`).addEventListener('click', this.eventClickShowImage)
            document.getElementById(`${da['url']}`).addEventListener('click', this.eventClickShowArticle)
            ++idx
        }
    }
    eventClickShowArticle(ev) {
        ev.preventDefault()
        let tar = ev.target
        console.log(123456)
        // console.log(this.result[tar.id].url)

        document.dispatchEvent(new CustomEvent('eventShowArticle', {
            'detail': {
                'url': tar.id
            }
        }))
    }
    show() {
        this.container.classList.remove('inactive')
    }

    hide() {
        this.container.classList.add('inactive')
    }
}