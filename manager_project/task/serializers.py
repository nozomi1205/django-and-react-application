from rest_framework import serializers
from .models import Person

from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('name', 'review', 'due_date', 'created_at')