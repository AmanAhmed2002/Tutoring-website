from django.db import models

class Resource(models.Model):
    CATEGORY_CHOICES = [
        ('MATH', 'Math'),
        ('PHYSICS', 'Physics')
    ]
    GRADE_CHOICES = [
        ('GRADE_11', 'Grade 11'),
        ('GRADE_12', 'Grade 12'),
        ('CALCULUS', 'Calculus'),
        ('LINEAR_ALGEBRA', 'Linear Algebra')
    ]

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)  # Allows empty descriptions
    file = models.FileField(upload_to='uploads/', blank=True, null=True)  # Allows resources without a file
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)
    grade = models.CharField(max_length=100, choices=GRADE_CHOICES, blank=True, null=True)
    link = models.URLField(blank=True, null=True)  # Optional external link

    # New fields for videos
    is_video = models.BooleanField(default=False)  # Indicates if this resource is a video
    video_url = models.URLField(blank=True, null=True)  # YouTube or external video link

    def __str__(self):
        return f"{self.category}: {self.title} ({'Video' if self.is_video else 'Note'})"  # Improved representation
