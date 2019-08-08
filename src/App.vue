<template lang="pug">
  #app
    header.header
      .container
        .header__container
          button.back-btn(type='button', @click='$router.go(-1)')
        
          form.search(@submit='fetchMovieList')
            .search__wrapper
              input.field(
                  type='text', 
                  v-model='searchInput', 
                  placeholder='Movie name'
                )
        
            .search__wrapper
              dropdown(
                  name='filterBy', 
                  :options='filterByList', 
                  placeholder='Filter by', 
                  @change='filter'
                )
        
            .search__wrapper
              dropdown(
                  name='sortBy', 
                  placeholder='Sort by', 
                  :options='sortByList', 
                  @change='sort'
                )
        
            .search__wrapper
              button.btn(type='submit')
                | Search
        
            p.search__text We found {{moviesList.length}} results
    
    router-view(:moviesList='moviesList')
</template>

<script src="./App.ts" lang="ts"></script>

<style src="./App.styl" lang="stylus"></style>
