# Zoom Record İndirici

İnternete ihtiyaç duymadan ders tekrarlarını izleyebilmek için python3, javascript, tampermonkey kullanılarak geliştirilen bir uygulama.

###### Uyarı: sadece kendi almış olduğunuz dersleri indirip kimse ile paylaşmamanız önerilir. Yasal bir sorun çıkması durumunda benim tarafımdan hiç bir sorumluluk kabul edilmez.

## Kurulum
İlk önce tampermonkey chrome eklentisini kurun, sonrasında bu eklenti aracılığıyla yeni bir script oluşturup crawler.js içerisindeki kodu bu yeni oluşturmuş olduğunuz scripte kopyalayın. Sonrasında aldığınız herhangi bir dersin canlı ders sekmesine gidin ve bir süreliğine crawlerın işini bitirmesini bekleyin. Crawler işini bitirince data.json adında bir dosya indirecektir. Bu dosyayı downloader.exe'nin yanına kopyalayın (aynı klasörde olsunlar). Bu işlemi indirmek istediğiniz tüm dersler için yapın, sonuçta downloader.exe ile aynı klasörde indirmek istediğiniz tüm derslerin data.json larının bulunması gerekir. 
Sonrasında downloader.exe yi çalıştırmanız halinde ilgili derslerin videoları inmeye başlayacaktır. Videoların atılacağı klasörün ismi ve videoların ön ismi data.json içerisindeki "name" parametresinden alınmaktadır, isimlendirmeyi exe yi başlatmadan önce data.json içerisinden değiştirebilirsiniz. Downloader.exe yi kapatmanız halinde tekrar açılışta kaldığı yerden devam edecektir fakat bir video indirmenin ortasında kapatmanız halinde yarım kalan videoyu tekrar indirebilmesi için silmeniz gerekmektedir.

###### Not: downloader.exe aslında downloader.py kodunun paketlenmiş halidir. Python indirmeden kolayca kullanım için eklenmiştir. Güvenmemeniz halinde bir python3 interpreterı indirip onun ile kodu çalıştırabilirsiniz. zoomdl.exe de benzer bir yapıyla oluşturulmuştur, github adresi aşağıda verilmiştir. 
###### Önemli: zoomdl.exe nin path de olması gerekiyor. Bunun için ```bu bilgisayar>özellikler>gelişmiş sistem özellikleri>ortam değişkenleri>path``` değişkenine zoomdl.exe nin olduğu dizini eklemeniz gerekir.


https://github.com/Battleman/zoomdl
https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=tr