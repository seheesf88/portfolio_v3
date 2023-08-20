import React from 'react';
import './Home.scss';
import Header from '../Header'
import NavBar from '../NavBar'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <div className="home__body-sehee">
        <img src="./img/sehee_head.svg" alt="sehee" className="home__body-sehee-head" />
        <img src="./img/sehee_body.svg" alt="sehee" className="home__body-sehee-body" />
        </div>
      </div>
      <NavBar />
      <div className="hi">
      <section id="tim-vine">
        <article>
          <h2>Tim Vine</h2>
          <p>I said to the gym instructor: ‘Can you teach me to do the splits?’ He said: ‘How flexible are you?’ I said: ‘I can’t make Tuesdays.'</p>
          <p>I’ve decided to sell my Hoover – it was just collecting dust.</p>
          <p>I saw Arnold Schwarzenegger eating a chocolate egg. I said: ‘I bet I know what your favourite Christian festival is.’ He said: ‘You have to love Easter, baby.'</p>
          <p>I was reading a book – ‘The History of Glue’ – I couldn’t put it down.</p>
        </article>
      </section>
      <section id="bill-hicks">
        <article>
          <h2>Bill Hicks</h2>
          <p>I need my sleep. I need about eight hours a day, and about ten at night.</p>
          <p>I don't mean to sound bitter, cold, or cruel, but I am, so that's how it comes out.</p>
          <p>I never got along with my dad. Kids used to come up to me and say, "My dad can beat up your dad." I'd say "Yeah? When?"</p>
        </article>
      </section>
      <section id="stewart-francis">
        <article>
          <h2>Stewart Francis</h2>
          <p>There’s a fine line between hyphenated words.</p>
          <p>I used to be in a band called ‘Missing Cat’… you probably saw our posters.</p>
          <p>Have you ever imagined a world with no hypothetical situations?</p>
          <p>I was going to join the debating team, but somebody talked me out of it.</p>
        </article>
      </section>
      </div>
    </div>
  );
}

export default Home;
