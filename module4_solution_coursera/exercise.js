var names=new Array();
names[0]="Eduardo";
names[1]="Ruben";
names[2]="Maura";
names[3]="Juan";
names[4]="James";
names[5]="Isabella";
names[6]="Kamille";
names[7]="Jimmy";
names[8]="Fernando";
names[9]="Jose";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}