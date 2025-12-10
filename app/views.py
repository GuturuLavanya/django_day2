from django.shortcuts import render
# from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

def ems(request):
    return render(request,"ems.html")
@api_view(["POST"])
def add_emp(request):
    data=request.data
    return Response({"msg":"data recieved successfully","data":data})
    # return JsonResponse({"msg":"data recieved successfully","data":data})
