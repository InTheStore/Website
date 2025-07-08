from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Drink
import json
# Create your tests here.
class MenuItemAPITestCase(APITestCase):
    def test_get_Coffee_Tea_only(self):
        """Test API returns only drink items when filtering by drinks"""
        url = '/api/drinks/'  # Replace with your actual URL name
        response = self.client.get(url, {'type': 'Coffee and Tea'})

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        data = response.json()

        for item in data:
            self.assertEqual(item['cafetype'], 'Coffee and Tea')

        for item in data:
            self.assertNotIn(item['cafetype'], ['Boba', 'Juices'])

    def test_get_Boba_only(self):
        """Test API returns only drink items when filtering by drinks"""
        url = '/api/drinks/'  # Replace with your actual URL name
        response = self.client.get(url, {'type': 'Boba'})

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        data = response.json()

        for item in data:
            self.assertEqual(item['cafetype'], 'Boba')

        for item in data:
            self.assertNotIn(item['cafetype'], ['Coffee and Tea', 'Juices'])