from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializers, NoteSerializer, CafeSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note, Drink
from rest_framework_mongoengine.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.response import Response

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    # all the users
    queryset = User.objects.all()
    # what kind of data to accept
    serializer_class = UserSerializers
    # allow anyone to use view
    permission_classes = [AllowAny]

class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class NoteDelete(generics.DestroyAPIView):
    # queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

# Duplicate as CoffeeViewSet 
# class DrinkViewSet(ModelViewSet):
#     permission_classes = [AllowAny]
#     lookup_field = 'id'
#     queryset = Drink.objects.all()
#     serializer_class = CafeSerializer

# can create a ReadWrite one for people with permissions
# autheticated maybe certain users if possible
class DrinkViewSet(ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    lookup_field = 'id'
    serializer_class = CafeSerializer
    def get_queryset(self):
        request = self.request
        cafe_type = request.GET.get('type')
        city = request.GET.get("city")
        sorting = request.GET.get("sort")
        queryset = Drink.objects.all()
        if cafe_type:
            queryset = queryset.filter(cafetype__icontains=cafe_type)
        if city:
            queryset = queryset.filter(Location__city__icontains = city)
        if sorting:
            queryset = queryset.order_by(sorting)
        
        return queryset
        # if cafe_type and city:
        #     return Drink.objects(cafetype =cafe_type, Location__city = city).order_by("name")
        # elif cafe_type:
        #     return Drink.objects(cafetype = cafe_type).order_by("name")
        # elif city:
        #     Drink.objects(Location__city = city).order_by("name")
        # return Drink.objects.all().order_by("name")
    