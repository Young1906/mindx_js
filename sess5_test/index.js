{
    // e1
    let s = prompt("Input a string:");
    let r = ""

    for (let i = s.length-1; i>=0;i--){
        r+=s[i]
    }

    console.log(s, r)

}

{
    // e2
    let s = prompt("Input a string");
    let r = "";
    let prv_c = "";

    for (let i = 0; i < s.length; i++){
        if (i === 0 || prv_c === ' ')
            r+=s[i].toUpperCase();
        else
            r+=s[i].toLowerCase();

        prv_c = s[i];
    }

    console.log(r);
}

{
    // e3
    let arr = [1,2,3,4,5,5,6];
    let seen = []

    for (let i = 0; i < arr.length; i++){
        if (seen.includes(arr[i]))
            arr.splice(i, 1)
        else 
            seen.push(arr[i])
        
    }
    console.log(arr)
}

{
    // e4

    let employees = [];

    // main loop
    // vaid command
    let commands = ["create", "read", "update", "delete", "exit"]
    
    let exit = 0
    
    while (exit!=1){
        let u_command = prompt("Input command {"+commands.join("/")+"}").toLowerCase()

        while (u_command===undefined || !commands.includes(u_command))
            u_command = prompt("Input command {"+commands.join("/")+"}").toLowerCase()
        
        switch (u_command){
            case "create": {
                add();
                break;
            }

            case "read": {
                read();
                break;
            }


            case "update": {
                update();
                break;
            }

            case "delete":{
                _delete();
                break;
            }

            case "exit":{
                exit = 1
                break;
            }



        }
    }

    function add(){
        pretty_print(employees)
        let employee = {
            _name: prompt("name: "),
            age: prompt("age: "),
            salary: prompt("salary: "),
            pos: prompt("position: ")
        
        }

        employees.push(employee)
        pretty_print(employees)
    }

    function update(){
        if (employees.length === 0)
        {
            console.log("Employee is empty")
            return 
        }
        
        pretty_print(employees)
        let i = Number(prompt("Employee index: "))
        
        //input validation
        while (isNaN(i) || i < 0 || i > employees.length)
            i = Number(prompt("Employee index: "))
        
        i--;
        // let employee = employees[i-1]
        employees[i] = {
            _name: prompt("current <"+ employees[i]._name+" >"),
            age: prompt("current <"+ employees[i].age+" >"),
            salary: prompt("current <"+ employees[i].salary+" >"),
            pos: prompt("current <"+ employees[i].pos+" >")
        }
    
        pretty_print(employees)
    }

    function read(){
        if (employees.length === 0)
        {
            console.log("Task is empty")
            return 
        }
            
        pretty_print(employees)
        
        let i = Number(prompt("Employee index: "))
        while (isNaN(i) || i < 0 || i > employees.length)
            i = Number(prompt("Employee index: "))
        
        let e = employees[i-1];

        for (let k in e){
            console.log(k+":"+e[k]);
        }

    }

    function _delete(){
        if (employees.length === 0)
        {
            console.log("Employees is empty")
            return 
        }
        pretty_print(employees)
        
        let i = Number(prompt("Employee index: "))
        while (isNaN(i) || i < 0 || i > employees.length)
            i = Number(prompt("Employee index: "))
        
            employees.splice(i-1, 1)
        pretty_print(employees)

    }


    function pretty_print(tasks){
        console.log("-----------------------")
        let i = 1;
        for (let task of tasks){
            console.log(i+"."+ task._name);
            i++;
        }
    }
}


{
    // e5
    let u_input = prompt("Input a date (DD/MM/YYYY)")
    
    while (!isValid(u_input)){
        u_input = prompt("Input a date (DD/MM/YYYY)")
    }


    function isValid(s){
        let [d, m, y] = s.split("/")
        d = Number(d)
        y = Number(y)
        m = Number(m)

        if (isNaN(d) || isNaN(m) || isNaN(y))
            return false


        if (d < 1 || d > 31)
            return false
        
        if (m < 1 || m > 12)
            return false
        
        if (y < 0)
            return false

        if ([1,3,5,7,8,10,12].includes(m) & d > 31)
            return false

        if ([4,6,9,11].includes(m) & d > 30)
            return false

        if ( m===2 ){
            if (y%4==0 & d > 29)
                return false 
            else if (d > 28)
                return false
        }
        return true
    }


    let [d, m, y] = u_input.split("/")
    d = Number(d)
    y = Number(y)
    m = Number(m)

    let nextDay;

    // boundary condition
    if ([1,3,5,7,8,10,12].includes(m) & d === 31){
        if (m===12)
            nextDay = "1/1/"+(y+1)
        else 
            nextDay  = "1/"+(m+1)+"/"+y
    } else if ([4,6,9,11].includes(m) & d === 30) {
        nextDay = "1/"+(m+1)+"/"+y
    } else if (m === 2) {
        if (y%4===0 & d ===29)
            nextDay = "1/3/"+y
        else if (y%4!==0 & d===28)
            nextDay = "1/3/"+y
        else 
            nextDay = (d+1)+"/"+m+"/"+y
    } else 
        nextDay = (d+1)+"/"+m+"/"+y
        

    console.log(nextDay)

}