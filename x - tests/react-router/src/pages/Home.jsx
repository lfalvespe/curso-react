import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
  return (
    <div className='home'>

      <div className="title">
        <h1>Home</h1>
      </div>

      <main>

        <article>
          <h4><img src="news.png" alt="" />News</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto expedita possimus dolore iure ab inventore ea laudantium quaerat nemo laborum eius vel error, reiciendis facere similique omnis ducimus, nihil culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem vel debitis numquam eligendi, sapiente illo alias? Molestias eligendi omnis asperiores assumenda doloribus ratione odio, recusandae, culpa perferendis animi dolores!
          </p>
        </article>

        <section>
          <div className="promoTitle">
            <h3><img src="promo.png" alt="" /> on sale</h3>
          </div>
          <p>
            Gaming monitor
          </p>
          <p><Link to='/'><img src="products/1.png" alt="" /></Link></p>
          <p>R$ 685</p>
        </section>
        <section>
          <div className="promoTitle">
            <h3><img src="promo.png" alt="" /> on sale</h3>
          </div>
          <p>
            Gaming keyboard
          </p>
          <p><Link to='/'><img src="products/2.png" alt="" /></Link></p>
          <p>R$ 320</p>
        </section>
        <section>
          <div className="promoTitle">
            <h3><img src="promo.png" alt="" /> on sale</h3>
          </div>
          <p>
            Gaming headset
          </p>
          <p><Link to='/'><img src="products/3.png" alt="" /></Link></p>
          <p>R$ 345</p>
        </section>
        <section>
          <div className="promoTitle">
            <h3><img src="promo.png" alt="" /> on sale</h3>
          </div>
          <p>
            Gaming mouse
          </p>
          <p><Link to='/'><img src="products/4.png" alt="" /></Link></p>
          <p>R$ 180</p>
        </section>

        <section className='advice'>
          <img src="support.png" alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero vero nobis repellat magnam iste debitis accusantium blanditiis recusandae sint ratione molestiae placeat quo sapiente sit eveniet, ex illo, tenetur itaque.
          </p>
        </section>


        <aside>
          <div><img src="/products/6.png" alt="" /></div>
          <div>
            <h3>Destaque:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem voluptatum error? Consequuntur debitis voluptatum, perspiciatis.
            </p>
          </div>
        </aside>

      </main>

    </div>
  )
}

export default Home