# Generated by Django 3.2.13 on 2022-09-18 06:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0008_contactus'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('createdAt', models.DateTimeField(auto_now_add=True, null=True)),
                ('title', models.CharField(blank=True, max_length=600, null=True)),
                ('text', models.TextField(blank=True, null=True)),
                ('link', models.CharField(blank=True, max_length=600, null=True)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
