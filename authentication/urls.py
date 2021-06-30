from django.urls import path
from frontend.views import *

urlpatterns = [
    path('login', index),
    path('create-user', index)
]