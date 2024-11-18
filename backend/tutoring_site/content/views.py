from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from .models import Resource
from .serializers import ResourceSerializer

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    filter_backends = (DjangoFilterBackend,)  # Use DjangoFilterBackend
    filterset_fields = ['category', 'grade']  # Specify which fields should be filterable
