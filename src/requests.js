const APIKEY = "a151760c71666280c59ece426483b208";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${APIKEY}`,
  fetchpopularmovies: `/movie/popular?api_key=${APIKEY}&page=1`,
  fetchtopratedmovies: `/movie/top_rated?api_key=${APIKEY}&page=1`,
  fetchratedshows: `/tv/top_rated?api_key=${APIKEY}&page=1`,
  fetchpopularshows: `/tv/popular?api_key=${APIKEY}&page=1`,
  fetchtvshowtrailer: `/tv/{tv_id}/similar?api_key=${APIKEY}&page=1`,
  fetchupcoming: `/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`,
  fetchpopularhindi: `/movie/popular?api_key=${APIKEY}&page=1&with_original_language=hi`,
  fetchpopulartvhindi: `/tv/popular?api_key=${APIKEY}&page=1&with_original_language=hi`,
  fetchratedhindishows: `/tv/top_rated?api_key=${APIKEY}&page=1&with_original_language=hi`,
};

export default requests;
