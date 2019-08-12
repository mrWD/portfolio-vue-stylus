<template lang="pug">
  router-link.card(:to='`/movie/${movie.imdbID}`')
    img.card__img(
        :src='movie.Poster', 
        :alt='`${movie.Title} ${movie.Year}`', 
        width='300', 
        @error='imageHandlerError'
      )

    .card__info
      h2.card__title {{ movie.Title }}

      .card__additional
        time.card__year {{ movie.Year }}

        p.card__year {{ movie.Type }}

</template>

<script src="./Card.ts" lang="ts"></script>

<style src="./Card.styl" lang="stylus"></style>
