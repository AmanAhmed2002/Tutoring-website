from django.contrib import admin
from .models import Resource

class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'grade', 'link')  # Customize columns shown in the admin list
    list_filter = ('category', 'grade')  # Enable filtering by category and grade
    search_fields = ('title', 'description')  # Enable search by title and description

    # If you want to customize how individual fields are displayed in the form:
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'file', 'category', 'grade', 'link')
        }),
    )

    # Optionally add more customization here, like setting 'date_hierarchy' for date fields

admin.site.register(Resource, ResourceAdmin)

