{{/*
Helper template for application labels
*/}}
{{- define "www-techgarden-gg.labels" -}}
app.kubernetes.io/name: {{ .Chart.Name }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Helper template for ingress host rules
*/}}
{{- define "www-techgarden-gg.ingress.hosts" -}}
{{- range .Values.ingress.hosts }}
- host: {{ .host }}
  http:
    paths:
      {{- range .paths }}
      - path: {{ .path }}
        pathType: {{ .pathType }}
        backend:
          service:
            name: {{ $.Release.Name }}-service
            port:
              number: {{ $.Values.service.port }}
      {{- end }}
{{- end }}
{{- end }}
