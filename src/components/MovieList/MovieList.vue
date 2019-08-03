<template lang="pug">
  .container
    error(v-if='error', :error='error')

    loader(v-if='loading')

    .row(v-if='!error && !loading')
      .column(v-for='(movie, key) in moviesList', :key='key')
        card(:movie='movie')
</template>

<script src="./MovieList.js"></script>
