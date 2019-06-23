
class Article {
    constructor(container) {
        this.container = container
        this._eventShowArticle = this._eventShowArticle.bind(this)
        document.addEventListener('eventShowArticle', this._eventShowArticle)
    }
    _eventShowArticle(ev) {
        ev.preventDefault()
        console.log(ev.detail.url)
        var win = window.open(ev.detail.url, '_blank')
        win.focus()
    }
}