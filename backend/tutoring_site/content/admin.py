from django.contrib import admin
from .models import Resource
from django.utils.html import format_html
from django.contrib.admin.sites import AdminSite
from django.contrib.staticfiles.storage import staticfiles_storage


class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'grade', 'file_link', 'video_link')  # Added video link
    list_filter = ('category', 'grade')  # Enable filtering by category and grade
    search_fields = ('title', 'description')  # Enable search by title and description

    # Customizing how individual fields are displayed in the form:
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'file', 'category', 'grade', 'link', 'is_video')
        }),
    )

    def file_link(self, obj):
        if obj.file:
            return format_html('<a href="{}" target="_blank">Download</a>', obj.file.url)
        return "No file"

    file_link.short_description = 'File Link'

    def video_link(self, obj):
        if obj.is_video and obj.link:
            return format_html('<a href="{}" target="_blank">Watch Video</a>', obj.link)
        return "No Video"

    video_link.short_description = 'Video Link'


# Customizing the Admin Site
class MyAdminSite(AdminSite):
    site_header = "Elevate IQ Admin Panel"
    site_title = "Elevate IQ Admin"
    index_title = "Welcome to Elevate IQ Admin"

    # Linking custom CSS for dark mode
    def each_context(self, request):
        context = super().each_context(request)
        context['custom_css'] = staticfiles_storage.url('css/admin_dark_mode.css')
        return context


# Register the Resource model with the custom admin site
admin_site = MyAdminSite(name='myadmin')
admin.site.register(Resource, ResourceAdmin)
