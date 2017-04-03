from django.db import models

# Create your models here.
class Restaurant(models.Model):
    r_gruop = models.CharField(max_length = 20)
    r_name = models.CharField(max_length = 20)
    r_call = models.CharField(max_length = 20)

    def __str__(self):
        return "%s %s" %(self.r_name, self.r_call)


class Menu(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    m_name = models.CharField(max_length = 20)
    m_price = models.CharField(max_length = 10)

    def __str__(self):
        return "%s %s %s" %(self.restaurant, self.m_name, self.m_price)
