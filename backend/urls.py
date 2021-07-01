from django.urls import path
from .views import *

urlpatterns = [
    path('lands/', land_model_list),
    path('lands/<int:pk>/', land_model_detail)
]