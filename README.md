# SafariTalk - Frontend Architecture

SafariTalk es una plataforma integral de aprendizaje de idiomas diseñada para conectar a estudiantes con tutores en sesiones en tiempo real. Este repositorio contiene la implementación del frontend, desarrollada con el objetivo de proporcionar una interfaz de usuario altamente reactiva, escalable e intuitiva.

> 💡 **Nota para el Reclutador:** Este repositorio contiene únicamente la aplicación de interfaz de usuario (Frontend). Puedes explorar la arquitectura, la API REST y la lógica de negocio en el **[Repositorio del Backend (Spring Boot) ⚙️](https://github.com/albertwork15-art/lenguage-platform)**.

La aplicación refleja un fuerte compromiso con las mejores prácticas de ingeniería de software modernas, centrándose en la modularidad, la optimización del rendimiento y la mantenibilidad a largo plazo.

## Stack Tecnológico

- **Framework:** Angular 18
- **Lenguaje:** TypeScript
- **Estilos:** Vanilla CSS (Diseño responsivo y utilidades a medida)
- **Gestión de Estado:** Angular Signals
- **Capa HTTP:** Angular HttpClient

## Arquitectura y Patrones de Diseño

La arquitectura del frontend está construida sobre un modelo estricto de desarrollo orientado a componentes, lo que garantiza una clara separación de responsabilidades (*Separation of Concerns*) y una alta reusabilidad del código.

### Conceptos Clave Implementados

1. **Gestión de Estado Reactivo:** La aplicación hace uso de *Angular Signals* para gestionar las mutaciones de estado de forma eficiente. Este enfoque minimiza los renderizados innecesarios y asegura un flujo de datos predecible a través del árbol de componentes.
2. **Capa de Servicios e Integración de API:** La lógica de negocio y la obtención de datos (*data fetching*) se abstraen en clases de servicio dedicadas. La aplicación se comunica de forma segura con la API REST del backend (Spring Boot) a través de una sólida capa HTTP, manejando operaciones asíncronas de forma estructurada.
3. **Sistema de Diseño Bento:** La interfaz de usuario implementa una estética de diseño moderna tipo "Bento". Esta estrategia de maquetación utiliza estructuras de cuadrícula (CSS Grid) responsivas para presentar información compleja (como perfiles de tutores y horarios disponibles) en un formato limpio y fácilmente legible.
4. **Arquitectura de Estilos Escalable:** Para mantener un control total sobre la identidad visual y optimizar el rendimiento, el proyecto prescinde de grandes librerías de estilos y utiliza Vanilla CSS. Un sistema de diseño centralizado encapsula clases de utilidad, variables globales para paletas de colores orgánicas y reglas de tipografía, estableciendo una apariencia cohesiva en todas las vistas.

## Funcionalidades Principales

- **Exploración Dinámica de Tutores:** Una cuadrícula responsiva que expone a los profesores de idiomas disponibles, la cual se actualiza de forma dinámica en base a los datos en tiempo real servidos por el backend.
- **Gestión de Perfiles:** Paneles interactivos que permiten a estudiantes y tutores administrar su información personal, medir sus métricas de progreso y ajustar sus franjas de disponibilidad.
- **Agendamiento de Sesiones:** Flujos de interfaz de usuario integrados para reservar, administrar y acceder cómodamente a las próximas tutorías.

## Configuración del Entorno de Desarrollo Local

Para configurar el entorno de desarrollo y ejecutar la aplicación en un entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone <url_del_repositorio>
   cd safaritalk-frontend
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```

La aplicación estará disponible en `http://localhost:4200/`. Para garantizar la integridad de los flujos de datos, la API REST del backend deberá encontrarse en ejecución simultáneamente en el puerto 8080.

## Estrategia de Testing

El proyecto está configurado para la ejecución de pruebas unitarias empleando el *runner* Vitest. Para ejecutar la suite de pruebas y validar el aislamiento de los componentes:

```bash
npm run test
```

## Próximos Pasos (Roadmap)

- Integración progresiva de pruebas *End-to-End* (e2e) para validar los recorridos de usuario más críticos.
- Análisis avanzado de rendimiento (*Performance Profiling*) para continuar reduciendo el peso del *bundle* inicial y optimizar las métricas de *Core Web Vitals*.
