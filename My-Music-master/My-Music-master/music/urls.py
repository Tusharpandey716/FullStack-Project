from django.urls import path
from . import views

app_name = 'music_app'  # Unique namespace

urlpatterns = [
    path('', views.index, name='index'),  # Ensure index view is linked with the empty path
    path('register/', views.register, name='register'),
    path('login_user/', views.login_user, name='login_user'),
    path('logout_user/', views.logout_user, name='logout_user'),
    path('<int:album_id>/', views.detail, name='detail'),
    path('<int:song_id>/favorite/', views.favorite, name='favorite'),
    path('songs/<str:filter_by>/', views.songs, name='songs'),
    path('create_album/', views.create_album, name='create_album'),
    path('<int:album_id>/create_song/', views.create_song, name='create_song'),
    path('<int:album_id>/delete_song/<int:song_id>/', views.delete_song, name='delete_song'),
    path('<int:album_id>/favorite_album/', views.favorite_album, name='favorite_album'),
    path('<int:album_id>/delete_album/', views.delete_album, name='delete_album'),
]
