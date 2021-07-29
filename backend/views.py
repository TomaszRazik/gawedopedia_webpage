from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import CityModel, LandModel, NpcModel
from.serializers import LandModelModelSerializer, CityModelModelSerializer, NpcModelModelSerializer


# Create your views here.

@csrf_exempt
def land_model_list(request):
    if request.method == "GET":
        land_models = LandModel.objects.all()
        serializer = LandModelModelSerializer(land_models, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method =='POST':
        data = JSONParser().parse(request)
        serializer = LandModelModelSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def land_model_detail(request, pk):
    try:
        land_model = LandModel.objects.get(pk=pk)
    except LandModel.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == "GET":
        serializer = LandModelModelSerializer(land_model)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = LandModelModelSerializer(land_model, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        else:
            return JsonResponse(serializer.errors, status=400)

    elif request.method == "DELETE":
        land_model.delete()
        return HttpResponse(status=204)

        # return HttpResponseRedirect('http://localhost:8000/lands')
        # Niestety ta metoda przekierowania po usunięciu wpisu nie działa ze względu na certyfikaty CSRF
        # Błąd Django: Forbidden (CSRF cookie not set.): /lands

        
@csrf_exempt
def city_model_list(request):
    if request.method == 'GET':
        city_models = CityModel
        serializer = CityModelModelSerializer(city_models, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CityModelModelSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        else:
            return JsonResponse(serializer.errors, status = 400)

@csrf_exempt
def city_model_detail(request, pk):
    try:
        city_model = CityModel.objects.get(pk=pk)
    except CityModel.DoesNotExist:
        return HttpResponse(status = 404)

    if request.method == "GET":
        serializer = CityModelModelSerializer(city_model)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = CityModelModelSerializer(city_model, data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        else:
            return JsonResponse(serializer.errors, status = 400)

    elif request.method == "DELETE":
        city_model.delete()
        return HttpResponse(status = 204)

@csrf_exempt
def npc_model_list(request):
    if request.method == "GET":
        npc_models = NpcModel.objects.all()
        serializer = NpcModelModelSerializer(npc_models, many = True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = NpcModelModelSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        else:
            return JsonResponse(serializer.errors, status = 400)

@csrf_exempt
def npc_model_detail(request, pk):
    try:
        npc_model = NpcModel.objects.get(pk = pk)
    except NpcModel.DoesNotExist:
        return HttpResponse(status = 404)

    if request.method == "GET":
        serializer = NpcModelModelSerializer(npc_model)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = NpcModelModelSerializer(npc_model, data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        else:
            return JsonResponse(serializer.errors, status = 400)

    elif request.method == "DELETE":
        npc_model.delete()
        return HttpResponse(status = 204)