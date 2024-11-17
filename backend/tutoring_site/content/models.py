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
    description = models.TextField()
    file = models.FileField(upload_to='resources/')  # Assuming file storage for now
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    grade = models.CharField(max_length=20, choices=GRADE_CHOICES, blank=True, null=True)
    link = models.URLField(blank=True, null=True)  # For external resources

    def __str__(self):
        return self.title

