import React, { useState, useEffect } from 'react';
import './theme.css';

const NAVIGATION_STRUCTURE = [
  {
    id: 'cpu',
    label: 'CPU SCHEDULING',
    items: ['fcfs', 'sjf', 'rr', 'priority', 'srtf', 'preemptivePriority', 'mlq', 'mlfq']
  },
  {
    id: 'page',
    label: 'PAGE REPLACEMENT',
    items: ['fifo', 'lru', 'optimal']
  }
];

// --- SECTION 1: ALGO_DATA ---
const ALGO_DATA = {
  fcfs: {
    title: 'First Come First Served (FCFS)',
    initials: 'FC',
    description: `First Come First Served (FCFS) is a non-preemptive scheduling algorithm where the process that requests the CPU first is allocated the CPU first. It is managed with a FIFO queue.

Logic Steps:
1. Sort the processes based on their Arrival Time (AT).
2. Start with the first process in the sorted list.
3. If the current time is less than the process's arrival time, wait (CPU Idle) until the process arrives.
4. The Completion Time (CT) is the current time plus the Burst Time (BT).
5. Calculate Turnaround Time (TAT) as Completion Time (CT) - Arrival Time (AT).
6. Calculate Waiting Time (WT) as Turnaround Time (TAT) - Burst Time (BT).
7. Update the current time to the Completion Time and repeat for all processes.`,
    best: 'N/A', average: 'Varies', worst: 'Convoy Effect', space: 'O(n)',
    code: {
      js: `// FCFS Scheduling Algorithm (Standalone Node.js)
    const proc = [
      { id: 1, at: 0, bt: 5 },
      { id: 2, at: 1, bt: 3 },
      { id: 3, at: 2, bt: 8 },
      { id: 4, at: 3, bt: 6 }
    ];

    function solveFCFS(p) {
      // Sort by Arrival Time
      p.sort((a, b) => a.at - b.at);

      let time = 0, totalWT = 0, totalTAT = 0, n = p.length;

      console.log("PID\\tAT\\tBT\\tCT\\tTAT\\tWT");
      
      p.forEach(process => {
        // If CPU is idle, jump to arrival time
        if (time < process.at) time = process.at;
        
        process.ct = time + process.bt;
        process.tat = process.ct - process.at;
        process.wt = process.tat - process.bt;
        
        time = process.ct;
        totalWT += process.wt;
        totalTAT += process.tat;

        console.log(\`\${process.id}\\t\${process.at}\\t\${process.bt}\\t\${process.ct}\\t\${process.tat}\\t\${process.wt}\`);
      });

      console.log(\`\\nAvg WT: \${(totalWT / n).toFixed(2)}\\nAvg TAT: \${(totalTAT / n).toFixed(2)}\`);
    }

    solveFCFS(proc);`,
      python: `# FCFS Scheduling Algorithm (Standalone Python)
    def solve_fcfs(p):
        # Sort by Arrival Time
        p.sort(key=lambda x: x['at'])
        
        time, total_wt, total_tat = 0, 0, 0
        n = len(p)

        print("PID\\tAT\\tBT\\tCT\\tTAT\\tWT")
        for process in p:
            # If CPU is idle, jump to arrival time
            if time < process['at']:
                time = process['at']
                
            process['ct'] = time + process['bt']
            process['tat'] = process['ct'] - process['at']
            process['wt'] = process['tat'] - process['bt']
            
            time = process['ct']
            total_wt += process['wt']
            total_tat += process['tat']
            
            print(f"{process['id']}\\t{process['at']}\\t{process['bt']}\\t{process['ct']}\\t{process['tat']}\\t{process['wt']}")

        print(f"\\nAvg WT: {total_wt/n:.2f}\\nAvg TAT: {total_tat/n:.2f}")

    data = [
        {'id': 1, 'at': 0, 'bt': 5},
        {'id': 2, 'at': 1, 'bt': 3},
        {'id': 3, 'at': 2, 'bt': 8},
        {'id': 4, 'at': 3, 'bt': 6}
    ]
    solve_fcfs(data)`,
      java: `import java.util.*;

    public class Main {
        static class Proc {
            int id, at, bt, ct, tat, wt;
            Proc(int i, int a, int b) { id=i; at=a; bt=b; }
        }

        public static void main(String[] args) {
            List<Proc> p = new ArrayList<>(Arrays.asList(
                new Proc(1, 0, 5), new Proc(2, 1, 3), 
                new Proc(3, 2, 8), new Proc(4, 3, 6)
            ));

            // Sort by Arrival Time
            p.sort(Comparator.comparingInt(process -> process.at));

            int time = 0;
            double totalWT = 0, totalTAT = 0;
            int n = p.size();

            System.out.println("PID\\tAT\\tBT\\tCT\\tTAT\\tWT");

            for (Proc process : p) {
                if (time < process.at) time = process.at;
                
                process.ct = time + process.bt;
                process.tat = process.ct - process.at;
                process.wt = process.tat - process.bt;
                
                time = process.ct;
                totalWT += process.wt;
                totalTAT += process.tat;

                System.out.println(process.id + "\\t" + process.at + "\\t" + process.bt + "\\t" + 
                                  process.ct + "\\t" + process.tat + "\\t" + process.wt);
            }

            System.out.printf("\\nAvg WT: %.2f\\nAvg TAT: %.2f\\n", totalWT / n, totalTAT / n);
        }
    }`,
      cpp: `#include <iostream>
    #include <vector>
    #include <algorithm>
    #include <iomanip>

    using namespace std;

    struct Proc {
        int id, at, bt, ct, tat, wt;
    };

    int main() {
        vector<Proc> p = {{1, 0, 5}, {2, 1, 3}, {3, 2, 8}, {4, 3, 6}};
        int n = p.size();

        // Sort by Arrival Time
        sort(p.begin(), p.end(), [](Proc a, Proc b) {
            return a.at < b.at;
        });

        int time = 0;
        float totalWT = 0, totalTAT = 0;

        cout << "PID\\tAT\\tBT\\tCT\\tTAT\\tWT" << endl;

        for (int i = 0; i < n; i++) {
            if (time < p[i].at) time = p[i].at;
            
            p[i].ct = time + p[i].bt;
            p[i].tat = p[i].ct - p[i].at;
            p[i].wt = p[i].tat - p[i].bt;

            time = p[i].ct;
            totalWT += p[i].wt;
            totalTAT += p[i].tat;

            cout << p[i].id << "\\t" << p[i].at << "\\t" << p[i].bt << "\\t" 
                << p[i].ct << "\\t" << p[i].tat << "\\t" << p[i].wt << endl;
        }

        cout << fixed << setprecision(2);
        cout << "\\nAvg WT: " << totalWT / n << "\\nAvg TAT: " << totalTAT / n << endl;

        return 0;
    }`,
      c: `#include <stdio.h>

    struct Proc {
        int id, at, bt, ct, tat, wt;
    };

    int main() {
        struct Proc p[] = {{1, 0, 5}, {2, 1, 3}, {3, 2, 8}, {4, 3, 6}};
        int n = 4, time = 0;
        float totalWT = 0, totalTAT = 0;

        // Bubble Sort for Arrival Time
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (p[j].at > p[j + 1].at) {
                    struct Proc temp = p[j];
                    p[j] = p[j + 1];
                    p[j + 1] = temp;
                }
            }
        }

        printf("PID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n");

        for (int i = 0; i < n; i++) {
            if (time < p[i].at) time = p[i].at;
            
            p[i].ct = time + p[i].bt;
            p[i].tat = p[i].ct - p[i].at;
            p[i].wt = p[i].tat - p[i].bt;
            
            time = p[i].ct;
            totalWT += p[i].wt;
            totalTAT += p[i].tat;
            
            printf("%d\\t%d\\t%d\\t%d\\t%d\\t%d\\n", p[i].id, p[i].at, p[i].bt, p[i].ct, p[i].tat, p[i].wt);
        }

        printf("\\nAvg WT: %.2f\\nAvg TAT: %.2f\\n", totalWT / n, totalTAT / n);

        return 0;
    }`
    }
  },
  sjf: {
    title: 'Shortest Job First (SJF)',
    initials: 'SJ',
    description: `Shortest Job First (SJF) is a non-preemptive scheduling policy that selects the process with the smallest execution time to execute next from the ready queue.

Logic Steps:
1. Maintain a list of processes and mark all as incomplete.
2. Initialize global time at 0.
3. At each step, find all processes that have arrived (AT <= current time) and are not completed.
4. From this subset, select the process with the smallest Burst Time (BT).
5. If no process has arrived, increment the global time to the arrival time of the next process.
6. Execute the selected process to completion: CT = current time + BT.
7. Calculate TAT (CT - AT) and WT (TAT - BT).
8. Update global time to CT and mark the process as completed. Repeat until all are finished.`,
    best: 'Optimal WT', average: 'Minimum', worst: 'Starvation', space: 'O(n)',
    code: {
      js: `// SJF Non-Preemptive Scheduling (Standalone Node.js)
    const proc = [
      { id: 1, at: 0, bt: 7 },
      { id: 2, at: 2, bt: 4 },
      { id: 3, at: 4, bt: 1 },
      { id: 4, at: 5, bt: 4 }
    ];

    function solveSJF(p) {
      let n = p.length, time = 0, completed = 0;
      let isDone = Array(n).fill(false);
      let totalWT = 0, totalTAT = 0;

      console.log("PID\\tAT\\tBT\\tCT\\tTAT\\tWT");
      while (completed < n) {
        let idx = -1, minBT = Infinity;
        for (let i = 0; i < n; i++) {
          if (p[i].at <= time && !isDone[i] && p[i].bt < minBT) {
            minBT = p[i].bt; idx = i;
          }
        }

        if (idx !== -1) {
          p[idx].ct = time + p[idx].bt;
          p[idx].tat = p[idx].ct - p[idx].at;
          p[idx].wt = p[idx].tat - p[idx].bt;
          time = p[idx].ct;
          isDone[idx] = true; completed++;
          totalWT += p[idx].wt; totalTAT += p[idx].tat;
          console.log(\`\${p[idx].id}\\t\${p[idx].at}\\t\${p[idx].bt}\\t\${p[idx].ct}\\t\${p[idx].tat}\\t\${p[idx].wt}\`);
        } else time++;
      }
      console.log(\`\\nAvg WT: \${(totalWT/n).toFixed(2)}\\nAvg TAT: \${(totalTAT/n).toFixed(2)}\`);
    }
    solveSJF(proc);`,
      python: `# SJF Non-Preemptive Scheduling (Standalone Python)
    def solve_sjf(p):
        n, time, completed = len(p), 0, 0
        is_done = [False] * n
        total_wt, total_tat = 0, 0

        print("PID\\tAT\\tBT\\tCT\\tTAT\\tWT")
        while completed < n:
            idx, min_bt = -1, float('inf')
            for i in range(n):
                if p[i]['at'] <= time and not is_done[i] and p[i]['bt'] < min_bt:
                    min_bt = p[i]['bt']
                    idx = i
            
            if idx != -1:
                p[idx]['ct'] = time + p[idx]['bt']
                p[idx]['tat'] = p[idx]['ct'] - p[idx]['at']
                p[idx]['wt'] = p[idx]['tat'] - p[idx]['bt']
                time = p[idx]['ct']
                is_done[idx] = True
                completed += 1
                total_wt += p[idx]['wt']
                total_tat += p[idx]['tat']
                print(f"{p[idx]['id']}\\t{p[idx]['at']}\\t{p[idx]['bt']}\\t{p[idx]['ct']}\\t{p[idx]['tat']}\\t{p[idx]['wt']}")
            else:
                time += 1
        print(f"\\nAvg WT: {total_wt/n:.2f}\\nAvg TAT: {total_tat/n:.2f}")

    data = [{'id': 1, 'at': 0, 'bt': 7}, {'id': 2, 'at': 2, 'bt': 4}, {'id': 3, 'at': 4, 'bt': 1}, {'id': 4, 'at': 5, 'bt': 4}]
    solve_sjf(data)`,
      java: `import java.util.*;
    public class Main {
        static class Proc { int id, at, bt, ct, tat, wt; boolean done;
            Proc(int i, int a, int b) { id=i; at=a; bt=b; } }
        public static void main(String[] args) {
            Proc[] p = {new Proc(1,0,7), new Proc(2,2,4), new Proc(3,4,1), new Proc(4,5,4)};
            int n=4, time=0, completed=0; double tWT=0, tTAT=0;
            System.out.println("PID\\tAT\\tBT\\tCT\\tTAT\\tWT");
            while(completed < n) {
                int idx = -1, minBT = Integer.MAX_VALUE;
                for(int i=0; i<n; i++) {
                    if(p[i].at <= time && !p[i].done && p[i].bt < minBT) {
                        minBT = p[i].bt; idx = i;
                    }
                }
                if(idx != -1) {
                    p[idx].ct = time + p[idx].bt;
                    p[idx].tat = p[idx].ct - p[idx].at;
                    p[idx].wt = p[idx].tat - p[idx].bt;
                    time = p[idx].ct; p[idx].done = true; completed++;
                    tWT += p[idx].wt; tTAT += p[idx].tat;
                    System.out.println(p[idx].id+"\\t"+p[idx].at+"\\t"+p[idx].bt+"\\t"+p[idx].ct+"\\t"+p[idx].tat+"\\t"+p[idx].wt);
                } else time++;
            }
            System.out.printf("\\nAvg WT: %.2f\\nAvg TAT: %.2f\\n", tWT/n, tTAT/n);
        }
    }`,
      cpp: `#include <iostream>
    #include <vector>
    #include <iomanip>
    using namespace std;
    struct Proc { int id, at, bt, ct, tat, wt; bool done = false; };
    int main() {
        vector<Proc> p = {{1,0,7}, {2,2,4}, {3,4,1}, {4,5,4}};
        int n=4, time=0, comp=0; float tWT=0, tTAT=0;
        cout << "PID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n";
        while(comp < n) {
            int idx = -1, minB = 9999;
            for(int i=0; i<n; i++) {
                if(p[i].at <= time && !p[i].done && p[i].bt < minB) { minB = p[i].bt; idx = i; }
            }
            if(idx != -1) {
                p[idx].ct = time + p[idx].bt;
                p[idx].tat = p[idx].ct - p[idx].at;
                p[idx].wt = p[idx].tat - p[idx].bt;
                time = p[idx].ct; p[idx].done = true; comp++;
                tWT += p[idx].wt; tTAT += p[idx].tat;
                cout<<p[idx].id<<"\\t"<<p[idx].at<<"\\t"<<p[idx].bt<<"\\t"<<p[idx].ct<<"\\t"<<p[idx].tat<<"\\t"<<p[idx].wt<<"\\n";
            } else time++;
        }
        cout<<fixed<<setprecision(2)<<"\\nAvg WT: "<<tWT/n<<"\\nAvg TAT: "<<tTAT/n<<endl;
        return 0;
    }`,
      c: `#include <stdio.h>
    struct Proc { int id, at, bt, ct, tat, wt, done; };
    int main() {
        struct Proc p[] = {{1,0,7,0,0,0,0}, {2,2,4,0,0,0,0}, {3,4,1,0,0,0,0}, {4,5,4,0,0,0,0}};
        int n=4, time=0, comp=0; float tWT=0, tTAT=0;
        printf("PID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n");
        while(comp < n) {
            int idx = -1, minB = 9999;
            for(int i=0; i<n; i++) {
                if(p[i].at <= time && !p[i].done && p[i].bt < minB) { minB = p[i].bt; idx = i; }
            }
            if(idx != -1) {
                p[idx].ct = time + p[idx].bt;
                p[idx].tat = p[idx].ct - p[idx].at;
                p[idx].wt = p[idx].tat - p[idx].bt;
                time = p[idx].ct; p[idx].done = 1; comp++;
                tWT += p[idx].wt; tTAT += p[idx].tat;
                printf("%d\\t%d\\t%d\\t%d\\t%d\\t%d\\n", p[idx].id, p[idx].at, p[idx].bt, p[idx].ct, p[idx].tat, p[idx].wt);
            } else time++;
        }
        printf("\\nAvg WT: %.2f\\nAvg TAT: %.2f\\n", tWT/n, tTAT/n);
        return 0;
    }`
    }
  },
  rr: {
    title: 'Round Robin (RR)',
    initials: 'RR',
    description: `Round Robin (RR) is a preemptive scheduling algorithm where each process is assigned a fixed time slice called a Time Quantum. 

Logic Steps:
1. Maintain a Ready Queue and store remaining burst times for all processes.
2. Push processes that arrive at time 0 into the Ready Queue.
3. While the Ready Queue is not empty:
   a. Dequeue the first process.
   b. Execute it for the Time Quantum or its remaining burst time (whichever is smaller).
   c. Update the global clock.
   d. During execution, if any new processes arrive, add them to the Ready Queue.
   e. If the current process has remaining time, push it back to the end of the Ready Queue.
   f. If the process is finished, calculate CT, TAT, and WT.
4. If the queue is empty but processes remain, jump the clock to the next arrival.`,
    best: 'Fairness', average: 'Moderate', worst: 'Context Switching', space: 'O(n)',
    code: {
      js: `// Round Robin Scheduling (Standalone Node.js)
    const proc = [
      { id: 1, at: 0, bt: 5 },
      { id: 2, at: 1, bt: 4 },
      { id: 3, at: 2, bt: 2 },
      { id: 4, at: 3, bt: 1 }
    ];

    const quantum = 2;

    function solveRR(p, q) {
      p.sort((a,b)=>a.at-b.at);
      let n = p.length;
      let time = 0, completed = 0;
      let queue = [];
      let totalWT = 0, totalTAT = 0;

      p.forEach(pr => pr.rem = pr.bt);

      while (completed < n) {
        for (let i = 0; i < n; i++) {
          if (p[i].at <= time && !p[i].inQueue && p[i].rem > 0) {
            queue.push(p[i]);
            p[i].inQueue = true;
          }
        }

        if (queue.length === 0) {
          time++;
          continue;
        }

        let current = queue.shift();
        current.inQueue = false;

        let execTime = Math.min(q, current.rem);
        current.rem -= execTime;
        time += execTime;

        for (let i = 0; i < n; i++) {
          if (p[i].at <= time && !p[i].inQueue && p[i].rem > 0 && p[i] !== current) {
            queue.push(p[i]);
            p[i].inQueue = true;
          }
        }

        if (current.rem > 0) {
          queue.push(current);
          current.inQueue = true;
        } else {
          current.ct = time;
          current.tat = current.ct - current.at;
          current.wt = current.tat - current.bt;
          totalWT += current.wt;
          totalTAT += current.tat;
          completed++;
        }
      }

      console.log("PID\tAT\tBT\tCT\tTAT\tWT");
      p.forEach(function(pr) {
        console.log(
          pr.id + "\t" + pr.at + "\t" + pr.bt + "\t" +
          pr.ct + "\t" + pr.tat + "\t" + pr.wt
        );
      });

      console.log(
        "\nAvg WT: " + (totalWT/n).toFixed(2) +
        "\nAvg TAT: " + (totalTAT/n).toFixed(2)
      );
    }

    solveRR(proc, quantum);`,

      python: `# Round Robin Scheduling (Standalone Python)
    def solve_rr(p, q):
        p.sort(key=lambda x: x['at'])
        n = len(p)
        time = 0
        completed = 0
        queue = []
        total_wt = 0
        total_tat = 0

        for pr in p:
            pr['rem'] = pr['bt']
            pr['inQueue'] = False

        while completed < n:
            for pr in p:
                if pr['at'] <= time and not pr['inQueue'] and pr['rem'] > 0:
                    queue.append(pr)
                    pr['inQueue'] = True

            if not queue:
                time += 1
                continue

            current = queue.pop(0)
            current['inQueue'] = False

            exec_time = min(q, current['rem'])
            current['rem'] -= exec_time
            time += exec_time

            for pr in p:
                if pr['at'] <= time and not pr['inQueue'] and pr['rem'] > 0 and pr != current:
                    queue.append(pr)
                    pr['inQueue'] = True

            if current['rem'] > 0:
                queue.append(current)
                current['inQueue'] = True
            else:
                current['ct'] = time
                current['tat'] = current['ct'] - current['at']
                current['wt'] = current['tat'] - current['bt']
                total_wt += current['wt']
                total_tat += current['tat']
                completed += 1

        print("PID\tAT\tBT\tCT\tTAT\tWT")
        for pr in p:
            print(f"{pr['id']}\t{pr['at']}\t{pr['bt']}\t{pr['ct']}\t{pr['tat']}\t{pr['wt']}")

        print(f"\nAvg WT: {total_wt/n:.2f}\nAvg TAT: {total_tat/n:.2f}")


    data = [
        {'id':1,'at':0,'bt':5},
        {'id':2,'at':1,'bt':4},
        {'id':3,'at':2,'bt':2},
        {'id':4,'at':3,'bt':1}
    ]

    solve_rr(data, 2)`,

      java: `import java.util.*;

    public class Main {
        static class Proc {
            int id, at, bt, rem, ct, tat, wt;
            boolean inQueue=false;
            Proc(int i,int a,int b){ id=i; at=a; bt=b; rem=b; }
        }

        public static void main(String[] args) {
            Proc[] p = {
                new Proc(1,0,5),
                new Proc(2,1,4),
                new Proc(3,2,2),
                new Proc(4,3,1)
            };

            int quantum = 2;
            int n = p.length;
            int time = 0, completed = 0;
            double totalWT=0, totalTAT=0;
            Queue<Proc> queue = new LinkedList<>();

            Arrays.sort(p, Comparator.comparingInt(a -> a.at));

            while(completed < n){
                for(Proc pr : p){
                    if(pr.at <= time && !pr.inQueue && pr.rem > 0){
                        queue.add(pr);
                        pr.inQueue = true;
                    }
                }

                if(queue.isEmpty()){
                    time++;
                    continue;
                }

                Proc current = queue.poll();
                current.inQueue = false;

                int exec = Math.min(quantum, current.rem);
                current.rem -= exec;
                time += exec;

                for(Proc pr : p){
                    if(pr.at <= time && !pr.inQueue && pr.rem > 0 && pr != current){
                        queue.add(pr);
                        pr.inQueue = true;
                    }
                }

                if(current.rem > 0){
                    queue.add(current);
                    current.inQueue = true;
                } else {
                    current.ct = time;
                    current.tat = current.ct - current.at;
                    current.wt = current.tat - current.bt;
                    totalWT += current.wt;
                    totalTAT += current.tat;
                    completed++;
                }
            }

            System.out.println("PID\tAT\tBT\tCT\tTAT\tWT");
            for(Proc pr : p)
                System.out.println(pr.id+"\t"+pr.at+"\t"+pr.bt+"\t"+pr.ct+"\t"+pr.tat+"\t"+pr.wt);

            System.out.printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n", totalWT/n, totalTAT/n);
        }
    }`,

      cpp: `#include <iostream>
    #include <vector>
    #include <queue>
    #include <algorithm>
    #include <iomanip>
    using namespace std;

    struct Proc{
        int id, at, bt, rem, ct, tat, wt;
        bool inQueue=false;
    };

    int main(){
        vector<Proc> p = {
            {1,0,5,5},
            {2,1,4,4},
            {3,2,2,2},
            {4,3,1,1}
        };

        int quantum = 2;
        int n = p.size();
        int time=0, completed=0;
        float totalWT=0, totalTAT=0;
        queue<int> q;

        sort(p.begin(), p.end(), [](Proc a, Proc b){ return a.at < b.at; });

        while(completed < n){
            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].inQueue && p[i].rem>0){
                    q.push(i);
                    p[i].inQueue=true;
                }
            }

            if(q.empty()){
                time++;
                continue;
            }

            int idx=q.front(); q.pop();
            p[idx].inQueue=false;

            int exec=min(quantum,p[idx].rem);
            p[idx].rem-=exec;
            time+=exec;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].inQueue && p[i].rem>0 && i!=idx){
                    q.push(i);
                    p[i].inQueue=true;
                }
            }

            if(p[idx].rem>0){
                q.push(idx);
                p[idx].inQueue=true;
            } else {
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        cout<<"PID\tAT\tBT\tCT\tTAT\tWT\n";
        for(auto pr:p)
            cout<<pr.id<<"\t"<<pr.at<<"\t"<<pr.bt<<"\t"<<pr.ct<<"\t"<<pr.tat<<"\t"<<pr.wt<<"\n";

        cout<<fixed<<setprecision(2);
        cout<<"\nAvg WT: "<<totalWT/n<<"\nAvg TAT: "<<totalTAT/n<<endl;

        return 0;
    }`,

      c: `#include <stdio.h>

    struct Proc{
        int id, at, bt, rem, ct, tat, wt, inQueue;
    };

    int main(){
        struct Proc p[]={
            {1,0,5,5,0,0,0,0},
            {2,1,4,4,0,0,0,0},
            {3,2,2,2,0,0,0,0},
            {4,3,1,1,0,0,0,0}
        };

        int quantum=2;
        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;
        int queue[100], front=0,rear=0;

        while(completed<n){
            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].inQueue && p[i].rem>0){
                    queue[rear++]=i;
                    p[i].inQueue=1;
                }
            }

            if(front==rear){
                time++;
                continue;
            }

            int idx=queue[front++];
            p[idx].inQueue=0;

            int exec = (p[idx].rem<quantum)?p[idx].rem:quantum;
            p[idx].rem-=exec;
            time+=exec;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].inQueue && p[i].rem>0 && i!=idx){
                    queue[rear++]=i;
                    p[i].inQueue=1;
                }
            }

            if(p[idx].rem>0){
                queue[rear++]=idx;
                p[idx].inQueue=1;
            } else {
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        printf("PID\tAT\tBT\tCT\tTAT\tWT\n");
        for(int i=0;i<n;i++)
            printf("%d\t%d\t%d\t%d\t%d\t%d\n",p[i].id,p[i].at,p[i].bt,p[i].ct,p[i].tat,p[i].wt);

        printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n",totalWT/n,totalTAT/n);

        return 0;
    }`
    }
  },
  priority: {
    title: 'Priority Scheduling',
    initials: 'PR',
    description: `Priority Scheduling allocates the CPU based on the priority assigned to each process. In this non-preemptive version, the highest priority process (lowest numerical value) is executed fully once it arrives.

Logic Steps:
1. Initialize the global clock at 0.
2. At any time T, identify all processes that have arrived (AT <= T) and are incomplete.
3. From this list, select the process with the highest priority (minimum priority number).
4. If priorities are equal, use Arrival Time as a tie-breaker (FCFS).
5. If no process has arrived, advance the clock to the next available arrival.
6. Execute the process: CT = clock + BT.
7. Calculate metrics: TAT = CT - AT and WT = TAT - BT.
8. Set the global clock to CT and mark the process as completed.`,
    best: 'Critical Tasks', average: 'Varies', worst: 'Starvation', space: 'O(n)',
    code: {
      js: `// Priority Scheduling (Non-Preemptive) - Standalone Node.js
    const proc = [
      { id: 1, at: 0, bt: 7, pr: 2 },
      { id: 2, at: 2, bt: 4, pr: 1 },
      { id: 3, at: 4, bt: 1, pr: 3 },
      { id: 4, at: 5, bt: 4, pr: 2 }
    ];

    function solvePriority(p) {
      var n = p.length;
      var time = 0, completed = 0;
      var totalWT = 0, totalTAT = 0;

      for (var i = 0; i < n; i++)
        p[i].done = false;

      console.log("PID\tAT\tBT\tPR\tCT\tTAT\tWT");

      while (completed < n) {
        var idx = -1;
        var bestPr = 9999;

        for (var i = 0; i < n; i++) {
          if (p[i].at <= time && !p[i].done) {
            if (p[i].pr < bestPr) {
              bestPr = p[i].pr;
              idx = i;
            }
          }
        }

        if (idx == -1) {
          time++;
          continue;
        }

        p[idx].ct = time + p[idx].bt;
        p[idx].tat = p[idx].ct - p[idx].at;
        p[idx].wt = p[idx].tat - p[idx].bt;

        time = p[idx].ct;
        p[idx].done = true;
        completed++;

        totalWT += p[idx].wt;
        totalTAT += p[idx].tat;

        console.log(
          p[idx].id + "\t" +
          p[idx].at + "\t" +
          p[idx].bt + "\t" +
          p[idx].pr + "\t" +
          p[idx].ct + "\t" +
          p[idx].tat + "\t" +
          p[idx].wt
        );
      }

      console.log(
        "\nAvg WT: " + (totalWT/n).toFixed(2) +
        "\nAvg TAT: " + (totalTAT/n).toFixed(2)
      );
    }

    solvePriority(proc);`,

      python: `# Priority Scheduling (Non-Preemptive)
    def solve_priority(p):
        n = len(p)
        time = 0
        completed = 0
        total_wt = 0
        total_tat = 0

        for pr in p:
            pr['done'] = False

        print("PID\tAT\tBT\tPR\tCT\tTAT\tWT")

        while completed < n:
            idx = -1
            best_pr = 9999

            for i in range(n):
                if p[i]['at'] <= time and not p[i]['done']:
                    if p[i]['pr'] < best_pr:
                        best_pr = p[i]['pr']
                        idx = i

            if idx == -1:
                time += 1
                continue

            p[idx]['ct'] = time + p[idx]['bt']
            p[idx]['tat'] = p[idx]['ct'] - p[idx]['at']
            p[idx]['wt'] = p[idx]['tat'] - p[idx]['bt']

            time = p[idx]['ct']
            p[idx]['done'] = True
            completed += 1

            total_wt += p[idx]['wt']
            total_tat += p[idx]['tat']

            print(str(p[idx]['id']) + "\t" +
                  str(p[idx]['at']) + "\t" +
                  str(p[idx]['bt']) + "\t" +
                  str(p[idx]['pr']) + "\t" +
                  str(p[idx]['ct']) + "\t" +
                  str(p[idx]['tat']) + "\t" +
                  str(p[idx]['wt']))

        print("\nAvg WT: " + format(total_wt/n, ".2f") +
              "\nAvg TAT: " + format(total_tat/n, ".2f"))


    data = [
        {'id':1,'at':0,'bt':7,'pr':2},
        {'id':2,'at':2,'bt':4,'pr':1},
        {'id':3,'at':4,'bt':1,'pr':3},
        {'id':4,'at':5,'bt':4,'pr':2}
    ]

    solve_priority(data)`,

      java: `import java.util.*;

    public class Main {
        static class Proc {
            int id, at, bt, pr, ct, tat, wt;
            boolean done=false;
            Proc(int i,int a,int b,int p){ id=i; at=a; bt=b; pr=p; }
        }

        public static void main(String[] args) {
            Proc[] p = {
                new Proc(1,0,7,2),
                new Proc(2,2,4,1),
                new Proc(3,4,1,3),
                new Proc(4,5,4,2)
            };

            int n = p.length;
            int time=0, completed=0;
            double totalWT=0, totalTAT=0;

            System.out.println("PID\tAT\tBT\tPR\tCT\tTAT\tWT");

            while(completed<n){
                int idx=-1, bestPr=9999;

                for(int i=0;i<n;i++){
                    if(p[i].at<=time && !p[i].done){
                        if(p[i].pr<bestPr){
                            bestPr=p[i].pr;
                            idx=i;
                        }
                    }
                }

                if(idx==-1){
                    time++;
                    continue;
                }

                p[idx].ct=time+p[idx].bt;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;

                time=p[idx].ct;
                p[idx].done=true;
                completed++;

                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;

                System.out.println(p[idx].id+"\t"+p[idx].at+"\t"+p[idx].bt+"\t"+p[idx].pr+"\t"+p[idx].ct+"\t"+p[idx].tat+"\t"+p[idx].wt);
            }

            System.out.printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n", totalWT/n, totalTAT/n);
        }
    }`,

      cpp: `#include <iostream>
    #include <vector>
    #include <iomanip>
    using namespace std;

    struct Proc{
        int id, at, bt, pr, ct, tat, wt;
        bool done=false;
    };

    int main(){
        vector<Proc> p = {
            {1,0,7,2},
            {2,2,4,1},
            {3,4,1,3},
            {4,5,4,2}
        };

        int n=p.size();
        int time=0, completed=0;
        float totalWT=0, totalTAT=0;

        cout<<"PID\tAT\tBT\tPR\tCT\tTAT\tWT\n";

        while(completed<n){
            int idx=-1, bestPr=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].done){
                    if(p[i].pr<bestPr){
                        bestPr=p[i].pr;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].ct=time+p[idx].bt;
            p[idx].tat=p[idx].ct-p[idx].at;
            p[idx].wt=p[idx].tat-p[idx].bt;

            time=p[idx].ct;
            p[idx].done=true;
            completed++;

            totalWT+=p[idx].wt;
            totalTAT+=p[idx].tat;

            cout<<p[idx].id<<"\t"<<p[idx].at<<"\t"<<p[idx].bt<<"\t"<<p[idx].pr<<"\t"<<p[idx].ct<<"\t"<<p[idx].tat<<"\t"<<p[idx].wt<<"\n";
        }

        cout<<fixed<<setprecision(2);
        cout<<"\nAvg WT: "<<totalWT/n<<"\nAvg TAT: "<<totalTAT/n<<endl;

        return 0;
    }`,

      c: `#include <stdio.h>

    struct Proc{
        int id, at, bt, pr, ct, tat, wt, done;
    };

    int main(){
        struct Proc p[]={
            {1,0,7,2,0,0,0,0},
            {2,2,4,1,0,0,0,0},
            {3,4,1,3,0,0,0,0},
            {4,5,4,2,0,0,0,0}
        };

        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;

        printf("PID\tAT\tBT\tPR\tCT\tTAT\tWT\n");

        while(completed<n){
            int idx=-1,bestPr=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].done){
                    if(p[i].pr<bestPr){
                        bestPr=p[i].pr;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].ct=time+p[idx].bt;
            p[idx].tat=p[idx].ct-p[idx].at;
            p[idx].wt=p[idx].tat-p[idx].bt;

            time=p[idx].ct;
            p[idx].done=1;
            completed++;

            totalWT+=p[idx].wt;
            totalTAT+=p[idx].tat;

            printf("%d\t%d\t%d\t%d\t%d\t%d\t%d\n",p[idx].id,p[idx].at,p[idx].bt,p[idx].pr,p[idx].ct,p[idx].tat,p[idx].wt);
        }

        printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n",totalWT/n,totalTAT/n);

        return 0;
    }`
}
  },
  srtf: {
    title: 'Shortest Remaining Time First (SRTF)',
    initials: 'SR',
    description: `Shortest Remaining Time First (SRTF) is the preemptive version of the SJF algorithm. At any given time, the process with the smallest remaining burst time is executed. If a new process arrives with a remaining time shorter than the current process, the current process is preempted.

  Logic Steps:
  1. Initialize the system clock at 0 and keep track of remaining burst times for all processes.
  2. At every time unit:
    a. Identify all processes that have arrived (Arrival Time <= current clock) and are not yet completed.
    b. From this subset, select the process with the minimum remaining burst time.
    c. If no process is available, increment the clock to the next available arrival.
    d. Execute the selected process for exactly 1 unit of time.
    e. Update the current clock and decrease the remaining time of the process.
  3. If a process's remaining time reaches 0, it is marked as completed.
  4. Calculate Completion Time (CT) as the current clock value at the moment of completion.
  5. Calculate Turnaround Time (TAT) as CT - AT and Waiting Time (WT) as TAT - initial Burst Time.
  6. Repeat until all processes are finished.`,
    best: 'Minimum Average WT', 
    average: 'Optimal', 
    worst: 'Starvation', 
    space: 'O(n)',
    code: {
      js: `// SRTF Scheduling (Preemptive) - Standalone Node.js
    const proc = [
      { id: 1, at: 0, bt: 7 },
      { id: 2, at: 2, bt: 4 },
      { id: 3, at: 4, bt: 1 },
      { id: 4, at: 5, bt: 4 }
    ];

    function solveSRTF(p) {
      var n = p.length;
      var time = 0, completed = 0;
      var totalWT = 0, totalTAT = 0;

      for (var i = 0; i < n; i++) {
        p[i].rem = p[i].bt;
        p[i].done = false;
      }

      while (completed < n) {
        var idx = -1;
        var minRem = 9999;

        for (var i = 0; i < n; i++) {
          if (p[i].at <= time && p[i].rem > 0) {
            if (p[i].rem < minRem) {
              minRem = p[i].rem;
              idx = i;
            }
          }
        }

        if (idx == -1) {
          time++;
          continue;
        }

        p[idx].rem--;
        time++;

        if (p[idx].rem == 0) {
          p[idx].ct = time;
          p[idx].tat = p[idx].ct - p[idx].at;
          p[idx].wt = p[idx].tat - p[idx].bt;

          totalWT += p[idx].wt;
          totalTAT += p[idx].tat;
          completed++;
        }
      }

      console.log("PID\tAT\tBT\tCT\tTAT\tWT");
      for (var i = 0; i < n; i++) {
        console.log(
          p[i].id + "\t" +
          p[i].at + "\t" +
          p[i].bt + "\t" +
          p[i].ct + "\t" +
          p[i].tat + "\t" +
          p[i].wt
        );
      }

      console.log(
        "\nAvg WT: " + (totalWT/n).toFixed(2) +
        "\nAvg TAT: " + (totalTAT/n).toFixed(2)
      );
    }

    solveSRTF(proc);`,

      python: `# SRTF Scheduling (Preemptive)
    def solve_srtf(p):
        n = len(p)
        time = 0
        completed = 0
        total_wt = 0
        total_tat = 0

        for pr in p:
            pr['rem'] = pr['bt']

        while completed < n:
            idx = -1
            min_rem = 9999

            for i in range(n):
                if p[i]['at'] <= time and p[i]['rem'] > 0:
                    if p[i]['rem'] < min_rem:
                        min_rem = p[i]['rem']
                        idx = i

            if idx == -1:
                time += 1
                continue

            p[idx]['rem'] -= 1
            time += 1

            if p[idx]['rem'] == 0:
                p[idx]['ct'] = time
                p[idx]['tat'] = p[idx]['ct'] - p[idx]['at']
                p[idx]['wt'] = p[idx]['tat'] - p[idx]['bt']
                total_wt += p[idx]['wt']
                total_tat += p[idx]['tat']
                completed += 1

        print("PID\tAT\tBT\tCT\tTAT\tWT")
        for pr in p:
            print(str(pr['id']) + "\t" +
                  str(pr['at']) + "\t" +
                  str(pr['bt']) + "\t" +
                  str(pr['ct']) + "\t" +
                  str(pr['tat']) + "\t" +
                  str(pr['wt']))

        print("\nAvg WT: " + format(total_wt/n, ".2f") +
              "\nAvg TAT: " + format(total_tat/n, ".2f"))


    data = [
        {'id':1,'at':0,'bt':7},
        {'id':2,'at':2,'bt':4},
        {'id':3,'at':4,'bt':1},
        {'id':4,'at':5,'bt':4}
    ]

    solve_srtf(data)`,

      java: `import java.util.*;

    public class Main {
        static class Proc {
            int id, at, bt, rem, ct, tat, wt;
            Proc(int i,int a,int b){ id=i; at=a; bt=b; rem=b; }
        }

        public static void main(String[] args) {
            Proc[] p = {
                new Proc(1,0,7),
                new Proc(2,2,4),
                new Proc(3,4,1),
                new Proc(4,5,4)
            };

            int n = p.length;
            int time=0, completed=0;
            double totalWT=0, totalTAT=0;

            while(completed<n){
                int idx=-1, minRem=9999;

                for(int i=0;i<n;i++){
                    if(p[i].at<=time && p[i].rem>0){
                        if(p[i].rem<minRem){
                            minRem=p[i].rem;
                            idx=i;
                        }
                    }
                }

                if(idx==-1){
                    time++;
                    continue;
                }

                p[idx].rem--;
                time++;

                if(p[idx].rem==0){
                    p[idx].ct=time;
                    p[idx].tat=p[idx].ct-p[idx].at;
                    p[idx].wt=p[idx].tat-p[idx].bt;
                    totalWT+=p[idx].wt;
                    totalTAT+=p[idx].tat;
                    completed++;
                }
            }

            System.out.println("PID\tAT\tBT\tCT\tTAT\tWT");
            for(Proc pr:p)
                System.out.println(pr.id+"\t"+pr.at+"\t"+pr.bt+"\t"+pr.ct+"\t"+pr.tat+"\t"+pr.wt);

            System.out.printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n", totalWT/n, totalTAT/n);
        }
    }`,

      cpp: `#include <iostream>
    #include <vector>
    #include <iomanip>
    using namespace std;

    struct Proc{
        int id, at, bt, rem, ct, tat, wt;
    };

    int main(){
        vector<Proc> p = {
            {1,0,7,7},
            {2,2,4,4},
            {3,4,1,1},
            {4,5,4,4}
        };

        int n=p.size();
        int time=0, completed=0;
        float totalWT=0, totalTAT=0;

        while(completed<n){
            int idx=-1, minRem=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && p[i].rem>0){
                    if(p[i].rem<minRem){
                        minRem=p[i].rem;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].rem--;
            time++;

            if(p[idx].rem==0){
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        cout<<"PID\tAT\tBT\tCT\tTAT\tWT\n";
        for(auto pr:p)
            cout<<pr.id<<"\t"<<pr.at<<"\t"<<pr.bt<<"\t"<<pr.ct<<"\t"<<pr.tat<<"\t"<<pr.wt<<"\n";

        cout<<fixed<<setprecision(2);
        cout<<"\nAvg WT: "<<totalWT/n<<"\nAvg TAT: "<<totalTAT/n<<endl;

        return 0;
    }`,

      c: `#include <stdio.h>

    struct Proc{
        int id, at, bt, rem, ct, tat, wt;
    };

    int main(){
        struct Proc p[]={
            {1,0,7,7,0,0,0},
            {2,2,4,4,0,0,0},
            {3,4,1,1,0,0,0},
            {4,5,4,4,0,0,0}
        };

        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;

        while(completed<n){
            int idx=-1,minRem=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && p[i].rem>0){
                    if(p[i].rem<minRem){
                        minRem=p[i].rem;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].rem--;
            time++;

            if(p[idx].rem==0){
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        printf("PID\tAT\tBT\tCT\tTAT\tWT\n");
        for(int i=0;i<n;i++)
            printf("%d\t%d\t%d\t%d\t%d\t%d\n",p[i].id,p[i].at,p[i].bt,p[i].ct,p[i].tat,p[i].wt);

        printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n",totalWT/n,totalTAT/n);

        return 0;
    }`
    }
  },
  preemptivePriority: {
    title: 'Preemptive Priority Scheduling',
    initials: 'PP',
    description: `Preemptive Priority Scheduling is an extension of Priority Scheduling. At any given time, the CPU is allocated to the process with the highest priority among all arrived processes. If a new process arrives with a priority higher than the currently running process, the current process is preempted and put back into the ready queue.

  Logic Steps:
  1. Initialize system clock at 0 and track remaining burst times for all processes.
  2. At every time unit:
    a. Identify all processes that have arrived (Arrival Time <= current clock) and are incomplete.
    b. Select the process with the highest priority (lowest numerical value).
    c. If multiple processes have the same highest priority, select the one with the earliest Arrival Time (FCFS tie-breaker).
    d. If no process is available, increment the clock.
    e. Execute the selected process for 1 unit of time.
    f. Decrease the remaining burst time of that process and update the global clock.
  3. When a process's remaining burst time becomes 0:
    a. Record Completion Time (CT) as the current clock value.
    b. Calculate Turnaround Time (TAT = CT - AT).
    c. Calculate Waiting Time (WT = TAT - BT).
    d. Mark process as completed.
  4. Repeat until all processes are finished.`,
    best: 'Time-critical tasks', 
    average: 'Efficient', 
    worst: 'Starvation', 
    space: 'O(n)',
    code: {
      js: `// Preemptive Priority Scheduling (Lower number = Higher priority)
    const proc = [
      { id: 1, at: 0, bt: 8, pr: 2 },
      { id: 2, at: 1, bt: 4, pr: 1 },
      { id: 3, at: 2, bt: 9, pr: 3 },
      { id: 4, at: 3, bt: 5, pr: 2 }
    ];

    function solvePreemptivePriority(p) {
      var n = p.length;
      var time = 0, completed = 0;
      var totalWT = 0, totalTAT = 0;

      for (var i = 0; i < n; i++) {
        p[i].rem = p[i].bt;
      }

      while (completed < n) {
        var idx = -1;
        var bestPr = 9999;

        for (var i = 0; i < n; i++) {
          if (p[i].at <= time && p[i].rem > 0) {
            if (p[i].pr < bestPr) {
              bestPr = p[i].pr;
              idx = i;
            }
          }
        }

        if (idx == -1) {
          time++;
          continue;
        }

        p[idx].rem--;
        time++;

        if (p[idx].rem == 0) {
          p[idx].ct = time;
          p[idx].tat = p[idx].ct - p[idx].at;
          p[idx].wt = p[idx].tat - p[idx].bt;
          totalWT += p[idx].wt;
          totalTAT += p[idx].tat;
          completed++;
        }
      }

      console.log("PID\tAT\tBT\tPR\tCT\tTAT\tWT");
      for (var i = 0; i < n; i++) {
        console.log(
          p[i].id + "\t" +
          p[i].at + "\t" +
          p[i].bt + "\t" +
          p[i].pr + "\t" +
          p[i].ct + "\t" +
          p[i].tat + "\t" +
          p[i].wt
        );
      }

      console.log(
        "\nAvg WT: " + (totalWT/n).toFixed(2) +
        "\nAvg TAT: " + (totalTAT/n).toFixed(2)
      );
    }

    solvePreemptivePriority(proc);`,

      python: `# Preemptive Priority Scheduling (Lower number = Higher priority)
    def solve_preemptive_priority(p):
        n = len(p)
        time = 0
        completed = 0
        total_wt = 0
        total_tat = 0

        for pr in p:
            pr['rem'] = pr['bt']

        while completed < n:
            idx = -1
            best_pr = 9999

            for i in range(n):
                if p[i]['at'] <= time and p[i]['rem'] > 0:
                    if p[i]['pr'] < best_pr:
                        best_pr = p[i]['pr']
                        idx = i

            if idx == -1:
                time += 1
                continue

            p[idx]['rem'] -= 1
            time += 1

            if p[idx]['rem'] == 0:
                p[idx]['ct'] = time
                p[idx]['tat'] = p[idx]['ct'] - p[idx]['at']
                p[idx]['wt'] = p[idx]['tat'] - p[idx]['bt']
                total_wt += p[idx]['wt']
                total_tat += p[idx]['tat']
                completed += 1

        print("PID\tAT\tBT\tPR\tCT\tTAT\tWT")
        for pr in p:
            print(str(pr['id']) + "\t" +
                  str(pr['at']) + "\t" +
                  str(pr['bt']) + "\t" +
                  str(pr['pr']) + "\t" +
                  str(pr['ct']) + "\t" +
                  str(pr['tat']) + "\t" +
                  str(pr['wt']))

        print("\nAvg WT: " + format(total_wt/n, ".2f") +
              "\nAvg TAT: " + format(total_tat/n, ".2f"))

    data = [
        {'id':1,'at':0,'bt':8,'pr':2},
        {'id':2,'at':1,'bt':4,'pr':1},
        {'id':3,'at':2,'bt':9,'pr':3},
        {'id':4,'at':3,'bt':5,'pr':2}
    ]

    solve_preemptive_priority(data)`,

      java: `import java.util.*;

    public class Main {
        static class Proc {
            int id, at, bt, pr, rem, ct, tat, wt;
            Proc(int i,int a,int b,int p){
                id=i; at=a; bt=b; pr=p; rem=b;
            }
        }

        public static void main(String[] args) {
            Proc[] p = {
                new Proc(1,0,8,2),
                new Proc(2,1,4,1),
                new Proc(3,2,9,3),
                new Proc(4,3,5,2)
            };

            int n = p.length;
            int time=0, completed=0;
            double totalWT=0, totalTAT=0;

            while(completed<n){
                int idx=-1, bestPr=9999;

                for(int i=0;i<n;i++){
                    if(p[i].at<=time && p[i].rem>0){
                        if(p[i].pr<bestPr){
                            bestPr=p[i].pr;
                            idx=i;
                        }
                    }
                }

                if(idx==-1){
                    time++;
                    continue;
                }

                p[idx].rem--;
                time++;

                if(p[idx].rem==0){
                    p[idx].ct=time;
                    p[idx].tat=p[idx].ct-p[idx].at;
                    p[idx].wt=p[idx].tat-p[idx].bt;
                    totalWT+=p[idx].wt;
                    totalTAT+=p[idx].tat;
                    completed++;
                }
            }

            System.out.println("PID\tAT\tBT\tPR\tCT\tTAT\tWT");
            for(Proc pr:p)
                System.out.println(pr.id+"\t"+pr.at+"\t"+pr.bt+"\t"+pr.pr+"\t"+pr.ct+"\t"+pr.tat+"\t"+pr.wt);

            System.out.printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n", totalWT/n, totalTAT/n);
        }
    }`,

      cpp: `#include <iostream>
    #include <vector>
    #include <iomanip>
    using namespace std;

    struct Proc{
        int id, at, bt, pr, rem, ct, tat, wt;
    };

    int main(){
        vector<Proc> p = {
            {1,0,8,2,8},
            {2,1,4,1,4},
            {3,2,9,3,9},
            {4,3,5,2,5}
        };

        int n=p.size();
        int time=0, completed=0;
        float totalWT=0, totalTAT=0;

        while(completed<n){
            int idx=-1, bestPr=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && p[i].rem>0){
                    if(p[i].pr<bestPr){
                        bestPr=p[i].pr;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].rem--;
            time++;

            if(p[idx].rem==0){
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        cout<<"PID\tAT\tBT\tPR\tCT\tTAT\tWT\n";
        for(auto pr:p)
            cout<<pr.id<<"\t"<<pr.at<<"\t"<<pr.bt<<"\t"<<pr.pr<<"\t"<<pr.ct<<"\t"<<pr.tat<<"\t"<<pr.wt<<"\n";

        cout<<fixed<<setprecision(2);
        cout<<"\nAvg WT: "<<totalWT/n<<"\nAvg TAT: "<<totalTAT/n<<endl;

        return 0;
    }`,

      c: `#include <stdio.h>

    struct Proc{
        int id, at, bt, pr, rem, ct, tat, wt;
    };

    int main(){
        struct Proc p[]={
            {1,0,8,2,8,0,0,0},
            {2,1,4,1,4,0,0,0},
            {3,2,9,3,9,0,0,0},
            {4,3,5,2,5,0,0,0}
        };

        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;

        while(completed<n){
            int idx=-1,bestPr=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && p[i].rem>0){
                    if(p[i].pr<bestPr){
                        bestPr=p[i].pr;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].rem--;
            time++;

            if(p[idx].rem==0){
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        printf("PID\tAT\tBT\tPR\tCT\tTAT\tWT\n");
        for(int i=0;i<n;i++)
            printf("%d\t%d\t%d\t%d\t%d\t%d\t%d\n",p[i].id,p[i].at,p[i].bt,p[i].pr,p[i].ct,p[i].tat,p[i].wt);

        printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n",totalWT/n,totalTAT/n);

        return 0;
    }`
    }
  },
  mlq: {
    title: 'Multilevel Queue (MLQ)',
    initials: 'MQ',
    description: `Multilevel Queue (MLQ) scheduling partitions the ready queue into several separate queues based on process priority or type. Each queue has its own scheduling algorithm. In this implementation, Queue 1 (Priority 1) has absolute priority over Queue 2 (Priority 2+).

  Logic Steps:
  1. Divide processes into two categories: Q1 (High Priority: Priority 1) and Q2 (Low Priority: Priority 2+).
  2. Q1 is scheduled using Round Robin (Time Quantum based).
  3. Q2 is scheduled using FCFS.
  4. The scheduler always checks Q1 first. If Q1 is not empty, its processes are executed.
  5. If a process arrives in Q1 while a Q2 process is running, the Q2 process is preempted.
  6. Q2 processes only execute when Q1 is completely empty.`,
    best: 'Mixed workloads', average: 'Good', worst: 'Starvation for Q2', space: 'O(n)',
    code: {
      js: `// Multi Level Queue (MLQ) Scheduling
    // Queue 1: Round Robin (time quantum = 2)
    // Queue 2: FCFS
    // Priority: Queue 1 > Queue 2

    const proc = [
      { id: 1, at: 0, bt: 5, queue: 1 },
      { id: 2, at: 1, bt: 3, queue: 1 },
      { id: 3, at: 2, bt: 6, queue: 2 },
      { id: 4, at: 3, bt: 4, queue: 2 }
    ];

    function solveMLQ(p) {
      var tq = 2;
      var n = p.length;
      var time = 0, completed = 0;
      var totalWT = 0, totalTAT = 0;

      for (var i = 0; i < n; i++) {
        p[i].rem = p[i].bt;
      }

      while (completed < n) {

        // First serve Queue 1 (RR)
        var executed = false;

        for (var i = 0; i < n; i++) {
          if (p[i].queue == 1 && p[i].at <= time && p[i].rem > 0) {
            var execTime = Math.min(tq, p[i].rem);
            p[i].rem -= execTime;
            time += execTime;
            executed = true;

            if (p[i].rem == 0) {
              p[i].ct = time;
              p[i].tat = p[i].ct - p[i].at;
              p[i].wt = p[i].tat - p[i].bt;
              totalWT += p[i].wt;
              totalTAT += p[i].tat;
              completed++;
            }
          }
        }

        // Then serve Queue 2 (FCFS)
        for (var i = 0; i < n; i++) {
          if (p[i].queue == 2 && p[i].at <= time && p[i].rem > 0) {
            time += p[i].rem;
            p[i].rem = 0;

            p[i].ct = time;
            p[i].tat = p[i].ct - p[i].at;
            p[i].wt = p[i].tat - p[i].bt;
            totalWT += p[i].wt;
            totalTAT += p[i].tat;
            completed++;
            executed = true;
          }
        }

        if (!executed) time++;
      }

      console.log("PID\tAT\tBT\tQ\tCT\tTAT\tWT");
      for (var i = 0; i < n; i++) {
        console.log(
          p[i].id + "\t" +
          p[i].at + "\t" +
          p[i].bt + "\t" +
          p[i].queue + "\t" +
          p[i].ct + "\t" +
          p[i].tat + "\t" +
          p[i].wt
        );
      }

      console.log(
        "\nAvg WT: " + (totalWT/n).toFixed(2) +
        "\nAvg TAT: " + (totalTAT/n).toFixed(2)
      );
    }

    solveMLQ(proc);`,

      python: `# Multi Level Queue Scheduling
    # Queue 1: Round Robin (TQ=2)
    # Queue 2: FCFS

    def solve_mlq(p):
        tq = 2
        n = len(p)
        time = 0
        completed = 0
        total_wt = 0
        total_tat = 0

        for pr in p:
            pr['rem'] = pr['bt']

        while completed < n:
            executed = False

            # Queue 1 (RR)
            for pr in p:
                if pr['queue'] == 1 and pr['at'] <= time and pr['rem'] > 0:
                    exec_time = min(tq, pr['rem'])
                    pr['rem'] -= exec_time
                    time += exec_time
                    executed = True

                    if pr['rem'] == 0:
                        pr['ct'] = time
                        pr['tat'] = pr['ct'] - pr['at']
                        pr['wt'] = pr['tat'] - pr['bt']
                        total_wt += pr['wt']
                        total_tat += pr['tat']
                        completed += 1

            # Queue 2 (FCFS)
            for pr in p:
                if pr['queue'] == 2 and pr['at'] <= time and pr['rem'] > 0:
                    time += pr['rem']
                    pr['rem'] = 0
                    pr['ct'] = time
                    pr['tat'] = pr['ct'] - pr['at']
                    pr['wt'] = pr['tat'] - pr['bt']
                    total_wt += pr['wt']
                    total_tat += pr['tat']
                    completed += 1
                    executed = True

            if not executed:
                time += 1

        print("PID\tAT\tBT\tQ\tCT\tTAT\tWT")
        for pr in p:
            print(str(pr['id']) + "\t" +
                  str(pr['at']) + "\t" +
                  str(pr['bt']) + "\t" +
                  str(pr['queue']) + "\t" +
                  str(pr['ct']) + "\t" +
                  str(pr['tat']) + "\t" +
                  str(pr['wt']))

        print("\nAvg WT: " + format(total_wt/n, ".2f") +
              "\nAvg TAT: " + format(total_tat/n, ".2f"))


    data = [
        {'id':1,'at':0,'bt':5,'queue':1},
        {'id':2,'at':1,'bt':3,'queue':1},
        {'id':3,'at':2,'bt':6,'queue':2},
        {'id':4,'at':3,'bt':4,'queue':2}
    ]

    solve_mlq(data)`,

      java: `import java.util.*;

    public class Main {

        static class Proc {
            int id, at, bt, queue, rem, ct, tat, wt;
            Proc(int i,int a,int b,int q){
                id=i; at=a; bt=b; queue=q; rem=b;
            }
        }

        public static void main(String[] args) {

            Proc[] p = {
                new Proc(1,0,5,1),
                new Proc(2,1,3,1),
                new Proc(3,2,6,2),
                new Proc(4,3,4,2)
            };

            int tq = 2;
            int n = p.length;
            int time=0, completed=0;
            double totalWT=0, totalTAT=0;

            while(completed<n){

                boolean executed=false;

                // Queue 1 (RR)
                for(int i=0;i<n;i++){
                    if(p[i].queue==1 && p[i].at<=time && p[i].rem>0){
                        int exec=Math.min(tq,p[i].rem);
                        p[i].rem-=exec;
                        time+=exec;
                        executed=true;

                        if(p[i].rem==0){
                            p[i].ct=time;
                            p[i].tat=p[i].ct-p[i].at;
                            p[i].wt=p[i].tat-p[i].bt;
                            totalWT+=p[i].wt;
                            totalTAT+=p[i].tat;
                            completed++;
                        }
                    }
                }

                // Queue 2 (FCFS)
                for(int i=0;i<n;i++){
                    if(p[i].queue==2 && p[i].at<=time && p[i].rem>0){
                        time+=p[i].rem;
                        p[i].rem=0;
                        p[i].ct=time;
                        p[i].tat=p[i].ct-p[i].at;
                        p[i].wt=p[i].tat-p[i].bt;
                        totalWT+=p[i].wt;
                        totalTAT+=p[i].tat;
                        completed++;
                        executed=true;
                    }
                }

                if(!executed) time++;
            }

            System.out.println("PID\tAT\tBT\tQ\tCT\tTAT\tWT");
            for(Proc pr:p)
                System.out.println(pr.id+"\t"+pr.at+"\t"+pr.bt+"\t"+pr.queue+"\t"+pr.ct+"\t"+pr.tat+"\t"+pr.wt);

            System.out.printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n", totalWT/n, totalTAT/n);
        }
    }`,

      cpp: `#include <iostream>
    #include <vector>
    #include <iomanip>
    using namespace std;

    struct Proc{
        int id, at, bt, queue, rem, ct, tat, wt;
    };

    int main(){
        vector<Proc> p = {
            {1,0,5,1,5},
            {2,1,3,1,3},
            {3,2,6,2,6},
            {4,3,4,2,4}
        };

        int tq=2;
        int n=p.size();
        int time=0,completed=0;
        float totalWT=0,totalTAT=0;

        while(completed<n){
            bool executed=false;

            for(int i=0;i<n;i++){
                if(p[i].queue==1 && p[i].at<=time && p[i].rem>0){
                    int exec=min(tq,p[i].rem);
                    p[i].rem-=exec;
                    time+=exec;
                    executed=true;

                    if(p[i].rem==0){
                        p[i].ct=time;
                        p[i].tat=p[i].ct-p[i].at;
                        p[i].wt=p[i].tat-p[i].bt;
                        totalWT+=p[i].wt;
                        totalTAT+=p[i].tat;
                        completed++;
                    }
                }
            }

            for(int i=0;i<n;i++){
                if(p[i].queue==2 && p[i].at<=time && p[i].rem>0){
                    time+=p[i].rem;
                    p[i].rem=0;
                    p[i].ct=time;
                    p[i].tat=p[i].ct-p[i].at;
                    p[i].wt=p[i].tat-p[i].bt;
                    totalWT+=p[i].wt;
                    totalTAT+=p[i].tat;
                    completed++;
                    executed=true;
                }
            }

            if(!executed) time++;
        }

        cout<<"PID\tAT\tBT\tQ\tCT\tTAT\tWT\n";
        for(auto pr:p)
            cout<<pr.id<<"\t"<<pr.at<<"\t"<<pr.bt<<"\t"<<pr.queue<<"\t"<<pr.ct<<"\t"<<pr.tat<<"\t"<<pr.wt<<"\n";

        cout<<fixed<<setprecision(2);
        cout<<"\nAvg WT: "<<totalWT/n<<"\nAvg TAT: "<<totalTAT/n<<endl;
        return 0;
    }`,

      c: `#include <stdio.h>

    struct Proc{
        int id, at, bt, queue, rem, ct, tat, wt;
    };

    int main(){
        struct Proc p[]={
            {1,0,5,1,5,0,0,0},
            {2,1,3,1,3,0,0,0},
            {3,2,6,2,6,0,0,0},
            {4,3,4,2,4,0,0,0}
        };

        int tq=2;
        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;

        while(completed<n){
            int executed=0;

            for(int i=0;i<n;i++){
                if(p[i].queue==1 && p[i].at<=time && p[i].rem>0){
                    int exec=(p[i].rem<tq)?p[i].rem:tq;
                    p[i].rem-=exec;
                    time+=exec;
                    executed=1;

                    if(p[i].rem==0){
                        p[i].ct=time;
                        p[i].tat=p[i].ct-p[i].at;
                        p[i].wt=p[i].tat-p[i].bt;
                        totalWT+=p[i].wt;
                        totalTAT+=p[i].tat;
                        completed++;
                    }
                }
            }

            for(int i=0;i<n;i++){
                if(p[i].queue==2 && p[i].at<=time && p[i].rem>0){
                    time+=p[i].rem;
                    p[i].rem=0;
                    p[i].ct=time;
                    p[i].tat=p[i].ct-p[i].at;
                    p[i].wt=p[i].tat-p[i].bt;
                    totalWT+=p[i].wt;
                    totalTAT+=p[i].tat;
                    completed++;
                    executed=1;
                }
            }

            if(!executed) time++;
        }

        printf("PID\tAT\tBT\tQ\tCT\tTAT\tWT\n");
        for(int i=0;i<n;i++)
            printf("%d\t%d\t%d\t%d\t%d\t%d\t%d\n",
                p[i].id,p[i].at,p[i].bt,p[i].queue,p[i].ct,p[i].tat,p[i].wt);

        printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n",totalWT/n,totalTAT/n);
        return 0;
    }`
    }
  },
  mlfq: {
    title: 'Multilevel Feedback Queue (MLFQ)',
    initials: 'MF',
    description: `Multilevel Feedback Queue (MLFQ) is the most sophisticated CPU scheduling algorithm. It allows processes to move between queues. If a process uses too much CPU time, it is moved to a lower-priority queue. If a process waits too long in a lower-priority queue, it may be moved to a higher-priority queue (Aging) to prevent starvation.

  Logic Steps:
  1. Initialize three queues: Q1 (High priority, small Quantum), Q2 (Medium priority, larger Quantum), and Q3 (Low priority, FCFS).
  2. All new processes enter Q1.
  3. If a process in Q1 does not finish within its Time Quantum, it is preempted and demoted to Q2.
  4. If a process in Q2 does not finish within its Time Quantum, it is preempted and demoted to Q3.
  5. Processes in Q3 are scheduled using FCFS but are preempted if a new process arrives in Q1 or Q2.
  6. A process in a lower-level queue can only execute if all higher-level queues are empty.`,
    best: 'Reduced response time', 
    average: 'Excellent', 
    worst: 'Complex overhead', 
    space: 'O(n)',
    code: {
      js: `// MLFQ Scheduling (3 Queues)
    // Q1: RR (Time Quantum = 4)
    // Q2: RR (Time Quantum = 8)
    // Q3: FCFS

    let processes = [
      {id:1, at:0, bt:10},
      {id:2, at:1, bt:6},
      {id:3, at:2, bt:8},
      {id:4, at:3, bt:4}
    ];

    let n = processes.length;

    processes.forEach(p => {
      p.rt = p.bt;
      p.ct = 0;
      p.tat = 0;
      p.wt = 0;
      p.level = 1;
    });

    let time = 0;
    let completed = 0;
    let totalWT = 0;
    let totalTAT = 0;

    let q1 = [], q2 = [], q3 = [];

    while (completed < n) {

      processes.forEach(p => {
        if (p.at === time) q1.push(p);
      });

      if (q1.length > 0) {
        let p = q1.shift();
        let tq = 4;
        let exec = Math.min(tq, p.rt);
        p.rt -= exec;
        time += exec;

        processes.forEach(pr => {
          if (pr.at > time - exec && pr.at <= time) q1.push(pr);
        });

        if (p.rt > 0) {
          p.level = 2;
          q2.push(p);
        } else {
          p.ct = time;
          p.tat = p.ct - p.at;
          p.wt = p.tat - p.bt;
          totalWT += p.wt;
          totalTAT += p.tat;
          completed++;
        }
      }

      else if (q2.length > 0) {
        let p = q2.shift();
        let tq = 8;
        let exec = Math.min(tq, p.rt);
        p.rt -= exec;
        time += exec;

        processes.forEach(pr => {
          if (pr.at > time - exec && pr.at <= time) q1.push(pr);
        });

        if (p.rt > 0) {
          p.level = 3;
          q3.push(p);
        } else {
          p.ct = time;
          p.tat = p.ct - p.at;
          p.wt = p.tat - p.bt;
          totalWT += p.wt;
          totalTAT += p.tat;
          completed++;
        }
      }

      else if (q3.length > 0) {
        let p = q3.shift();
        time += p.rt;
        p.rt = 0;

        processes.forEach(pr => {
          if (pr.at > time - p.bt && pr.at <= time) q1.push(pr);
        });

        p.ct = time;
        p.tat = p.ct - p.at;
        p.wt = p.tat - p.bt;
        totalWT += p.wt;
        totalTAT += p.tat;
        completed++;
      }

      else {
        time++;
      }
    }

    console.log("ID\tAT\tBT\tCT\tTAT\tWT");
    processes.forEach(p => {
      console.log(p.id + "\t" + p.at + "\t" + p.bt + "\t" + p.ct + "\t" + p.tat + "\t" + p.wt);
    });

    console.log("\nAvg WT: " + (totalWT/n).toFixed(2));
    console.log("Avg TAT: " + (totalTAT/n).toFixed(2));`,


      python: `# MLFQ Scheduling (3 Queues)
    # Q1: RR (TQ=4), Q2: RR (TQ=8), Q3: FCFS

    processes = [
        {"id":1,"at":0,"bt":10},
        {"id":2,"at":1,"bt":6},
        {"id":3,"at":2,"bt":8},
        {"id":4,"at":3,"bt":4}
    ]

    n = len(processes)

    for p in processes:
        p["rt"] = p["bt"]
        p["ct"] = 0
        p["tat"] = 0
        p["wt"] = 0
        p["level"] = 1

    time = 0
    completed = 0
    totalWT = 0
    totalTAT = 0

    q1, q2, q3 = [], [], []

    while completed < n:

        for p in processes:
            if p["at"] == time:
                q1.append(p)

        if q1:
            p = q1.pop(0)
            tq = 4
            exec_time = min(tq, p["rt"])
            p["rt"] -= exec_time
            time += exec_time

            for pr in processes:
                if time-exec_time < pr["at"] <= time:
                    q1.append(pr)

            if p["rt"] > 0:
                p["level"] = 2
                q2.append(p)
            else:
                p["ct"] = time
                p["tat"] = p["ct"] - p["at"]
                p["wt"] = p["tat"] - p["bt"]
                totalWT += p["wt"]
                totalTAT += p["tat"]
                completed += 1

        elif q2:
            p = q2.pop(0)
            tq = 8
            exec_time = min(tq, p["rt"])
            p["rt"] -= exec_time
            time += exec_time

            for pr in processes:
                if time-exec_time < pr["at"] <= time:
                    q1.append(pr)

            if p["rt"] > 0:
                p["level"] = 3
                q3.append(p)
            else:
                p["ct"] = time
                p["tat"] = p["ct"] - p["at"]
                p["wt"] = p["tat"] - p["bt"]
                totalWT += p["wt"]
                totalTAT += p["tat"]
                completed += 1

        elif q3:
            p = q3.pop(0)
            time += p["rt"]
            p["rt"] = 0

            p["ct"] = time
            p["tat"] = p["ct"] - p["at"]
            p["wt"] = p["tat"] - p["bt"]
            totalWT += p["wt"]
            totalTAT += p["tat"]
            completed += 1

        else:
            time += 1

    print("ID\tAT\tBT\tCT\tTAT\tWT")
    for p in processes:
        print(p["id"], p["at"], p["bt"], p["ct"], p["tat"], p["wt"], sep="\t")

    print("\nAvg WT:", round(totalWT/n,2))
    print("Avg TAT:", round(totalTAT/n,2))`,


      java: `// MLFQ Scheduling
    import java.util.*;

    class Process {
        int id, at, bt, rt, ct, tat, wt, level;
        Process(int id,int at,int bt){
            this.id=id; this.at=at; this.bt=bt;
            this.rt=bt; this.level=1;
        }
    }

    public class Main {
        public static void main(String[] args) {

            Process[] p = {
                new Process(1,0,10),
                new Process(2,1,6),
                new Process(3,2,8),
                new Process(4,3,4)
            };

            int n = p.length;
            int time=0, completed=0;
            double totalWT=0, totalTAT=0;

            Queue<Process> q1=new LinkedList<>();
            Queue<Process> q2=new LinkedList<>();
            Queue<Process> q3=new LinkedList<>();

            while(completed<n){

                for(Process pr:p)
                    if(pr.at==time) q1.add(pr);

                if(!q1.isEmpty()){
                    Process pr=q1.poll();
                    int tq=4;
                    int exec=Math.min(tq,pr.rt);
                    pr.rt-=exec;
                    time+=exec;

                    if(pr.rt>0){ pr.level=2; q2.add(pr);}
                    else{
                        pr.ct=time;
                        pr.tat=pr.ct-pr.at;
                        pr.wt=pr.tat-pr.bt;
                        totalWT+=pr.wt;
                        totalTAT+=pr.tat;
                        completed++;
                    }
                }

                else if(!q2.isEmpty()){
                    Process pr=q2.poll();
                    int tq=8;
                    int exec=Math.min(tq,pr.rt);
                    pr.rt-=exec;
                    time+=exec;

                    if(pr.rt>0){ pr.level=3; q3.add(pr);}
                    else{
                        pr.ct=time;
                        pr.tat=pr.ct-pr.at;
                        pr.wt=pr.tat-pr.bt;
                        totalWT+=pr.wt;
                        totalTAT+=pr.tat;
                        completed++;
                    }
                }

                else if(!q3.isEmpty()){
                    Process pr=q3.poll();
                    time+=pr.rt;
                    pr.rt=0;
                    pr.ct=time;
                    pr.tat=pr.ct-pr.at;
                    pr.wt=pr.tat-pr.bt;
                    totalWT+=pr.wt;
                    totalTAT+=pr.tat;
                    completed++;
                }

                else time++;
            }

            System.out.println("ID\tAT\tBT\tCT\tTAT\tWT");
            for(Process pr:p)
                System.out.println(pr.id+"\t"+pr.at+"\t"+pr.bt+"\t"+pr.ct+"\t"+pr.tat+"\t"+pr.wt);

            System.out.printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n", totalWT/n, totalTAT/n);
        }
    }`,


      cpp: `// MLFQ Scheduling
    #include <iostream>
    #include <queue>
    using namespace std;

    struct Process{
        int id,at,bt,rt,ct,tat,wt,level;
    };

    int main(){

        Process p[4]={{1,0,10,10,0,0,0,1},
                      {2,1,6,6,0,0,0,1},
                      {3,2,8,8,0,0,0,1},
                      {4,3,4,4,0,0,0,1}};

        int n=4;
        int time=0,completed=0;
        float totalWT=0,totalTAT=0;

        queue<Process*> q1,q2,q3;

        while(completed<n){

            for(int i=0;i<n;i++)
                if(p[i].at==time) q1.push(&p[i]);

            if(!q1.empty()){
                Process* pr=q1.front(); q1.pop();
                int tq=4;
                int exec=min(tq,pr->rt);
                pr->rt-=exec;
                time+=exec;

                if(pr->rt>0){ pr->level=2; q2.push(pr);}
                else{
                    pr->ct=time;
                    pr->tat=pr->ct-pr->at;
                    pr->wt=pr->tat-pr->bt;
                    totalWT+=pr->wt;
                    totalTAT+=pr->tat;
                    completed++;
                }
            }

            else if(!q2.empty()){
                Process* pr=q2.front(); q2.pop();
                int tq=8;
                int exec=min(tq,pr->rt);
                pr->rt-=exec;
                time+=exec;

                if(pr->rt>0){ pr->level=3; q3.push(pr);}
                else{
                    pr->ct=time;
                    pr->tat=pr->ct-pr->at;
                    pr->wt=pr->tat-pr->bt;
                    totalWT+=pr->wt;
                    totalTAT+=pr->tat;
                    completed++;
                }
            }

            else if(!q3.empty()){
                Process* pr=q3.front(); q3.pop();
                time+=pr->rt;
                pr->rt=0;
                pr->ct=time;
                pr->tat=pr->ct-pr->at;
                pr->wt=pr->tat-pr->bt;
                totalWT+=pr->wt;
                totalTAT+=pr->tat;
                completed++;
            }

            else time++;
        }

        cout<<"ID\tAT\tBT\tCT\tTAT\tWT\n";
        for(int i=0;i<n;i++)
            cout<<p[i].id<<"\t"<<p[i].at<<"\t"<<p[i].bt<<"\t"<<p[i].ct<<"\t"<<p[i].tat<<"\t"<<p[i].wt<<"\n";

        cout<<"\nAvg WT: "<<totalWT/n<<"\nAvg TAT: "<<totalTAT/n<<"\n";
    }`,


      c: `// MLFQ Scheduling
    #include <stdio.h>

    struct Process{
        int id,at,bt,rt,ct,tat,wt,level;
    };

    int main(){

        struct Process p[4]={
            {1,0,10,10,0,0,0,1},
            {2,1,6,6,0,0,0,1},
            {3,2,8,8,0,0,0,1},
            {4,3,4,4,0,0,0,1}
        };

        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;

        while(completed<n){

            int executed=0;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && p[i].rt>0){

                    int tq = (p[i].level==1)?4:(p[i].level==2)?8:p[i].rt;
                    int exec = (p[i].rt<tq)?p[i].rt:tq;

                    p[i].rt -= exec;
                    time += exec;

                    if(p[i].rt>0) p[i].level++;
                    else{
                        p[i].ct=time;
                        p[i].tat=p[i].ct-p[i].at;
                        p[i].wt=p[i].tat-p[i].bt;
                        totalWT+=p[i].wt;
                        totalTAT+=p[i].tat;
                        completed++;
                    }

                    executed=1;
                    break;
                }
            }

            if(!executed) time++;
        }

        printf("ID\tAT\tBT\tCT\tTAT\tWT\n");
        for(int i=0;i<n;i++)
            printf("%d\t%d\t%d\t%d\t%d\t%d\n",
                  p[i].id,p[i].at,p[i].bt,p[i].ct,p[i].tat,p[i].wt);

        printf("\nAvg WT: %.2f\nAvg TAT: %.2f\n",totalWT/n,totalTAT/n);

        return 0;
    }`
    }
  },
  fifo: {
      title: 'First-In First-Out (FIFO)',
      initials: 'FI',
      description: `FIFO is the simplest page replacement algorithm. The OS maintains a queue of all pages in memory. When a page fault occurs and no frames are free, the oldest page (the one at the front of the queue) is replaced.

      Logic Steps:
      1. Maintain a queue to track the order of pages entering the frames.
      2. For each request, if the page is already in a frame, it is a HIT.
      3. If the page is not in a frame (FAULT):
        a. If frames are available, add the page to an empty frame and the queue.
        b. If frames are full, remove the page at the front of the queue (the oldest) and insert the new page.
      4. Repeat for the entire reference string.`,
      best: 'Simple to implement',
      average: 'Medium fault rate',
      worst: "Belady's Anomaly (More frames can increase faults)",
      space: 'O(f)',
      code: {
        js: `// FIFO Page Replacement

      let pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
      let framesCount = 3;

      let frames = [];
      let hits = 0;
      let faults = 0;
      let pointer = 0;

      console.log("Page\tFrames");

      for (let i = 0; i < pages.length; i++) {
          let page = pages[i];

          if (frames.includes(page)) {
              hits++;
          } else {
              faults++;
              if (frames.length < framesCount) {
                  frames.push(page);
              } else {
                  frames[pointer] = page;
                  pointer = (pointer + 1) % framesCount;
              }
          }

          console.log(page + "\t" + frames.join(" "));
      }

      console.log("\nTotal Hits: " + hits);
      console.log("Total Faults: " + faults);
      console.log("Hit Ratio: " + (hits / pages.length).toFixed(2));
      console.log("Fault Ratio: " + (faults / pages.length).toFixed(2));`,


        python: `# FIFO Page Replacement

      pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]
      frames_count = 3

      frames = []
      hits = 0
      faults = 0
      pointer = 0

      print("Page\tFrames")

      for page in pages:
          if page in frames:
              hits += 1
          else:
              faults += 1
              if len(frames) < frames_count:
                  frames.append(page)
              else:
                  frames[pointer] = page
                  pointer = (pointer + 1) % frames_count

          print(page, "\t", frames)

      print("\nTotal Hits:", hits)
      print("Total Faults:", faults)
      print("Hit Ratio:", round(hits/len(pages),2))
      print("Fault Ratio:", round(faults/len(pages),2))`,


        java: `// FIFO Page Replacement
      import java.util.*;

      public class Main {
          public static void main(String[] args) {

              int[] pages = {7,0,1,2,0,3,0,4,2,3,0,3,2};
              int framesCount = 3;

              int[] frames = new int[framesCount];
              Arrays.fill(frames, -1);

              int hits = 0, faults = 0;
              int pointer = 0;

              System.out.println("Page\tFrames");

              for (int page : pages) {

                  boolean found = false;
                  for (int f : frames) {
                      if (f == page) {
                          found = true;
                          hits++;
                          break;
                      }
                  }

                  if (!found) {
                      faults++;
                      frames[pointer] = page;
                      pointer = (pointer + 1) % framesCount;
                  }

                  System.out.print(page + "\t");
                  for (int f : frames)
                      System.out.print((f == -1 ? "-" : f) + " ");
                  System.out.println();
              }

              System.out.println("\nTotal Hits: " + hits);
              System.out.println("Total Faults: " + faults);
              System.out.printf("Hit Ratio: %.2f\n", (double)hits/pages.length);
              System.out.printf("Fault Ratio: %.2f\n", (double)faults/pages.length);
          }
      }`,


        cpp: `// FIFO Page Replacement
      #include <iostream>
      #include <vector>
      using namespace std;

      int main() {

          vector<int> pages = {7,0,1,2,0,3,0,4,2,3,0,3,2};
          int framesCount = 3;

          vector<int> frames(framesCount, -1);

          int hits = 0, faults = 0;
          int pointer = 0;

          cout << "Page\tFrames\n";

          for (int page : pages) {

              bool found = false;
              for (int f : frames) {
                  if (f == page) {
                      found = true;
                      hits++;
                      break;
                  }
              }

              if (!found) {
                  faults++;
                  frames[pointer] = page;
                  pointer = (pointer + 1) % framesCount;
              }

              cout << page << "\t";
              for (int f : frames)
                  cout << (f == -1 ? -1 : f) << " ";
              cout << endl;
          }

          cout << "\nTotal Hits: " << hits << endl;
          cout << "Total Faults: " << faults << endl;
          cout << "Hit Ratio: " << (double)hits/pages.size() << endl;
          cout << "Fault Ratio: " << (double)faults/pages.size() << endl;

          return 0;
      }`,


        c: `// FIFO Page Replacement
      #include <stdio.h>

      int main() {

          int pages[] = {7,0,1,2,0,3,0,4,2,3,0,3,2};
          int n = 13;
          int framesCount = 3;

          int frames[3];
          for(int i=0;i<framesCount;i++) frames[i] = -1;

          int hits = 0, faults = 0;
          int pointer = 0;

          printf("Page\tFrames\n");

          for(int i=0;i<n;i++) {

              int page = pages[i];
              int found = 0;

              for(int j=0;j<framesCount;j++) {
                  if(frames[j] == page) {
                      found = 1;
                      hits++;
                      break;
                  }
              }

              if(!found) {
                  faults++;
                  frames[pointer] = page;
                  pointer = (pointer + 1) % framesCount;
              }

              printf("%d\t", page);
              for(int j=0;j<framesCount;j++)
                  printf("%d ", frames[j]);
              printf("\n");
          }

          printf("\nTotal Hits: %d\n", hits);
          printf("Total Faults: %d\n", faults);
          printf("Hit Ratio: %.2f\n", (float)hits/n);
          printf("Fault Ratio: %.2f\n", (float)faults/n);

          return 0;
      }`
      }
    },
  lru: {
    title: 'Least Recently Used (LRU)',
    initials: 'LR',
    description: `LRU replaces the page that has not been used for the longest time.

    Logic Steps:
    1. Maintain frames and track the most recent usage index of each page.
    2. For each page request:
      a. If page exists in frame → HIT.
      b. If page does not exist → FAULT.
    3. If frames are full during a fault:
      - Replace the page with the smallest recent usage index.
    4. Update usage index after every access.`,
    best: 'Good performance, no Belady anomaly',
    average: 'Lower faults than FIFO',
    worst: 'Needs tracking of usage',
    space: 'O(f)',

    code: {
      js: `// LRU Page Replacement

  let pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
  let framesCount = 3;

  let frames = [];
  let recent = new Map();
  let hits = 0;
  let faults = 0;

  console.log("Page\tFrames");

  for (let i = 0; i < pages.length; i++) {
      let page = pages[i];

      if (frames.includes(page)) {
          hits++;
      } else {
          faults++;
          if (frames.length < framesCount) {
              frames.push(page);
          } else {
              let lruPage = frames[0];
              let minIndex = recent.get(lruPage);

              for (let f of frames) {
                  if (recent.get(f) < minIndex) {
                      minIndex = recent.get(f);
                      lruPage = f;
                  }
              }

              frames[frames.indexOf(lruPage)] = page;
          }
      }

      recent.set(page, i);
      console.log(page + "\t" + frames.join(" "));
  }

  console.log("\\nTotal Hits: " + hits);
  console.log("Total Faults: " + faults);
  console.log("Hit Ratio: " + (hits / pages.length).toFixed(2));
  console.log("Fault Ratio: " + (faults / pages.length).toFixed(2));`,

      python: `# LRU Page Replacement

  pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]
  frames_count = 3

  frames = []
  recent = {}
  hits = 0
  faults = 0

  print("Page\tFrames")

  for i, page in enumerate(pages):
      if page in frames:
          hits += 1
      else:
          faults += 1
          if len(frames) < frames_count:
              frames.append(page)
          else:
              lru_page = min(frames, key=lambda x: recent[x])
              frames[frames.index(lru_page)] = page

      recent[page] = i
      print(page, "\t", frames)

  print("\nTotal Hits:", hits)
  print("Total Faults:", faults)
  print("Hit Ratio:", round(hits/len(pages),2))
  print("Fault Ratio:", round(faults/len(pages),2))`,

      java: `// LRU Page Replacement
  import java.util.*;

  public class Main {
      public static void main(String[] args) {

          int[] pages = {7,0,1,2,0,3,0,4,2,3,0,3,2};
          int framesCount = 3;

          List<Integer> frames = new ArrayList<>();
          Map<Integer,Integer> recent = new HashMap<>();

          int hits = 0, faults = 0;

          System.out.println("Page\tFrames");

          for(int i=0;i<pages.length;i++){

              int page = pages[i];

              if(frames.contains(page)){
                  hits++;
              } else {
                  faults++;
                  if(frames.size() < framesCount){
                      frames.add(page);
                  } else {
                      int lruPage = frames.get(0);
                      int min = recent.get(lruPage);

                      for(int f : frames){
                          if(recent.get(f) < min){
                              min = recent.get(f);
                              lruPage = f;
                          }
                      }

                      frames.set(frames.indexOf(lruPage), page);
                  }
              }

              recent.put(page,i);

              System.out.print(page + "\t");
              for(int f: frames) System.out.print(f + " ");
              System.out.println();
          }

          System.out.println("\nTotal Hits: " + hits);
          System.out.println("Total Faults: " + faults);
          System.out.printf("Hit Ratio: %.2f\n", (double)hits/pages.length);
          System.out.printf("Fault Ratio: %.2f\n", (double)faults/pages.length);
      }
  }`,

      cpp: `// LRU Page Replacement
  #include <iostream>
  #include <vector>
  #include <unordered_map>
  using namespace std;

  int main(){

      vector<int> pages = {7,0,1,2,0,3,0,4,2,3,0,3,2};
      int framesCount = 3;

      vector<int> frames;
      unordered_map<int,int> recent;

      int hits=0,faults=0;

      cout<<"Page\tFrames\n";

      for(int i=0;i<pages.size();i++){

          int page=pages[i];
          bool found=false;

          for(int f:frames)
              if(f==page){found=true;hits++;break;}

          if(!found){
              faults++;
              if(frames.size()<framesCount)
                  frames.push_back(page);
              else{
                  int lru=frames[0];
                  int min=recent[lru];
                  for(int f:frames)
                      if(recent[f]<min){min=recent[f];lru=f;}
                  frames[find(frames.begin(),frames.end(),lru)-frames.begin()]=page;
              }
          }

          recent[page]=i;

          cout<<page<<"\t";
          for(int f:frames) cout<<f<<" ";
          cout<<endl;
      }

      cout<<"\nTotal Hits: "<<hits;
      cout<<"\nTotal Faults: "<<faults;
      cout<<"\nHit Ratio: "<<(double)hits/pages.size();
      cout<<"\nFault Ratio: "<<(double)faults/pages.size();
  }`,

      c: `// LRU Page Replacement
  #include <stdio.h>

  int main(){

      int pages[]={7,0,1,2,0,3,0,4,2,3,0,3,2};
      int n=13;
      int framesCount=3;

      int frames[3]={-1,-1,-1};
      int recent[100];
      int hits=0,faults=0;

      printf("Page\tFrames\n");

      for(int i=0;i<n;i++){

          int page=pages[i];
          int found=0;

          for(int j=0;j<framesCount;j++)
              if(frames[j]==page){found=1;hits++;break;}

          if(!found){
              faults++;
              int replaceIndex=-1;

              for(int j=0;j<framesCount;j++)
                  if(frames[j]==-1){replaceIndex=j;break;}

              if(replaceIndex==-1){
                  int min=1000;
                  for(int j=0;j<framesCount;j++)
                      if(recent[frames[j]]<min){
                          min=recent[frames[j]];
                          replaceIndex=j;
                      }
              }

              frames[replaceIndex]=page;
          }

          recent[page]=i;

          printf("%d\t",page);
          for(int j=0;j<framesCount;j++)
              printf("%d ",frames[j]);
          printf("\n");
      }

      printf("\nTotal Hits: %d",hits);
      printf("\nTotal Faults: %d",faults);
      printf("\nHit Ratio: %.2f",(float)hits/n);
      printf("\nFault Ratio: %.2f",(float)faults/n);

      return 0;
  }`
    }
  },
  optimal: {
    title: 'Optimal Page Replacement',
    initials: 'OP',
    description: `Optimal replaces the page that will not be used for the longest time in the future.

    Logic Steps:
    1. Maintain frames.
    2. For each page request:
      a. If page exists → HIT.
      b. If page does not exist → FAULT.
    3. If frames are full:
      - Look ahead in the reference string.
      - Replace the page whose next use is farthest in the future.
      - If a page is never used again, replace it immediately.
    4. Repeat for entire reference string.`,
    best: 'Minimum possible page faults (theoretical best)',
    average: 'Better than FIFO and LRU',
    worst: 'Not practical (needs future knowledge)',
    space: 'O(f)',

    code: {
      js: `// Optimal Page Replacement

  let pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
  let framesCount = 3;

  let frames = [];
  let hits = 0;
  let faults = 0;

  console.log("Page\tFrames");

  for (let i = 0; i < pages.length; i++) {
      let page = pages[i];

      if (frames.includes(page)) {
          hits++;
      } else {
          faults++;

          if (frames.length < framesCount) {
              frames.push(page);
          } else {
              let farthest = -1;
              let replaceIndex = -1;

              for (let j = 0; j < frames.length; j++) {
                  let nextUse = pages.slice(i + 1).indexOf(frames[j]);

                  if (nextUse === -1) {
                      replaceIndex = j;
                      break;
                  }

                  if (nextUse > farthest) {
                      farthest = nextUse;
                      replaceIndex = j;
                  }
              }

              frames[replaceIndex] = page;
          }
      }

      console.log(page + "\t" + frames.join(" "));
  }

  console.log("\\nTotal Hits: " + hits);
  console.log("Total Faults: " + faults);
  console.log("Hit Ratio: " + (hits / pages.length).toFixed(2));
  console.log("Fault Ratio: " + (faults / pages.length).toFixed(2));`,

      python: `# Optimal Page Replacement

  pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]
  frames_count = 3

  frames = []
  hits = 0
  faults = 0

  print("Page\tFrames")

  for i in range(len(pages)):
      page = pages[i]

      if page in frames:
          hits += 1
      else:
          faults += 1

          if len(frames) < frames_count:
              frames.append(page)
          else:
              farthest = -1
              replace_index = -1

              for j in range(len(frames)):
                  try:
                      next_use = pages[i+1:].index(frames[j])
                  except ValueError:
                      replace_index = j
                      break

                  if next_use > farthest:
                      farthest = next_use
                      replace_index = j

              frames[replace_index] = page

      print(page, "\t", frames)

  print("\nTotal Hits:", hits)
  print("Total Faults:", faults)
  print("Hit Ratio:", round(hits/len(pages),2))
  print("Fault Ratio:", round(faults/len(pages),2))`,

      java: `// Optimal Page Replacement
  import java.util.*;

  public class Main {
      public static void main(String[] args) {

          int[] pages = {7,0,1,2,0,3,0,4,2,3,0,3,2};
          int framesCount = 3;

          List<Integer> frames = new ArrayList<>();
          int hits = 0, faults = 0;

          System.out.println("Page\tFrames");

          for(int i=0;i<pages.length;i++){

              int page = pages[i];

              if(frames.contains(page)){
                  hits++;
              } else {
                  faults++;

                  if(frames.size()<framesCount){
                      frames.add(page);
                  } else {

                      int farthest=-1;
                      int replaceIndex=-1;

                      for(int j=0;j<frames.size();j++){

                          int nextUse=-1;
                          for(int k=i+1;k<pages.length;k++){
                              if(pages[k]==frames.get(j)){
                                  nextUse=k;
                                  break;
                              }
                          }

                          if(nextUse==-1){
                              replaceIndex=j;
                              break;
                          }

                          if(nextUse>farthest){
                              farthest=nextUse;
                              replaceIndex=j;
                          }
                      }

                      frames.set(replaceIndex,page);
                  }
              }

              System.out.print(page+"\t");
              for(int f:frames) System.out.print(f+" ");
              System.out.println();
          }

          System.out.println("\nTotal Hits: "+hits);
          System.out.println("Total Faults: "+faults);
          System.out.printf("Hit Ratio: %.2f\n",(double)hits/pages.length);
          System.out.printf("Fault Ratio: %.2f\n",(double)faults/pages.length);
      }
  }`,

      cpp: `// Optimal Page Replacement
  #include <iostream>
  #include <vector>
  using namespace std;

  int main(){

      vector<int> pages={7,0,1,2,0,3,0,4,2,3,0,3,2};
      int framesCount=3;

      vector<int> frames;
      int hits=0,faults=0;

      cout<<"Page\tFrames\n";

      for(int i=0;i<pages.size();i++){

          int page=pages[i];
          bool found=false;

          for(int f:frames)
              if(f==page){found=true;hits++;break;}

          if(!found){
              faults++;
              if(frames.size()<framesCount)
                  frames.push_back(page);
              else{

                  int farthest=-1,replaceIndex=-1;

                  for(int j=0;j<frames.size();j++){

                      int nextUse=-1;
                      for(int k=i+1;k<pages.size();k++)
                          if(pages[k]==frames[j]){
                              nextUse=k;
                              break;
                          }

                      if(nextUse==-1){
                          replaceIndex=j;
                          break;
                      }

                      if(nextUse>farthest){
                          farthest=nextUse;
                          replaceIndex=j;
                      }
                  }

                  frames[replaceIndex]=page;
              }
          }

          cout<<page<<"\t";
          for(int f:frames) cout<<f<<" ";
          cout<<endl;
      }

      cout<<"\nTotal Hits: "<<hits;
      cout<<"\nTotal Faults: "<<faults;
      cout<<"\nHit Ratio: "<<(double)hits/pages.size();
      cout<<"\nFault Ratio: "<<(double)faults/pages.size();
  }`,

      c: `// Optimal Page Replacement
  #include <stdio.h>

  int main(){

      int pages[]={7,0,1,2,0,3,0,4,2,3,0,3,2};
      int n=13;
      int framesCount=3;

      int frames[3]={-1,-1,-1};
      int hits=0,faults=0;

      printf("Page\tFrames\n");

      for(int i=0;i<n;i++){

          int page=pages[i];
          int found=0;

          for(int j=0;j<framesCount;j++)
              if(frames[j]==page){found=1;hits++;break;}

          if(!found){
              faults++;
              int replaceIndex=-1;
              int farthest=-1;

              for(int j=0;j<framesCount;j++){

                  int nextUse=-1;
                  for(int k=i+1;k<n;k++)
                      if(pages[k]==frames[j]){
                          nextUse=k;
                          break;
                      }

                  if(nextUse==-1){
                      replaceIndex=j;
                      break;
                  }

                  if(nextUse>farthest){
                      farthest=nextUse;
                      replaceIndex=j;
                  }
              }

              frames[replaceIndex]=page;
          }

          printf("%d\t",page);
          for(int j=0;j<framesCount;j++)
              printf("%d ",frames[j]);
          printf("\n");
      }

      printf("\nTotal Hits: %d",hits);
      printf("\nTotal Faults: %d",faults);
      printf("\nHit Ratio: %.2f",(float)hits/n);
      printf("\nFault Ratio: %.2f",(float)faults/n);

      return 0;
  }`
    }
  }

};

// --- SECTION 2: APP COMPONENT ---
const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [currentView, setCurrentView] = useState('home');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const processColors = ['#E53935', '#00ACC1', '#FFB300', '#3949AB', '#43A047', '#8E24AA', '#D81B60', '#5D4037'];
  const [processes, setProcesses] = useState([
    { id: 1, at: 0, bt: 5, color: processColors[0] },
    { id: 2, at: 2, bt: 3, color: processColors[1] }
  ]);
  const [results, setResults] = useState([]);
  const [gantt, setGantt] = useState([]);
  const [isSimulated, setIsSimulated] = useState(false);

  // Add these state variables
  const [lang, setLang] = useState('js');
  const [copied, setCopied] = useState(false);

  const [refString, setRefString] = useState('7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2');
  const [frameCount, setFrameCount] = useState(3);
  const [pageHistory, setPageHistory] = useState([]);
  const [pageStats, setPageStats] = useState({ faults: 0, hits: 0 });

  const [expandedCats, setExpandedCats] = useState(['cpu']); // CPU open by default

  const toggleCategory = (id) => {
    setExpandedCats(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  // Add this function to handle the copy button logic
  const copyToClipboard = () => {
    const code = ALGO_DATA[currentView]?.code?.[lang];
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const HomeView = () => (
    <div style={styles.homeContainer}>
      <header style={styles.homeHeader}>
        <h1 style={styles.homeTitle}>OSAlgoViz</h1>
        <p style={styles.homeSubtitle}>Master kernel-level logic with professional Gantt charts and real-time execution analytics.</p>
      </header>
      <div style={styles.homeGrid}>
        {Object.entries(ALGO_DATA).map(([key, data]) => (
          <div key={key} style={styles.algoCard} onClick={() => setCurrentView(key)}>
            <div style={styles.cardHeaderFlex}>
              <div style={styles.initialsIcon}>{data.initials}</div>
              <h3 style={styles.cardTitle}>{data.title}</h3>
            </div>
            <p style={styles.cardDesc}>{data.description}</p>
            <div style={styles.cardFooter}>
              <button style={styles.cardBtn}>Explore Algorithm →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const metrics = React.useMemo(() => {
    if (!isSimulated || results.length === 0) return { awt: 0, atat: 0, throughput: 0 };
    const totalWT = results.reduce((acc, r) => acc + (r.wt || 0), 0);
    const totalTAT = results.reduce((acc, r) => acc + (r.tat || 0), 0);
    
    // Throughput = Total Processes / Total Time taken
    const lastCT = gantt.length > 0 ? gantt[gantt.length - 1].end : 1;
    const throughput = (results.length / lastCT).toFixed(3);

    return {
      awt: (totalWT / results.length).toFixed(2),
      atat: (totalTAT / results.length).toFixed(2),
      throughput: throughput
    };
  }, [results, isSimulated, gantt]);

  const runFCFS = () => {
    if (processes.length === 0) return;
    let time = 0;
    const timeline = [];
    const sorted = [...processes].sort((a, b) => a.at - b.at);
    const final = sorted.map(p => {
      if (time < p.at) {
        timeline.push({ type: 'idle', start: time, end: p.at });
        time = p.at;
      }
      const start = time;
      const ct = start + p.bt;
      const tat = ct - p.at;
      const wt = tat - p.bt;
      time = ct;
      timeline.push({ type: 'proc', id: p.id, start, end: ct, color: p.color });
      return { ...p, ct, tat, wt };
    });
    setResults(final);
    setGantt(timeline);
    setIsSimulated(true);
  };

  const runSJF = () => {
    if (processes.length === 0) return;
    let time = 0, completed = 0, n = processes.length;
    let tempProcs = processes.map(p => ({ ...p }));
    let isDone = Array(n).fill(false);
    let timeline = [];
    let finalResults = [];

    while (completed < n) {
      let idx = -1;
      let minBt = Infinity;

      // Find process with min BT that has arrived
      for (let i = 0; i < n; i++) {
        if (tempProcs[i].at <= time && !isDone[i]) {
          if (tempProcs[i].bt < minBt) {
            minBt = tempProcs[i].bt;
            idx = i;
          }
        }
      }

      if (idx === -1) {
        // Idle time handling
        let nextArrival = Math.min(...tempProcs.filter((_, i) => !isDone[i]).map(p => p.at));
        timeline.push({ type: 'idle', start: time, end: nextArrival });
        time = nextArrival;
        continue;
      }

      // Process execution
      const p = tempProcs[idx];
      const start = time;
      p.ct = start + p.bt;
      p.tat = p.ct - p.at;
      p.wt = p.tat - p.bt;
      
      timeline.push({ type: 'proc', id: p.id, start, end: p.ct, color: p.color });
      time = p.ct;
      isDone[idx] = true;
      completed++;
      finalResults.push(p);
    }

    setResults(finalResults);
    setGantt(timeline);
    setIsSimulated(true);
  };

  const [quantum, setQuantum] = useState(2);

  const runRR = () => {
    let time = 0, completed = 0, n = processes.length, timeline = [], res = processes.map(p => ({ ...p }));
    let rem = res.map(p => p.bt), queue = [], inQ = Array(n).fill(false), isDone = Array(n).fill(false);
    
    const checkArrivals = () => {
      let sorted = [...res].map((p, i) => ({...p, originalIdx: i})).sort((a,b) => a.at - b.at);
      sorted.forEach(p => {
        if (p.at <= time && !inQ[p.originalIdx] && !isDone[p.originalIdx]) {
          queue.push(p.originalIdx); inQ[p.originalIdx] = true;
        }
      });
    };

    checkArrivals();
    if (queue.length === 0 && completed < n) {
      let next = Math.min(...res.filter((_, i) => !isDone[i]).map(p => p.at));
      timeline.push({ type: 'idle', start: time, end: next }); 
      time = next; 
      checkArrivals();
    }

    while (completed < n) {
      if (queue.length === 0) {
        let next = Math.min(...res.filter((_, i) => !isDone[i]).map(p => p.at));
        timeline.push({ type: 'idle', start: time, end: next }); 
        time = next; checkArrivals(); continue;
      }
      let idx = queue.shift();
      let slice = Math.min(rem[idx], quantum);
      timeline.push({ type: 'proc', id: res[idx].id, start: time, end: time + slice, color: res[idx].color });
      time += slice; rem[idx] -= slice;
      checkArrivals();
      if (rem[idx] === 0) {
        res[idx].ct = time; res[idx].tat = time - res[idx].at; res[idx].wt = res[idx].tat - res[idx].bt;
        isDone[idx] = true; completed++;
      } else {
        queue.push(idx);
      }
    }
    setResults(res); setGantt(timeline); setIsSimulated(true);
  };

  const runPriority = () => {
    let time = 0, completed = 0, n = processes.length, isDone = Array(n).fill(false), timeline = [], res = [];
    let temp = processes.map(p => ({ ...p, priority: p.priority || 1 }));

    while (completed < n) {
      let idx = -1, highestPrio = Infinity;
      for (let i = 0; i < n; i++) {
        if (temp[i].at <= time && !isDone[i]) {
          if (temp[i].priority < highestPrio) { highestPrio = temp[i].priority; idx = i; }
        }
      }
      if (idx === -1) {
        let next = Math.min(...temp.filter((_, i) => !isDone[i]).map(p => p.at));
        timeline.push({ type: 'idle', start: time, end: next }); time = next; continue;
      }
      const p = temp[idx]; const start = time; p.ct = start + p.bt; p.tat = p.ct - p.at; p.wt = p.tat - p.bt;
      timeline.push({ type: 'proc', id: p.id, start, end: p.ct, color: p.color });
      time = p.ct; isDone[idx] = true; completed++; res.push(p);
    }
    setResults(res); setGantt(timeline); setIsSimulated(true);
  };

  const runSRTF = () => {
    if (processes.length === 0) return;
    let time = 0, completed = 0, n = processes.length;
    let res = processes.map(p => ({ ...p }));
    let rem = res.map(p => p.bt);
    let isDone = Array(n).fill(false);
    let timeline = [];

    while (completed < n) {
      let idx = -1;
      let minRem = Infinity;

      for (let i = 0; i < n; i++) {
        if (res[i].at <= time && !isDone[i] && rem[i] < minRem) {
          minRem = rem[i];
          idx = i;
        }
      }

      if (idx === -1) {
        let nextArrival = Math.min(...res.filter((_, i) => !isDone[i]).map(p => p.at));
        timeline.push({ type: 'idle', start: time, end: nextArrival });
        time = nextArrival;
        continue;
      }

      // Since it's preemptive, we execute 1 unit at a time to check for new arrivals
      const currentP = res[idx];
      const start = time;
      rem[idx]--;
      time++;

      // Add or update the last block in timeline to avoid fragmentation if same process continues
      if (timeline.length > 0 && timeline[timeline.length - 1].id === currentP.id && timeline[timeline.length - 1].type === 'proc') {
        timeline[timeline.length - 1].end = time;
      } else {
        timeline.push({ type: 'proc', id: currentP.id, start, end: time, color: currentP.color });
      }

      if (rem[idx] === 0) {
        res[idx].ct = time;
        res[idx].tat = res[idx].ct - res[idx].at;
        res[idx].wt = res[idx].tat - res[idx].bt;
        isDone[idx] = true;
        completed++;
      }
    }

    setResults(res);
    setGantt(timeline);
    setIsSimulated(true);
  };

  const runPreemptivePriority = () => {
    if (processes.length === 0) return;
    let time = 0, completed = 0, n = processes.length;
    let res = processes.map(p => ({ ...p, priority: p.priority || 1 }));
    let rem = res.map(p => p.bt);
    let isDone = Array(n).fill(false);
    let timeline = [];

    while (completed < n) {
      let idx = -1;
      let highestPrio = Infinity;

      for (let i = 0; i < n; i++) {
        if (res[i].at <= time && !isDone[i] && res[i].priority < highestPrio) {
          highestPrio = res[i].priority;
          idx = i;
        }
      }

      if (idx === -1) {
        let remaining = res.filter((_, i) => !isDone[i]);
        let nextArrival = Math.min(...remaining.map(p => p.at));
        timeline.push({ type: 'idle', start: time, end: nextArrival });
        time = nextArrival;
        continue;
      }

      const currentP = res[idx];
      const start = time;
      rem[idx]--;
      time++;

      if (timeline.length > 0 && timeline[timeline.length - 1].id === currentP.id && timeline[timeline.length - 1].type === 'proc') {
        timeline[timeline.length - 1].end = time;
      } else {
        timeline.push({ type: 'proc', id: currentP.id, start, end: time, color: currentP.color });
      }

      if (rem[idx] === 0) {
        res[idx].ct = time;
        res[idx].tat = res[idx].ct - res[idx].at;
        res[idx].wt = res[idx].tat - res[idx].bt;
        isDone[idx] = true;
        completed++;
      }
    }

    setResults(res);
    setGantt(timeline);
    setIsSimulated(true);
  };

  const runMLQ = () => {
    if (processes.length === 0) return;
    let time = 0, completed = 0, n = processes.length;
    let res = processes.map(p => ({ ...p, priority: p.priority || 1 }));
    let rem = res.map(p => p.bt), isDone = Array(n).fill(false), inQ1 = Array(n).fill(false);
    let q1 = [], timeline = [];

    const updateQ1 = () => {
      res.forEach((p, i) => {
        if (p.at <= time && p.priority === 1 && !isDone[i] && !inQ1[i]) {
          q1.push(i); inQ1[i] = true;
        }
      });
    };

    while (completed < n) {
      updateQ1();
      if (q1.length > 0) {
        let idx = q1.shift();
        let slice = Math.min(rem[idx], quantum);
        timeline.push({ type: 'proc', id: res[idx].id, start: time, end: time + slice, color: res[idx].color });
        time += slice; rem[idx] -= slice;
        updateQ1();
        if (rem[idx] === 0) {
          res[idx].ct = time; res[idx].tat = time - res[idx].at; res[idx].wt = res[idx].tat - res[idx].bt;
          isDone[idx] = true; completed++;
        } else {
          q1.push(idx);
        }
      } else {
        let q2_idx = -1, minAt = Infinity;
        res.forEach((p, i) => {
          if (p.at <= time && p.priority > 1 && !isDone[i]) {
            if (p.at < minAt) { minAt = p.at; q2_idx = i; }
          }
        });
        if (q2_idx !== -1) {
          let start = time; time++; rem[q2_idx]--;
          if (timeline.length > 0 && timeline[timeline.length - 1].id === res[q2_idx].id && timeline[timeline.length - 1].type === 'proc') {
            timeline[timeline.length - 1].end = time;
          } else {
            timeline.push({ type: 'proc', id: res[q2_idx].id, start, end: time, color: res[q2_idx].color });
          }
          if (rem[q2_idx] === 0) {
            res[q2_idx].ct = time; res[q2_idx].tat = time - res[q2_idx].at; res[q2_idx].wt = res[q2_idx].tat - res[q2_idx].bt;
            isDone[q2_idx] = true; completed++;
          }
        } else {
          let remaining = res.filter((p, i) => !isDone[i]);
          if (remaining.length > 0) {
            let next = Math.min(...remaining.map(p => p.at));
            timeline.push({ type: 'idle', start: time, end: next }); time = next;
          } else break;
        }
      }
    }
    setResults(res); setGantt(timeline); setIsSimulated(true);
  };

  const runMLFQ = () => {
    if (processes.length === 0) return;
    let time = 0, completed = 0, n = processes.length;
    let res = processes.map(p => ({ ...p }));
    let rem = res.map(p => p.bt), isDone = Array(n).fill(false), inSys = Array(n).fill(false);
    let Q1 = [], Q2 = [], Q3 = [], timeline = [];
    const q2_quantum = quantum * 2;

    const fetchArrivals = () => {
      res.forEach((p, i) => {
        if (p.at <= time && !isDone[i] && !inSys[i]) {
          Q1.push(i); inSys[i] = true;
        }
      });
    };

    while (completed < n) {
      fetchArrivals();
      if (Q1.length > 0) {
        let idx = Q1.shift();
        let slice = Math.min(rem[idx], quantum);
        timeline.push({ type: 'proc', id: res[idx].id, start: time, end: time + slice, color: res[idx].color });
        time += slice; rem[idx] -= slice;
        fetchArrivals();
        if (rem[idx] === 0) {
          res[idx].ct = time; res[idx].tat = time - res[idx].at; res[idx].wt = res[idx].tat - res[idx].bt;
          isDone[idx] = true; completed++;
        } else Q2.push(idx);
      } else if (Q2.length > 0) {
        let idx = Q2.shift();
        let slice = Math.min(rem[idx], q2_quantum);
        // Preemptive check: Q2 process executes 1 unit at a time to allow Q1 preemption
        let actualSlice = 0;
        while (actualSlice < slice) {
          actualSlice++; time++; rem[idx]--; fetchArrivals();
          if (timeline.length > 0 && timeline[timeline.length - 1].id === res[idx].id) {
            timeline[timeline.length - 1].end = time;
          } else {
            timeline.push({ type: 'proc', id: res[idx].id, start: time - 1, end: time, color: res[idx].color });
          }
          if (Q1.length > 0 || rem[idx] === 0) break;
        }
        if (rem[idx] === 0) {
          res[idx].ct = time; res[idx].tat = time - res[idx].at; res[idx].wt = res[idx].tat - res[idx].bt;
          isDone[idx] = true; completed++;
        } else if (actualSlice === q2_quantum) Q3.push(idx);
        else Q2.unshift(idx); // Put back to front if preempted by Q1
      } else if (Q3.length > 0) {
        let idx = Q3.shift();
        time++; rem[idx]--; fetchArrivals();
        if (timeline.length > 0 && timeline[timeline.length - 1].id === res[idx].id) {
          timeline[timeline.length - 1].end = time;
        } else {
          timeline.push({ type: 'proc', id: res[idx].id, start: time - 1, end: time, color: res[idx].color });
        }
        if (rem[idx] === 0) {
          res[idx].ct = time; res[idx].tat = time - res[idx].at; res[idx].wt = res[idx].tat - res[idx].bt;
          isDone[idx] = true; completed++;
        } else Q3.unshift(idx); // Keep in Q3 (FCFS behavior but preemptible by Q1/Q2)
      } else {
        let remaining = res.filter((p, i) => !isDone[i]);
        if (remaining.length > 0) {
          let next = Math.min(...remaining.map(p => p.at));
          timeline.push({ type: 'idle', start: time, end: next }); time = next;
        } else break;
      }
    }
    setResults(res); setGantt(timeline); setIsSimulated(true);
  };

  const runPageSimulation = () => {
    const pages = refString.split(',').map(s => s.trim()).filter(s => s !== "");
    const frames = parseInt(frameCount);
    let memory = [];
    let history = [];
    let faults = 0;
    let hits = 0;

    pages.forEach((page, idx) => {
      let isHit = memory.includes(page);
      if (isHit) {
        hits++;
        if (currentView === 'lru') {
          memory = memory.filter(p => p !== page);
          memory.push(page);
        }
      } else {
        faults++;
        if (memory.length < frames) {
          memory.push(page);
        } else {
          if (currentView === 'fifo') {
            memory.shift();
            memory.push(page);
          } else if (currentView === 'lru') {
            memory.shift();
            memory.push(page);
          } else if (currentView === 'optimal') {
            let farthest = -1, replaceIdx = 0;
            for (let i = 0; i < memory.length; i++) {
              let nextUse = pages.slice(idx + 1).indexOf(memory[i]);
              if (nextUse === -1) { replaceIdx = i; break; }
              if (nextUse > farthest) { farthest = nextUse; replaceIdx = i; }
            }
            memory[replaceIdx] = page;
          }
        }
      }
      history.push({ page, memory: [...memory], isHit });
    });

    setPageHistory(history);
    setPageStats({ faults, hits });
    setIsSimulated(true);
  };

  const generateRandomRef = () => {
    const length = Math.floor(Math.random() * 11) + 10;
    
    const randomNumbers = Array.from({ length }, () => Math.floor(Math.random() * 10));
    
    const newRefString = randomNumbers.join(', ');
    
    setRefString(newRefString);
    
    setIsSimulated(false);
  };

  const PageReplacementUI = ({ currentView }) => {
    const [inputStr, setInputStr] = useState("7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2");
    const [frames, setFrames] = useState(3);
    const [results, setResults] = useState(null);

    const handleSimulate = () => {
      const data = runPageSimulation(currentView, inputStr, frames);
      setResults(data);
    };

    return (
      <div style={{ marginTop: '30px' }}>
        {/* 1. Control Panel */}
        <div style={styles.controlPanel}>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Page Reference String</label>
            <input 
              style={styles.textInput} 
              value={inputStr} 
              onChange={(e) => setInputStr(e.target.value)} 
            />
            <button 
              onClick={generateRandomRef}
              style={{
                backgroundColor: 'var(--surface-muted)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--blue-orange)',
                padding: '8px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = 'var(--nav-key-wholebg)'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'var(--surface-muted)'}
            >
              <span>🎲</span> Randomize
            </button>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Frames: {frames}</label>
            <input 
              type="range" min="1" max="7" 
              style={styles.rangeInput} 
              value={frames} 
              onChange={(e) => setFrames(e.target.value)} 
            />
          </div>
          <button style={styles.primaryBtn} onClick={handleSimulate}>Simulate</button>
        </div>

        {/* 2. Results Table */}
        {results && (
          <div style={styles.resultsArea}>
            <div style={styles.statsBar}>
              <div style={styles.statBox}>
                  <span style={styles.statVal}>{results.faults}</span>
                  <span style={styles.statLabel}>Faults</span>
              </div>
              <div style={styles.statBox}>
                  <span style={styles.statVal}>{results.hits}</span>
                  <span style={styles.statLabel}>Hits</span>
              </div>
            </div>
            
            <div style={styles.frameTableWrapper}>
              <table style={styles.frameTable}>
                <thead>
                  <tr>
                    <th style={styles.th}>Step</th>
                    <th style={styles.th}>Page</th>
                    {[...Array(parseInt(frames))].map((_, i) => <th key={i} style={styles.th}>F{i+1}</th>)}
                    <th style={styles.th}>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {results.history.map((step, idx) => (
                    <tr key={idx}>
                      <td style={styles.td}>{idx + 1}</td>
                      <td style={{...styles.td, fontWeight: '800'}}>{step.page}</td>
                      {[...Array(parseInt(frames))].map((_, i) => (
                        <td key={i} style={{
                          ...styles.td,
                          backgroundColor: step.memory[i] === step.page ? 'rgba(250,124,21,0.1)' : 'transparent',
                          color: step.memory[i] === step.page ? 'var(--blue-orange)' : 'inherit'
                        }}>
                          {step.memory[i] || '-'}
                        </td>
                      ))}
                      <td style={styles.td}>
                        <span style={{
                          color: step.isHit ? '#10b981' : '#ef4444',
                          fontWeight: '800', fontSize: '11px'
                        }}>
                          {step.isHit ? 'HIT' : 'MISS'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };


  const generateRandom = () => {
    const count = Math.floor(Math.random() * 3) + 3;
    const randomP = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      at: Math.floor(Math.random() * 10),
      bt: Math.floor(Math.random() * 10) + 1,
      // Ensure priority is set for both priority views
      priority: (currentView === 'priority' || currentView === 'preemptivePriority' || currentView === 'mlq') 
                ? Math.floor(Math.random() * 5) + 1 
                : undefined,
      color: processColors[i % 8]
    }));
    setProcesses(randomP); setResults([]); setIsSimulated(false); setGantt([]);
  };

  return (
    <div style={styles.layout}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:wght@100..900&display=swap');
      `}</style>

      {/* Sidebar Navigation */}
      <aside className="sidebar" style={{ ...styles.sidebar, width: isSidebarOpen ? '320px' : '85px' }}>
        <div style={styles.sidebarHeader} onClick={() => setCurrentView('home')}>
          {/* Logo visibility fix: background-color and white text */}
          <div style={{ ...styles.logoBox, backgroundColor: 'var(--blue-orange)' }}>
            <span style={{ color: '#ffffff', fontWeight: '900' }}>OS</span>
          </div>
          {isSidebarOpen && <span style={styles.logoText}>OSAlgoViz</span>}
        </div>

        {/* <nav style={styles.navList}>
          {Object.entries(ALGO_DATA).map(([key, data]) => (
            <div 
              key={key} 
              style={{ ...styles.navItem, backgroundColor: currentView === key ? 'var(--nav-key-wholebg)' : 'transparent' }}
              onClick={() => setCurrentView(key)}
            >
              <div style={{ 
                ...styles.navInitials, 
                backgroundColor: currentView === key ? 'var(--nav-key-bgcolor)' : 'var(--nav-nokey-bgcolor)',
                color: 'var(--nav-key-color)'
              }}>
                {data.initials}
              </div>
              {isSidebarOpen && (
                <span style={{ 
                  ...styles.navLabel, 
                  color: currentView === key ? 'var(--blue-orange)' : 'var(--text-secondary)' 
                }}>
                  {data.title}
                </span>
              )}
            </div>
          ))}
        </nav> */}

        <nav className="nav-list">
          {NAVIGATION_STRUCTURE.map((cat) => {
            // 1. DEFINE THE VARIABLE HERE (Inside the loop)
            const isCategoryActive = cat.items.includes(currentView);

            return (
              <div key={cat.id} className="nav-section">
                {isSidebarOpen ? (
                  <div 
                    // 2. APPLY THE CLASS HERE
                    className={`section-header ${isCategoryActive ? 'active' : ''}`} 
                    onClick={() => toggleCategory(cat.id)}
                  >
                    <span>{cat.label}</span>
                    <span style={{ fontSize: '10px' }}>
                      {expandedCats.includes(cat.id) ? '▼' : '▶'}
                    </span>
                  </div>
                ) : (
                  <div className="section-divider" />
                )}

                {/* Algorithm Items mapping continues below... */}
                {(expandedCats.includes(cat.id) || !isSidebarOpen) && cat.items.map(item => (
                  <div 
                    key={item} 
                    className={`nav-item ${currentView === item ? 'active' : ''}`}
                    onClick={() => {
                      // 1. Switch the view
                      setCurrentView(item);
                      
                      // 2. Clear the simulation status
                      setIsSimulated(false);
                      
                      // 3. Clear only the calculated results (keep inputs)
                      if (setResults) setResults([]);
                      if (setGantt) setGantt([]);
                      if (setPageHistory) setPageHistory([]);
                      if (setPageStats) setPageStats({ faults: 0, hits: 0 });
                    }}
                  >
                    <div className="nav-initials">
                      {ALGO_DATA[item]?.initials || '??'}
                    </div>
                    {isSidebarOpen && (
                      <span className="nav-label">
                        {ALGO_DATA[item]?.title || item}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </nav>

        <button style={{ ...styles.collapseBtn, borderTop: '1px solid var(--border-subtle)' }} onClick={() => setSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? '← Collapse' : '→'}
        </button>
      </aside>

      <main style={styles.content}>
        {/* Theme Toggle remains at the top */}
        <div style={styles.topActions}>
          <button onClick={toggleTheme} style={styles.themeToggle}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {currentView === 'home' ? <HomeView /> : (
          <div style={styles.vizPage}>
            
            {/* 1. SHARED HEADER SECTION */}
            <div style={styles.vizHeader}>
              <div>
                <h2 style={{ ...styles.homeTitle, fontSize: '40px', margin: 0 }}>
                  {ALGO_DATA[currentView].title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
                  Simulation Status: {isSimulated ? 'Completed' : 'Modified'}
                </p>
              </div>

              {/* 2. DYNAMIC ACTIONS (Changes based on Module) */}
              <div style={styles.vizActions}>
                {['fifo', 'lru', 'optimal'].includes(currentView) ? (
                  /* PAGE REPLACEMENT CONTROLS */
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <small style={styles.miniLabel}>REF STRING:</small>
                      <input 
                        style={{ ...styles.tableInput, width: '200px' }} 
                        value={refString} 
                        onChange={e => {setRefString(e.target.value); setIsSimulated(false);}} 
                      />
                    </div>
                      <button 
                        onClick={generateRandomRef}
                        style={{
                          backgroundColor: 'var(--surface)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-primary)',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.2s',
                          marginTop: 20
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = 'var(--nav-key-wholebg)'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'var(--surface-muted)'}
                      >
                        <span>🎲</span> Randomize
                      </button>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <small style={styles.miniLabel}>FRAMES:</small>
                      <input 
                        type="number" 
                        style={{ ...styles.tableInput, width: '60px' }} 
                        value={frameCount} 
                        onChange={e => {setFrameCount(e.target.value); setIsSimulated(false);}} 
                      />
                    </div>
                    <button 
                      style={{ ...styles.btnPlay, backgroundColor: 'var(--blue-orange)', marginTop: '18px' }} 
                      onClick={runPageSimulation}
                    >RUN SIMULATION</button>
                  </div>
                ) : (
                  /* CPU SCHEDULING CONTROLS */
                  <>
                    {(currentView === 'rr'|| currentView === 'mlq'|| currentView === 'mlfq') && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '10px' }}>
                        <small style={{ fontWeight: 'bold', fontSize: '11px', color: 'var(--text-secondary)' }}>QUANTUM:</small>
                        <input 
                          type="number" 
                          value={quantum} 
                          onChange={e => setQuantum(parseInt(e.target.value) || 1)} 
                          style={styles.tableInput} 
                        />
                      </div>
                    )}
                    <button 
                      style={{ ...styles.btnPlay, backgroundColor: 'var(--blue-orange)' }} 
                      onClick={() => {
                        if (currentView === 'fcfs') runFCFS();
                        else if (currentView === 'sjf') runSJF();
                        else if (currentView === 'rr') runRR();
                        else if (currentView === 'priority') runPriority();
                        else if (currentView === 'srtf') runSRTF();
                        else if (currentView === 'preemptivePriority') runPreemptivePriority();
                        else if (currentView === 'mlq') runMLQ();
                        else if (currentView === 'mlfq') runMLFQ();
                      }}
                    >RUN SIMULATION</button>
                    <button style={styles.btnAdd} onClick={generateRandom}>🎲 Randomize</button>
                    <button style={styles.btnAdd} onClick={() => {
                      const nextId = processes.length > 0 ? Math.max(...processes.map(p => p.id)) + 1 : 1;
                      setProcesses([...processes, { id: nextId, at: 0, bt: 1, color: processColors[nextId % 8] }]);
                      setIsSimulated(false);
                    }}>+</button>
                    <button style={styles.btnClear} onClick={() => { setProcesses([]); setResults([]); setIsSimulated(false); setGantt([]); }}>Clear</button>
                  </>
                )}
              </div>
            </div>

            {/* 3. DYNAMIC VISUALIZER CANVAS */}
            <div style={{ ...styles.vizCanvas, backgroundColor: 'var(--surface)', borderColor: 'var(--border-subtle)' }}>
              {['fifo', 'lru', 'optimal'].includes(currentView) ? (
                /* PAGE REPLACEMENT VIEW */
                !isSimulated ? (
                  <div style={{ textAlign: 'center', padding: '100px', color: 'var(--text-secondary)' }}>
                    Configure your reference string and frames, then click RUN.
                  </div>
                ) : (
                  <table style={styles.processTable}>
                    <thead>
                      <tr>
                        <th style={styles.th}>Step</th>
                        <th style={styles.th}>Page</th>
                        {[...Array(parseInt(frameCount))].map((_, i) => <th key={i} style={styles.th}>Frame {i+1}</th>)}
                        <th style={styles.th}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageHistory.map((step, idx) => (
                        <tr key={idx}>
                          <td style={styles.td}>{idx + 1}</td>
                          <td style={{ ...styles.td, fontWeight: '800' }}>{step.page}</td>
                          {[...Array(parseInt(frameCount))].map((_, i) => (
                            <td key={i} style={{ 
                              ...styles.td, 
                              backgroundColor: step.memory[i] === step.page ? 'var(--nav-key-wholebg)' : 'transparent',
                              color: step.memory[i] === step.page ? 'var(--blue-orange)' : 'inherit',
                              fontWeight: step.memory[i] === step.page ? '800' : '400'
                            }}>
                              {step.memory[i] ?? '-'}
                            </td>
                          ))}
                          <td style={styles.td}>
                            <span style={{ 
                              fontSize: '11px', fontWeight: '800', padding: '4px 8px', borderRadius: '6px',
                              backgroundColor: step.isHit ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                              color: step.isHit ? '#10b981' : '#ef4444'
                            }}>
                              {step.isHit ? 'HIT' : 'FAULT'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )
              ) : (
                /* CPU SCHEDULING VIEW */
                processes.length === 0 ? (
                  <div style={{ textAlign: 'center', marginTop: '100px', color: 'var(--text-secondary)' }}>Your process queue is empty.</div>
                ) : (
                  <>
                    <table style={styles.processTable}>
                      <thead>
                        <tr>
                          <th style={styles.th}>PID</th>
                          <th style={styles.th}>Arrival</th>
                          <th style={styles.th}>Burst</th>
                          {(currentView === 'priority' || currentView === 'preemptivePriority' || currentView === 'mlq') && <th style={styles.th}>Prio</th>}
                          <th style={styles.th}>CT</th>
                          <th style={styles.th}>TAT</th>
                          <th style={styles.th}>WT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {processes.map((p, idx) => {
                          const res = results.find(r => r.id === p.id) || {};
                          return (
                            <tr key={p.id}>
                              <td style={styles.td}><span style={{ ...styles.pTag, backgroundColor: p.color }}>P{p.id}</span></td>
                              <td style={styles.td}><input type="number" value={p.at} onChange={e => {
                                const newP = [...processes]; newP[idx].at = parseInt(e.target.value) || 0; 
                                setProcesses(newP); setIsSimulated(false);
                              }} style={styles.tableInput} /></td>
                              <td style={styles.td}><input type="number" value={p.bt} onChange={e => {
                                const newP = [...processes]; newP[idx].bt = parseInt(e.target.value) || 1; 
                                setProcesses(newP); setIsSimulated(false);
                              }} style={styles.tableInput} /></td>
                              {(currentView === 'priority' || currentView === 'preemptivePriority' || currentView === 'mlq') && (
                                <td style={styles.td}><input type="number" value={p.priority || 1} onChange={e => {
                                  const n = [...processes]; n[idx].priority = parseInt(e.target.value) || 1;
                                  setProcesses(n); setIsSimulated(false);
                                }} style={styles.tableInput} /></td>
                              )}
                              <td style={styles.td}>{res.ct ?? '-'}</td>
                              <td style={styles.td}>{res.tat ?? '-'}</td>
                              <td style={styles.td}>{res.wt ?? '-'}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    {isSimulated && gantt.length > 0 && (
                      <div style={{ marginTop: '40px', paddingBottom: '30px' }}>
                        <p style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-secondary)', marginBottom: '15px', letterSpacing: '1px' }}>GANTT CHART ANALYSIS</p>
                        <div style={styles.ganttContainer}>
                          {gantt.map((item, i) => (
                            <div key={i} style={{ 
                              ...styles.ganttBlock, 
                              flexGrow: (item.end - item.start) || 0.1, 
                              backgroundColor: item.type === 'idle' ? 'var(--surface-muted)' : item.color,
                              borderRight: i !== gantt.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                            }}>
                              {item.type === 'proc' ? `P${item.id}` : ''}
                              <span style={styles.ganttTimeLeft}>{item.start}</span>
                              {i === gantt.length - 1 && <span style={styles.ganttTimeRight}>{item.end}</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )
              )}
            </div>

            {/* 4. METRICS ANALYSIS SECTION */}
            <div style={{ marginTop: '32px', display: 'flex', gap: '20px' }}>
              {['fifo', 'lru', 'optimal'].includes(currentView) ? (
                /* PAGE REPLACEMENT METRICS */
                <>
                  <div style={styles.compCard}>
                    <small style={{ color: 'var(--text-secondary)', fontWeight: '800' }}>TOTAL FAULTS</small>
                    <h4 style={{ fontSize: '28px', color: '#ef4444', margin: '8px 0 0 0' }}>{pageStats.faults}</h4>
                  </div>
                  <div style={styles.compCard}>
                    <small style={{ color: 'var(--text-secondary)', fontWeight: '800' }}>TOTAL HITS</small>
                    <h4 style={{ fontSize: '28px', color: '#10b981', margin: '8px 0 0 0' }}>{pageStats.hits}</h4>
                  </div>
                  <div style={styles.compCard}>
                    <small style={{ color: 'var(--text-secondary)', fontWeight: '800' }}>HIT RATIO</small>
                    <h4 style={{ fontSize: '28px', color: 'var(--blue-orange)', margin: '8px 0 0 0' }}>
                      {isSimulated ? ((pageStats.hits / (pageStats.hits + pageStats.faults)) * 100).toFixed(2) : 0}%
                    </h4>
                  </div>
                </>
              ) : (
                /* CPU SCHEDULING METRICS */
                <>
                  <div style={styles.compCard}>
                    <small style={{ color: 'var(--text-secondary)', fontWeight: '800' }}>AVG WAITING TIME</small>
                    <h4 style={{ fontSize: '28px', color: 'var(--blue-orange)', margin: '8px 0 0 0' }}>{metrics.awt}ms</h4>
                  </div>
                  <div style={styles.compCard}>
                    <small style={{ color: 'var(--text-secondary)', fontWeight: '800' }}>AVG TURNAROUND TIME</small>
                    <h4 style={{ fontSize: '28px', color: 'var(--blue-orange)', margin: '8px 0 0 0' }}>{metrics.atat}ms</h4>
                  </div>
                  <div style={styles.compCard}>
                    <small style={{ color: 'var(--text-secondary)', fontWeight: '800' }}>THROUGHPUT</small>
                    <h4 style={{ fontSize: '28px', color: 'var(--blue-orange)', margin: '8px 0 0 0' }}>{metrics.throughput} <span style={{fontSize:'12px'}}>p/ms</span></h4>
                  </div>
                </>
              )}
            </div>

            {/* 5. BOTTOM DETAILS SECTION (Shared) */}
            <div style={styles.detailsGrid}>
              <div style={styles.infoCol}>
                <h3 style={styles.sectionHeader}>Algorithm Logic</h3>
                <p style={styles.infoText}>{ALGO_DATA[currentView].description}</p>
                <div style={{ marginTop: '24px' }}>
                  <p style={styles.compDetail}><strong>Best Case:</strong> {ALGO_DATA[currentView].best}</p>
                  <p style={styles.compDetail}><strong>Worst Case:</strong> {ALGO_DATA[currentView].worst}</p>
                  <p style={styles.compDetail}><strong>Space Complexity:</strong> {ALGO_DATA[currentView].space}</p>
                </div>
              </div>

              <div style={styles.codeCol}>
                <div style={styles.codeHeader}>
                  <h3 style={{ ...styles.sectionHeader, marginBottom: 0 }}>Source Code Library</h3>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <select style={styles.langSelect} value={lang} onChange={(e) => setLang(e.target.value)}>
                      <option value="js">JavaScript</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="c">C Language</option>
                      <option value="cpp">Cpp</option>
                    </select>
                    <button style={styles.btnCopy} onClick={copyToClipboard}>
                      {copied ? '✓ Copied' : 'Copy Code'}
                    </button>
                  </div>
                </div>
                <div className="code-scroll-container" 
                  style={{ 
                    ...styles.codeWrapper, 
                    maxHeight: '550px', 
                    overflowY: 'auto'   
                  }}>
                  <pre style={styles.pre}>
                    <code>{ALGO_DATA[currentView].code?.[lang] || "// Implementation pending..."}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

// --- SECTION 3: STYLES ---
const styles = {
  layout: { display: 'flex', minHeight: '100vh', width: '100vw' },
  sidebar: { 
    backgroundColor: 'var(--surface)', 
    borderRight: '1px solid var(--border-subtle)', 
    display: 'flex', 
    flexDirection: 'column', 
    position: 'sticky', 
    top: 0, 
    height: '100vh', 
    zIndex: 100, 
    transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    overflowX: 'hidden' // Ensure content doesn't peak out during transition
  },
  sidebarHeader: { padding: '32px 20px', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' },
  logoBox: { width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 },
  logoText: { fontWeight: '800', fontSize: '18px', letterSpacing: '-0.5px', color: 'var(--text-primary)' },
  navList: { flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: '8px' },
  navItem: { display: 'flex', alignItems: 'center', gap: '14px', padding: '12px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s ease' },
  navInitials: { width: '34px', height: '34px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', flexShrink: 0 },
  navLabel: { 
    fontSize: '14px', 
    fontWeight: '600', 
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  collapseBtn: { padding: '24px', background: 'none', border: 'none', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', color: 'var(--text-secondary)', marginTop: 'auto' },
  content: { flex: 1, padding: '40px', overflowY: 'auto' },
  topActions: { display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' },
  themeToggle: { 
    background: 'none', 
    border: 'none', 
    width: '42px', height: '42px', 
    borderRadius: '12px', cursor: 'pointer', 
    fontSize: '24px', display: 'flex', 
    alignItems: 'center', justifyContent: 'center',
    color: 'var(--text-primary)',
    transition: 'transform 0.2s ease',
    outline: 'none'
  },
  homeContainer: { maxWidth: '1100px', margin: '0 auto' },
  homeHeader: { marginBottom: '60px' },
  homeTitle: { fontSize: '56px', fontWeight: '800', letterSpacing: '-2px', marginBottom: '16px', color: 'var(--text-primary)' },
  homeSubtitle: { color: 'var(--text-secondary)', fontSize: '20px', maxWidth: '700px', lineHeight: '1.5' },
  homeGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px', marginTop: '40px' },
  algoCard: { backgroundColor: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '24px', padding: '32px', cursor: 'pointer', transition: '0.3s' },
  cardHeaderFlex: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' },
  initialsIcon: { 
    width: '48px', 
    height: '48px', 
    minWidth: '48px', // Force the width to stay at 48px
    minHeight: '48px', // Force the height to stay at 48px
    flexShrink: 0,    // CRITICAL: Prevents the icon from being squished by long titles
    borderRadius: '12px', 
    backgroundColor: 'var(--surface-muted)', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: '16px', // Slightly smaller font looks better in a 48px box
    fontWeight: '800', 
    color: 'var(--blue-orange)',
    border: '1px solid var(--border-subtle)', // Optional: keeps it consistent with sidebar
    boxSizing: 'border-box' // Ensures border doesn't add to the 48px size
  },  cardTitle: { fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)' },
  cardDesc: { color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px', height: '72px', overflow: 'hidden' },
  cardFooter: { borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginTop: '20px' },
  cardBtn: { background: 'none', border: 'none', color: 'var(--blue-orange)', fontWeight: '700', fontSize: '14px', cursor: 'pointer' },
  visualizerPlaceholder: { textAlign: 'center', padding: '100px 0' },

  vizHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' },
  vizActions: { display: 'flex', gap: '12px' },
  btnPlay: { border: 'none', color: 'white', padding: '10px 24px', borderRadius: '10px', fontWeight: '800', cursor: 'pointer' },
  processTable: { width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', marginTop: '20px' },
  th: { padding: '12px', borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-secondary)', fontWeight: '800' },
  td: { padding: '12px', borderBottom: '1px solid var(--border-subtle)' },
  ganttContainer: { 
    display: 'flex', 
    height: '52px', 
    borderRadius: '10px', 
    overflow: 'visible', // Changed from hidden to show labels
    position: 'relative', 
    marginTop: '20px',
    border: '1px solid var(--border-subtle)'
  },
  ganttBlock: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    color: 'white', 
    fontWeight: '800', 
    fontSize: '13px', 
    position: 'relative',
    minWidth: '30px',
    transition: 'all 0.3s ease'
  },
  ganttTimeLeft: { 
    position: 'absolute', 
    bottom: '-24px', 
    left: '0', 
    fontSize: '11px', 
    fontWeight: '700',
    color: 'var(--text-secondary)',
    fontFamily: 'monospace'
  },
  ganttTimeRight: { 
    position: 'absolute', 
    bottom: '-24px', 
    right: '0', 
    fontSize: '11px', 
    fontWeight: '700',
    color: 'var(--text-secondary)',
    fontFamily: 'monospace'
  },

  vizPage: { maxWidth: '1200px', margin: '0 auto' },
  vizCanvas: { border: '1px solid', borderRadius: '24px', minHeight: '400px', padding: '32px', marginTop: '20px' },
  btnAdd: { padding: '10px 20px', borderRadius: '10px', border: '1px solid var(--border-subtle)', cursor: 'pointer', background: 'var(--surface)', fontWeight: '700', color: 'var(--text-primary)' },
  btnClear: { background: 'none', border: 'none', color: '#f43f5e', fontWeight: '700', cursor: 'pointer', fontSize: '13px' },
  pTag: { padding: '4px 10px', borderRadius: '6px', color: 'white', fontWeight: '800', fontSize: '12px' },
  tableInput: { 
    width: '70px', 
    padding: '10px', 
    border: '1px solid var(--border-subtle)', 
    borderRadius: '8px', 
    background: 'var(--bg-main)', 
    color: 'var(--text-primary)',
    textAlign: 'center',
    fontWeight: '600',
    transition: 'all 0.2s ease'
  },
  compCard: { 
    flex: 1,
    padding: '24px', 
    borderRadius: '20px', 
    backgroundColor: 'var(--surface-muted)', 
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },

  detailsGrid: { 
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    gap: '40px', 
    marginTop: '48px',
    paddingBottom: '60px' 
  },
  infoCol: { display: 'flex', flexDirection: 'column' },
  sectionHeader: { fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px' },
  infoText: { fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', whiteSpace: 'pre-line' },
  compDetail: { fontSize: '14px', color: 'var(--text-primary)', marginBottom: '8px' },
  codeHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' },
  langSelect: { 
    padding: '8px 12px', borderRadius: '10px', border: '1px solid var(--border-subtle)', 
    background: 'var(--bg-main)', color: 'var(--text-primary)', fontSize: '13px', fontWeight: '600' 
  },
  btnCopy: { 
    padding: '8px 16px', borderRadius: '10px', border: '1px solid var(--blue-orange)', 
    background: 'none', color: 'var(--blue-orange)', fontSize: '13px', fontWeight: '700', cursor: 'pointer' 
  },
  codeCol: { 
    backgroundColor: 'var(--surface)', 
    border: '1px solid var(--border-subtle)', 
    borderRadius: '24px', 
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0 // CRITICAL: Allows flex child to shrink/scroll
  },
  codeWrapper: { 
    backgroundColor: 'var(--bg-main)', 
    borderRadius: '16px', 
    border: '1px solid var(--border-subtle)', 
    overflow: 'hidden', 
    display: 'block' // Changed from flex to block
  },
  pre: { 
    padding: '24px', 
    margin: 0, 
    overflowX: 'auto', 
    fontSize: '13px', 
    lineHeight: '1.6', 
    color: 'var(--text-secondary)', 
    fontFamily: 'monospace',
    whiteSpace: 'pre', // Ensures lines stay long
    wordBreak: 'normal',
    wordWrap: 'normal'
  }
};

export default App;