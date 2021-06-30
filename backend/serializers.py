from rest_framework import serializers
from backend.models import LandModel, CityModel, NpcModel

class LandModelSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    s_descr = serializers.CharField(max_length=300)
    l_desc = serializers.CharField(style={'base_template':'textarea.html'})
    hashtags = serializers.CharField(max_length=200, required=False)
    date_added = serializers.DateTimeField()
    added_by = serializers.RelatedField()

    def create(self, validated_data):
        return LandModel.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name',instance.name)
        instance.s_descr = validated_data.get('s_descr',instance.s_descr)
        instance.l_descr = validated_data.get('l_descr',instance.l_descr)
        instance.hashtags = validated_data.get('hashtags',instance.hashtags)
        instance.save()
        return instance


class CityModelSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    s_descr = serializers.CharField(max_length=300)
    l_desc = serializers.CharField(style={'base_template':'textarea.html'})
    hashtags = serializers.CharField(max_length=200, required=False)
    land = serializers.RelatedField()
    date_added = serializers.DateTimeField()
    added_by = serializers.RelatedField()

    def create(self, validated_data):
        return CityModel.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name',instance.name)
        instance.s_descr = validated_data.get('s_descr',instance.s_descr)
        instance.l_descr = validated_data.get('l_descr',instance.l_descr)
        instance.hashtags = validated_data.get('hashtags',instance.hashtags)
        instance.land = validated_data.get('land', instance.land)
        instance.save()
        return instance

class NpcModelSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    avatar = serializers.ImaheField(max_length=100)
    s_descr = serializers.CharField(max_length=300)
    l_desc = serializers.CharField(style={'base_template':'textarea.html'})
    hashtags = serializers.CharField(max_length=200, required=False)
    city = serializers.RelatedField()
    date_added = serializers.DateTimeField()
    added_by = serializers.RelatedField()

    def create(self, validated_data):
        return NpcModel.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name',instance.name)
        instance.avatar = validated_data.get('avatar', instance.avatar)
        instance.s_descr = validated_data.get('s_descr',instance.s_descr)
        instance.l_descr = validated_data.get('l_descr',instance.l_descr)
        instance.hashtags = validated_data.get('hashtags',instance.hashtags)
        instance.city = validated_data.get('city', instance.city)
        instance.save()
        return instance