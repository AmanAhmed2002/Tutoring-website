from django.contrib import admin
from .models import Resource
from django.utils.html import format_html

class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'grade', 'file_link')  # Customize columns shown in the admin list
    list_filter = ('category', 'grade')  # Enable filtering by category and grade
    search_fields = ('title', 'description')  # Enable search by title and description

    # Customizing how individual fields are displayed in the form:
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'file', 'category', 'grade', 'link')
        }),
    )

    def file_link(self, obj):
        if obj.file:
            return format_html('<a href="{}" target="_blank">Download</a>', obj.file.url)
        return "No file"

    file_link.short_description = 'File Link'

    # Optionally add more customization here, like setting 'date_hierarchy' for date fields

admin.site.register(Resource, ResourceAdmin)
