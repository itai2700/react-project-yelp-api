const apiKey =
  'PmvenwXQ-UxuWnH5Ncq5qP4JhrO6UQYi0zsmLOkvQhNoYoylwWzYRhA3Iip409M8wqYppAr4bF29FEkmexDdFE9fvNLum97VuV6k9TKYcDusNeK3GCagI_c3rsCSXnYx';

//This object will store the functionality needed to interact with the Yelp API
const Yelp = {
  //This method will retrieve search results from the Yelp API,
  //it accepts 3 parameters: term, location, sortBy that will be interpolated in the yelp API fetch request.

  search(term, location, sortBy) {
    //retrieving businesses information from the yelp api
    return (
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
        // Handling the http response
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          //checks to see if jsonResponse has a businesses key
          if (jsonResponse.businesses) {
            //return an array that has all of the business properties
            return jsonResponse.businesses.map((business) => {
              return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
              };
            });
          } else {
            //Error handling in case that there are no results
            alert('No Results found');
            return [];
          }
        })
    );
  },
};

export default Yelp;
