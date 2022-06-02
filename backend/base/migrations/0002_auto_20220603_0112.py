# Generated by Django 3.2.13 on 2022-06-02 19:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='home',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='home',
            name='no_kitchens',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='home',
            name='no_parkings',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='renthome',
            name='contact_email',
            field=models.EmailField(blank=True, max_length=600, null=True),
        ),
        migrations.AddField(
            model_name='renthome',
            name='contact_no',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='home',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='RenterHome',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('requestDate', models.DateTimeField(auto_now_add=True)),
                ('confirmDate', models.DateTimeField(auto_now_add=True)),
                ('rentHome', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.renthome')),
                ('renter', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
