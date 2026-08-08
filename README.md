# SafariTalk - Frontend Architecture

Frontend web application for **SafariTalk**, a real-time language learning platform connecting students with professional tutors. This repository contains the client-side implementation, built to provide a highly reactive, scalable, and intuitive user interface.

*Note: This repository contains only the client-side application. The backend architecture, REST API design, and core business logic are located in the [SafariTalk Backend Repository](https://github.com/albertwork15-art/lenguage-platform).*

---

## Technical Stack
*   **Framework:** Angular 17+
*   **Language:** TypeScript
*   **State Management:** Angular Signals
*   **Styling:** Vanilla CSS (Custom design system and responsive utilities)
*   **Data Fetching:** Angular HttpClient

---

## Architecture & Design Principles

The frontend is constructed using a component-driven development model, ensuring strict separation of concerns and high component reusability.

### Core Implementation Patterns
1.  **Reactive State Management:** Utilizes *Angular Signals* to manage state mutations efficiently, minimizing change detection cycles and ensuring a predictable data flow through the component tree.
2.  **Service-Based API Integration:** Business logic and data fetching are abstracted into dedicated service classes. The application communicates with the Spring Boot backend REST API using HTTP client interceptors to handle asynchronous operations.
3.  **Modular CSS Design System:** Employs CSS Grid and Flexbox for responsive layouts, adhering to a centralized design system. Global variables manage color palettes, typography, and spacing to enforce visual consistency across all views.
4.  **Bento Grid Layout:** The user interface features a modern Bento design pattern to present complex information (such as tutor availability slots and profile metrics) in a clean, easily readable grid format.

---

## Key Features
*   **Tutor Discovery:** A responsive grid showing available language tutors, updated dynamically from the backend services.
*   **Profile Management:** Interactive dashboards for students and tutors to manage personal data, progress metrics, and calendar configurations.
*   **Lesson Booking:** Integrated UI flows to select available time slots and book tutor sessions.

---

## Local Setup & Development

### Prerequisites
*   Node.js (v18+ recommended)
*   npm (v9+ recommended)

### Steps to Run
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/albertwork15-art/safaritalk-frontend.git
    cd safaritalk-frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm start
    ```
    *The application will run on `http://localhost:4200/`. Ensure the backend service is running concurrently on port 8080.*

---

## Testing Strategy
The project is configured to run unit tests using the Vitest runner. To execute the test suite:
```bash
npm run test
```
