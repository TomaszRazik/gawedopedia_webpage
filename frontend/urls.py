from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('campain', index),
    path('city', index),
    path('city/<int:pk>', index),
    path('city/add', index),
    path('npc', index),
    path('npc/<int:pk>', index),
    path('npc/add', index),
    path('lands', index),
    path('lands/<int:pk>', index),
    path('lands/add', index),
    
]