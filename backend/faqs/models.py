from django.db import models

# Create your models here.


class Faqs(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    question = models.CharField(max_length=200, null=True, blank=True)
    answer = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.question)

    def __unicode__(self):
        return self._id
