from django.db import models

# Create your models here.
# reflect entities to DB
# python3 manage.py makemigrations
# python3 manage.py migrate

class Task(models.Model):
    # name
    name = models.CharField(max_length=128)
    # review
    review = models.TextField()
    # due date
    due_date = models.DateTimeField()
    # assigned_date
    created_at = models.DateTimeField(auto_now_add=True)


