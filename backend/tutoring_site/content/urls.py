from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ResourceViewSet, contact_us

router = DefaultRouter()
router.register(r'resources', ResourceViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/contact/', contact_us, name='contact_us'),
]
