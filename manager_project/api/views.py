from django.shortcuts import render
from rest_framework import generics
from task.models import Task
from .serializers import TaskSerializer

class TaskApiView(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

# Create your views here.
