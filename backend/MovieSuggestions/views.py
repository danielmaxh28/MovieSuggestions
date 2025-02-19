import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Replace with your TMDb API key
TMDB_API_KEY = 'YOUR_TMDB_API_KEY'

@api_view(['GET'])
def get_movie_recommendations(request):
    # Endpoint URL for fetching popular movies from TMDb
    url = f'https://api.themoviedb.org/3/movie/popular?api_key={TMDB_API_KEY}&language=en-US&page=1'
    
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for invalid responses (e.g., 404, 500)

        # Extract movie data from the response and return it to the frontend
        movie_data = response.json()['results']
        
        # You can modify this to fit the data structure you want to return to the frontend
        return Response(movie_data)

    except requests.exceptions.RequestException as e:
        # Handle any issues with the TMDb API request
        return Response({"error": "Failed to fetch data from TMDb API", "details": str(e)}, status=500)
