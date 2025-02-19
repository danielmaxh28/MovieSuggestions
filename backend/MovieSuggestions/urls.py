from django.urls import path
from . import views

urlpatterns = [
    path('api/recommendations/', views.get_movie_recommendations, name='movie-recommendations'),
]
