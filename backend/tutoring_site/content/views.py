from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Resource
from .serializers import ResourceSerializer

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    filter_backends = (DjangoFilterBackend,)  # Use DjangoFilterBackend
    filterset_fields = ['category', 'grade']  # Specify which fields should be filterable

@csrf_exempt
def contact_us(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            phone = data.get('phone', 'Not Provided')  # Optional field
            message = data.get('message')

            # Construct the email content
            subject = f"New Contact Us Submission from {name}"
            email_message = f"""
            You have received a new message from Elevate IQ's Contact Us form.

            Name: {name}
            Email: {email}
            Phone: {phone}
            Message: {message}
            """

            # Send the email
            send_mail(
                subject,
                email_message,
                'elevateiqtutor@gmail.com',  # Replace with your email
                ['elevateiqtutor@gmail.com'],  # Recipient email
                fail_silently=False,
            )

            return JsonResponse({"message": "Email sent successfully!"}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method."}, status=400)
