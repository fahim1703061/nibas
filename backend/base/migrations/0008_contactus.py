# Generated by Django 3.2.13 on 2022-09-10 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_auto_20220906_1351'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('contact_email', models.EmailField(blank=True, max_length=600, null=True)),
                ('message', models.TextField(blank=True, null=True)),
                ('reply', models.TextField(blank=True, null=True)),
                ('checked', models.BooleanField(default=False)),
                ('contact_no', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
