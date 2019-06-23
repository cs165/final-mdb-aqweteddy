class ImagesScreen {
    constructor(container) {
        this.container = container
    }

    async show(idx) {
        // console.log(idx)
        const resp = await fetch(`/imgdata/${idx}`)
        const result = await resp.json()
        let items = new Array()

        for (let src of result.imgLink) {
            items.push({
                src: src,
                w: 0,
                h: 0
            })
        }

        var options = {
            index: 0, // 從第一張圖片開始顯示
            closeOnScroll: false
        }
        let pswp = document.querySelectorAll('.pswp')[0];
        var gallery = new PhotoSwipe(pswp, PhotoSwipeUI_Default, items, options)
        gallery.listen('gettingData', function (index, item) {
            if (item.w < 1 || item.h < 1) { // unknown size
                var img = new Image();
                img.onload = function () { // will get size after load
                    item.w = this.width; // set image width
                    item.h = this.height; // set image height
                    gallery.invalidateCurrItems(); // reinit Items
                    gallery.updateSize(true); // reinit Items
                }
                img.src = item.src; // let's download image
            }
        })
        gallery.init()
        this.container.classList.remove('inactive')
    }
    hide() {
        this.container.classList.add('inactive')
    }
}