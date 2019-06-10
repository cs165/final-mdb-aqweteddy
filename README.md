# Final Project Proposal

## 網站名

pttShowBeauty

## 分為三部分

1. crawler: 定時將文章資料放入 MongoDB (python scrapy, 已完成): [github](https://github.com/aqweteddy/PttScrapyMongoDB.git)，這部分會在學校工作站上以 nohup 方式完成
2. 網頁本體
   * 每篇文章顯示一個縮圖
   * 當使用者點入文章再顯示其他圖片
   * 整體來說類似於[這個網站](https://pttcrawlimage.herokuapp.com)，但是文章是事先定時爬好，也只限定在 Beauty 版
   * 若有時間，會再新增一個下載通道，提供下載圖片功能