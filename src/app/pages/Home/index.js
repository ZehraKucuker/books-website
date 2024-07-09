import React from 'react';
import useStyles from './stylesheet';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
        <div className={classes.content}>
          <img src="./images/home.jpg" className={classes.image} />
          <div className={classes.filter}>
            <div className={classes.textContainer}>
                <div className={classes.title}>
                  <h2>Yılın En Popüler Kitapları Bir Tık Uzağınızda!</h2>
                </div>
                <div className={classes.text}>
                  <p>
                    Hoş geldiniz! Yeni dünyalar keşfetmek 
                    veya güzel bir hikayenin tadını çıkarmak 
                    istiyorsanız doğru yerdesiniz. Sitemizde 
                    yılın en çok satan kitapları özenle bir 
                    araya getirilmiştir. Farklı kategorilerdeki 
                    en popüler kitapları kolayca bulabilirsiniz. 
                    Edebiyat, bilim kurgu, kişisel gelişim, 
                    roman ve daha birçok türde en beğenilen 
                    kitaplar sizler için burada toplanmıştır.
                    Kitap kapaklarına tıklayarak, her 
                    kitabın detaylı tanıtım yazılarını 
                    rahatlıkla okuyabilirsiniz. Bu yazılarda, 
                    kitapların konusu, karakterleri ve temaları 
                    hakkında bilgi sahibi olabilirsiniz. 
                    Beğendiğiniz kitapları keşfettikten sonra, 
                    her tanıtım yazısının altında yer alan butona 
                    tıklayarak kolaylıkla satın alma işlemini 
                    gerçekleştirebilirsiniz. Satın alma süreci 
                    hızlı ve güvenlidir, böylece favori 
                    kitaplarınıza hemen kavuşabilirsiniz.
                    Okuma keyfinizi artırmak ve kitap 
                    koleksiyonunuzu genişletmek için mükemmel 
                    bir fırsat sunuyoruz. Her türden kitap 
                    severin ilgisini çekecek eserler burada 
                    sizleri bekliyor.
                  </p>
                </div>
            </div>
          </div>
          <div className={classes.kategoriListContainer}>
            
          </div>
        </div>
    </div>
  )
}

export default Home;
