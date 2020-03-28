import React, { useEffect, useState } from 'react'
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
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=7a5c745b3d90a7b648e3adef4bad5137'
    )
      //returns a promise
      .then((response) => response.json())
      //returns another promise
      .then((apiData) => {
        const newMovies = apiData.results
        console.log(newMovies)
        setMovies(newMovies)
      })
  }, [])

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
          {movies.map((movie) => {
            return (
              <Movie
                title={movie.title}
                poster_path={movie.poster_path}
                overview={movie.overview}
              />
            )
          })}

          {/* <li>
            {' '}
            <h3>Indiana Jones and the Last Crusade</h3>
            <div class="movie-image-and-caption">
              <img
                src="https://image.tmdb.org/t/p/w185_and_h278_bestv2//4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg"
                alt="Indiana Jones and the Last Crusade poster"
              />
              <p>
                {' '}
                When Dr. Henry Jones Sr. suddenly goes missing while pursuing
                the Holy Grail, eminent archaeologist Indiana must team up with
                Marcus Brody, Sallah and Elsa Schneider to follow in his
                father's footsteps and stop the Nazis from recovering the power
                of eternal life.
              </p>
            </div>
          </li>
          <li>
            <h3> The Gods Must Be Crazy II</h3>
            <div class="movie-image-and-caption">
              <img
                src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/zdKMqYiy7s5eyITRf9Q19WtyBxQ.jpg"
                alt="The Gods Must Be Crazy II poster"
              />
              <p>
                Xixo is back again. This time, his children accidentally stow
                away on a fast-moving poachers' truck, unable to get off, and
                Xixo sets out to rescue them. Along the way, he encounters a
                couple of soldiers trying to capture each other and a pilot and
                passenger of a small plane, who are each having a few problems
                of their own.
              </p>
            </div>
          </li>
          <li>
            <h3>Dead Poets Society</h3>
            <div class="movie-image-and-caption">
              <img
                src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/3Ri2GReavqSHqWemlP6HYn8i2P9.jpg"
                alt="Dead Poets Society poster"
              />
              <p>
                At an elite, old-fashioned boarding school in New England, a
                passionate English teacher inspires his students to rebel
                against convention and seize the potential of every day,
                courting the disdain of the stern headmaster.{' '}
              </p>
            </div>
          </li> */}
        </ul>
      </article>
      <footer> Love 1989! </footer>
    </div>
  )
}

export default App
