from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_mongoengine import serializers as sd
from .models import Note, Drink

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        # no one can read the password
        extra_kwargs = {"password": {"write_only":True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only":True}}

class CafeSerializer(sd.DocumentSerializer):
    class Meta:
        model = Drink
        fields = ['id', 'cafetype', 'name', 'Location']
        read_only_fields = ['id', 'shoptype', 'name', 'address']
