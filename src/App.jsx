import React from 'react'
import HelloWorld from './components/HelloWorld'
const Movie = (props) => {
  const imgUrl = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`
  return (
    <li>
      {' '}
      <h3>{props.title}</h3>
      <div class="movie-image-and-caption">
        <img src={imgUrl} alt="Indiana Jones and the Last Crusade poster" />
        <p> {props.overview}</p>
      </div>
    </li>
  )
}
const App = () => {
  return (
    <div>
      <header>
        {' '}
        <main>
          <h1> Party like its 1989</h1>
        </main>
      </header>
      <article>
        <ul class="movies">
          <Movie
            title="Indiana Jones and the Last Crusade"
            poster_path="/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg"
            overview="When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life."
          />
          <Movie
            title="The Gods Must Be Crazy II"
            poster_path="zdKMqYiy7s5eyITRf9Q19WtyBxQ.jpg"
            overview="Xixo is back again. This time, his children accidentally stow
            away on a fast-moving poachers' truck, unable to get off, and
            Xixo sets out to rescue them. Along the way, he encounters a
            couple of soldiers trying to capture each other and a pilot and
            passenger of a small plane, who are each having a few problems
            of their own."
          />
          <Movie
            title="Dead Poets Society"
            poster_path="3Ri2GReavqSHqWemlP6HYn8i2P9.jpg"
            overview="At an elite, old-fashioned boarding school in New England, a
            passionate English teacher inspires his students to rebel
            against convention and seize the potential of every day,
            courting the disdain of the stern headmaster."
          />
        </ul>
      </article>
      <footer> Because every year sucks I guess</footer>
    </div>
  )
}

export default App
