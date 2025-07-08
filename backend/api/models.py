from django.db import models
from django.contrib.auth.models import User
import mongoengine as me
# Create your models here.

class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title

class Location(me.EmbeddedDocument):
    meta = {'collection': 'cafes_test'} 
    address = me.StringField()
    city = me.StringField()
    state = me.StringField()
    zipcode = me.IntField()

class Drink(me.Document):
    meta = {'collection': 'cafes_test'} 
    name = me.StringField()
    Location = me.EmbeddedDocumentField(Location)
    cafetype = me.StringField()