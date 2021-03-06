# Generated by Django 3.2.13 on 2022-05-31 04:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Home',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.CharField(blank=True, max_length=600, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('no_badrooms', models.IntegerField(blank=True, default=0, null=True)),
                ('no_bathrooms', models.IntegerField(blank=True, default=0, null=True)),
                ('square_footage', models.IntegerField(blank=True, default=0, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='RentHome',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('pricePerDuration', models.FloatField(blank=True, default=0, null=True)),
                ('duration', models.CharField(blank=True, max_length=200, null=True)),
                ('home', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.home')),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
