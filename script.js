var  names = new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jeni";
names[3]="jack";
names[4]="paul";
names[5]="farhan";
names[6]="loky";
names[7]="thor";
names[8]="sparow";
names[9]="jim";

for (var i =0; i< names.length; i++){
	if (names[i].charAt(0)==='J'|| names[i].charAt(0)==='j') {
		console.log("Goodbye "+names[i]);

	}
	else{
		console.log("Hellow "+ names[i]);
	}
}

