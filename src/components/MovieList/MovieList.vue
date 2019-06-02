<template>
  <div class="container">
    <error v-if="error" :error="error"></error>

    <loader v-if="loading"></loader>

    <div class="row" v-if="!error && !loading">
      <div
        class="column"
        v-for="(movie, key) in moviesList"
        :key="key"
        >
        <card :movie="movie"></card>
      </div>
    </div>
  </div>
</template>

<script src="./MovieList.js"></script>
