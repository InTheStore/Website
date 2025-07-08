from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
# router.register(r'drinks', views.DrinkViewSet, basename='drink')
router.register(r'drinks', views.DrinkViewSet, basename='drink')

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path('', include(router.urls)),
]