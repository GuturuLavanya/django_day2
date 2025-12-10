from django.urls import path
from .views import ems,add_emp
urlpatterns=[
    path("",ems),
    path("api/create-emp/",add_emp)
    
]