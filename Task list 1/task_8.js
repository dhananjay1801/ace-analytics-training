function filter_by_date(tasks, date){
    const filtered_tasks = [];

    for(let i = 0; i < tasks.length; i++){
      const time = new Date(date).getTime();
      const due_date = new Date(tasks[i].due_date).getTime();

      if(time === due_date){
        filtered_tasks.push(tasks[i]);
      }
    }
    return filtered_tasks;
}


const tasks = [
  {
    "name": "Design Homepage Mockups",
    "due_date": "2026/06/25"
  },
  {
    "name": "Review Quarterly Financials",
    "due_date": "2026/06/30"
  },
  {
    "name": "Team Sync and Planning",
    "due_date": "2026/06/30"
  },
  {
    "name": "Submit Project Proposal",
    "due_date": "2026/07/05"
  }
]

console.log(filter_by_date(tasks, "06/30/2026"));