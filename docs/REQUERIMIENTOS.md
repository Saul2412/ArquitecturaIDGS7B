Requerimientos del Proyecto: UrbanAlert
1. Requerimientos Funcionales (FRs)
(Estos se mantienen igual que en la versión anterior)

Reporte de Incidentes: El sistema debe permitir crear alertas con geolocalización y foto.

Visualización en Mapa: Mostrar pines de alertas activas en un mapa interactivo.

Notificaciones: Enviar alertas push a usuarios en un radio de 2km.

Gestión (Admin): Permitir cambiar el estado de un reporte (ej. Resuelto).

Historial: Visualización de mis reportes pasados.

2. Requerimientos No Funcionales (NFRs) - Atributos de Calidad
Seleccionados de la lista de definiciones provista:

Fiabilidad (Subcaracterística: Disponibilidad)

Definición: Capacidad del sistema de estar operativo y accesible cuando se requiere.

Medición: "El sistema UrbanAlert debe garantizar una disponibilidad del 99.9% durante eventos climáticos críticos, permitiendo un tiempo máximo de inactividad no planificada de 5 minutos por mes."

Flexibilidad (Subcaracterística: Escalabilidad)

Definición: Capacidad del producto para gestionar cargas de trabajo crecientes.

Medición: "El backend debe ser capaz de escalar automáticamente para procesar un aumento del 300% en el tráfico de datos (de 100 a 400 peticiones por segundo) sin degradar el tiempo de respuesta, en caso de un desastre masivo."

Seguridad (Subcaracterística: Integridad)

Definición: Garantizar que los datos están protegidos frente a modificaciones no autorizadas.

Medición: "El sistema debe mantener un registro de auditoría (logs) inmutable del 100% de los cambios de estado de los reportes (de 'Abierto' a 'Resuelto'), asegurando que solo los administradores autenticados puedan realizar dichas modificaciones."

3. Conflicto de Interés (Justificación)
Atributo elegido: Fiabilidad (Disponibilidad) sobre Seguridad extrema.

Para el equipo de UrbanAlert, hemos determinado que la Fiabilidad (específicamente la Disponibilidad) es el atributo más crítico, priorizándolo sobre niveles extremos de Seguridad (como bloqueos biométricos complejos o sesiones cortas).

Justificación: Basándonos en la definición de Fiabilidad, nuestro objetivo principal es que el sistema esté "operativo y accesible cuando se requiere". En una situación de emergencia urbana (un accidente o un crimen en curso), si el usuario no puede acceder a la app inmediatamente (alta disponibilidad) o si el sistema falla al intentar subir el reporte (ausencia de fallos), la aplicación pierde su propósito de salvar vidas o bienes. Si bien la Seguridad es necesaria para evitar spam, priorizamos que la app nunca se caiga y esté siempre lista para recibir la alerta, aunque eso signifique usar métodos de autenticación más sencillos y rápidos.

saul