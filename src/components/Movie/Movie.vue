<template lang="pug">
  .movie
    error(v-if='error', :error='error')

    loader(v-if='loading')

    .container(v-if='!error && !loading')
      .movie__bg(:style='{ backgroundImage: `url(${poster})`}')
      
      .row
        .movie__content-wrapper
          main.movie__content
            img.movie__img(
                :src='poster',
                :alt='movie.Title',
                width='300',
                @error='imageHandlerError',
              )
            
            h1.movie__title(v-if='isExist(movie.Title)')
            
            .movie__params(v-if='isExist(movie.Runtime, movie.Language, movie.Type)')
              p.movie__params-text(v-if='isExist(movie.Type)')
                | {{ movie.Type }}
              
              p.movie__params-text(v-if='isExist(movie.Language)')
                | {{ movie.Language }}

              p.movie__params-text(v-if='isExist(movie.Runtime)')
                | {{ movie.Runtime }}
                
            P.movie__text.movie__text--marked(v-if='isExist(movie.Genre)')
              | {{ movie.Genre }}
              
            ul.movie__participants(v-if='isExist(movie.Writer, movie.Production, movie.Director, movie.Actors)')
              li.movie__text(v-if='isExist(movie.Writer)')
                | Writer: {{ movie.Writer }}
              
              li.movie__text(v-if='isExist(movie.Production)')
                | Production: {{ movie.Production }}
              
              li.movie__text(v-if='isExist(movie.Director)')
                | Director: {{ movie.Director }}
              
              li.movie__text(v-if='isExist(movie.Actors)')
                | Actors: {{ movie.Actors }}
            
            p.movie__description(v-if='isExist(movie.Plot)')
              | {{ movie.Plot }}
        
        .movie__sidebar-wrapper
          aside.movie__sidebar
            address.movie__contacts(v-if='isExist(movie.Country, movie.Website)')
              a.movie__link(:href='movie.Website', v-if='isExist(movie.Website)')
                | Official Page
                
              p.movie__text(v-if='isExist(movie.Country)')
                | {{ movie.Country }}
            
            p.movie__text.movie__text--marked(v-if='isExist(movie.BoxOffice)')
              | Box Office: {{ movie.BoxOffice }}
          
            p.movie__text.movie__text--marked(v-if='isExist(movie.Awards)')
              | Awards: {{ movie.Awards }}
            
            ul.movie__participants(v-if='isExist(movie.Released, movie.DVD)')
              li.movie__text(v-if='isExist(movie.Released)')
                time(datetime='movie.Released') 
                  | Released: {{ movie.Released }}
                  
              li.movie__text(v-if='isExist(movie.DVD)')
                time(datetime='movie.DVD') 
                  | Released on DVD: {{ movie.DVD }}

            ul.movie__participants(v-if='isExist(movie.imdbRating, movie.Rated, movie.Metascore, movie.Awards)')
              li.movie__text.movie__text--marked(v-if='isExist(movie.imdbRating)')
                | IMDB Rating: {{ movie.imdbRating }}          
                
              li.movie__text.movie__text--marked(v-if='isExist(movie.Rated)')
                | Rated: {{ movie.Rated }}                    
                
              li.movie__text.movie__text--marked(v-if='isExist(movie.Metascore)')
                | Metascore: {{ movie.Metascore }}          
            
            ul.movie__participants(v-if='movie.Ratings && movie.Ratings.length')
              li.movie__text(v-for='(index, key) in movie.Ratings', :key='key')      
                | {{ index.Source }} {{ index.Value }}
</template>

<script src="./Movie.js"></script>

<style src="./Movie.styl" lang="scss"></style>
