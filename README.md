# OSAlgo — Operating System Algorithms Visualizer 🖥️⚡

[![Live Demo](https://img.shields.io/badge/Live_Demo-OSAlgo_Visualizer-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://dhruv261d.github.io/OSAlgoVisualizer/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

An interactive, web-based educational visualizer built with **React 19** and **Vite** to simulate core operating system algorithms including CPU scheduling, page replacement, and memory management with real-time performance metric calculations.

---

## 🌟 Supported Algorithms & Metrics

### ⚙️ 1. CPU Scheduling Algorithms
Simulate process execution timelines and automatically compute **Waiting Time (WT)**, **Turnaround Time (TAT)**, and **Completion Time (CT)**:
* **First-Come, First-Served (FCFS)** (Non-preemptive)
* **Shortest Job First (SJF)** (Preemptive & Non-preemptive)
* **Round Robin (RR)** (Time-quantum based preemptive scheduling)
* **Priority Scheduling** (Preemptive & Non-preemptive)

### 📄 2. Page Replacement Algorithms
Visualize virtual memory management with step-by-step frame state transitions, tracking **Page Hits**, **Page Faults (Misses)**, and **Hit Ratios**:
* **First-In, First-Out (FIFO)**
* **Least Recently Used (LRU)**
* **Optimal Page Replacement (OPT)**

---

## 🚀 Key Features

- **Interactive Execution Control:** Step-by-step execution, dynamic speed adjustment, and live Gantt chart rendering.
- **Real-Time Analytics:** Instant calculation of average turnaround and waiting times with visual efficiency comparisons.
- **60 FPS Animation Engine:** Optimized state updates ensuring smooth rendering without UI frame drops.
- **Custom Process & Reference String Input:** Flexible user-defined burst times, arrival times, priorities, and page reference sequences.

---

## 🛠️ Technology Stack

- **Frontend:** React 19, JavaScript (ES6+), HTML5 Canvas, CSS3
- **Build Tool:** Vite
- **Deployment:** GitHub Pages (`gh-pages`)

---

## 📦 Local Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhruv261d/OSAlgoVisualizer.git
   cd OSAlgoVisualizer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production / deployment:
   ```bash
   npm run deploy
   ```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
