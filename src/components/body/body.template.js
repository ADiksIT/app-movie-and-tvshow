/* eslint-disable camelcase */
function createTVCard(data) {
  const {
    id,
    title,
    vote_average,
    poster_path,
    backdrop_path,
    release_date,
  } = data;

  return `
  	<li class="tv-shows__item">
  		<a href="#tv/${id}" class="tv-card" data-tv="${id}">
			  <span class="tv-card__vote">${vote_average}</span>
			  <span class="tv-card__date">${release_date}</span>
  			<img class="tv-card__img"
  				src="https://image.tmdb.org/t/p/w500${poster_path}"
  				data-backdrop="https://image.tmdb.org/t/p/w185_and_h278_bestv2${backdrop_path}"
  				alt="${title}">
  			<h4 class="tv-card__head">${title}</h4>
  		</a>
  	</li>
  	`;
}

function renderCards(length, data) {
  return data.map((element) => createTVCard(element)).join(' ');
}

export function createBody(data) {
  return `
	<div class="container">
		<section class="tv-shows">
			<h3 class="tv-shows__head">Популярное за неделю</h3>
			<ul class="tv-shows__list">
				${renderCards(20, data.results)}
			</ul>
		</section>
	</div>
	`;
}
