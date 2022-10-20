const obj1 = {
	firstName: "Витя",
	lastName: "Киселёв",
	age: 45,
	children: null,
	dates: {
		birthday: '26.01.1977',
		wedding: '05.09.2000',
		graduationFromUniversity: '07.06.2003',
	},
}

for(let key in obj1) { 
    if(typeof(obj1[key]) === "object"){
        for(let i in obj1[key]) {
            console.log(i+ " "+obj1[key][i]);
        }
    }
    else {
        console.log(key + " " +obj1[key]);
    }
}








	