<template>
  <router-link
    class="card"
    :to="`/movie/${movie.imdbID}`"
    >
    <img
      class="card__img"
      :src="movie.Poster"
      :alt="`${movie.Title} ${movie.Year}`"
      width="300"
      @error="imageHandlerError"
    />

    <div class="card__info">
      <h2 class="card__title">{{ movie.Title }}</h2>

      <div class="card__additional">
        <time class="card__year">{{ movie.Year }}</time>

        <p class="card__year">{{ movie.Type }}</p>
      </div>
    </div>
  </router-link>
</template>

<script src="./Card.js"></script>

<style src="./Card.styl" lang="scss"></style>
