from rest_framework import serializers
from .models import Resource

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = [
            'id',
            'title',
            'description',
            'file',
            'category',
            'grade',
            'link',
            'is_video',  # New field for indicating if the resource is a video
            'video_url'  # New field for the video link
        ]

    file = serializers.FileField(use_url=True)
