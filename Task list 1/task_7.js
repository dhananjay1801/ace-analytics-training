function sort_obj_arr(arr, key){
    return [...arr].sort((a, b) => {
        const valA = a[key];
        const valB = b[key];

        if(typeof valA === 'string' && typeof valB === 'string'){
            return valA.localeCompare(valB);
        }
        return valA - valB;
    })
}


arr = [
    { "name": "Priya", "age": 28, "city": "Mumbai" },
    { "name": "Sneha", "age": 22, "city": "Pune" },
    { "name": "Rohan", "age": 32, "city": "Delhi" },
    { "name": "Aarav", "age": 25, "city": "Ahmedabad" },
]

console.log(sort_obj_arr(arr, "age"));