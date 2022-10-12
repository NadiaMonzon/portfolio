
function Presentation() {
    return(
    <section id='presentation' className="presentation">
        <h1 className="presentation__title">Hi! I'm Nadia!</h1>
        <div className="profile-photo"alt="Nadia"></div>
        <aside class="presentation__wrapper">
            
            <article>
                <h2 className="presentation__title">Nice to meet you!</h2>
                <p className="presentation__text">
                    I love taking on new challenges, that's why I've always been in constant development both professionally and personally. I'm a very curious person, motivated to get out of my comfort zone and eager to learn, which is partly why I signed up for the Web Programming Bootcamp. I'm a restless ass.
                </p>
            </article>
            
            <article>
                <h3 className="presentation__title">What technologies do I feel more comfortable with?</h3>
                <p className="presentation__text">
                    As for the front-end world, I feel especially comfortable working with React.js, I would love to learn more about CSS because you can do really awesome things, I want to learn more about web accessibility and also study about UX and UI.
                </p>
            </article>
            <article>
                <h3 className="presentation__title">What do I like to do in my free time?</h3>
                <p className="presentation__text">
                    I really enjoy spending time in nature, either hiking or going to beaches (if they are hidden, all the better). I also like baking and, some years ago, I could even dedicate myself to it for a couple of years in an unofficial way.
                </p>
            </article>
        </aside>

    </section>)
}
export default Presentation;