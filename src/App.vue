<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header__container">
          <button class="back-btn" type="button" @click="$router.go(-1)"></button>

          <form class="search" @submit="fetchMovieList">
            <div class="search__wrapper">
              <input class="field" type="text" v-model="searchInput" placeholder="Movie name">
            </div>

            <div class="search__wrapper">
              <dropdown
                name="filterBy"
                :options="filterByList"
                placeholder="Filter by"
                @change="filter"
              />
            </div>

            <div class="search__wrapper">
              <dropdown
                name="sortBy"
                placeholder="Sort by"
                :options="sortByList"
                @change="sort"
              />
            </div>

            <div class="search__wrapper">
              <button class="btn" type="submit">
                Search
              </button>
            </div>

            <p class="search__text">We found {{moviesList.length}} results</p>
          </form>
        </div>
      </div>
    </header>

    <router-view :moviesList="moviesList"></router-view>
  </div>
</template>

<script src="./App.js"></script>

<style src="./App.styl"></style>
