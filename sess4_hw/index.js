
/*
E1 
    1.1 x is receives the property of the object.
*/





{
    // E1
    // 1.2
    const product = {
        name: 'Xiaomi rice cooker',
        price: 1700,
        brand: 'Xiaomi',
        color: 'white'
    };
    
    for (let x in product) {
        console.log(x,":",product[x]);
    }
}

{
    // E2
    const task = {
        subject: 'Implement login feature',
        createdBy: 'Hoang Ngoc Duc',
        assignTo: 'Nguyen Phuong Nam',
        dueDate: '2019-10-08T18:00:24+0000',
        expectedHours: 0.5,
    };

    let {subject, dueDate,assignTo, ...rest} = task       
}

// E3
    /*
        3.1: object
        3.2: Array (of objects)
        3.3: Each hit in hits is an objec, we can find the job’s title, locations, salary, benefits, skills and requirements by destructure the object
            let {jobTitle, locations, jobSalary, benefits, skills, requirements, ...rest} = hit
    */

{
    const url="https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js";
    
    let data
    async function fetchData(){
        await fetch(url)
            .then(r=>r.blob())
            .then(b=>b.text())
            .then(t=>JSON5.parse(t))
            .then(j=>{
                console.log(j)
                for (let hit of j.hits){
                    let {jobTitle, locations, jobSalary, benefits, skills, requirements, ...rest} = hit

                console.log(jobTitle)
                }
                
            })
        // return data
    }

    // fetchData()

}


{
    // E4
    let dict = {
        debug: 'p',
        done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
        defect: 'The formal word for ‘error’',
        pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
        'ui/ux':'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'

    }

    // 4.1
    function e41(dict){
        let val
        let k = prompt("Enter a keyword")
        while (k==undefined || k == "")
            k = prompt("Enter a keyword")

        val = dict[k];
        
        if (val)
            alert(k+"\n"+ val)
        else 
            alert("We could not find your word: "+k)
    }
    // e41(dict);

    // 4.2
    function e42(){
        let val
        let k = prompt("Enter a keyword")
        while (k==undefined || k == "")
            k = prompt("Enter a keyword")

        val = dict[k];
        
        if (val)
            alert(k+"\n"+ val)
        else {
            
            dict[k] = prompt("We could not find your word: "+ k + ", please left definition")
            alert("Done")
        }
            
    }

    // e42()
    console.log(dict)

}

{
    // e5
    let products = [
        {
            _name: 'Xiaomi portable charger 20000mah',
            brand: 'Xiaomi',
            price: '428',
            color: 'white',
            category: 'charger'
        },

        {
            _name: 'VSmart Active 1',
            brand: 'VSmart',
            price: '5487',
            color: 'black',
            category: 'Phone'
        }
    ]

    // e51
    for (let p of products){
        console.log("----------------------")
        for (let k in p){
            console.log(k, ":", p[k])
        }
    }

    // e52
    for (let p of products){
        console.log("----------------------")
        let {_name, price} = p;
        console.log("Name:", _name)
        console.log("Price:", price)
    }

    // e53
    let cat = prompt("Input cat")

    for (let p of products){
        console.log("----------------------")

        if (p.category===cat){
            for (let k in p){
                console.log(k+":"+p[k])
            }
        }
    }

    // e54
    for (let p of products){
        p["provider"] = prompt("Input provider for:"+p._name);
    }

    
    let i = 0;

    for (let p of products){
        for (let k in p){
            console.log(k+":"+p[k])
        }
    }

    

}
{
    // e6
    let tasks = [];

    // main loop
    // vaid command
    let commands = ["new", "update", "delete", "complete", "exit"]
    
    let exit = 0
    
    while (exit!=1){
        let u_command = prompt("Input command {new, update, delete, complete, exit}")

        while (u_command===undefined || !commands.includes(u_command))
            u_command = prompt("Input command {new, update, delete, complete, exit}")
        
        switch (u_command){
            case "new": {
                addNewTask();
                break;
            }

            case "update": {
                updateTask();
                
                break;
            }

            case "complete": {
                completeTask(tasks)
                
                break;
            }

            case "delete": {
                deleted = deleteTask();
                console.log("[deleted]"+deleted);
                break;
            }

            case "exit":{
                exit = 1
                break;
            }



        }
    }

    function addNewTask(){
        pretty_print(tasks)
        task = {
            _name: prompt("Task: "),
            complete: false
        }

        tasks.push(task)
        pretty_print(tasks)
    }

    function updateTask(){
        if (tasks.length === 0)
        {
            console.log("Task is empty")
            return 
        }
        pretty_print(tasks)
        let i = Number(prompt("Task index: "))
        
        //input validation
        while (isNaN(i) || i < 0 || i > tasks.length)
            i = Number(prompt("Task index: "))
        
        let task = tasks[i-1]
        task._name = prompt("Enter new title")
        tasks[i-1] = task

        pretty_print(tasks)
    }

    function completeTask(){
        if (tasks.length === 0)
        {
            console.log("Task is empty")
            return 
        }
            
        pretty_print(tasks)
        
        let i = Number(prompt("Task index: "))
        while (isNaN(i) || i < 0 || i > tasks.length)
            i = Number(prompt("Task index: "))
        
        task.complete = true
        pretty_print(tasks)

    }

    function deleteTask(){
        if (tasks.length === 0)
        {
            console.log("Task is empty")
            return 
        }
        pretty_print(tasks)
        
        let i = Number(prompt("Task index: "))
        while (isNaN(i) || i < 0 || i > tasks.length)
            i = Number(prompt("Task index: "))
        
            tasks.splice(i-1, 1)
        pretty_print(tasks)

    }


    function pretty_print(tasks){
        console.log("-----------------------")
        let i = 1;
        for (let task of tasks){
            let box = "[ ]"
            if (task.complete)
                box = "[x]"
            console.log(i+"."+ box + task._name);
            i++;
        }
    }
}