<template>
  <div class="">
    <div class="movie">
      <error v-if="error" :error="error"></error>

      <loader v-if="loading"></loader>

      <div class="container" v-if="!error && !loading">
        <div class="movie__bg" :style="{ backgroundImage: `url(${poster})`}"></div>

        <div class="row">
          <div class="movie__content-wrapper">
            <main class="movie__content">
              <img
                class="movie__img"
                :src="poster"
                :alt="movie.Title"
                width="300"
                @error="imageHandlerError"
              >

              <h1
                class="movie__title"
                v-if="isExist(movie.Title)"
                >
                {{ movie.Title }}
              </h1>

              <div
                class="movie__params"
                v-if="isExist(movie.Runtime, movie.Language, movie.Type)"
                >
                <p
                  class="movie__params-text"
                  v-if="isExist(movie.Type)"
                  >
                  {{ movie.Type }}
                </p>

                <p
                  class="movie__params-text"
                  v-if="isExist(movie.Language)"
                  >
                  {{ movie.Language }}
                </p>

                <p
                  class="movie__params-text"
                  v-if="isExist(movie.Runtime)"
                  >
                  {{ movie.Runtime }}
                </p>
              </div>

              <p
                class="movie__text movie__text--marked"
                v-if="isExist(movie.Genre)"
                >
                {{ movie.Genre }}
              </p>

              <ul
                class="movie__participants"
                v-if="isExist(movie.Writer, movie.Production, movie.Director, movie.Actors)">
                <li
                  class="movie__text"
                  v-if="isExist(movie.Writer)"
                  >
                  Writer: {{ movie.Writer }}
                </li>

                <li
                  class="movie__text"
                  v-if="isExist(movie.Production)"
                  >
                  Production: {{ movie.Production }}
                </li>

                <li
                  class="movie__text"
                  v-if="isExist(movie.Director)"
                  >
                  Director: {{ movie.Director }}
                </li>

                <li
                  class="movie__text"
                  v-if="isExist(movie.Actors)"
                  >
                  Actors: {{ movie.Actors }}
                </li>
              </ul>

              <p
                class="movie__description"
                v-if="isExist(movie.Plot)"
                >
                {{ movie.Plot }}
              </p>
            </main>
          </div>

          <div class="movie__sidebar-wrapper">
            <aside class="movie__sidebar">
              <address class="movie__contacts" v-if="isExist(movie.Country, movie.Website)">
                <a
                  class="movie__link"
                  :href="movie.Website"
                  v-if="isExist(movie.Website)"
                  >
                  Official Page
                </a>

                <p
                  class="movie__text"
                  v-if="isExist(movie.Country)"
                  >
                  {{ movie.Country }}
                </p>
              </address>

              <p
                class="movie__text movie__text--marked"
                v-if="isExist(movie.BoxOffice)"
                >
                Box Office: {{ movie.BoxOffice }}
              </p>

              <p
                class="movie__text movie__text--marked"
                v-if="isExist(movie.Awards)"
                >
                Awards: {{ movie.Awards }}
              </p>

              <ul
                class="movie__participants"
                v-if="isExist(movie.Released, movie.DVD)"
                >
                <li
                  class="movie__text"
                  v-if="isExist(movie.Released)"
                  >
                  <time>Released: {{ movie.Released }}</time>
                </li>

                <li
                  class="movie__text"
                  v-if="isExist(movie.DVD)"
                  >
                  <time>Released on DVD: {{ movie.DVD }}</time>
                </li>
              </ul>

              <ul
                class="movie__participants"
                v-if="isExist(movie.imdbRating, movie.Rated, movie.Metascore, movie.Awards)"
                >
                <li
                  class="movie__text movie__text--marked"
                  v-if="isExist(movie.imdbRating)"
                  >
                  IMDB Rating: {{ movie.imdbRating }}
                </li>

                <li
                  class="movie__text movie__text--marked"
                  v-if="isExist(movie.Rated)"
                  >
                  Rated: {{ movie.Rated }}
                </li>

                <li
                  class="movie__text movie__text--marked"
                  v-if="isExist(movie.Metascore)"
                  >
                  Metascore: {{ movie.Metascore }}
                </li>
              </ul>

              <ul
                class="movie__participants"
                v-if="movie.Ratings && movie.Ratings.length"
                >
                <li
                  class="movie__text"
                  v-for="(index, key) in movie.Ratings"
                  :key="key"
                  >
                  {{ index.Source }}
                  {{ index.Value }}
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Movie.js"></script>

<style src="./Movie.styl" lang="scss"></style>
