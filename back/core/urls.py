from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authentication/', include('apps.authentication.urls')), #TODO: solo para listar users mediante DRF
    path('accounts/', include('allauth.urls')),
    path('auth/', include('dj_rest_auth.urls')),
    path('registration/', include('dj_rest_auth.registration.urls')),
]

if settings.DEBUG:
    urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
