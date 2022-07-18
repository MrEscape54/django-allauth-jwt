from django.urls import path
from .views import UserListView

#TODO: esto es solo para listar usuarios en restframework
urlpatterns = [
    path('api/users', UserListView.as_view()),
]
