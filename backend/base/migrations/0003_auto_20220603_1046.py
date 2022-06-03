# Generated by Django 3.2.13 on 2022-06-03 04:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_auto_20220603_0112'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='renthome',
            name='home',
        ),
        migrations.AddField(
            model_name='renthome',
            name='rentHome',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='rentHome', to='base.home'),
        ),
    ]
