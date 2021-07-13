from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('campain', index),
    path('npc', index),
    path('lands', index),
    path('lands/<int:pk>', index),
    path('lands/add', index),
    
]