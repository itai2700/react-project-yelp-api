const apiKey =
  'PmvenwXQ-UxuWnH5Ncq5qP4JhrO6UQYi0zsmLOkvQhNoYoylwWzYRhA3Iip409M8wqYppAr4bF29FEkmexDdFE9fvNLum97VuV6k9TKYcDusNeK3GCagI_c3rsCSXnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        response.json();
      })
      .then((jsonResponse) => {});
  },
};
