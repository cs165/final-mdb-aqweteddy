class App {
    constructor() {
        // fetch data
        this.eventClickShowImage = this.eventClickShowImage.bind(this)
        const overviewElement = document.getElementById('overview')
        this.overview = new OverviewScreen(overviewElement, this.eventClickShowImage, this.imgData)
        const imagesElement = document.getElementById('images')
        this.images = new ImagesScreen(imagesElement)
        const articleElement = document.getElementById('article')
        this.article = new Article(articleElement)
        this.overview.show()

    }

    eventClickShowImage(ev) {
        // this.overview.hide()
        let tar = ev.target
        let idx = tar.id

        this.images.show(idx)
    }
}